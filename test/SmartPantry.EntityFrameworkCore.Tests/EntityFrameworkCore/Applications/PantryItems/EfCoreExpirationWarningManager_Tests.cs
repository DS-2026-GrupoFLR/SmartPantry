using SmartPantry.PantryItems;
using Xunit;

namespace SmartPantry.EntityFrameworkCore.Applications.PantryItems;

[Collection(SmartPantryTestConsts.CollectionDefinitionName)]
public class EfCoreExpirationWarningManager_Tests : ExpirationWarningManager_Tests<SmartPantryEntityFrameworkCoreTestModule>
{

}
