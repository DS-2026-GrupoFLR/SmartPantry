using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Shouldly;
using SmartPantry.Products;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Modularity;
using Volo.Abp.Security.Claims;
using Volo.Abp.Validation;
using Xunit;

namespace SmartPantry.PantryItems;

/// <summary>
/// Pruebas del servicio de despensa (RF-10 backend y RF-11) con el repositorio real de la suite ABP.
/// El usuario actual se cambia con ICurrentPrincipalAccessor: cada prueba usa usuarios propios, así
/// que no dependen del orden ni de otros datos. Recordar: estas pruebas usan AlwaysAllowAuthorization,
/// por lo que NO comprueban [Authorize] ni el acceso HTTP (eso se verifica en Swagger).
/// </summary>
public abstract class PantryItemAppService_Tests<TStartupModule> : SmartPantryApplicationTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{
    private readonly IPantryItemAppService _service;
    private readonly IRepository<Product, Guid> _productRepository;
    private readonly ICurrentPrincipalAccessor _principalAccessor;

    protected PantryItemAppService_Tests()
    {
        _service = GetRequiredService<IPantryItemAppService>();
        _productRepository = GetRequiredService<IRepository<Product, Guid>>();
        _principalAccessor = GetRequiredService<ICurrentPrincipalAccessor>();
    }

    // ---------- Ayudas ----------

    private async Task<T> AsUserAsync<T>(Guid userId, Func<Task<T>> action)
    {
        using (_principalAccessor.Change(new Claim(AbpClaimTypes.UserId, userId.ToString())))
        {
            return await action();
        }
    }

    private async Task AsUserAsync(Guid userId, Func<Task> action)
    {
        using (_principalAccessor.Change(new Claim(AbpClaimTypes.UserId, userId.ToString())))
        {
            await action();
        }
    }

    private async Task<Guid> CreateProductAsync(string name = "Yerba mate")
    {
        var productId = Guid.NewGuid();

        await WithUnitOfWorkAsync(async () =>
        {
            var product = new Product(productId, "PANTRY-" + Guid.NewGuid().ToString("N"), name, "Marca Dos");
            await _productRepository.InsertAsync(product, autoSave: true);
        });

        return productId;
    }

    private Task<PantryItemDto> CreateItemAsync(
        Guid userId,
        Guid productId,
        DateOnly? expirationDate = null,
        decimal? quantity = null,
        string? unit = null)
    {
        return AsUserAsync(userId, () => _service.CreateAsync(new CreatePantryItemDto
        {
            ProductId = productId,
            ExpirationDate = expirationDate,
            Quantity = quantity,
            Unit = unit
        }));
    }

    // ---------- Crear y listar ----------

    [Fact]
    public async Task Debe_crear_un_item_para_el_usuario_actual_y_listarlo_con_el_nombre_del_producto()
    {
        var userId = Guid.NewGuid();
        var productId = await CreateProductAsync("Galletitas de avena");

        var created = await CreateItemAsync(userId, productId, new DateOnly(2027, 3, 1), 2m, "  paquetes ");

        created.Id.ShouldNotBe(Guid.Empty);
        created.Unit.ShouldBe("paquetes");

        var list = await AsUserAsync(userId, () => _service.GetListAsync(new GetPantryItemsInput()));

        list.TotalCount.ShouldBe(1);
        var item = list.Items.Single();
        item.ProductName.ShouldBe("Galletitas de avena");
        item.Quantity.ShouldBe(2m);
        item.Unit.ShouldBe("paquetes");
        item.ExpirationDate.ShouldBe(new DateOnly(2027, 3, 1));
        item.Status.ShouldBe(PantryItemStatus.Active);
    }

    [Fact]
    public async Task Debe_dejar_sin_informar_los_datos_opcionales_que_no_se_indicaron()
    {
        var userId = Guid.NewGuid();
        var productId = await CreateProductAsync();

        await CreateItemAsync(userId, productId);

        var item = (await AsUserAsync(userId, () => _service.GetListAsync(new GetPantryItemsInput()))).Items.Single();

        item.Quantity.ShouldBeNull();
        item.Unit.ShouldBeNull();
        item.ExpirationDate.ShouldBeNull();
    }

