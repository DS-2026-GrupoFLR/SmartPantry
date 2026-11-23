using System;
using Shouldly;
using Xunit;

namespace SmartPantry.PantryItems;

/// <summary>TP10: cantidad y unidad opcionales, y modificación (RF-11) en el dominio.</summary>
public class PantryItemQuantity_Tests
{
    private static readonly DateOnly OriginalDate = new(2026, 12, 1);

    private static PantryItem NewItem(decimal? quantity = 2.5m, string? unit = "kg")
    {
        return new PantryItem(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), OriginalDate, quantity, unit);
    }

    [Fact]
    public void Should_Create_With_Quantity_And_Normalize_Unit()
    {
        var item = new PantryItem(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), OriginalDate, 3m, "  kg  ");

        item.Quantity.ShouldBe(3m);
        item.Unit.ShouldBe("kg");
    }

    [Fact]
    public void Should_Allow_Missing_Quantity_And_Unit()
    {
        var item = new PantryItem(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), OriginalDate, null, "   ");

        item.Quantity.ShouldBeNull();
        item.Unit.ShouldBeNull();
    }

    [Fact]
    public void Should_Reject_Negative_Quantity_On_Creation()
    {
        Assert.ThrowsAny<ArgumentException>(() =>
            new PantryItem(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), null, -1m, "kg"));
    }

    [Fact]
    public void Should_Reject_Too_Long_Unit_On_Creation()
    {
        var tooLong = new string('x', PantryConsts.MaxUnitLength + 1);

        Assert.ThrowsAny<ArgumentException>(() =>
            new PantryItem(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), null, 1m, tooLong));
    }

    [Fact]
    public void Update_With_Valid_Data_Keeps_Normalizations()
    {
        var item = NewItem();
        var newDate = new DateOnly(2027, 1, 15);

        item.Update(4m, "  unidades ", newDate);

        item.Quantity.ShouldBe(4m);
        item.Unit.ShouldBe("unidades");
        item.ExpirationDate.ShouldBe(newDate);
    }

    [Fact]
    public void Update_Can_Clear_Optional_Data()
    {
        var item = NewItem();

        item.Update(null, "   ", null);

        item.Quantity.ShouldBeNull();
        item.Unit.ShouldBeNull();
        item.ExpirationDate.ShouldBeNull();
    }

    [Fact]
    public void Update_With_Negative_Quantity_Is_Rejected_And_Keeps_The_Previous_State()
    {
        var item = NewItem();

        Assert.ThrowsAny<ArgumentException>(() => item.Update(-5m, "litros", new DateOnly(2027, 5, 5)));

        item.Quantity.ShouldBe(2.5m);
        item.Unit.ShouldBe("kg");
        item.ExpirationDate.ShouldBe(OriginalDate);
    }

    [Fact]
    public void Update_With_Too_Long_Unit_Is_Rejected_And_Keeps_The_Previous_State()
    {
        var item = NewItem();
        var tooLong = new string('x', PantryConsts.MaxUnitLength + 1);

        Assert.ThrowsAny<ArgumentException>(() => item.Update(10m, tooLong, new DateOnly(2027, 5, 5)));

        item.Quantity.ShouldBe(2.5m);
        item.Unit.ShouldBe("kg");
        item.ExpirationDate.ShouldBe(OriginalDate);
    }

    [Fact]
    public void Update_Does_Not_Change_Owner_Product_Or_Status()
    {
        var item = NewItem();
        var ownerId = item.OwnerId;
        var productId = item.ProductId;
        item.MarkAsConsumed();

        item.Update(1m, "kg", OriginalDate);

        item.OwnerId.ShouldBe(ownerId);
        item.ProductId.ShouldBe(productId);
        item.Status.ShouldBe(PantryItemStatus.Consumed);
    }
}
