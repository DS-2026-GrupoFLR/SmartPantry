using System;
using Volo.Abp;

namespace SmartPantry.PantryItems;

/// <summary>
/// Regla pura de RF-15: decide si un ítem merece advertencia y de qué gravedad.
/// No usa reloj, base de datos ni temporizador: "hoy" es un parámetro, así que la regla
/// se prueba con cualquier fecha.
///
/// Criterio de fecha: la fecha de vencimiento es una fecha de calendario (DateOnly, sin hora)
/// y "hoy" es la fecha de calendario del servidor (IClock). Código y pruebas usan el mismo criterio.
///
/// Reglas (umbral = PantryConsts.ExpirationWarningThresholdDays, 3 días):
///   consumido                        -> sin advertencia
///   sin fecha de vencimiento         -> sin advertencia
///   fecha &lt; hoy                     -> Expired
///   hoy &lt;= fecha &lt;= hoy + umbral    -> ExpiringSoon (el día límite SÍ avisa)
///   fecha &gt; hoy + umbral            -> sin advertencia
/// </summary>
public static class ExpirationPolicy
{
    /// <returns>El nivel de la advertencia que corresponde, o null si no corresponde ninguna.</returns>
    public static ExpirationWarningLevel? Evaluate(PantryItem item, DateOnly today)
    {
        Check.NotNull(item, nameof(item));

        if (item.Status == PantryItemStatus.Consumed || item.ExpirationDate is null)
        {
            return null;
        }

        var expirationDate = item.ExpirationDate.Value;

        if (expirationDate < today)
        {
            return ExpirationWarningLevel.Expired;
        }

        if (expirationDate <= today.AddDays(PantryConsts.ExpirationWarningThresholdDays))
        {
            return ExpirationWarningLevel.ExpiringSoon;
        }

        return null;
    }
}
