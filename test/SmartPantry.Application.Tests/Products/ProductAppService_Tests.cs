using System;
using System.Linq;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Modularity;
using Volo.Abp.Validation;
using Xunit;

namespace SmartPantry.Products;

public abstract class ProductAppService_Tests<TStartupModule> : SmartPantryApplicationTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{
    private readonly IProductAppService _productAppService;

    protected ProductAppService_Tests()
    {
        _productAppService = GetRequiredService<IProductAppService>();
    }

    [Fact]
    public async Task Should_Create_And_Then_Get_A_Product_By_Id()
    {
        var created = await _productAppService.CreateAsync(new CreateProductDto
        {
            BarCode = "  7790009876543 ",
            Name = "  Yerba mate  ",
            Brand = "Marca Dos",
            NutriScore = "c",
            NovaGroup = 2
        });

        created.Id.ShouldNotBe(Guid.Empty);
        created.BarCode.ShouldBe("7790009876543");
        created.Name.ShouldBe("Yerba mate");

        var found = await _productAppService.GetAsync(created.Id);

        found.Id.ShouldBe(created.Id);
        found.BarCode.ShouldBe("7790009876543");
        found.Name.ShouldBe("Yerba mate");
        found.Brand.ShouldBe("Marca Dos");
        found.NutriScore.ShouldBe("C");
        found.NovaGroup.ShouldBe(2);
    }

    [Fact]
    public async Task Should_Not_Create_A_Product_Without_BarCode()
    {
        var exception = await Assert.ThrowsAsync<AbpValidationException>(async () =>
        {
            await _productAppService.CreateAsync(new CreateProductDto
            {
                BarCode = "",
                Name = "Producto sin código"
            });
        });

        exception.ValidationErrors
            .ShouldContain(err => err.MemberNames.Any(m => m == nameof(CreateProductDto.BarCode)));
    }

    [Fact]
    public async Task Should_Not_Create_A_Product_Without_Name()
    {
        var exception = await Assert.ThrowsAsync<AbpValidationException>(async () =>
        {
            await _productAppService.CreateAsync(new CreateProductDto
            {
                BarCode = "111",
                Name = ""
            });
        });

        exception.ValidationErrors
            .ShouldContain(err => err.MemberNames.Any(m => m == nameof(CreateProductDto.Name)));
    }

    [Fact]
    public async Task Should_Not_Create_Two_Products_With_The_Same_BarCode()
    {
        await _productAppService.CreateAsync(new CreateProductDto
        {
            BarCode = "5550001112223",
            Name = "Primero"
        });

        var exception = await Assert.ThrowsAsync<BusinessException>(async () =>
        {
            await _productAppService.CreateAsync(new CreateProductDto
            {
                BarCode = " 5550001112223 ",
                Name = "Repetido"
            });
        });

        exception.Code.ShouldBe(ProductConsts.DuplicateBarCodeErrorCode);
    }

    [Fact]
    public async Task Should_Throw_EntityNotFound_For_A_Missing_Id()
    {
        await Assert.ThrowsAnyAsync<EntityNotFoundException>(async () =>
        {
            await _productAppService.GetAsync(Guid.NewGuid());
        });
    }
}
