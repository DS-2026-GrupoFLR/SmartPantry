using Volo.Abp.Application.Dtos;

namespace SmartPantry.PantryItems;

/// <summary>
/// Paginación y orden estándar de ABP. Orden admitido (Sorting): "productName", "quantity" o
/// "expirationDate", opcionalmente seguido de "asc" o "desc". Sin orden: primero los que vencen antes.
/// </summary>
public class GetPantryItemsInput : PagedAndSortedResultRequestDto
{
    /// <summary>Filtra por estado (por ejemplo, solo los consumidos). Null = todos.</summary>
    public PantryItemStatus? Status { get; set; }
}
