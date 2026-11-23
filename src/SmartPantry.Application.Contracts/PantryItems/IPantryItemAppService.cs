using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace SmartPantry.PantryItems;

/// <summary>
/// Despensa del usuario autenticado (RF-10 backend y RF-11). Todas las operaciones actúan solo
/// sobre ítems propios; un ítem ajeno responde igual que uno inexistente (404).
/// </summary>
public interface IPantryItemAppService : IApplicationService
{
    Task<PagedResultDto<PantryItemDto>> GetListAsync(GetPantryItemsInput input);

    Task<PantryItemDto> GetAsync(Guid id);

    Task<PantryItemDto> CreateAsync(CreatePantryItemDto input);

    Task<PantryItemDto> UpdateAsync(Guid id, UpdatePantryItemDto input);

    Task<PantryItemDto> MarkAsConsumedAsync(Guid id);

    Task DeleteAsync(Guid id);
}
