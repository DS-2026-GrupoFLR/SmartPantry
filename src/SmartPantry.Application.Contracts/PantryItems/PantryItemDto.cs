using System;
using Volo.Abp.Application.Dtos;

namespace SmartPantry.PantryItems;

/// <summary>
/// Ítem de despensa tal como lo ve el usuario. El propietario NO se expone: un usuario solo
/// recibe sus propios ítems. Los datos que no se informaron llegan como null (RF-09).
/// </summary>
public class PantryItemDto : EntityDto<Guid>
{
    public Guid ProductId { get; set; }
    public string ProductName { get; set; } = string.Empty;
    public string? ProductBrand { get; set; }
    public string ProductBarCode { get; set; } = string.Empty;
    public decimal? Quantity { get; set; }
    public string? Unit { get; set; }
    public DateOnly? ExpirationDate { get; set; }
    public PantryItemStatus Status { get; set; }
}