    [Fact]
    public async Task Debe_listar_solo_los_items_del_usuario_actual()
    {
        var userA = Guid.NewGuid();
        var userB = Guid.NewGuid();
        var productId = await CreateProductAsync();

        await CreateItemAsync(userA, productId);
        await CreateItemAsync(userA, productId);
        await CreateItemAsync(userB, productId);

        var listA = await AsUserAsync(userA, () => _service.GetListAsync(new GetPantryItemsInput()));
        var listB = await AsUserAsync(userB, () => _service.GetListAsync(new GetPantryItemsInput()));

        listA.TotalCount.ShouldBe(2);
        listB.TotalCount.ShouldBe(1);
        listA.Items.Select(i => i.Id).ShouldNotContain(listB.Items.Single().Id);
    }

    [Fact]
    public async Task Debe_paginar_y_ordenar_la_lista()
    {
        var userId = Guid.NewGuid();
        var productId = await CreateProductAsync();

        await CreateItemAsync(userId, productId, new DateOnly(2027, 1, 10));
        await CreateItemAsync(userId, productId, new DateOnly(2027, 1, 20));
        await CreateItemAsync(userId, productId, new DateOnly(2027, 1, 30));

        var firstPage = await AsUserAsync(userId, () => _service.GetListAsync(new GetPantryItemsInput
        {
            MaxResultCount = 2,
            SkipCount = 0,
            Sorting = "expirationDate desc"
        }));

        firstPage.TotalCount.ShouldBe(3);
        firstPage.Items.Count.ShouldBe(2);
        firstPage.Items[0].ExpirationDate.ShouldBe(new DateOnly(2027, 1, 30));
        firstPage.Items[1].ExpirationDate.ShouldBe(new DateOnly(2027, 1, 20));

        var secondPage = await AsUserAsync(userId, () => _service.GetListAsync(new GetPantryItemsInput
        {
            MaxResultCount = 2,
            SkipCount = 2,
            Sorting = "expirationDate desc"
        }));

        secondPage.Items.Count.ShouldBe(1);
        secondPage.Items[0].ExpirationDate.ShouldBe(new DateOnly(2027, 1, 10));
    }

    [Fact]
    public async Task Debe_ordenar_por_defecto_primero_los_que_vencen_antes_y_sin_fecha_al_final()
    {
        var userId = Guid.NewGuid();
        var productId = await CreateProductAsync();

        await CreateItemAsync(userId, productId, null);
        await CreateItemAsync(userId, productId, new DateOnly(2027, 2, 20));
        await CreateItemAsync(userId, productId, new DateOnly(2027, 2, 10));

        var list = await AsUserAsync(userId, () => _service.GetListAsync(new GetPantryItemsInput()));

        list.Items.Select(i => i.ExpirationDate).ToList().ShouldBe(new DateOnly?[]
        {
            new DateOnly(2027, 2, 10),
            new DateOnly(2027, 2, 20),
            null
        });
    }

    [Fact]
    public async Task No_debe_crear_un_item_de_un_producto_inexistente()
    {
        await Assert.ThrowsAnyAsync<EntityNotFoundException>(() =>
            CreateItemAsync(Guid.NewGuid(), Guid.NewGuid()));
    }

    // ---------- Modificar ----------

    [Fact]
    public async Task Debe_actualizar_cantidad_unidad_y_fecha_de_vencimiento()
    {
        var userId = Guid.NewGuid();
        var productId = await CreateProductAsync();
        var created = await CreateItemAsync(userId, productId, new DateOnly(2027, 1, 1), 1m, "kg");

        var updated = await AsUserAsync(userId, () => _service.UpdateAsync(created.Id, new UpdatePantryItemDto
        {
            Quantity = 5.5m,
            Unit = "  litros ",
            ExpirationDate = new DateOnly(2027, 6, 30)
        }));

        updated.Quantity.ShouldBe(5.5m);
        updated.Unit.ShouldBe("litros");
        updated.ExpirationDate.ShouldBe(new DateOnly(2027, 6, 30));

        var found = await AsUserAsync(userId, () => _service.GetAsync(created.Id));
        found.Quantity.ShouldBe(5.5m);
        found.Unit.ShouldBe("litros");
        found.ExpirationDate.ShouldBe(new DateOnly(2027, 6, 30));
    }

