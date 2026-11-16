using System;
using Shouldly;
using Xunit;

namespace SmartPantry.PantryItems;

public class PantryItem_Tests
{
    [Fact]
    public void Debe_crear_un_item_activo_con_propietario_y_producto()
    {
        var id = Guid.NewGuid();
        var ownerId = Guid.NewGuid();
        var productId = Guid.NewGuid();
        var date = new DateOnly(2026, 12, 1);

        var item = new PantryItem(id, ownerId, productId, date);

        item.Id.ShouldBe(id);
        item.OwnerId.ShouldBe(ownerId);
        item.ProductId.ShouldBe(productId);
        item.Status.ShouldBe(PantryItemStatus.Active);
        item.ExpirationDate.ShouldBe(date);
    }

    [Fact]
    public void Debe_permitir_que_falte_la_fecha_de_vencimiento()
    {
        var item = new PantryItem(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid());

        item.ExpirationDate.ShouldBeNull();
    }

    [Fact]
    public void Debe_rechazar_un_propietario_vacio()
    {
        Assert.Throws<ArgumentException>(() =>
            new PantryItem(Guid.NewGuid(), Guid.Empty, Guid.NewGuid()));
    }

    [Fact]
    public void Debe_rechazar_un_producto_vacio()
    {
        Assert.Throws<ArgumentException>(() =>
            new PantryItem(Guid.NewGuid(), Guid.NewGuid(), Guid.Empty));
    }

    [Fact]
    public void Debe_cambiar_la_fecha_de_vencimiento_y_el_estado()
    {
        var item = new PantryItem(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), new DateOnly(2026, 12, 1));

        item.ChangeExpirationDate(new DateOnly(2026, 12, 20));
        item.ExpirationDate.ShouldBe(new DateOnly(2026, 12, 20));

        item.ChangeExpirationDate(null);
        item.ExpirationDate.ShouldBeNull();

        item.MarkAsConsumed();
        item.Status.ShouldBe(PantryItemStatus.Consumed);

        item.MarkAsActive();
        item.Status.ShouldBe(PantryItemStatus.Active);
    }
}
