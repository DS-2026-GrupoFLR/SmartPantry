using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace SmartPantry.TollBooths;

public interface ITollBoothAppService : IApplicationService
{
    Task<TollBoothDto> GetAsync(Guid id);
    Task<TollBoothDto> CreateAsync(CreateTollBoothDto input);
}