using SmartPantry.ProductLookup;
using Xunit;

namespace SmartPantry.EntityFrameworkCore.Applications.ProductLookup;

[Collection(SmartPantryTestConsts.CollectionDefinitionName)]
public class EfCoreProductLookupAppServiceTests
    : ProductLookupAppServiceTests<SmartPantryEntityFrameworkCoreTestModule>
{
}