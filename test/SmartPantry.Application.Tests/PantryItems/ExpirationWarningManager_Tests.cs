using System;
using System.Linq;
using System.Threading.Tasks;
using SmartPantry.Products;
using Shouldly;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Modularity;
using Xunit;

namespace SmartPantry.PantryItems;

/// <summary>
/// Pruebas del procesamiento de vencimientos con el repositorio real de ABP y la base aislada
/// de la suite. Usan una fecha controlada: no dependen del reloj ni del temporizador.
/// Criterio de fecha: fecha de calendario (DateOnly) y "hoy" llega como parámetro.
/// </summary>
public abstract class ExpirationWarningManager_Tests<TStartupModule> : SmartPantryApplicationTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{
    private static readonly DateOnly Hoy = new(2026, 11, 2);

    private readonly ExpirationWarningManager _manager;
    private readonly IRepository<PantryItem, Guid> _itemRepository;
    private readonly IRepository<ExpirationWarning, Guid> _warningRepository;
    private readonly IRepository<Product, Guid> _productRepository;

    protected ExpirationWarningManager_Tests()
    {
        _manager = GetRequiredService<ExpirationWarningManager>();
        _itemRepository = GetRequiredService<IRepository<PantryItem, Guid>>();
        _warningRepository = GetRequiredService<IRepository<ExpirationWarning, Guid>>();
        _productRepository = GetRequiredService<IRepository<Product, Guid>>();
    }

    // ---------- ayudas ----------

    private async Task<PantryItem> CrearItemAsync(DateOnly? vencimiento, bool consumido = false)
    {
        return await WithUnitOfWorkAsync(async () =>
        {
            var producto = await _productRepository.InsertAsync(
                new Product(Guid.NewGuid(), Guid.NewGuid().ToString("N"), "Producto de prueba"));

            var item = new PantryItem(Guid.NewGuid(), Guid.NewGuid(), producto.Id, vencimiento);
            if (consumido)
            {
                item.MarkAsConsumed();
            }

            return await _itemRepository.InsertAsync(item);
        });
    }

    private Task<ExpirationProcessingResult> ProcesarAsync(DateOnly hoy)
    {
        return WithUnitOfWorkAsync(() => _manager.ProcessAsync(hoy));
    }

    private Task<System.Collections.Generic.List<ExpirationWarning>> ObtenerAdvertenciasAsync()
    {
        return WithUnitOfWorkAsync(() => _warningRepository.GetListAsync());
    }

    private Task ModificarItemAsync(Guid id, Action<PantryItem> cambio)
    {
        return WithUnitOfWorkAsync(async () =>
        {
            var item = await _itemRepository.GetAsync(id);
            cambio(item);
            await _itemRepository.UpdateAsync(item);
        });
    }

    // ---------- umbral, día límite, vencido, sin fecha, consumido ----------

    [Fact]
    public async Task Debe_crear_una_advertencia_para_un_item_dentro_del_umbral()
    {
        var item = await CrearItemAsync(Hoy.AddDays(2));

        var resultado = await ProcesarAsync(Hoy);

        resultado.ShouldBe(new ExpirationProcessingResult(1, 0, 0));
        var advertencia = (await ObtenerAdvertenciasAsync()).ShouldHaveSingleItem();
        advertencia.PantryItemId.ShouldBe(item.Id);
        advertencia.IsActive.ShouldBeTrue();
        advertencia.Level.ShouldBe(ExpirationWarningLevel.ExpiringSoon);
    }

    [Fact]
    public async Task Debe_avisar_el_dia_limite_del_umbral()
    {
        await CrearItemAsync(Hoy.AddDays(PantryConsts.ExpirationWarningThresholdDays));

        var resultado = await ProcesarAsync(Hoy);

        resultado.Created.ShouldBe(1);
    }

    [Fact]
    public async Task Debe_crear_una_advertencia_de_vencido_para_un_item_vencido()
    {
        await CrearItemAsync(Hoy.AddDays(-1));

        await ProcesarAsync(Hoy);

        var advertencia = (await ObtenerAdvertenciasAsync()).ShouldHaveSingleItem();
        advertencia.Level.ShouldBe(ExpirationWarningLevel.Expired);
    }

    [Fact]
    public async Task No_debe_crear_advertencias_fuera_del_umbral_sin_fecha_ni_para_consumidos()
    {
        await CrearItemAsync(Hoy.AddDays(PantryConsts.ExpirationWarningThresholdDays + 1)); // fuera del umbral
        await CrearItemAsync(null);                                                          // sin fecha
        await CrearItemAsync(Hoy.AddDays(-5), consumido: true);                              // consumido

        var resultado = await ProcesarAsync(Hoy);

        resultado.ShouldBe(new ExpirationProcessingResult(0, 0, 0));
        (await ObtenerAdvertenciasAsync()).ShouldBeEmpty();
    }

    // ---------- idempotencia ----------