    [Fact]
    public async Task No_debe_actualizar_con_cantidad_negativa_y_debe_conservar_el_estado_anterior()
    {
        var userId = Guid.NewGuid();
        var productId = await CreateProductAsync();
        var created = await CreateItemAsync(userId, productId, new DateOnly(2027, 1, 1), 1m, "kg");

        await Assert.ThrowsAsync<AbpValidationException>(() =>
            AsUserAsync(userId, () => _service.UpdateAsync(created.Id, new UpdatePantryItemDto
            {
                Quantity = -1m,
                Unit = "litros",
                ExpirationDate = new DateOnly(2027, 6, 30)
            })));

        var found = await AsUserAsync(userId, () => _service.GetAsync(created.Id));
        found.Quantity.ShouldBe(1m);
        found.Unit.ShouldBe("kg");
        found.ExpirationDate.ShouldBe(new DateOnly(2027, 1, 1));
    }

    // ---------- Consumir (regla 6) ----------

    [Fact]
    public async Task Debe_marcar_un_item_como_consumido_y_conservarlo_como_historial()
    {
        var userId = Guid.NewGuid();
        var productId = await CreateProductAsync();
        var active = await CreateItemAsync(userId, productId);
        var toConsume = await CreateItemAsync(userId, productId);

        var consumed = await AsUserAsync(userId, () => _service.MarkAsConsumedAsync(toConsume.Id));
        consumed.Status.ShouldBe(PantryItemStatus.Consumed);

        // Sigue en la lista (historial), no se elimina.
        var all = await AsUserAsync(userId, () => _service.GetListAsync(new GetPantryItemsInput()));
        all.TotalCount.ShouldBe(2);

        // Y se puede filtrar por estado.
        var onlyConsumed = await AsUserAsync(userId, () => _service.GetListAsync(
            new GetPantryItemsInput { Status = PantryItemStatus.Consumed }));
        onlyConsumed.Items.Single().Id.ShouldBe(toConsume.Id);

        var onlyActive = await AsUserAsync(userId, () => _service.GetListAsync(
            new GetPantryItemsInput { Status = PantryItemStatus.Active }));
        onlyActive.Items.Single().Id.ShouldBe(active.Id);
    }

    // ---------- Eliminar ----------

    [Fact]
    public async Task Debe_eliminar_un_item_y_responder_NotFound_al_consultarlo()
    {
        var userId = Guid.NewGuid();
        var productId = await CreateProductAsync();
        var created = await CreateItemAsync(userId, productId);

        await AsUserAsync(userId, () => _service.DeleteAsync(created.Id));

        await Assert.ThrowsAnyAsync<EntityNotFoundException>(() =>
            AsUserAsync(userId, () => _service.GetAsync(created.Id)));

        var list = await AsUserAsync(userId, () => _service.GetListAsync(new GetPantryItemsInput()));
        list.TotalCount.ShouldBe(0);
    }

    // ---------- Regla 3: ítems ajenos ----------

    [Fact]
    public async Task Un_item_de_otro_usuario_no_se_puede_ver_ni_modificar_ni_consumir_ni_eliminar()
    {
        var owner = Guid.NewGuid();
        var intruder = Guid.NewGuid();
        var productId = await CreateProductAsync();
        var created = await CreateItemAsync(owner, productId, new DateOnly(2027, 1, 1), 1m, "kg");

        await Assert.ThrowsAnyAsync<EntityNotFoundException>(() =>
            AsUserAsync(intruder, () => _service.GetAsync(created.Id)));

        await Assert.ThrowsAnyAsync<EntityNotFoundException>(() =>
            AsUserAsync(intruder, () => _service.UpdateAsync(created.Id, new UpdatePantryItemDto
            {
                Quantity = 99m,
                Unit = "hackeado",
                ExpirationDate = new DateOnly(2030, 1, 1)
            })));

        await Assert.ThrowsAnyAsync<EntityNotFoundException>(() =>
            AsUserAsync(intruder, () => _service.MarkAsConsumedAsync(created.Id)));

        await Assert.ThrowsAnyAsync<EntityNotFoundException>(() =>
            AsUserAsync(intruder, () => _service.DeleteAsync(created.Id)));

        // El ítem del propietario sigue intacto.
        var intact = await AsUserAsync(owner, () => _service.GetAsync(created.Id));
        intact.Quantity.ShouldBe(1m);
        intact.Unit.ShouldBe("kg");
        intact.ExpirationDate.ShouldBe(new DateOnly(2027, 1, 1));
        intact.Status.ShouldBe(PantryItemStatus.Active);
    }
}
