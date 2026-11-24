using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using SmartPantry.Products;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Users;

namespace SmartPantry.PantryItems;

/// <summary>
/// Despensa del usuario autenticado (RF-10 backend y RF-11).
///
/// Regla de negocio 3: cada ítem pertenece a un único usuario. El propietario se obtiene de
/// ICurrentUser y se comprueba ANTES de leer, modificar, marcar o eliminar. Un ítem de otro
/// usuario responde igual que uno inexistente: EntityNotFoundException (HTTP 404), en TODAS las
/// operaciones, para no revelar que el ítem existe.
///
/// Regla de negocio 6: marcar como consumido no elimina el ítem; queda como historial y se puede
/// filtrar con GetPantryItemsInput.Status. La eliminación es siempre explícita.
///
/// Este servicio es solo para usuarios autenticados. El worker de vencimientos (TP08) no lo usa:
/// procesa ítems de todos los usuarios con ExpirationWarningManager y sin sesión.
/// </summary>
[Authorize]
public class PantryItemAppService : ApplicationService, IPantryItemAppService
{
    private readonly IRepository<PantryItem, Guid> _itemRepository;
    private readonly IRepository<Product, Guid> _productRepository;

    public PantryItemAppService(
        IRepository<PantryItem, Guid> itemRepository,
        IRepository<Product, Guid> productRepository)
    {
        _itemRepository = itemRepository;
        _productRepository = productRepository;
    }

    public async Task<PagedResultDto<PantryItemDto>> GetListAsync(GetPantryItemsInput input)
    {
        var ownerId = CurrentUser.GetId();

        var items = await _itemRepository.GetQueryableAsync();
        var products = await _productRepository.GetQueryableAsync();

        var ownItems = items.Where(i => i.OwnerId == ownerId);

        if (input.Status.HasValue)
        {
            var status = input.Status.Value;
            ownItems = ownItems.Where(i => i.Status == status);
        }

        var query = from item in ownItems
                    join product in products on item.ProductId equals product.Id
                    select new PantryItemDto
                    {
                        Id = item.Id,
                        ProductId = item.ProductId,
                        ProductName = product.Name,
                        ProductBrand = product.Brand,
                        ProductBarCode = product.BarCode,
                        Quantity = item.Quantity,
                        Unit = item.Unit,
                        ExpirationDate = item.ExpirationDate,
                        Status = item.Status
                    };

        var totalCount = await AsyncExecuter.CountAsync(query);

        var page = ApplySorting(query, input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var list = await AsyncExecuter.ToListAsync(page);

        return new PagedResultDto<PantryItemDto>(totalCount, list);
    }

    public async Task<PantryItemDto> GetAsync(Guid id)
    {
        var item = await GetOwnedItemAsync(id);
        return await ToDtoAsync(item);
    }

    public async Task<PantryItemDto> CreateAsync(CreatePantryItemDto input)
    {
        var ownerId = CurrentUser.GetId();

        // Si el producto no existe, el repositorio lanza EntityNotFoundException (404).
        var product = await _productRepository.GetAsync(input.ProductId);

        // El constructor del agregado valida y normaliza.
        var item = new PantryItem(
            GuidGenerator.Create(),
            ownerId,
            product.Id,
            input.ExpirationDate,
            input.Quantity,
            input.Unit);

        await _itemRepository.InsertAsync(item, autoSave: true);

        return ToDto(item, product);
    }

    public async Task<PantryItemDto> UpdateAsync(Guid id, UpdatePantryItemDto input)
    {
        var item = await GetOwnedItemAsync(id);

        // La regla vive en el dominio: valida y normaliza antes de cambiar el estado.
        item.Update(input.Quantity, input.Unit, input.ExpirationDate);

        await _itemRepository.UpdateAsync(item, autoSave: true);

        return await ToDtoAsync(item);
    }

    public async Task<PantryItemDto> MarkAsConsumedAsync(Guid id)
    {
        var item = await GetOwnedItemAsync(id);

        item.MarkAsConsumed();

        await _itemRepository.UpdateAsync(item, autoSave: true);

        return await ToDtoAsync(item);
    }

    public async Task DeleteAsync(Guid id)
    {
        var item = await GetOwnedItemAsync(id);

        // Sus advertencias de vencimiento se eliminan en cascada (FK).
        await _itemRepository.DeleteAsync(item, autoSave: true);
    }

    /// <summary>
    /// Devuelve el ítem solo si pertenece al usuario actual. Si no existe o es de otro usuario,
    /// lanza EntityNotFoundException (404): misma respuesta en ambos casos.
    /// </summary>
    private async Task<PantryItem> GetOwnedItemAsync(Guid id)
    {
        var ownerId = CurrentUser.GetId();

        var item = await _itemRepository.FindAsync(i => i.Id == id && i.OwnerId == ownerId);

        if (item is null)
        {
            throw new EntityNotFoundException(typeof(PantryItem), id);
        }

        return item;
    }

    private async Task<PantryItemDto> ToDtoAsync(PantryItem item)
    {
        var product = await _productRepository.GetAsync(item.ProductId);
        return ToDto(item, product);
    }

    private static PantryItemDto ToDto(PantryItem item, Product product)
    {
        return new PantryItemDto
        {
            Id = item.Id,
            ProductId = item.ProductId,
            ProductName = product.Name,
            ProductBrand = product.Brand,
            ProductBarCode = product.BarCode,
            Quantity = item.Quantity,
            Unit = item.Unit,
            ExpirationDate = item.ExpirationDate,
            Status = item.Status
        };
    }

    private static IOrderedQueryable<PantryItemDto> ApplySorting(IQueryable<PantryItemDto> query, string? sorting)
    {
        var parts = (sorting ?? string.Empty).Split(' ', StringSplitOptions.RemoveEmptyEntries);
        var field = parts.Length > 0 ? parts[0].ToLowerInvariant() : string.Empty;
        var descending = parts.Length > 1 && parts[1].Equals("desc", StringComparison.OrdinalIgnoreCase);

        IOrderedQueryable<PantryItemDto> ordered = field switch
        {
            "productname" => descending
                ? query.OrderByDescending(x => x.ProductName)
                : query.OrderBy(x => x.ProductName),
            "quantity" => descending
                ? query.OrderByDescending(x => x.Quantity)
                : query.OrderBy(x => x.Quantity),
            "expirationdate" => descending
                ? query.OrderByDescending(x => x.ExpirationDate)
                : query.OrderBy(x => x.ExpirationDate),
            // Por defecto: primero los que vencen antes; los que no tienen fecha, al final.
            _ => query.OrderBy(x => x.ExpirationDate == null).ThenBy(x => x.ExpirationDate)
        };

        // Desempate estable para que la paginación no repita ni omita ítems.
        return ordered.ThenBy(x => x.ProductName).ThenBy(x => x.Id);
    }
}
