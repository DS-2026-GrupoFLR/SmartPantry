using System;
using Shouldly;
using Xunit;

namespace SmartPantry.PantryItems;

public class ExpirationWarning_Tests
{
    private static readonly DateOnly Date = new(2026, 11, 5);

    private static ExpirationWarning NewWarning()
    {
        return new ExpirationWarning(Guid.NewGuid(), Guid.NewGuid(), Date, ExpirationWarningLevel.ExpiringSoon);
    }

    [Fact]
    public void Debe_crearse_activa_con_tipo_vencimiento()
    {
        var itemId = Guid.NewGuid();

        var warning = new ExpirationWarning(Guid.NewGuid(), itemId, Date, ExpirationWarningLevel.ExpiringSoon);

        warning.PantryItemId.ShouldBe(itemId);
        warning.Type.ShouldBe(PantryWarningType.Expiration);
        warning.IsActive.ShouldBeTrue();
        warning.ExpirationDate.ShouldBe(Date);
        warning.Level.ShouldBe(ExpirationWarningLevel.ExpiringSoon);
    }

    [Fact]
    public void Debe_rechazar_un_item_vacio()
    {
        Assert.Throws<ArgumentException>(() =>
            new ExpirationWarning(Guid.NewGuid(), Guid.Empty, Date, ExpirationWarningLevel.Expired));
    }

    [Fact]
    public void Refrescar_con_los_mismos_datos_no_debe_cambiar_nada()
    {
        var warning = NewWarning();

        warning.Refresh(Date, ExpirationWarningLevel.ExpiringSoon).ShouldBeFalse();

        warning.IsActive.ShouldBeTrue();
        warning.ExpirationDate.ShouldBe(Date);
    }

    [Fact]
    public void Refrescar_con_nueva_fecha_debe_actualizar_la_misma_advertencia()
    {
        var warning = NewWarning();
        var id = warning.Id;
        var newDate = Date.AddDays(1);

        warning.Refresh(newDate, ExpirationWarningLevel.ExpiringSoon).ShouldBeTrue();

        warning.Id.ShouldBe(id);
        warning.ExpirationDate.ShouldBe(newDate);
    }

    [Fact]
    public void Refrescar_debe_escalar_a_vencida()
    {
        var warning = NewWarning();

        warning.Refresh(Date, ExpirationWarningLevel.Expired).ShouldBeTrue();

        warning.Level.ShouldBe(ExpirationWarningLevel.Expired);
    }

    [Fact]
    public void Desactivar_solo_debe_cambiar_una_advertencia_activa()
    {
        var warning = NewWarning();

        warning.Deactivate().ShouldBeTrue();
        warning.IsActive.ShouldBeFalse();

        warning.Deactivate().ShouldBeFalse();
        warning.IsActive.ShouldBeFalse();
    }

    [Fact]
    public void Refrescar_debe_reactivar_una_advertencia_desactivada()
    {
        var warning = NewWarning();
        var id = warning.Id;
        warning.Deactivate();

        warning.Refresh(Date, ExpirationWarningLevel.ExpiringSoon).ShouldBeTrue();

        warning.Id.ShouldBe(id);
        warning.IsActive.ShouldBeTrue();
    }
}
