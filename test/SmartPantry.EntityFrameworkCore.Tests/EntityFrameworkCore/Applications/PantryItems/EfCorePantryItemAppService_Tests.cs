using SmartPantry.PantryItems;
using Xunit;

namespace SmartPantry.EntityFrameworkCore.Applications.PantryItems;

[Collection(SmartPantryTestConsts.CollectionDefinitionName)]
public class EfCorePantryItemAppService_Tests : PantryItemAppService_Tests<SmartPantryEntityFrameworkCoreTestModule>
{

}
