using System;
using System.ComponentModel.DataAnnotations;

namespace SmartPantry.PantryItems;

/// <summary>RF-10 (solo backend): agrega un producto guardado a la despensa del usuario actual.</summary>
public class CreatePantryItemDto
{
    [Required]
    public Guid ProductId { get; set; }

    [Range(0.0, PantryConsts.MaxQuantity)]
    public decimal? Quantity { get; set; }

    [StringLength(PantryConsts.MaxUnitLength)]
    public string? Unit { get; set; }

    public DateOnly? ExpirationDate { get; set; }
}
