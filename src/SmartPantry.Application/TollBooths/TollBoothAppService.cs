using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace SmartPantry.TollBooths;

public class TollBoothAppService : ApplicationService, ITollBoothAppService
{
    private readonly IRepository<TollBooth, Guid> _tollBoothRepository;

    public TollBoothAppService(IRepository<TollBooth, Guid> tollBoothRepository)
    {
        _tollBoothRepository = tollBoothRepository;
    }

    public async Task<TollBoothDto> GetAsync(Guid id)
    {
        var tollBooth = await _tollBoothRepository.GetAsync(id);
        return ObjectMapper.Map<TollBooth, TollBoothDto>(tollBooth);
    }

    public async Task<TollBoothDto> CreateAsync(CreateTollBoothDto input)
    {
        var tollBooth = new TollBooth(
            GuidGenerator.Create(),
            input.Code,
            input.Name,
            input.BaseRate
        );

        await _tollBoothRepository.InsertAsync(tollBooth);
        return ObjectMapper.Map<TollBooth, TollBoothDto>(tollBooth);
    }
}