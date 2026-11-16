using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp.BackgroundWorkers;
using Volo.Abp.Threading;
using Volo.Abp.Uow;

namespace SmartPantry.PantryItems;

/// <summary>
/// RF-15: proceso periódico que identifica vencimientos próximos y genera o actualiza advertencias.
///
/// El worker SOLO decide cuándo ejecutar. Qué advertencias crear, actualizar o desactivar lo decide
/// <see cref="ExpirationWarningManager"/>, que se resuelve desde el alcance (scope) de CADA ejecución:
/// el worker es un singleton y no conserva repositorios ni DbContext.
///
/// No depende de ICurrentUser (en segundo plano no hay sesión HTTP): el propietario de cada ítem sale
/// de los datos persistidos. No llama a Open Food Facts ni envía correos.
///
/// CRITERIO DE FECHA: "hoy" es la fecha LOCAL del servidor (DateTime.Now), no UTC. El vencimiento es una
/// fecha de calendario impresa en el envase; con UTC los avisos se adelantarían de noche en Argentina (UTC-3).
/// El mismo criterio se usa en las pruebas: el servicio recibe "hoy" como parámetro (DateOnly).
/// </summary>
public class ExpirationWarningWorker : AsyncPeriodicBackgroundWorkerBase
{
    /// <summary>Se ejecuta una vez por hora; con la fecha como unidad, el resultado es el mismo al repetirse.</summary>
    private const int PeriodMilliseconds = 60 * 60 * 1000;

    public ExpirationWarningWorker(AbpAsyncTimer timer, IServiceScopeFactory serviceScopeFactory)
        : base(timer, serviceScopeFactory)
    {
        Timer.Period = PeriodMilliseconds;
        Timer.RunOnStart = true; // una ejecución al arrancar la aplicación, sin esperar la primera hora
    }

    protected override async Task DoWorkAsync(PeriodicBackgroundWorkerContext workerContext)
    {
        // El scope de esta ejecución lo crea la clase base; se resuelve todo desde acá.
        var manager = workerContext.ServiceProvider.GetRequiredService<ExpirationWarningManager>();
        var unitOfWorkManager = workerContext.ServiceProvider.GetRequiredService<IUnitOfWorkManager>();

        try
        {
            var today = DateOnly.FromDateTime(DateTime.Now); // fecha local del servidor

            // Unidad de trabajo propia para las escrituras: todo o nada en cada ejecución.
            using var uow = unitOfWorkManager.Begin(requiresNew: true, isTransactional: true);
            var result = await manager.ProcessAsync(today);
            await uow.CompleteAsync();

            Logger.LogInformation(
                "Vencimientos procesados ({Today}): {Created} creadas, {Updated} actualizadas, {Deactivated} desactivadas.",
                today, result.Created, result.Updated, result.Deactivated);
        }
        catch (Exception ex)
        {
            // Se registra y se sigue: un error no detiene las próximas ejecuciones.
            // Si dos ejecuciones cercanas intentan crear la misma advertencia, el índice único
            // (PantryItemId, Type) rechaza la segunda y la siguiente ejecución encuentra todo consistente.
            Logger.LogError(ex, "Falló el procesamiento de vencimientos. Se reintentará en la próxima ejecución.");
        }
    }
}
