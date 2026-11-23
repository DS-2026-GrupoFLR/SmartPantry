namespace SmartPantry.PantryItems;

public static class PantryConsts
{
    /// <summary>
    /// Umbral de aviso de vencimiento fijado por el equipo (RF-13): se avisa desde hoy
    /// hasta hoy + 3 días, ambos inclusive. No es configurable por usuario en esta etapa.
    /// </summary>
    public const int ExpirationWarningThresholdDays = 3;

    /// <summary>Longitud máxima de la unidad (por ejemplo "kg", "unidades").</summary>
    public const int MaxUnitLength = 32;

    /// <summary>Cantidad máxima admitida. La cantidad mínima es 0 (no negativa).</summary>
    public const int MaxQuantity = 1_000_000;
}
