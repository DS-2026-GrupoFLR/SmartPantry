using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using NSubstitute;
using NSubstitute.ExceptionExtensions;
using Shouldly;
using Volo.Abp.Validation;
using Xunit;
using Volo.Abp.Modularity;

namespace SmartPantry.ProductLookup;

public abstract class ProductLookupAppServiceTests<TStartupModule>
    : SmartPantryApplicationTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{
    // Cliente falso: reemplaza al cliente real de Open Food Facts
    private readonly IExternalProductCatalogClient _catalogClient =
        Substitute.For<IExternalProductCatalogClient>();

    private readonly IProductLookupAppService _service;

    public ProductLookupAppServiceTests()
    {
        _service = GetRequiredService<IProductLookupAppService>();
    }

    protected override void AfterAddApplication(IServiceCollection services)
    {
        services.AddSingleton<IExternalProductCatalogClient>(_catalogClient);
    }

    [Fact]
    public async Task Debe_devolver_Found_cuando_el_producto_existe()
    {
        _catalogClient.GetByBarcodeAsync("3017620422003").Returns(
            Task.FromResult<ExternalProductDto?>(new ExternalProductDto
            {
                Barcode = "3017620422003",
                Name = "Nutella",
                Brand = "Nutella, Ferrero",
                Quantity = "400 g",
                EnergyKcalPer100g = 539m
            }));

        var result = await _service.GetByBarcodeAsync(
            new ProductByBarcodeInput { Barcode = "3017620422003" });

        result.Status.ShouldBe(ProductLookupStatus.Found);
        result.Product.ShouldNotBeNull();
        result.Product!.Name.ShouldBe("Nutella");
        result.Product.EnergyKcalPer100g.ShouldBe(539m);
    }

    [Fact]
    public async Task Debe_devolver_NotFound_cuando_el_producto_no_existe()
    {
        _catalogClient.GetByBarcodeAsync("0000000000000").Returns(
            Task.FromResult<ExternalProductDto?>(null));

        var result = await _service.GetByBarcodeAsync(
            new ProductByBarcodeInput { Barcode = "0000000000000" });

        result.Status.ShouldBe(ProductLookupStatus.NotFound);
        result.Product.ShouldBeNull();
    }

    [Fact]
    public async Task Debe_dejar_vacios_los_datos_que_el_proveedor_no_informa()
    {
        _catalogClient.GetByBarcodeAsync("12345678").Returns(
            Task.FromResult<ExternalProductDto?>(new ExternalProductDto
            {
                Barcode = "12345678"
            }));

        var result = await _service.GetByBarcodeAsync(
            new ProductByBarcodeInput { Barcode = "12345678" });

        result.Status.ShouldBe(ProductLookupStatus.Found);
        result.Product!.Barcode.ShouldBe("12345678");
        result.Product.Name.ShouldBeNull();
        result.Product.Brand.ShouldBeNull();
        result.Product.ImageUrl.ShouldBeNull();
        result.Product.EnergyKcalPer100g.ShouldBeNull();
    }

    [Fact]
    public async Task Debe_devolver_RateLimited_cuando_hay_limite_de_consultas()
    {
        _catalogClient.GetByBarcodeAsync("3017620422003")
            .ThrowsAsync(new ExternalCatalogRateLimitException());

        var result = await _service.GetByBarcodeAsync(
            new ProductByBarcodeInput { Barcode = "3017620422003" });

        result.Status.ShouldBe(ProductLookupStatus.RateLimited);
        result.Product.ShouldBeNull();
    }

    [Fact]
    public async Task Debe_devolver_Unavailable_cuando_el_proveedor_no_responde()
    {
        _catalogClient.GetByBarcodeAsync("3017620422003")
            .ThrowsAsync(new ExternalCatalogUnavailableException("Sin conexión"));

        var result = await _service.GetByBarcodeAsync(
            new ProductByBarcodeInput { Barcode = "3017620422003" });

        result.Status.ShouldBe(ProductLookupStatus.Unavailable);
        result.Product.ShouldBeNull();
    }

    [Fact]
    public async Task Debe_rechazar_un_codigo_invalido_sin_llamar_al_proveedor()
    {
        await Should.ThrowAsync<AbpValidationException>(async () =>
            await _service.GetByBarcodeAsync(
                new ProductByBarcodeInput { Barcode = "abc" }));

        await _catalogClient.DidNotReceive().GetByBarcodeAsync(Arg.Any<string>());
    }
}