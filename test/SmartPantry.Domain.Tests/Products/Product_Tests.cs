using System;
using Shouldly;
using Xunit;

namespace SmartPantry.Products;

public class Product_Tests
{
    // ---------- TP05: creación ----------

    [Fact]
    public void Should_Create_A_Valid_Product_And_Normalize_Text()
    {
        var id = Guid.NewGuid();

        var product = new Product(
            id,
            barCode: "  7790001234567  ",
            name: "  Galletitas de avena  ",
            brand: "  Marca Uno  ",
            nutriScore: " b ",
            novaGroup: 3);

        product.Id.ShouldBe(id);
        product.BarCode.ShouldBe("7790001234567");
        product.Name.ShouldBe("Galletitas de avena");
        product.Brand.ShouldBe("Marca Uno");
        product.NutriScore.ShouldBe("B");
        product.NovaGroup.ShouldBe(3);
    }

    [Fact]
    public void Should_Allow_Missing_Optional_Data()
    {
        var product = new Product(Guid.NewGuid(), "123", "Producto", brand: "   ");

        product.Brand.ShouldBeNull();
        product.NutriScore.ShouldBeNull();
        product.NovaGroup.ShouldBeNull();
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("   ")]
    public void Should_Reject_Empty_BarCode(string? barCode)
    {
        Assert.ThrowsAny<ArgumentException>(
            () => new Product(Guid.NewGuid(), barCode!, "Producto"));
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("   ")]
    public void Should_Reject_Empty_Name(string? name)
    {
        Assert.ThrowsAny<ArgumentException>(
            () => new Product(Guid.NewGuid(), "123", name!));
    }

    [Fact]
    public void Should_Reject_Too_Long_BarCode()
    {
        var tooLong = new string('1', ProductConsts.MaxBarCodeLength + 1);

        Assert.ThrowsAny<ArgumentException>(
            () => new Product(Guid.NewGuid(), tooLong, "Producto"));
    }

    [Theory]
    [InlineData("F")]
    [InlineData("AB")]
    [InlineData("1")]
    public void Should_Reject_Invalid_NutriScore(string nutriScore)
    {
        Assert.ThrowsAny<ArgumentException>(
            () => new Product(Guid.NewGuid(), "123", "Producto", nutriScore: nutriScore));
    }

    [Theory]
    [InlineData(0)]
    [InlineData(5)]
    public void Should_Reject_NovaGroup_Out_Of_Range(int novaGroup)
    {
        Assert.ThrowsAny<ArgumentException>(
            () => new Product(Guid.NewGuid(), "123", "Producto", novaGroup: novaGroup));
    }

    // ---------- TP06: modificación ----------

    [Fact]
    public void Update_With_Valid_Data_Keeps_Normalizations()
    {
        var product = new Product(Guid.NewGuid(), "7790001234567", "Original", "Marca", "A", 1);

        product.Update("  Nombre nuevo  ", "  Otra marca ", " d ", 4);

        product.Name.ShouldBe("Nombre nuevo");
        product.Brand.ShouldBe("Otra marca");
        product.NutriScore.ShouldBe("D");
        product.NovaGroup.ShouldBe(4);
    }

    [Fact]
    public void Update_Does_Not_Change_The_BarCode()
    {
        var product = new Product(Guid.NewGuid(), "7790001234567", "Original");

        product.Update("Nombre nuevo", null, null, null);

        product.BarCode.ShouldBe("7790001234567");
    }

    [Fact]
    public void Update_Can_Clear_Optional_Data()
    {
        var product = new Product(Guid.NewGuid(), "123", "Original", "Marca", "A", 2);

        product.Update("Original", "   ", null, null);

        product.Brand.ShouldBeNull();
        product.NutriScore.ShouldBeNull();
        product.NovaGroup.ShouldBeNull();
    }

    [Fact]
    public void Update_With_Invalid_Data_Is_Rejected_And_Keeps_The_Previous_State()
    {
        var product = new Product(Guid.NewGuid(), "123", "Original", "Marca", "A", 1);

        // El nombre es válido pero el NutriScore no: no debe quedar ningún cambio parcial.
        Assert.ThrowsAny<ArgumentException>(
            () => product.Update("Nombre nuevo", "Otra marca", "Z", 2));

        product.Name.ShouldBe("Original");
        product.Brand.ShouldBe("Marca");
        product.NutriScore.ShouldBe("A");
        product.NovaGroup.ShouldBe(1);
    }

    [Theory]
    [InlineData("")]
    [InlineData("   ")]
    public void Update_With_Empty_Name_Is_Rejected_And_Keeps_The_Previous_State(string name)
    {
        var product = new Product(Guid.NewGuid(), "123", "Original", "Marca", "B", 3);

        Assert.ThrowsAny<ArgumentException>(
            () => product.Update(name, "Otra marca", "C", 4));

        product.Name.ShouldBe("Original");
        product.Brand.ShouldBe("Marca");
        product.NutriScore.ShouldBe("B");
        product.NovaGroup.ShouldBe(3);
    }

    [Fact]
    public void Update_With_NovaGroup_Out_Of_Range_Keeps_The_Previous_State()
    {
        var product = new Product(Guid.NewGuid(), "123", "Original", "Marca", "B", 3);

        Assert.ThrowsAny<ArgumentException>(
            () => product.Update("Nombre nuevo", "Otra marca", "C", 9));

        product.Name.ShouldBe("Original");
        product.NovaGroup.ShouldBe(3);
    }
}
