using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace SmartPantry.Products;

/// <summary>
/// Contrato CRUD de productos: GetAsync, GetListAsync, CreateAsync, UpdateAsync y DeleteAsync.
/// </summary>
public interface IProductAppService :
    ICrudAppService<
        ProductDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateProductDto,
        UpdateProductDto>
{
}
