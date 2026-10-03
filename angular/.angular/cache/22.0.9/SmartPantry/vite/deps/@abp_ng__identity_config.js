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

// node_modules/@abp/ng.identity/fesm2022/abp-ng.identity-config.mjs
var IDENTITY_ROUTE_PROVIDERS = [provideAppInitializer(() => {
  configureRoutes();
})];
function configureRoutes() {
  const routesService = inject(RoutesService);
  routesService.add([{
    path: void 0,
    name: "AbpIdentity::Menu:IdentityManagement",
    parentName: "AbpUiNavigation::Menu:Administration",
    requiredPolicy: "AbpIdentity.Roles || AbpIdentity.Users",
    iconClass: "fa fa-id-card-o",
    layout: "application",
    order: 1
  }, {
    path: "/identity/roles",
    name: "AbpIdentity::Roles",
    parentName: "AbpIdentity::Menu:IdentityManagement",
    requiredPolicy: "AbpIdentity.Roles",
    order: 1
  }, {
    path: "/identity/users",
    name: "AbpIdentity::Users",
    parentName: "AbpIdentity::Menu:IdentityManagement",
    requiredPolicy: "AbpIdentity.Users",
    order: 2
  }]);
}
function provideIdentityConfig() {
  return makeEnvironmentProviders([IDENTITY_ROUTE_PROVIDERS]);
}
var IdentityConfigModule = class _IdentityConfigModule {
  static forRoot() {
    return {
      ngModule: _IdentityConfigModule,
      providers: [provideIdentityConfig()]
    };
  }
  static {
    this.ɵfac = function IdentityConfigModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IdentityConfigModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _IdentityConfigModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityConfigModule, [{
    type: NgModule
  }], null, null);
})();
export {
  IDENTITY_ROUTE_PROVIDERS,
  IdentityConfigModule,
  configureRoutes,
  provideIdentityConfig
};
//# sourceMappingURL=@abp_ng__identity_config.js.map
