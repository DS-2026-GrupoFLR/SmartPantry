using System;
using Shouldly;
using Xunit;

namespace SmartPantry.PantryItems;

public class ExpirationPolicy_Tests
{
    // Fecha controlada: las pruebas no dependen del reloj ni del temporizador.
    private static readonly DateOnly Today = new(2026, 11, 2);

    private static PantryItem NewItem(DateOnly? expirationDate)
    {
        return new PantryItem(Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), expirationDate);
    }

    [Theory]
    [InlineData(10, null)]                                   // lejos del umbral
    [InlineData(4, null)]                                    // un día después del límite
    [InlineData(3, ExpirationWarningLevel.ExpiringSoon)]     // día límite: avisa
    [InlineData(1, ExpirationWarningLevel.ExpiringSoon)]     // dentro del umbral
    [InlineData(0, ExpirationWarningLevel.ExpiringSoon)]     // vence hoy
    [InlineData(-1, ExpirationWarningLevel.Expired)]         // venció ayer
    [InlineData(-30, ExpirationWarningLevel.Expired)]        // vencido hace tiempo
    public void Debe_evaluar_un_item_activo_segun_el_umbral(
        int daysFromToday,
        ExpirationWarningLevel? expected)
    {
        var item = NewItem(Today.AddDays(daysFromToday));

        ExpirationPolicy.Evaluate(item, Today).ShouldBe(expected);
    }

    [Fact]
    public void No_debe_advertir_si_el_item_no_tiene_fecha_de_vencimiento()
    {
        ExpirationPolicy.Evaluate(NewItem(null), Today).ShouldBeNull();
    }

    [Theory]
    [InlineData(-5)]   // consumido aunque ya esté vencido
    [InlineData(0)]
    [InlineData(2)]
    public void No_debe_advertir_si_el_item_esta_consumido(int daysFromToday)
    {
        var item = NewItem(Today.AddDays(daysFromToday));
        item.MarkAsConsumed();

        ExpirationPolicy.Evaluate(item, Today).ShouldBeNull();
    }

    [Fact]
    public void Debe_reevaluar_cuando_avanza_la_fecha_de_hoy()
    {
        var item = NewItem(Today.AddDays(5));

        ExpirationPolicy.Evaluate(item, Today).ShouldBeNull();
        ExpirationPolicy.Evaluate(item, Today.AddDays(2)).ShouldBe(ExpirationWarningLevel.ExpiringSoon);
        ExpirationPolicy.Evaluate(item, Today.AddDays(6)).ShouldBe(ExpirationWarningLevel.Expired);
    }
}
