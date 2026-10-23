using System;
using System.Linq;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
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

    // ---------- TP05: crear y consultar ----------

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

    // ---------- TP06: lista, modificación y eliminación ----------

    [Fact]
    public async Task Should_Register_List_Update_Get_And_Delete_A_Product()
    {
        // registrar
        var created = await _productAppService.CreateAsync(new CreateProductDto
        {
            BarCode = "8000000000001",
            Name = "Producto de prueba",
            Brand = "Marca",
            NutriScore = "A",
            NovaGroup = 1
        });

        // listar
        var list = await _productAppService.GetListAsync(new PagedAndSortedResultRequestDto());
        list.Items.ShouldContain(p => p.Id == created.Id);

        // modificar
        var updated = await _productAppService.UpdateAsync(created.Id, new UpdateProductDto
        {
            Name = "  Producto modificado  ",
            Brand = "Otra marca",
            NutriScore = "b",
            NovaGroup = 2
        });
        updated.Name.ShouldBe("Producto modificado");

        // consultar
        var found = await _productAppService.GetAsync(created.Id);
        found.Name.ShouldBe("Producto modificado");
        found.Brand.ShouldBe("Otra marca");
        found.NutriScore.ShouldBe("B");
        found.NovaGroup.ShouldBe(2);
        found.BarCode.ShouldBe("8000000000001"); // el código de barras no cambia

        // eliminar
        await _productAppService.DeleteAsync(created.Id);

        // consultar el identificador eliminado: no se encuentra
        await Assert.ThrowsAnyAsync<EntityNotFoundException>(async () =>
        {
            await _productAppService.GetAsync(created.Id);
        });

        var listAfter = await _productAppService.GetListAsync(new PagedAndSortedResultRequestDto());
        listAfter.Items.ShouldNotContain(p => p.Id == created.Id);
    }

    [Fact]
    public async Task Should_List_Products_With_Paging_And_Sorting()
    {
        foreach (var (barCode, name) in new[] { ("9000000000003", "Cacao"), ("9000000000001", "Arroz"), ("9000000000002", "Bizcochos") })
        {
            await _productAppService.CreateAsync(new CreateProductDto { BarCode = barCode, Name = name });
        }

        var firstPage = await _productAppService.GetListAsync(new PagedAndSortedResultRequestDto
        {
            Sorting = "Name",
            SkipCount = 0,
            MaxResultCount = 2
        });

        firstPage.TotalCount.ShouldBeGreaterThanOrEqualTo(3);
        firstPage.Items.Count.ShouldBe(2);
        firstPage.Items[0].Name.ShouldBe("Arroz");
        firstPage.Items[1].Name.ShouldBe("Bizcochos");

        var secondPage = await _productAppService.GetListAsync(new PagedAndSortedResultRequestDto
        {
            Sorting = "Name",
            SkipCount = 2,
            MaxResultCount = 2
        });

        secondPage.Items.First().Name.ShouldBe("Cacao");
    }

    [Fact]
    public async Task Should_Not_Update_A_Product_With_Invalid_Data_And_Keep_The_Previous_State()
    {
        var created = await _productAppService.CreateAsync(new CreateProductDto
        {
            BarCode = "8000000000002",
            Name = "Original",
            Brand = "Marca",
            NutriScore = "A",
            NovaGroup = 1
        });

        // Nombre válido + NutriScore inválido: la entrada se rechaza y no debe quedar un cambio parcial.
        var exception = await Assert.ThrowsAsync<AbpValidationException>(async () =>
        {
            await _productAppService.UpdateAsync(created.Id, new UpdateProductDto
            {
                Name = "Nombre nuevo",
                Brand = "Otra marca",
                NutriScore = "Z",
                NovaGroup = 2
            });
        });

        exception.ValidationErrors
            .ShouldContain(err => err.MemberNames.Any(m => m == nameof(UpdateProductDto.NutriScore)));

        var found = await _productAppService.GetAsync(created.Id);
        found.Name.ShouldBe("Original");
        found.Brand.ShouldBe("Marca");
        found.NutriScore.ShouldBe("A");
        found.NovaGroup.ShouldBe(1);
    }

    [Fact]
    public async Task Should_Not_Create_A_Product_With_Invalid_NutriScore()
    {
        var exception = await Assert.ThrowsAsync<AbpValidationException>(async () =>
        {
            await _productAppService.CreateAsync(new CreateProductDto
            {
                BarCode = "8000000000099",
                Name = "Producto",
                NutriScore = "S"
            });
        });

        exception.ValidationErrors
            .ShouldContain(err => err.MemberNames.Any(m => m == nameof(CreateProductDto.NutriScore)));
    }

    [Fact]
    public async Task Should_Not_Update_A_Product_Without_Name()
    {
        var created = await _productAppService.CreateAsync(new CreateProductDto
        {
            BarCode = "8000000000003",
            Name = "Original"
        });

        var exception = await Assert.ThrowsAsync<AbpValidationException>(async () =>
        {
            await _productAppService.UpdateAsync(created.Id, new UpdateProductDto { Name = "" });
        });

        exception.ValidationErrors
            .ShouldContain(err => err.MemberNames.Any(m => m == nameof(UpdateProductDto.Name)));
    }

    [Fact]
    public async Task Should_Throw_EntityNotFound_When_Updating_A_Missing_Product()
    {
        await Assert.ThrowsAnyAsync<EntityNotFoundException>(async () =>
        {
            await _productAppService.UpdateAsync(Guid.NewGuid(), new UpdateProductDto { Name = "Cualquiera" });
        });
    }

    [Fact]
    public async Task Should_Allow_Registering_Again_A_BarCode_Of_A_Deleted_Product()
    {
        var first = await _productAppService.CreateAsync(new CreateProductDto
        {
            BarCode = "8000000000004",
            Name = "Primero"
        });

        await _productAppService.DeleteAsync(first.Id);

        var again = await _productAppService.CreateAsync(new CreateProductDto
        {
            BarCode = "8000000000004",
            Name = "Segundo"
        });

        again.Id.ShouldNotBe(first.Id);
    }
}
