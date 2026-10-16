namespace SmartPantry.Products;

public static class ProductConsts
{
    public const int MaxBarCodeLength = 50;
    public const int MaxNameLength = 128;
    public const int MaxBrandLength = 128;

    /// <summary>Valores válidos de NutriScore (una letra).</summary>
    public const string ValidNutriScores = "ABCDE";

    public const int MinNovaGroup = 1;
    public const int MaxNovaGroup = 4;

    /// <summary>Código de error de negocio: ya existe un producto con ese código de barras.</summary>
    public const string DuplicateBarCodeErrorCode = "SmartPantry:Product:DuplicateBarCode";
}
