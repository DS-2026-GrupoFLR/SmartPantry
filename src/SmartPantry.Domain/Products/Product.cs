using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace SmartPantry.Products;

/// <summary>
/// Producto del catálogo interno (RF-08). El agregado protege sus invariantes:
/// los textos se normalizan (Trim) y los datos obligatorios no pueden estar vacíos.
/// </summary>
public class Product : FullAuditedAggregateRoot<Guid>
{
    public string BarCode { get; private set; } = string.Empty;
    public string Name { get; private set; } = string.Empty;
    public string? Brand { get; private set; }
    public string? NutriScore { get; private set; }
    public int? NovaGroup { get; private set; }

    protected Product()
    {
        // Requerido por EF Core.
    }

    public Product(
        Guid id,
        string barCode,
        string name,
        string? brand = null,
        string? nutriScore = null,
        int? novaGroup = null)
        : base(id)
    {
        BarCode = Check.NotNullOrWhiteSpace(barCode?.Trim(), nameof(barCode), ProductConsts.MaxBarCodeLength);
        Name = Check.NotNullOrWhiteSpace(name?.Trim(), nameof(name), ProductConsts.MaxNameLength);
        Brand = NormalizeBrand(brand);
        NutriScore = NormalizeNutriScore(nutriScore);
        NovaGroup = ValidateNovaGroup(novaGroup);
    }

    private static string? NormalizeBrand(string? brand)
    {
        if (string.IsNullOrWhiteSpace(brand))
        {
            return null;
        }

        return Check.Length(brand.Trim(), nameof(brand), ProductConsts.MaxBrandLength);
    }

    private static string? NormalizeNutriScore(string? nutriScore)
    {
        if (string.IsNullOrWhiteSpace(nutriScore))
        {
            return null;
        }

        var normalized = nutriScore.Trim().ToUpperInvariant();

        if (normalized.Length != 1 || !ProductConsts.ValidNutriScores.Contains(normalized[0]))
        {
            throw new ArgumentException(
                $"NutriScore debe ser una de las letras: {ProductConsts.ValidNutriScores}.",
                nameof(nutriScore));
        }

        return normalized;
    }

    private static int? ValidateNovaGroup(int? novaGroup)
    {
        if (novaGroup is null)
        {
            return null;
        }

        if (novaGroup < ProductConsts.MinNovaGroup || novaGroup > ProductConsts.MaxNovaGroup)
        {
            throw new ArgumentOutOfRangeException(
                nameof(novaGroup),
                $"NovaGroup debe estar entre {ProductConsts.MinNovaGroup} y {ProductConsts.MaxNovaGroup}.");
        }

        return novaGroup;
    }
}
