using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace SmartPantry.PantryItems;

/// <summary>
/// Ítem de despensa (RF-10/RF-11): propietario, producto, estado, cantidad y unidad opcionales
/// y fecha de vencimiento opcional.
/// El propietario es un dato persistido: el worker nunca lo toma del usuario HTTP actual, y el
/// servicio de aplicación lo toma de ICurrentUser antes de leer o modificar un ítem (regla 3).
/// </summary>
public class PantryItem : AuditedAggregateRoot<Guid>
{
    public Guid OwnerId { get; private set; }
    public Guid ProductId { get; private set; }
    public PantryItemStatus Status { get; private set; }

    /// <summary>Cantidad no negativa. Null si el usuario no la indicó.</summary>
    public decimal? Quantity { get; private set; }

    /// <summary>Unidad normalizada (sin espacios sobrantes). Null si no se indicó.</summary>
    public string? Unit { get; private set; }

    /// <summary>Fecha de calendario (sin hora). Null si el producto no informa vencimiento.</summary>
    public DateOnly? ExpirationDate { get; private set; }

    protected PantryItem()
    {
        // Requerido por EF Core.
    }

    public PantryItem(
        Guid id,
        Guid ownerId,
        Guid productId,
        DateOnly? expirationDate = null,
        decimal? quantity = null,
        string? unit = null)
        : base(id)
    {
        if (ownerId == Guid.Empty)
        {
            throw new ArgumentException("El propietario es obligatorio.", nameof(ownerId));
        }

        if (productId == Guid.Empty)
        {
            throw new ArgumentException("El producto es obligatorio.", nameof(productId));
        }

        // Se valida todo antes de asignar.
        var normalizedQuantity = NormalizeQuantity(quantity);
        var normalizedUnit = NormalizeUnit(unit);

        OwnerId = ownerId;
        ProductId = productId;
        Status = PantryItemStatus.Active;
        ExpirationDate = expirationDate;
        Quantity = normalizedQuantity;
        Unit = normalizedUnit;
    }

    /// <summary>
    /// Modifica los datos editables (RF-11). Valida y normaliza TODO antes de asignar nada:
    /// si algún dato es inválido se lanza una excepción y el ítem conserva su estado anterior.
    /// </summary>
    public void Update(decimal? quantity, string? unit, DateOnly? expirationDate)
    {
        var newQuantity = NormalizeQuantity(quantity);
        var newUnit = NormalizeUnit(unit);

        Quantity = newQuantity;
        Unit = newUnit;
        ExpirationDate = expirationDate;
    }

    public void ChangeExpirationDate(DateOnly? expirationDate)
    {
        ExpirationDate = expirationDate;
    }

    public void MarkAsConsumed()
    {
        Status = PantryItemStatus.Consumed;
    }

    public void MarkAsActive()
    {
        Status = PantryItemStatus.Active;
    }

    private static decimal? NormalizeQuantity(decimal? quantity)
    {
        if (quantity is null)
        {
            return null;
        }

        if (quantity < 0 || quantity > PantryConsts.MaxQuantity)
        {
            throw new ArgumentOutOfRangeException(
                nameof(quantity),
                $"La cantidad debe estar entre 0 y {PantryConsts.MaxQuantity}.");
        }

        return quantity;
    }

    private static string? NormalizeUnit(string? unit)
    {
        if (string.IsNullOrWhiteSpace(unit))
        {
            return null;
        }

        return Check.Length(unit.Trim(), nameof(unit), PantryConsts.MaxUnitLength);
    }
}
