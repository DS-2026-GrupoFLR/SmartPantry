using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Guids;
using Volo.Abp.Uow;
using SmartPantry.Products;

namespace SmartPantry.PantryItems;

/// <summary>
/// Datos de ejemplo LOCALES para ver funcionar el worker (no hay API para crear ítems todavía).
/// Solo se ejecuta si la configuración "SmartPantry:SeedDemoData" es true (se activa en el
/// appsettings.json del DbMigrator). Las pruebas no la activan, así que no ven estos datos.
/// Es idempotente: si ya hay ítems, no vuelve a sembrar.
/// </summary>
public class PantryItemDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    /// <summary>Propietario fijo de ejemplo: es un dato persistido, no el usuario HTTP actual.</summary>
    public static readonly Guid DemoOwnerId = Guid.Parse("11111111-1111-1111-1111-111111111111");

    private const string DemoBarCode = "7790000000001";

    private readonly IConfiguration _configuration;
    private readonly IRepository<Product, Guid> _productRepository;
    private readonly IRepository<PantryItem, Guid> _itemRepository;
    private readonly IGuidGenerator _guidGenerator;

    public PantryItemDataSeedContributor(
        IConfiguration configuration,
        IRepository<Product, Guid> productRepository,
        IRepository<PantryItem, Guid> itemRepository,
        IGuidGenerator guidGenerator)
    {
        _configuration = configuration;
        _productRepository = productRepository;
        _itemRepository = itemRepository;
        _guidGenerator = guidGenerator;
    }

    [UnitOfWork]
    public virtual async Task SeedAsync(DataSeedContext context)
    {
        if (!_configuration.GetValue<bool>("SmartPantry:SeedDemoData"))
        {
            return;
        }

        if (await _itemRepository.GetCountAsync() > 0)
        {
            return;
        }

        var product = await _productRepository.FindAsync(p => p.BarCode == DemoBarCode)
            ?? await _productRepository.InsertAsync(
                new Product(_guidGenerator.Create(), DemoBarCode, "Producto de ejemplo (seed)"), autoSave: true);

        var today = DateOnly.FromDateTime(DateTime.Now); // fecha local, igual que el worker

        // Un caso de cada situación de la regla.
        await AddItemAsync(product.Id, today.AddDays(2));                 // dentro del umbral
        await AddItemAsync(product.Id, today.AddDays(PantryConsts.ExpirationWarningThresholdDays)); // día límite
        await AddItemAsync(product.Id, today.AddDays(-1));                // vencido
        await AddItemAsync(product.Id, today.AddDays(10));                // fuera del umbral
        await AddItemAsync(product.Id, null);                             // sin fecha
        await AddItemAsync(product.Id, today.AddDays(1), consumed: true); // consumido
    }

    private async Task AddItemAsync(Guid productId, DateOnly? expirationDate, bool consumed = false)
    {
        var item = new PantryItem(_guidGenerator.Create(), DemoOwnerId, productId, expirationDate);
        if (consumed)
        {
            item.MarkAsConsumed();
        }

        await _itemRepository.InsertAsync(item);
    }
}
