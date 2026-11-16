using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace SmartPantry.PantryItems;

/// <summary>
/// Ítem mínimo de despensa (RF-10): propietario, producto, estado y fecha de vencimiento opcional.
/// El propietario es un dato persistido: el worker nunca lo toma del usuario HTTP actual.
/// Cantidad, unidad y nota (RF-10 completo) llegan en un incremento posterior.
/// </summary>
public class PantryItem : AuditedAggregateRoot<Guid>
{
    public Guid OwnerId { get; private set; }
    public Guid ProductId { get; private set; }
    public PantryItemStatus Status { get; private set; }

    /// <summary>Fecha de calendario (sin hora). Null si el producto no informa vencimiento.</summary>
    public DateOnly? ExpirationDate { get; private set; }

    protected PantryItem()
    {
        // Requerido por EF Core.
    }

    public PantryItem(Guid id, Guid ownerId, Guid productId, DateOnly? expirationDate = null)
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

        OwnerId = ownerId;
        ProductId = productId;
        Status = PantryItemStatus.Active;
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
}
