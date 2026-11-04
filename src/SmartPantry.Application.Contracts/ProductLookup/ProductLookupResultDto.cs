namespace SmartPantry.ProductLookup;

public class ProductLookupResultDto
{
    public ProductLookupStatus Status { get; set; }
    public ProductInfoDto? Product { get; set; }
    public string? Message { get; set; }
}