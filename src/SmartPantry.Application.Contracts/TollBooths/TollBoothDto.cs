using System;
using Volo.Abp.Application.Dtos;

namespace SmartPantry.TollBooths;

public class TollBoothDto : EntityDto<Guid>
{
    public string Code { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public decimal BaseRate { get; set; }
}