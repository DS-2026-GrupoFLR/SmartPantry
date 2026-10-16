using System;
using Shouldly;
using Xunit;

namespace SmartPantry.Products;

public class Product_Tests
{
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
        Assert.ThrowsAny<ArgumentException>(() => new Product(Guid.NewGuid(), barCode!, "Producto"));
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("   ")]
    public void Should_Reject_Empty_Name(string? name)
    {
        Assert.ThrowsAny<ArgumentException>(() => new Product(Guid.NewGuid(), "123", name!));
    }

    [Fact]
    public void Should_Reject_Too_Long_BarCode()
    {
        var tooLong = new string('1', ProductConsts.MaxBarCodeLength + 1);

        Assert.ThrowsAny<ArgumentException>(() => new Product(Guid.NewGuid(), tooLong, "Producto"));
    }

    [Theory]
    [InlineData("F")]
    [InlineData("AB")]
    [InlineData("1")]
    public void Should_Reject_Invalid_NutriScore(string nutriScore)
    {
        Assert.ThrowsAny<ArgumentException>(() => new Product(Guid.NewGuid(), "123", "Producto", nutriScore: nutriScore));
    }

    [Theory]
    [InlineData(0)]
    [InlineData(5)]
    public void Should_Reject_NovaGroup_Out_Of_Range(int novaGroup)
    {
        Assert.ThrowsAny<ArgumentException>(() => new Product(Guid.NewGuid(), "123", "Producto", novaGroup: novaGroup));
    }
}
