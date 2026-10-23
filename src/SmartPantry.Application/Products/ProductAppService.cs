using System;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace SmartPantry.Products;

/// <summary>
/// Servicio CRUD sobre CrudAppService.
/// Heredados sin cambios: GetAsync, GetListAsync (paginado y ordenable) y DeleteAsync.
/// Adaptados: CreateAsync y UpdateAsync, porque intervienen reglas del dominio
/// (normalización, validación y código de barras único).
/// </summary>
public class ProductAppService :
    CrudAppService<
        Product,
        ProductDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateProductDto,
        UpdateProductDto>,
    IProductAppService
{
    public ProductAppService(IRepository<Product, Guid> repository)
        : base(repository)
    {
    }

    public override async Task<ProductDto> CreateAsync(CreateProductDto input)
    {
        // RF-08: no se crean duplicados para el mismo código de barras.
        var barCode = input.BarCode.Trim();
        var existing = await Repository.FindAsync(p => p.BarCode == barCode);
        if (existing != null)
        {
            throw new BusinessException(ProductConsts.DuplicateBarCodeErrorCode)
                .WithData("BarCode", barCode);
        }

        // El constructor del agregado valida y normaliza.
        var product = new Product(
            GuidGenerator.Create(),
            input.BarCode,
            input.Name,
            input.Brand,
            input.NutriScore,
            input.NovaGroup);

        await Repository.InsertAsync(product);
        return ObjectMapper.Map<Product, ProductDto>(product);
    }

    public override async Task<ProductDto> UpdateAsync(Guid id, UpdateProductDto input)
    {
        // Si el Id no existe, el repositorio lanza EntityNotFoundException (404).
        var product = await Repository.GetAsync(id);

        // La regla vive en el dominio: valida y normaliza antes de cambiar el estado.
        product.Update(input.Name, input.Brand, input.NutriScore, input.NovaGroup);

        await Repository.UpdateAsync(product);
        return ObjectMapper.Map<Product, ProductDto>(product);
    }
}
