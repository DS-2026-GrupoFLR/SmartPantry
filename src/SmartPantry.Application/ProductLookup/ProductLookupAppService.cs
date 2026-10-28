using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;

namespace SmartPantry.ProductLookup;

// Decisión transitoria del TP07: consulta sin login. No es la política final de autorización.
[AllowAnonymous]
public class ProductLookupAppService : SmartPantryAppService, IProductLookupAppService
{
    private readonly IExternalProductCatalogClient _catalogClient;

    public ProductLookupAppService(IExternalProductCatalogClient catalogClient)
    {
        _catalogClient = catalogClient;
    }

    public async Task<ProductLookupResultDto> GetByBarcodeAsync(ProductByBarcodeInput input)
    {
        try
        {
            var external = await _catalogClient.GetByBarcodeAsync(input.Barcode);

            if (external is null)
            {
                return new ProductLookupResultDto
                {
                    Status = ProductLookupStatus.NotFound,
                    Message = "No se encontró un producto con ese código de barras."
                };
            }

            return new ProductLookupResultDto
            {
                Status = ProductLookupStatus.Found,
                Product = Map(external)
            };
        }
        catch (ExternalCatalogRateLimitException)
        {
            return new ProductLookupResultDto
            {
                Status = ProductLookupStatus.RateLimited,
                Message = "El catálogo externo limitó las consultas. Probá de nuevo en unos minutos."
            };
        }
        catch (ExternalCatalogUnavailableException ex)
        {
            Logger.LogWarning(ex, "Catálogo externo no disponible");
            return new ProductLookupResultDto
            {
                Status = ProductLookupStatus.Unavailable,
                Message = "El catálogo externo no está disponible en este momento."
            };
        }
    }

    private static ProductInfoDto Map(ExternalProductDto source) => new()
    {
        Barcode = source.Barcode,
        Name = source.Name,
        Brand = source.Brand,
        Quantity = source.Quantity,
        ImageUrl = source.ImageUrl,
        EnergyKcalPer100g = source.EnergyKcalPer100g,
        FatPer100g = source.FatPer100g,
        SugarsPer100g = source.SugarsPer100g,
        SaltPer100g = source.SaltPer100g
    };
}