using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace SmartPantry.PantryItems;

/// <summary>
/// Advertencia de vencimiento de un ítem (RF-15). Hay a lo sumo una por (PantryItemId, Type);
/// el esquema lo refuerza con un índice único. Cuando cambia la situación del ítem se actualiza
/// o se desactiva la MISMA advertencia: nunca se crea una segunda.
/// </summary>
public class ExpirationWarning : AuditedAggregateRoot<Guid>
{
    public Guid PantryItemId { get; private set; }
    public PantryWarningType Type { get; private set; }
    public bool IsActive { get; private set; }
    public ExpirationWarningLevel Level { get; private set; }

    /// <summary>Fecha de vencimiento del ítem que originó el aviso.</summary>
    public DateOnly ExpirationDate { get; private set; }

    protected ExpirationWarning()
    {
        // Requerido por EF Core.
    }

    public ExpirationWarning(
        Guid id,
        Guid pantryItemId,
        DateOnly expirationDate,
        ExpirationWarningLevel level)
        : base(id)
    {
        if (pantryItemId == Guid.Empty)
        {
            throw new ArgumentException("El ítem es obligatorio.", nameof(pantryItemId));
        }

        PantryItemId = pantryItemId;
        Type = PantryWarningType.Expiration;
        IsActive = true;
        ExpirationDate = expirationDate;
        Level = level;
    }

    /// <summary>
    /// Deja la advertencia activa con los datos indicados. Si ya estaba así no cambia nada.
    /// Devuelve true solo si hubo un cambio real (permite no escribir en la base si no hace falta).
    /// </summary>
    public bool Refresh(DateOnly expirationDate, ExpirationWarningLevel level)
    {
        if (IsActive && ExpirationDate == expirationDate && Level == level)
        {
            return false;
        }

        IsActive = true;
        ExpirationDate = expirationDate;
        Level = level;
        return true;
    }

    /// <summary>Desactiva la advertencia. Devuelve true solo si estaba activa.</summary>
    public bool Deactivate()
    {
        if (!IsActive)
        {
            return false;
        }

        IsActive = false;
        return true;
    }
}
