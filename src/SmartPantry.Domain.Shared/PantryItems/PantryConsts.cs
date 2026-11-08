namespace SmartPantry.PantryItems;

public static class PantryConsts
{
    /// <summary>
    /// Umbral de aviso de vencimiento fijado por el equipo (RF-13): se avisa desde hoy
    /// hasta hoy + 3 días, ambos inclusive. No es configurable por usuario en esta etapa.
    /// </summary>
    public const int ExpirationWarningThresholdDays = 3;
}
