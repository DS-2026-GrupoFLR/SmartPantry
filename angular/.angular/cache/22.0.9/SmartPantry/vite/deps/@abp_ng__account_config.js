import {
  NAVIGATE_TO_MANAGE_PROFILE,
  RoutesService
} from "./chunk-NI4ZFAY4.js";
import {
  Router
} from "./chunk-VHKPOJBK.js";
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
  Injector,
  inject,
  makeEnvironmentProviders,
  ɵɵdefineInjector
} from "./chunk-TVT7XMKI.js";
import "./chunk-3RPBTBI6.js";

// node_modules/@abp/ng.account/fesm2022/abp-ng.account-config.mjs
var ACCOUNT_ROUTE_PROVIDERS = [provideAppInitializer(() => {
  configureRoutes();
})];
function configureRoutes() {
  const routes = inject(RoutesService);
  routes.add([{
    path: void 0,
    name: "AbpAccount::Menu:Account",
    invisible: true,
    layout: "account",
    breadcrumbText: "AbpAccount::Menu:Account",
    iconClass: "bi bi-person-fill-gear",
    order: 1
  }, {
    path: "/account/login",
    name: "AbpAccount::Login",
    parentName: "AbpAccount::Menu:Account",
    layout: "account",
    order: 1
  }, {
    path: "/account/register",
    name: "AbpAccount::Register",
    parentName: "AbpAccount::Menu:Account",
    layout: "account",
    order: 2
  }, {
    path: "/account/manage",
    name: "AbpAccount::MyAccount",
    parentName: "AbpAccount::Menu:Account",
    layout: "application",
    breadcrumbText: "AbpAccount::Manage",
    iconClass: "bi bi-kanban-fill",
    order: 3
  }, {
    path: "/account/forgot-password",
    parentName: "AbpAccount::Menu:Account",
    name: "AbpAccount::ForgotPassword",
    layout: "account",
    invisible: true
  }, {
    path: "/account/reset-password",
    parentName: "AbpAccount::Menu:Account",
    name: "AbpAccount::ResetPassword",
    layout: "account",
    invisible: true
  }]);
}
function navigateToManageProfileFactory(injector) {
  return () => {
    const router = injector.get(Router);
    const routes = injector.get(RoutesService);
    const {
      path
    } = routes.find(
      (item) => item.name === "AbpAccount::MyAccount"
      /* eAccountRouteNames.ManageProfile */
    );
    router.navigateByUrl(path);
  };
}
function provideAccountConfig() {
  return makeEnvironmentProviders([ACCOUNT_ROUTE_PROVIDERS, {
    provide: NAVIGATE_TO_MANAGE_PROFILE,
    useFactory: navigateToManageProfileFactory,
    deps: [Injector]
  }]);
}
var AccountConfigModule = class _AccountConfigModule {
  static forRoot() {
    return {
      ngModule: _AccountConfigModule,
      providers: [provideAccountConfig()]
    };
  }
  static {
    this.ɵfac = function AccountConfigModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountConfigModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AccountConfigModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountConfigModule, [{
    type: NgModule
  }], null, null);
})();
export {
  ACCOUNT_ROUTE_PROVIDERS,
  AccountConfigModule,
  configureRoutes,
  navigateToManageProfileFactory,
  provideAccountConfig
};
//# sourceMappingURL=@abp_ng__account_config.js.map
