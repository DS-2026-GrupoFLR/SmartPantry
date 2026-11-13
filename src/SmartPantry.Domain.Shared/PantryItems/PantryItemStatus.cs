namespace SmartPantry.PantryItems;

/// <summary>Estado de un ítem de la despensa.</summary>
public enum PantryItemStatus
{
    /// <summary>El ítem sigue en la despensa.</summary>
    Active = 1,

    /// <summary>El ítem ya fue consumido: no genera advertencias de vencimiento.</summary>
    Consumed = 2
}
