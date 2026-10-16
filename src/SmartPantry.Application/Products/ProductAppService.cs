using System;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace SmartPantry.Products;

public class ProductAppService : ApplicationService, IProductAppService
{
    private readonly IRepository<Product, Guid> _productRepository;

    public ProductAppService(IRepository<Product, Guid> productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<ProductDto> GetAsync(Guid id)
    {
        // Si el Id no existe, ABP lanza EntityNotFoundException (404).
        var product = await _productRepository.GetAsync(id);
        return ObjectMapper.Map<Product, ProductDto>(product);
    }

    public async Task<ProductDto> CreateAsync(CreateProductDto input)
    {
        // RF-08: no se crean duplicados para el mismo código de barras.
        var barCode = input.BarCode.Trim();
        var existing = await _productRepository.FindAsync(p => p.BarCode == barCode);
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

        await _productRepository.InsertAsync(product);
        return ObjectMapper.Map<Product, ProductDto>(product);
    }
}
