using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace <Proyecto>.TollBooths;

public class TollBoothAppService : <Proyecto>AppService, ITollBoothAppService
{
    private readonly IRepository<TollBooth, Guid> _tollBoothRepository;

    public TollBoothAppService(IRepository<TollBooth, Guid> tollBoothRepository)
    {
        _tollBoothRepository = tollBoothRepository;
    }

    public async Task<TollBoothDto> GetAsync(Guid id)
    {
        var tollBooth = await _tollBoothRepository.GetAsync(id);

        return new TollBoothDto
        {
            Id = tollBooth.Id,
            Code = tollBooth.Code,
            Name = tollBooth.Name,
            BaseRate = tollBooth.BaseRate
        };
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

        return new TollBoothDto
        {
            Id = tollBooth.Id,
            Code = tollBooth.Code,
            Name = tollBooth.Name,
            BaseRate = tollBooth.BaseRate
        };
    }
}