    [Fact]
    public async Task Debe_ser_idempotente_al_ejecutarse_dos_veces_sobre_los_mismos_datos()
    {
        await CrearItemAsync(Hoy.AddDays(1));
        await CrearItemAsync(Hoy.AddDays(-2));

        var primera = await ProcesarAsync(Hoy);
        var advertenciasTrasPrimera = await ObtenerAdvertenciasAsync();

        var segunda = await ProcesarAsync(Hoy);
        var advertenciasTrasSegunda = await ObtenerAdvertenciasAsync();

        primera.Created.ShouldBe(2);
        segunda.ShouldBe(new ExpirationProcessingResult(0, 0, 0));

        // una sola advertencia por ítem, y son las mismas de la primera ejecución
        advertenciasTrasSegunda.Count.ShouldBe(2);
        advertenciasTrasSegunda.Select(a => a.PantryItemId).Distinct().Count().ShouldBe(2);
        advertenciasTrasSegunda.Select(a => a.Id).OrderBy(x => x)
            .ShouldBe(advertenciasTrasPrimera.Select(a => a.Id).OrderBy(x => x));
    }

    // ---------- cambios de fecha: actualización, desactivación y reactivación ----------

    [Fact]
    public async Task Debe_actualizar_la_misma_advertencia_si_cambia_la_fecha()
    {
        var item = await CrearItemAsync(Hoy.AddDays(1));
        await ProcesarAsync(Hoy);
        var idOriginal = (await ObtenerAdvertenciasAsync()).Single().Id;

        var nuevaFecha = Hoy.AddDays(3);
        await ModificarItemAsync(item.Id, i => i.ChangeExpirationDate(nuevaFecha));
        var resultado = await ProcesarAsync(Hoy);

        resultado.ShouldBe(new ExpirationProcessingResult(0, 1, 0));
        var advertencia = (await ObtenerAdvertenciasAsync()).ShouldHaveSingleItem();
        advertencia.Id.ShouldBe(idOriginal);
        advertencia.ExpirationDate.ShouldBe(nuevaFecha);
    }

    [Fact]
    public async Task Debe_desactivar_la_advertencia_cuando_deja_de_corresponder()
    {
        var item = await CrearItemAsync(Hoy.AddDays(1));
        await ProcesarAsync(Hoy);

        await ModificarItemAsync(item.Id, i => i.MarkAsConsumed());
        var resultado = await ProcesarAsync(Hoy);

        resultado.ShouldBe(new ExpirationProcessingResult(0, 0, 1));
        var advertencia = (await ObtenerAdvertenciasAsync()).ShouldHaveSingleItem();
        advertencia.IsActive.ShouldBeFalse();
    }

    [Fact]
    public async Task Debe_reactivar_la_misma_advertencia_si_vuelve_a_corresponder()
    {
        var item = await CrearItemAsync(Hoy.AddDays(1));
        await ProcesarAsync(Hoy);
        var idOriginal = (await ObtenerAdvertenciasAsync()).Single().Id;

        await ModificarItemAsync(item.Id, i => i.MarkAsConsumed());
        await ProcesarAsync(Hoy);

        await ModificarItemAsync(item.Id, i => i.MarkAsActive());
        var resultado = await ProcesarAsync(Hoy);

        resultado.ShouldBe(new ExpirationProcessingResult(0, 1, 0));
        var advertencia = (await ObtenerAdvertenciasAsync()).ShouldHaveSingleItem();
        advertencia.Id.ShouldBe(idOriginal);
        advertencia.IsActive.ShouldBeTrue();
    }

    [Fact]
    public async Task Debe_escalar_la_misma_advertencia_a_vencida_al_avanzar_la_fecha()
    {
        await CrearItemAsync(Hoy.AddDays(1));
        await ProcesarAsync(Hoy);
        var idOriginal = (await ObtenerAdvertenciasAsync()).Single().Id;

        await ProcesarAsync(Hoy.AddDays(5));

        var advertencia = (await ObtenerAdvertenciasAsync()).ShouldHaveSingleItem();
        advertencia.Id.ShouldBe(idOriginal);
        advertencia.Level.ShouldBe(ExpirationWarningLevel.Expired);
    }

    // ---------- el esquema impide los duplicados ----------

    [Fact]
    public async Task El_indice_unico_impide_una_segunda_advertencia_del_mismo_item()
    {
        var item = await CrearItemAsync(Hoy.AddDays(1));

        await Assert.ThrowsAnyAsync<Exception>(async () =>
        {
            await WithUnitOfWorkAsync(async () =>
            {
                await _warningRepository.InsertAsync(
                    new ExpirationWarning(Guid.NewGuid(), item.Id, Hoy.AddDays(1), ExpirationWarningLevel.ExpiringSoon));
                await _warningRepository.InsertAsync(
                    new ExpirationWarning(Guid.NewGuid(), item.Id, Hoy.AddDays(1), ExpirationWarningLevel.ExpiringSoon));
            });
        });
    }
}
