using System.ComponentModel.DataAnnotations;

namespace SmartPantry.TollBooths;

public class CreateTollBoothDto
{
    [Required]
    [StringLength(TollBoothConsts.MaxCodeLength)]
    public string Code { get; set; } = string.Empty;

    [Required]
    [StringLength(TollBoothConsts.MaxNameLength)]
    public string Name { get; set; } = string.Empty;

    [Range(0, double.MaxValue)]
    public decimal BaseRate { get; set; }
}