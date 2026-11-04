using System;
using Shouldly;
using Xunit;

namespace SmartPantry.Products;

public class Product_Tests
{
    // ---------- TP05: creación ----------

    [Fact]
    public void Debe_crear_un_producto_valido_y_normalizar_los_textos()
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
    public void Debe_permitir_que_falten_los_datos_opcionales()
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
    public void Debe_rechazar_un_codigo_de_barras_vacio(string? barCode)
    {
        Assert.ThrowsAny<ArgumentException>(
            () => new Product(Guid.NewGuid(), barCode!, "Producto"));
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("   ")]
    public void Debe_rechazar_un_nombre_vacio(string? name)
    {
        Assert.ThrowsAny<ArgumentException>(
            () => new Product(Guid.NewGuid(), "123", name!));
    }

    [Fact]
    public void Debe_rechazar_un_codigo_de_barras_demasiado_largo()
    {
        var tooLong = new string('1', ProductConsts.MaxBarCodeLength + 1);

        Assert.ThrowsAny<ArgumentException>(
            () => new Product(Guid.NewGuid(), tooLong, "Producto"));
    }

    [Theory]
    [InlineData("F")]
    [InlineData("AB")]
    [InlineData("1")]
    public void Debe_rechazar_un_nutriscore_invalido(string nutriScore)
    {
        Assert.ThrowsAny<ArgumentException>(
            () => new Product(Guid.NewGuid(), "123", "Producto", nutriScore: nutriScore));
    }

    [Theory]
    [InlineData(0)]
    [InlineData(5)]
    public void Debe_rechazar_un_novagroup_fuera_de_rango(int novaGroup)
    {
        Assert.ThrowsAny<ArgumentException>(
            () => new Product(Guid.NewGuid(), "123", "Producto", novaGroup: novaGroup));
    }

    // ---------- TP06: modificación ----------

    [Fact]
    public void Modificar_con_datos_validos_conserva_las_normalizaciones()
    {
        var product = new Product(Guid.NewGuid(), "7790001234567", "Original", "Marca", "A", 1);

        product.Update("  Nombre nuevo  ", "  Otra marca ", " d ", 4);

        product.Name.ShouldBe("Nombre nuevo");
        product.Brand.ShouldBe("Otra marca");
        product.NutriScore.ShouldBe("D");
        product.NovaGroup.ShouldBe(4);
    }

    [Fact]
    public void Modificar_no_cambia_el_codigo_de_barras()
    {
        var product = new Product(Guid.NewGuid(), "7790001234567", "Original");

        product.Update("Nombre nuevo", null, null, null);

        product.BarCode.ShouldBe("7790001234567");
    }

    [Fact]
    public void Modificar_puede_vaciar_los_datos_opcionales()
    {
        var product = new Product(Guid.NewGuid(), "123", "Original", "Marca", "A", 2);

        product.Update("Original", "   ", null, null);

        product.Brand.ShouldBeNull();
        product.NutriScore.ShouldBeNull();
        product.NovaGroup.ShouldBeNull();
    }

    [Fact]
    public void Modificar_con_datos_invalidos_se_rechaza_y_conserva_el_estado_anterior()
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
    public void Modificar_con_nombre_vacio_se_rechaza_y_conserva_el_estado_anterior(string name)
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
    public void Modificar_con_novagroup_fuera_de_rango_conserva_el_estado_anterior()
    {
        var product = new Product(Guid.NewGuid(), "123", "Original", "Marca", "B", 3);

        Assert.ThrowsAny<ArgumentException>(
            () => product.Update("Nombre nuevo", "Otra marca", "C", 9));

        product.Name.ShouldBe("Original");
        product.NovaGroup.ShouldBe(3);
    }
}
