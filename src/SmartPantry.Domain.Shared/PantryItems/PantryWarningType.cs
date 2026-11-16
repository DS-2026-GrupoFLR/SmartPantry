namespace SmartPantry.PantryItems;

/// <summary>
/// Tipo de advertencia. Junto con el ítem forma la clave lógica estable:
/// (PantryItemId, Type) identifica a lo sumo una advertencia.
/// </summary>
public enum PantryWarningType
{
    Expiration = 1
}
