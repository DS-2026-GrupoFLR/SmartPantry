using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace SmartPantry.TollBooths;

public class TollBooth : FullAuditedAggregateRoot<Guid>
{
    public string Code { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public decimal BaseRate { get; set; }

    protected TollBooth()
    {
    }

    public TollBooth(Guid id, string code, string name, decimal baseRate)
        : base(id)
    {
        Code = code;
        Name = name;
        BaseRate = baseRate;
    }
}