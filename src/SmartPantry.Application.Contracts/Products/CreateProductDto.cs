using System.ComponentModel.DataAnnotations;

namespace SmartPantry.Products;

public class CreateProductDto
{
    [Required]
    [StringLength(ProductConsts.MaxBarCodeLength)]
    public string BarCode { get; set; } = string.Empty;

    [Required]
    [StringLength(ProductConsts.MaxNameLength)]
    public string Name { get; set; } = string.Empty;

    [StringLength(ProductConsts.MaxBrandLength)]
    public string? Brand { get; set; }

    [RegularExpression("^[A-Ea-e]?$", ErrorMessage = "NutriScore debe ser una letra de la A a la E.")]
    [StringLength(1)]
    public string? NutriScore { get; set; }

    [Range(ProductConsts.MinNovaGroup, ProductConsts.MaxNovaGroup)]
    public int? NovaGroup { get; set; }
}
