using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace <Proyecto>.TollBooths;

public interface ITollBoothAppService : IApplicationService
{
    Task<TollBoothDto> GetAsync(Guid id);
    Task<TollBoothDto> CreateAsync(CreateTollBoothDto input);
}