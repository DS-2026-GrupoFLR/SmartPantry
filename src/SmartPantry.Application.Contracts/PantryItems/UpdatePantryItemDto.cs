using System;
using System.ComponentModel.DataAnnotations;

namespace SmartPantry.PantryItems;

/// <summary>
/// RF-11: edita cantidad, unidad y fecha de vencimiento. Reemplaza los tres valores: lo que llegue
/// como null deja ese dato sin informar. El producto y el propietario no se pueden cambiar.
/// </summary>
public class UpdatePantryItemDto
{
    [Range(0.0, PantryConsts.MaxQuantity)]
    public decimal? Quantity { get; set; }

    [StringLength(PantryConsts.MaxUnitLength)]
    public string? Unit { get; set; }

    public DateOnly? ExpirationDate { get; set; }
}
