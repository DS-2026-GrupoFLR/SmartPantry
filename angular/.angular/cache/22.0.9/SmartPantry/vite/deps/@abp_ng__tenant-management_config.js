import {
  RoutesService
} from "./chunk-NI4ZFAY4.js";
import "./chunk-VHKPOJBK.js";
import "./chunk-LMDSVWKI.js";
import "./chunk-KEK2ONVT.js";
import "./chunk-T5EWVHFZ.js";
import "./chunk-IMWYUKDZ.js";
import {
  NgModule,
  provideAppInitializer,
  setClassMetadata,
  ɵɵdefineNgModule
} from "./chunk-EZ2ZVKYO.js";
import "./chunk-HM3VFUK5.js";
import {
  inject,
  makeEnvironmentProviders,
  ɵɵdefineInjector
} from "./chunk-TVT7XMKI.js";
import "./chunk-3RPBTBI6.js";

// node_modules/@abp/ng.tenant-management/fesm2022/abp-ng.tenant-management-config.mjs
var TENANT_MANAGEMENT_ROUTE_PROVIDERS = [provideAppInitializer(() => {
  configureRoutes();
})];
function configureRoutes() {
  const routes = inject(RoutesService);
  routes.add([{
    path: void 0,
    name: "AbpTenantManagement::Menu:TenantManagement",
    parentName: "AbpUiNavigation::Menu:Administration",
    requiredPolicy: "AbpTenantManagement.Tenants",
    layout: "application",
    iconClass: "fa fa-users",
    order: 2
  }, {
    path: "/tenant-management/tenants",
    name: "AbpTenantManagement::Tenants",
    parentName: "AbpTenantManagement::Menu:TenantManagement",
    requiredPolicy: "AbpTenantManagement.Tenants",
    order: 1
  }]);
}
function provideTenantManagementConfig() {
  return makeEnvironmentProviders([TENANT_MANAGEMENT_ROUTE_PROVIDERS]);
}
var TenantManagementConfigModule = class _TenantManagementConfigModule {
  static forRoot() {
    return {
      ngModule: _TenantManagementConfigModule,
      providers: [provideTenantManagementConfig()]
    };
  }
  static {
    this.ɵfac = function TenantManagementConfigModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TenantManagementConfigModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TenantManagementConfigModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantManagementConfigModule, [{
    type: NgModule
  }], null, null);
})();
export {
  TENANT_MANAGEMENT_ROUTE_PROVIDERS,
  TenantManagementConfigModule,
  configureRoutes,
  provideTenantManagementConfig
};
//# sourceMappingURL=@abp_ng__tenant-management_config.js.map
