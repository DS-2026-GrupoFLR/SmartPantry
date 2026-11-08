namespace SmartPantry.PantryItems;

/// <summary>Resumen de una ejecución del procesamiento de vencimientos.</summary>
/// <param name="Created">Advertencias nuevas.</param>
/// <param name="Updated">Advertencias actualizadas (cambió la fecha o el nivel) o reactivadas.</param>
/// <param name="Deactivated">Advertencias desactivadas porque dejaron de corresponder.</param>
public record ExpirationProcessingResult(int Created, int Updated, int Deactivated);
