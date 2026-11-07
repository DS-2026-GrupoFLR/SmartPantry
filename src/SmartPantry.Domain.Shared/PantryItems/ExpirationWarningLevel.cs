namespace SmartPantry.PantryItems;

/// <summary>Gravedad de una advertencia de vencimiento (RF-15).</summary>
public enum ExpirationWarningLevel
{
    /// <summary>Vence entre hoy y el umbral de aviso, ambos días inclusive.</summary>
    ExpiringSoon = 1,

    /// <summary>La fecha de vencimiento ya pasó.</summary>
    Expired = 2
}
