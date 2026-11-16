using System;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;

namespace SmartPantry.PantryItems;

/// <summary>
/// RF-15: decide qué advertencias de vencimiento crear, actualizar o desactivar.
/// No conoce el temporizador ni el worker: "hoy" es un parámetro, así que se prueba con cualquier
/// fecha. El propietario de cada ítem sale de los datos persistidos, nunca del usuario HTTP actual.
///
/// Idempotencia: hay a lo sumo UNA advertencia por (ítem, tipo). Si ya existe se actualiza o se
/// desactiva la misma; solo se inserta cuando no existe ninguna. Además el esquema lo refuerza con
/// un índice único (PantryItemId, Type): si dos ejecuciones cercanas intentaran insertar la misma
/// advertencia, la base rechaza la segunda.
///
/// Este servicio debe invocarse dentro de una unidad de trabajo (la delimita quien lo llama).
/// </summary>
public class ExpirationWarningManager : DomainService
{
    private readonly IRepository<PantryItem, Guid> _itemRepository;
    private readonly IRepository<ExpirationWarning, Guid> _warningRepository;

    public ExpirationWarningManager(
        IRepository<PantryItem, Guid> itemRepository,
        IRepository<ExpirationWarning, Guid> warningRepository)
    {
        _itemRepository = itemRepository;
        _warningRepository = warningRepository;
    }

    public async Task<ExpirationProcessingResult> ProcessAsync(DateOnly today)
    {
        var items = await _itemRepository.GetListAsync();

        var warningsByItem = (await _warningRepository.GetListAsync())
            .Where(w => w.Type == PantryWarningType.Expiration)
            .ToDictionary(w => w.PantryItemId);

        var created = 0;
        var updated = 0;
        var deactivated = 0;

        foreach (var item in items)
        {
            var level = ExpirationPolicy.Evaluate(item, today);
            warningsByItem.TryGetValue(item.Id, out var warning);

            if (level is null)
            {
                // El ítem ya no merece aviso: se desactiva la misma advertencia (si estaba activa).
                if (warning != null && warning.Deactivate())
                {
                    await _warningRepository.UpdateAsync(warning);
                    deactivated++;
                }

                continue;
            }

            var expirationDate = item.ExpirationDate!.Value;

            if (warning is null)
            {
                await _warningRepository.InsertAsync(
                    new ExpirationWarning(GuidGenerator.Create(), item.Id, expirationDate, level.Value));
                created++;
            }
            else if (warning.Refresh(expirationDate, level.Value))
            {
                await _warningRepository.UpdateAsync(warning);
                updated++;
            }
        }

        return new ExpirationProcessingResult(created, updated, deactivated);
    }
}
