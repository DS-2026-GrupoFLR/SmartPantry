import {
  Tab,
  TabContent,
  TabList,
  TabPanel,
  Tabs
} from "./chunk-2FDKRKWT.js";
import {
  PageComponent
} from "./chunk-XT7XLCLR.js";
import {
  EXTENSIONS_IDENTIFIER,
  EntityAction,
  EntityProp,
  ExtensibleFormComponent,
  ExtensibleTableComponent,
  ExtensionsService,
  FormProp,
  FormPropData,
  ToolbarAction,
  generateFormFromProps,
  getObjectExtensionEntitiesFromStore,
  mapEntitiesToContributors,
  mergeWithDefaultActions,
  mergeWithDefaultProps
} from "./chunk-ZVIHN2OM.js";
import {
  ButtonComponent,
  Confirmation,
  ConfirmationService,
  FormCheckboxComponent,
  ModalCloseDirective,
  ModalComponent,
  ToasterService,
  eFormComponets,
  getPasswordValidators
} from "./chunk-6MBLSBLR.js";
import "./chunk-ORSPOGRK.js";
import {
  NgbDropdownModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavModule,
  NgbNavOutlet
} from "./chunk-5FWCSE5I.js";
import "./chunk-T2QD5I46.js";
import {
  ConfigStateService,
  InitDirective,
  LazyModuleFactory,
  ListService,
  LocalizationPipe,
  LocalizationService,
  NgxValidateCoreModule,
  ReplaceableRouteContainerComponent,
  ReplaceableTemplateDirective,
  RestService,
  RouterOutletComponent,
  ValidationDirective,
  ValidationGroupDirective,
  authGuard,
  escapeHtmlChars,
  permissionGuard
} from "./chunk-NI4ZFAY4.js";
import {
  RouterModule
} from "./chunk-VHKPOJBK.js";
import "./chunk-LMDSVWKI.js";
import "./chunk-KEK2ONVT.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-T5EWVHFZ.js";
import {
  NgStyle,
  NgTemplateOutlet
} from "./chunk-IMWYUKDZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewChild,
  contentChild,
  input,
  model,
  output,
  setClassMetadata,
  viewChild,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵinterpolate2,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-EZ2ZVKYO.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-HM3VFUK5.js";
import {
  DOCUMENT,
  DestroyRef,
  InjectionToken,
  Injector,
  Observable,
  Subject,
  computed,
  debounceTime,
  distinctUntilChanged,
  effect,
  finalize,
  inject,
  map,
  of,
  signal,
  switchMap,
  tap,
  untracked,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-TVT7XMKI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/@abp/ng.identity/fesm2022/abp-ng.identity-proxy.mjs
var IdentityRoleService = class _IdentityRoleService {
  constructor() {
    this.restService = inject(RestService);
    this.apiName = "AbpIdentity";
    this.create = (input2) => this.restService.request({
      method: "POST",
      url: "/api/identity/roles",
      body: input2
    }, {
      apiName: this.apiName
    });
    this.delete = (id) => this.restService.request({
      method: "DELETE",
      url: `/api/identity/roles/${id}`
    }, {
      apiName: this.apiName
    });
    this.get = (id) => this.restService.request({
      method: "GET",
      url: `/api/identity/roles/${id}`
    }, {
      apiName: this.apiName
    });
    this.getAllList = () => this.restService.request({
      method: "GET",
      url: "/api/identity/roles/all"
    }, {
      apiName: this.apiName
    });
    this.getList = (input2) => this.restService.request({
      method: "GET",
      url: "/api/identity/roles",
      params: {
        filter: input2.filter,
        sorting: input2.sorting,
        skipCount: input2.skipCount,
        maxResultCount: input2.maxResultCount
      }
    }, {
      apiName: this.apiName
    });
    this.update = (id, input2) => this.restService.request({
      method: "PUT",
      url: `/api/identity/roles/${id}`,
      body: input2
    }, {
      apiName: this.apiName
    });
  }
  static {
    this.ɵfac = function IdentityRoleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IdentityRoleService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _IdentityRoleService,
      factory: _IdentityRoleService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityRoleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var IdentityUserLookupService = class _IdentityUserLookupService {
  constructor() {
    this.restService = inject(RestService);
    this.apiName = "AbpIdentity";
    this.findById = (id) => this.restService.request({
      method: "GET",
      url: `/api/identity/users/lookup/${id}`
    }, {
      apiName: this.apiName
    });
    this.findByUserName = (userName) => this.restService.request({
      method: "GET",
      url: `/api/identity/users/lookup/by-username/${userName}`
    }, {
      apiName: this.apiName
    });
    this.getCount = (input2) => this.restService.request({
      method: "GET",
      url: "/api/identity/users/lookup/count",
      params: {
        filter: input2.filter
      }
    }, {
      apiName: this.apiName
    });
    this.search = (input2) => this.restService.request({
      method: "GET",
      url: "/api/identity/users/lookup/search",
      params: {
        filter: input2.filter,
        sorting: input2.sorting,
        skipCount: input2.skipCount,
        maxResultCount: input2.maxResultCount
      }
    }, {
      apiName: this.apiName
    });
  }
  static {
    this.ɵfac = function IdentityUserLookupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IdentityUserLookupService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _IdentityUserLookupService,
      factory: _IdentityUserLookupService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityUserLookupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var IdentityUserService = class _IdentityUserService {
  constructor() {
    this.restService = inject(RestService);
    this.apiName = "AbpIdentity";
    this.create = (input2) => this.restService.request({
      method: "POST",
      url: "/api/identity/users",
      body: input2
    }, {
      apiName: this.apiName
    });
    this.delete = (id) => this.restService.request({
      method: "DELETE",
      url: `/api/identity/users/${id}`
    }, {
      apiName: this.apiName
    });
    this.findByEmail = (email) => this.restService.request({
      method: "GET",
      url: `/api/identity/users/by-email/${email}`
    }, {
      apiName: this.apiName
    });
    this.findByUsername = (userName) => this.restService.request({
      method: "GET",
      url: `/api/identity/users/by-username/${userName}`
    }, {
      apiName: this.apiName
    });
    this.get = (id) => this.restService.request({
      method: "GET",
      url: `/api/identity/users/${id}`
    }, {
      apiName: this.apiName
    });
    this.getAssignableRoles = () => this.restService.request({
      method: "GET",
      url: "/api/identity/users/assignable-roles"
    }, {
      apiName: this.apiName
    });
    this.getList = (input2) => this.restService.request({
      method: "GET",
      url: "/api/identity/users",
      params: {
        filter: input2.filter,
        sorting: input2.sorting,
        skipCount: input2.skipCount,
        maxResultCount: input2.maxResultCount
      }
    }, {
      apiName: this.apiName
    });
    this.getRoles = (id) => this.restService.request({
      method: "GET",
      url: `/api/identity/users/${id}/roles`
    }, {
      apiName: this.apiName
    });
    this.update = (id, input2) => this.restService.request({
      method: "PUT",
      url: `/api/identity/users/${id}`,
      body: input2
    }, {
      apiName: this.apiName
    });
    this.updateRoles = (id, input2) => this.restService.request({
      method: "PUT",
      url: `/api/identity/users/${id}/roles`,
      body: input2
    }, {
      apiName: this.apiName
    });
  }
  static {
    this.ɵfac = function IdentityUserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IdentityUserService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _IdentityUserService,
      factory: _IdentityUserService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityUserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@abp/ng.permission-management/fesm2022/abp-ng.permission-management-proxy.mjs
var PermissionsService = class _PermissionsService {
  constructor() {
    this.restService = inject(RestService);
    this.apiName = "AbpPermissionManagement";
    this.deleteResource = (resourceName, resourceKey, providerName, providerKey, config) => this.restService.request({
      method: "DELETE",
      url: "/api/permission-management/permissions/resource",
      params: {
        resourceName,
        resourceKey,
        providerName,
        providerKey
      }
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.get = (providerName, providerKey, config) => this.restService.request({
      method: "GET",
      url: "/api/permission-management/permissions",
      params: {
        providerName,
        providerKey
      }
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.getByGroup = (groupName, providerName, providerKey, config) => this.restService.request({
      method: "GET",
      url: "/api/permission-management/permissions/by-group",
      params: {
        groupName,
        providerName,
        providerKey
      }
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.getResource = (resourceName, resourceKey, config) => this.restService.request({
      method: "GET",
      url: "/api/permission-management/permissions/resource",
      params: {
        resourceName,
        resourceKey
      }
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.getResourceByProvider = (resourceName, resourceKey, providerName, providerKey, config) => this.restService.request({
      method: "GET",
      url: "/api/permission-management/permissions/resource/by-provider",
      params: {
        resourceName,
        resourceKey,
        providerName,
        providerKey
      }
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.getResourceDefinitions = (resourceName, config) => this.restService.request({
      method: "GET",
      url: "/api/permission-management/permissions/resource-definitions",
      params: {
        resourceName
      }
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.getResourceProviderKeyLookupServices = (resourceName, config) => this.restService.request({
      method: "GET",
      url: "/api/permission-management/permissions/resource-provider-key-lookup-services",
      params: {
        resourceName
      }
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.searchResourceProviderKey = (resourceName, serviceName, filter, page, config) => this.restService.request({
      method: "GET",
      url: "/api/permission-management/permissions/search-resource-provider-keys",
      params: {
        resourceName,
        serviceName,
        filter,
        page
      }
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.update = (providerName, providerKey, input2, config) => this.restService.request({
      method: "PUT",
      url: "/api/permission-management/permissions",
      params: {
        providerName,
        providerKey
      },
      body: input2
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.updateResource = (resourceName, resourceKey, input2, config) => this.restService.request({
      method: "PUT",
      url: "/api/permission-management/permissions/resource",
      params: {
        resourceName,
        resourceKey
      },
      body: input2
    }, __spreadValues({
      apiName: this.apiName
    }, config));
  }
  static {
    this.ɵfac = function PermissionsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PermissionsService,
      factory: _PermissionsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@abp/ng.components/fesm2022/abp-ng.components-lookup.mjs
var _c0 = ["itemTemplate"];
var _c1 = ["noResultsTemplate"];
var _c2 = (a0) => ({
  $implicit: a0
});
var _forTrack0 = ($index, $item) => $item.key;
function LookupSearchComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 1);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, ctx_r0.label()));
  }
}
function LookupSearchComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("mousedown", function LookupSearchComponent_Conditional_5_Template_button_mousedown_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.clearSelection());
    });
    ɵɵelement(1, "i", 7);
    ɵɵelementEnd();
  }
}
function LookupSearchComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelement(1, "i", 9);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "AbpUi::Loading"), " ");
  }
}
function LookupSearchComponent_Conditional_6_Conditional_2_For_1_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function LookupSearchComponent_Conditional_6_Conditional_2_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, LookupSearchComponent_Conditional_6_Conditional_2_For_1_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate())("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, item_r4));
  }
}
function LookupSearchComponent_Conditional_6_Conditional_2_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵtextInterpolate1(" ", ctx_r0.getDisplayValue(item_r4), " ");
  }
}
function LookupSearchComponent_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("mousedown", function LookupSearchComponent_Conditional_6_Conditional_2_For_1_Template_button_mousedown_0_listener() {
      const item_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.selectItem(item_r4));
    });
    ɵɵconditionalCreate(1, LookupSearchComponent_Conditional_6_Conditional_2_For_1_Conditional_1_Template, 1, 4, "ng-container")(2, LookupSearchComponent_Conditional_6_Conditional_2_For_1_Conditional_2_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.itemTemplate() ? 1 : 2);
  }
}
function LookupSearchComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, LookupSearchComponent_Conditional_6_Conditional_2_For_1_Template, 3, 1, "button", 10, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵrepeater(ctx_r0.searchResults());
  }
}
function LookupSearchComponent_Conditional_6_Conditional_3_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function LookupSearchComponent_Conditional_6_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, LookupSearchComponent_Conditional_6_Conditional_3_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 14);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.noResultsTemplate());
  }
}
function LookupSearchComponent_Conditional_6_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "AbpUi::NoDataAvailableInDatatable"), " ");
  }
}
function LookupSearchComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, LookupSearchComponent_Conditional_6_Conditional_3_Conditional_0_Template, 1, 1, "ng-container")(1, LookupSearchComponent_Conditional_6_Conditional_3_Conditional_1_Template, 3, 3, "div", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.noResultsTemplate() ? 0 : 1);
  }
}
function LookupSearchComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵconditionalCreate(1, LookupSearchComponent_Conditional_6_Conditional_1_Template, 4, 3, "div", 8)(2, LookupSearchComponent_Conditional_6_Conditional_2_Template, 2, 0)(3, LookupSearchComponent_Conditional_6_Conditional_3_Template, 2, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.isLoading() ? 1 : ctx_r0.searchResults().length > 0 ? 2 : ctx_r0.displayValue() ? 3 : -1);
  }
}
var LookupSearchComponent = class _LookupSearchComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.label = input(
      ...ngDevMode ? [void 0, {
        debugName: "label"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.placeholder = input(
      "",
      ...ngDevMode ? [{
        debugName: "placeholder"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debounceTime = input(
      300,
      ...ngDevMode ? [{
        debugName: "debounceTime"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.minSearchLength = input(
      0,
      ...ngDevMode ? [{
        debugName: "minSearchLength"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.displayKey = input(
      "displayName",
      ...ngDevMode ? [{
        debugName: "displayKey"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.valueKey = input(
      "key",
      ...ngDevMode ? [{
        debugName: "valueKey"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = input(
      false,
      ...ngDevMode ? [{
        debugName: "disabled"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.searchFn = input(
      () => of([]),
      ...ngDevMode ? [{
        debugName: "searchFn"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectedValue = model(
      "",
      ...ngDevMode ? [{
        debugName: "selectedValue"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.displayValue = model(
      "",
      ...ngDevMode ? [{
        debugName: "displayValue"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.itemSelected = output();
    this.searchChanged = output();
    this.itemTemplate = contentChild(
      "itemTemplate",
      ...ngDevMode ? [{
        debugName: "itemTemplate"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.noResultsTemplate = contentChild(
      "noResultsTemplate",
      ...ngDevMode ? [{
        debugName: "noResultsTemplate"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.searchResults = signal(
      [],
      ...ngDevMode ? [{
        debugName: "searchResults"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.showDropdown = signal(
      true,
      ...ngDevMode ? [{
        debugName: "showDropdown"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isLoading = signal(
      false,
      ...ngDevMode ? [{
        debugName: "isLoading"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.searchSubject = new Subject();
  }
  ngOnInit() {
    this.searchSubject.pipe(debounceTime(this.debounceTime()), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((filter) => {
      this.performSearch(filter);
    });
  }
  onSearchInput(filter) {
    this.displayValue.set(filter);
    this.showDropdown.set(true);
    this.searchChanged.emit(filter);
    if (filter.length >= this.minSearchLength()) {
      this.searchSubject.next(filter);
    } else {
      this.searchResults.set([]);
    }
  }
  onSearchFocus() {
    this.showDropdown.set(true);
    const currentFilter = this.displayValue() || "";
    if (currentFilter.length >= this.minSearchLength()) {
      this.performSearch(currentFilter);
    }
  }
  onSearchBlur(event) {
    const relatedTarget = event.relatedTarget;
    if (!relatedTarget?.closest(".abp-lookup-dropdown")) {
      this.showDropdown.set(false);
    }
  }
  selectItem(item) {
    const displayKeyValue = String(item[this.displayKey()] ?? "");
    const valueKeyValue = String(item[this.valueKey()] ?? "");
    this.displayValue.set(displayKeyValue);
    this.selectedValue.set(valueKeyValue);
    this.searchResults.set([]);
    this.showDropdown.set(false);
    this.itemSelected.emit(item);
  }
  clearSelection() {
    this.displayValue.set("");
    this.selectedValue.set("");
    this.searchResults.set([]);
  }
  performSearch(filter) {
    this.isLoading.set(true);
    this.searchFn()(filter).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isLoading.set(false))).subscribe({
      next: (results) => {
        this.searchResults.set(results);
      },
      error: () => {
        this.searchResults.set([]);
      }
    });
  }
  getDisplayValue(item) {
    return String(item[this.displayKey()] ?? item[this.valueKey()] ?? "");
  }
  static {
    this.ɵfac = function LookupSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LookupSearchComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LookupSearchComponent,
      selectors: [["abp-lookup-search"]],
      contentQueries: function LookupSearchComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.itemTemplate, _c0, 5)(dirIndex, ctx.noResultsTemplate, _c1, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      inputs: {
        label: [1, "label"],
        placeholder: [1, "placeholder"],
        debounceTime: [1, "debounceTime"],
        minSearchLength: [1, "minSearchLength"],
        displayKey: [1, "displayKey"],
        valueKey: [1, "valueKey"],
        disabled: [1, "disabled"],
        searchFn: [1, "searchFn"],
        selectedValue: [1, "selectedValue"],
        displayValue: [1, "displayValue"]
      },
      outputs: {
        selectedValue: "selectedValueChange",
        displayValue: "displayValueChange",
        itemSelected: "itemSelected",
        searchChanged: "searchChanged"
      },
      decls: 7,
      vars: 8,
      consts: [[1, "abp-lookup-container", "position-relative"], [1, "form-label"], [1, "input-group"], ["type", "text", 1, "form-control", 3, "ngModelChange", "focus", "blur", "placeholder", "ngModel", "disabled"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-outline-secondary"], [1, "abp-lookup-dropdown", "list-group", "position-absolute", "w-100"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-outline-secondary", 3, "mousedown"], [1, "fa", "fa-times"], [1, "list-group-item", "text-center", "py-3"], [1, "fa", "fa-spinner", "fa-spin", "me-2"], ["type", "button", 1, "list-group-item", "list-group-item-action"], ["type", "button", 1, "list-group-item", "list-group-item-action", 3, "mousedown"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "list-group-item", "text-muted"], [4, "ngTemplateOutlet"]],
      template: function LookupSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵconditionalCreate(1, LookupSearchComponent_Conditional_1_Template, 3, 3, "label", 1);
          ɵɵelementStart(2, "div", 2)(3, "input", 3);
          ɵɵpipe(4, "abpLocalization");
          ɵɵlistener("ngModelChange", function LookupSearchComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.onSearchInput($event);
          })("focus", function LookupSearchComponent_Template_input_focus_3_listener() {
            return ctx.onSearchFocus();
          })("blur", function LookupSearchComponent_Template_input_blur_3_listener($event) {
            return ctx.onSearchBlur($event);
          });
          ɵɵelementEnd();
          ɵɵcontrolCreate();
          ɵɵconditionalCreate(5, LookupSearchComponent_Conditional_5_Template, 2, 0, "button", 4);
          ɵɵelementEnd();
          ɵɵconditionalCreate(6, LookupSearchComponent_Conditional_6_Template, 4, 1, "div", 5);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.label() ? 1 : -1);
          ɵɵadvance(2);
          ɵɵproperty("placeholder", ɵɵpipeBind1(4, 6, ctx.placeholder()))("ngModel", ctx.displayValue())("disabled", ctx.disabled());
          ɵɵcontrol();
          ɵɵadvance(2);
          ɵɵconditional(ctx.displayValue() && !ctx.disabled() ? 5 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showDropdown() && !ctx.disabled() ? 6 : -1);
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgTemplateOutlet, LocalizationPipe],
      styles: [".abp-lookup-dropdown[_ngcontent-%COMP%]{z-index:1060;max-height:200px;overflow-y:auto;top:100%;margin-top:.25rem;background-color:var(--lpx-content-bg)}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LookupSearchComponent, [{
    type: Component,
    args: [{
      selector: "abp-lookup-search",
      imports: [FormsModule, LocalizationPipe, NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="abp-lookup-container position-relative">\r
  @if (label()) {\r
    <label class="form-label">{{ label() | abpLocalization }}</label>\r
  }\r
\r
  <div class="input-group">\r
    <input\r
      type="text"\r
      class="form-control"\r
      [placeholder]="placeholder() | abpLocalization"\r
      [ngModel]="displayValue()"\r
      (ngModelChange)="onSearchInput($event)"\r
      (focus)="onSearchFocus()"\r
      (blur)="onSearchBlur($event)"\r
      [disabled]="disabled()"\r
    />\r
    @if (displayValue() && !disabled()) {\r
      <button\r
        type="button"\r
        class="btn btn-outline-secondary"\r
        (mousedown)="clearSelection()"\r
        tabindex="-1"\r
      >\r
        <i class="fa fa-times"></i>\r
      </button>\r
    }\r
  </div>\r
\r
  @if (showDropdown() && !disabled()) {\r
    <div class="abp-lookup-dropdown list-group position-absolute w-100">\r
      @if (isLoading()) {\r
        <div class="list-group-item text-center py-3">\r
          <i class="fa fa-spinner fa-spin me-2"></i>\r
          {{ 'AbpUi::Loading' | abpLocalization }}\r
        </div>\r
      } @else if (searchResults().length > 0) {\r
        @for (item of searchResults(); track item.key) {\r
          <button\r
            type="button"\r
            class="list-group-item list-group-item-action"\r
            (mousedown)="selectItem(item)"\r
          >\r
            @if (itemTemplate()) {\r
              <ng-container *ngTemplateOutlet="itemTemplate()!; context: { $implicit: item }" />\r
            } @else {\r
              {{ getDisplayValue(item) }}\r
            }\r
          </button>\r
        }\r
      } @else if (displayValue()) {\r
        @if (noResultsTemplate()) {\r
          <ng-container *ngTemplateOutlet="noResultsTemplate()!" />\r
        } @else {\r
          <div class="list-group-item text-muted">\r
            {{ 'AbpUi::NoDataAvailableInDatatable' | abpLocalization }}\r
          </div>\r
        }\r
      }\r
    </div>\r
  }\r
</div>\r
`,
      styles: [".abp-lookup-dropdown{z-index:1060;max-height:200px;overflow-y:auto;top:100%;margin-top:.25rem;background-color:var(--lpx-content-bg)}\n"]
    }]
  }], null, {
    label: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "label",
        required: false
      }]
    }],
    placeholder: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "placeholder",
        required: false
      }]
    }],
    debounceTime: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "debounceTime",
        required: false
      }]
    }],
    minSearchLength: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "minSearchLength",
        required: false
      }]
    }],
    displayKey: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "displayKey",
        required: false
      }]
    }],
    valueKey: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "valueKey",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    searchFn: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "searchFn",
        required: false
      }]
    }],
    selectedValue: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selectedValue",
        required: false
      }]
    }, {
      type: Output,
      args: ["selectedValueChange"]
    }],
    displayValue: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "displayValue",
        required: false
      }]
    }, {
      type: Output,
      args: ["displayValueChange"]
    }],
    itemSelected: [{
      type: Output,
      args: ["itemSelected"]
    }],
    searchChanged: [{
      type: Output,
      args: ["searchChanged"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["itemTemplate", {
        isSignal: true
      }]
    }],
    noResultsTemplate: [{
      type: ContentChild,
      args: ["noResultsTemplate", {
        isSignal: true
      }]
    }]
  });
})();

// node_modules/@abp/ng.permission-management/fesm2022/abp-ng.permission-management.mjs
var _c02 = () => ({
  size: "lg",
  scrollable: false
});
var _c12 = (a0) => ({
  assignedCount: a0
});
function PermissionManagementComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h4");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "AbpPermissionManagement::Permissions"), " - ", ctx_r0.entityDisplayName() || ctx_r0.data.entityDisplayName, " ");
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const count_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1("(", count_r3.assignedCount, ")");
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 28, 4)(2, "div");
    ɵɵtext(3);
    ɵɵconditionalCreate(4, PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Conditional_1_Conditional_4_Template, 2, 1, "span");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const count_r3 = ctx;
    const tab_r4 = ɵɵreference(1);
    const group_r5 = ɵɵnextContext().$implicit;
    ɵɵclassProp("active", tab_r4.selected());
    ɵɵproperty("value", group_r5.name);
    ɵɵadvance(2);
    ɵɵclassProp("font-weight-bold", count_r3.assignedCount);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", group_r5?.displayName, " ");
    ɵɵadvance();
    ɵɵconditional(count_r3.assignedCount > 0 ? 4 : -1);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵconditionalCreate(1, PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Conditional_1_Template, 5, 7, "button", 27);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const group_r5 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵconditional((tmp_16_0 = ɵɵpureFunction1(1, _c12, ctx_r0.getAssignedCount(group_r5.name))) ? 1 : -1, tmp_16_0);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_For_25_ng_template_1_Conditional_1_For_8_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 37);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const provider_r9 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2("", provider_r9.providerName, ": ", provider_r9.providerKey);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_For_25_ng_template_1_Conditional_1_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, PermissionManagementComponent_Conditional_1_ng_template_2_For_25_ng_template_1_Conditional_1_For_8_Conditional_5_For_1_Template, 2, 2, "span", 37, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const permission_r8 = ɵɵnextContext().$implicit;
    ɵɵrepeater(permission_r8.grantedProviders);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_For_25_ng_template_1_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 34)(1, "input", 35, 6);
    ɵɵlistener("click", function PermissionManagementComponent_Conditional_1_ng_template_2_For_25_ng_template_1_Conditional_1_For_8_Template_input_click_1_listener() {
      const permission_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r0 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r0.onClickCheckbox(permission_r8));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 36);
    ɵɵtext(4);
    ɵɵconditionalCreate(5, PermissionManagementComponent_Conditional_1_ng_template_2_For_25_ng_template_1_Conditional_1_For_8_Conditional_5_Template, 2, 0);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const permission_r8 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(6);
    ɵɵproperty("ngStyle", permission_r8.style);
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r0.getChecked(permission_r8.name))("value", ctx_r0.getChecked(permission_r8.name))("disabled", ctx_r0.isGrantedByOtherProviderName(permission_r8.grantedProviders));
    ɵɵattribute("id", permission_r8.name);
    ɵɵadvance(2);
    ɵɵattribute("for", permission_r8.name);
    ɵɵadvance();
    ɵɵtextInterpolate1("", permission_r8.displayName, " ");
    ɵɵadvance();
    ɵɵconditional(!ctx_r0.hideBadges ? 5 : -1);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_For_25_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15)(1, "input", 31, 5);
    ɵɵlistener("change", function PermissionManagementComponent_Conditional_1_ng_template_2_For_25_ng_template_1_Conditional_1_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r0 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r0.onSelectThisTabChange($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 32);
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd()();
    ɵɵelement(6, "hr", 33);
    ɵɵrepeaterCreate(7, PermissionManagementComponent_Conditional_1_ng_template_2_For_25_ng_template_1_Conditional_1_For_8_Template, 6, 8, "div", 34, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r0.selectThisTabState().checked)("indeterminate", ctx_r0.selectThisTabState().indeterminate)("disabled", ctx_r0.disableSelectAllTab());
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 4, "AbpPermissionManagement::SelectAllInThisTab"));
    ɵɵadvance(3);
    ɵɵrepeater(ctx_r0.selectedGroupPermissions());
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_For_25_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 30);
    ɵɵconditionalCreate(1, PermissionManagementComponent_Conditional_1_ng_template_2_For_25_ng_template_1_Conditional_1_Template, 9, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r10 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.selectedGroup?.name === group_r10.name && ctx_r0.selectedGroupPermissions().length ? 1 : -1);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_For_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵtemplate(1, PermissionManagementComponent_Conditional_1_ng_template_2_For_25_ng_template_1_Template, 2, 1, "ng-template", 29);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r10 = ctx.$implicit;
    ɵɵproperty("value", group_r10.name);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "span", 11);
    ɵɵelement(4, "i", 12);
    ɵɵelementEnd();
    ɵɵelementStart(5, "input", 13);
    ɵɵlistener("ngModelChange", function PermissionManagementComponent_Conditional_1_ng_template_2_Template_input_ngModelChange_5_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onFilterChange($event));
    });
    ɵɵelementEnd();
    ɵɵcontrolCreate();
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 14)(7, "div", 15)(8, "input", 16, 3);
    ɵɵlistener("change", function PermissionManagementComponent_Conditional_1_ng_template_2_Template_input_change_8_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onSelectAllChange($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(10, "label", 17);
    ɵɵtext(11);
    ɵɵpipe(12, "abpLocalization");
    ɵɵelementEnd()()()();
    ɵɵelementStart(13, "fieldset", 18)(14, "legend", 19);
    ɵɵtext(15);
    ɵɵpipe(16, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(17, "div", 20)(18, "div", 21)(19, "div", 22);
    ɵɵlistener("selectedTabChange", function PermissionManagementComponent_Conditional_1_ng_template_2_Template_div_selectedTabChange_19_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onTabChange($event));
    });
    ɵɵelementStart(20, "div", 23);
    ɵɵrepeaterCreate(21, PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Template, 2, 3, "div", 24, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd()()();
    ɵɵelementStart(23, "div", 25);
    ɵɵrepeaterCreate(24, PermissionManagementComponent_Conditional_1_ng_template_2_For_25_Template, 2, 1, "div", 26, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(5);
    ɵɵproperty("ngModel", ctx_r0.filter());
    ɵɵcontrol();
    ɵɵadvance(3);
    ɵɵproperty("checked", ctx_r0.selectAllTabState().checked)("indeterminate", ctx_r0.selectAllTabState().indeterminate)("disabled", ctx_r0.disabledSelectAllInAllTabs());
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 7, "AbpPermissionManagement::SelectAllInAllTabs"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 9, "AbpPermissionManagement::PermissionGroup"), " ");
    ɵɵadvance(4);
    ɵɵproperty("selectedTab", ctx_r0.selectedGroup?.name);
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r0.permissionGroups());
    ɵɵadvance(3);
    ɵɵrepeater(ctx_r0.permissionGroups());
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 38);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "abp-button", 39);
    ɵɵlistener("click", function PermissionManagementComponent_Conditional_1_ng_template_4_Template_abp_button_click_3_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.submit());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpIdentity::Cancel"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 4, "AbpIdentity::Save"));
  }
}
function PermissionManagementComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PermissionManagementComponent_Conditional_1_ng_template_0_Template, 3, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, PermissionManagementComponent_Conditional_1_ng_template_2_Template, 26, 11, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, PermissionManagementComponent_Conditional_1_ng_template_4_Template, 6, 6, "ng-template", null, 2, ɵɵtemplateRefExtractor);
  }
}
function ResourcePermissionListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6)(1, "button", 7);
    ɵɵpipe(2, "abpLocalization");
    ɵɵlistener("click", function ResourcePermissionListComponent_ng_template_5_Template_button_click_1_listener() {
      const row_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.editClicked.emit(row_r2));
    });
    ɵɵelement(3, "i", 8);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 9);
    ɵɵpipe(5, "abpLocalization");
    ɵɵlistener("click", function ResourcePermissionListComponent_ng_template_5_Template_button_click_4_listener() {
      const row_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.deleteClicked.emit(row_r2));
    });
    ɵɵelement(6, "i", 10);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("title", ɵɵpipeBind1(2, 2, "AbpUi::Edit"));
    ɵɵadvance(3);
    ɵɵproperty("title", ɵɵpipeBind1(5, 4, "AbpUi::Delete"));
  }
}
function ResourcePermissionListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-extensible-table", 4);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const actionsTemplate_r4 = ɵɵreference(6);
    ɵɵproperty("data", ctx_r2.state.resourcePermissions())("recordsTotal", ctx_r2.state.totalCount())("list", ctx_r2.list)("actionsTemplate", actionsTemplate_r4);
  }
}
function ResourcePermissionListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "AbpPermissionManagement::NoPermissionsAssigned"), " ");
  }
}
var _forTrack02 = ($index, $item) => $item.name;
function PermissionCheckboxListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "h5");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, ctx_r0.title()));
  }
}
function PermissionCheckboxListComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 5)(1, "input", 2);
    ɵɵdomListener("change", function PermissionCheckboxListComponent_For_9_Template_input_change_1_listener() {
      const perm_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.state.togglePermission(perm_r3.name || ""));
    });
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "label", 3);
    ɵɵtext(3);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const perm_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵdomProperty("id", ɵɵinterpolate2("perm-", ctx_r0.idPrefix(), "-", perm_r3.name))("checked", ctx_r0.state.isPermissionSelected(perm_r3.name || ""));
    ɵɵadvance();
    ɵɵdomProperty("htmlFor", ɵɵinterpolate2("perm-", ctx_r0.idPrefix(), "-", perm_r3.name));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", perm_r3.displayName, " ");
  }
}
function ResourcePermissionFormComponent_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "input", 7);
    ɵɵlistener("change", function ResourcePermissionFormComponent_Conditional_0_For_6_Template_input_change_1_listener() {
      const provider_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.state.onProviderChange(provider_r2.name || ""));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "label", 8);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const provider_r2 = ctx.$implicit;
    const ɵ$index_10_r4 = ctx.$index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("id", "provider-" + ɵ$index_10_r4)("value", provider_r2.name)("checked", ctx_r2.state.selectedProviderName() === provider_r2.name);
    ɵɵadvance();
    ɵɵproperty("for", "provider-" + ɵ$index_10_r4);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", provider_r2.displayName, " ");
  }
}
function ResourcePermissionFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "label", 2);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 3);
    ɵɵrepeaterCreate(5, ResourcePermissionFormComponent_Conditional_0_For_6_Template, 4, 5, "div", 4, _forTrack02);
    ɵɵelementEnd();
    ɵɵelement(7, "abp-provider-key-search", 5);
    ɵɵelementEnd();
    ɵɵelement(8, "abp-permission-checkbox-list", 6);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "AbpPermissionManagement::SelectProvider"), " ");
    ɵɵadvance(3);
    ɵɵrepeater(ctx_r2.state.providers());
    ɵɵadvance(2);
    ɵɵproperty("resourceName", ctx_r2.resourceName());
    ɵɵadvance();
    ɵɵproperty("permissions", ctx_r2.state.permissionDefinitions());
  }
}
function ResourcePermissionFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵelement(1, "abp-permission-checkbox-list", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("permissions", ctx_r2.state.permissionsWithProvider())("showTitle", false);
  }
}
var _c22 = () => ({
  size: "xl",
  scrollable: false
});
function ResourcePermissionManagementComponent_ng_template_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "AbpPermissionManagement::UpdatePermission"), " ");
  }
}
function ResourcePermissionManagementComponent_ng_template_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "AbpPermissionManagement::AddResourcePermission"), " ");
  }
}
function ResourcePermissionManagementComponent_ng_template_1_Case_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵtextInterpolate1(" - ", ctx_r1.resourceDisplayName(), " ");
  }
}
function ResourcePermissionManagementComponent_ng_template_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
    ɵɵconditionalCreate(2, ResourcePermissionManagementComponent_ng_template_1_Case_3_Conditional_2_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 2, "AbpPermissionManagement::ResourcePermissions"), " ");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.resourceDisplayName() ? 2 : -1);
  }
}
function ResourcePermissionManagementComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h5", 4);
    ɵɵconditionalCreate(1, ResourcePermissionManagementComponent_ng_template_1_Case_1_Template, 2, 3)(2, ResourcePermissionManagementComponent_ng_template_1_Case_2_Template, 2, 3)(3, ResourcePermissionManagementComponent_ng_template_1_Case_3_Template, 3, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional((tmp_4_0 = ctx_r1.state.viewMode()) === ctx_r1.eResourcePermissionViewModes.Edit ? 1 : tmp_4_0 === ctx_r1.eResourcePermissionViewModes.Add ? 2 : 3);
  }
}
function ResourcePermissionManagementComponent_ng_template_3_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "AbpPermissionManagement::NoResourcePermissionFound"), " ");
  }
}
function ResourcePermissionManagementComponent_ng_template_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "AbpPermissionManagement::NoResourceProviderKeyLookupServiceFound"), " ");
  }
}
function ResourcePermissionManagementComponent_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵconditionalCreate(1, ResourcePermissionManagementComponent_ng_template_3_Conditional_0_Conditional_1_Template, 2, 3)(2, ResourcePermissionManagementComponent_ng_template_3_Conditional_0_Conditional_2_Template, 2, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.state.hasResourcePermission() ? 1 : 2);
  }
}
function ResourcePermissionManagementComponent_ng_template_3_Conditional_1_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-resource-permission-list", 7);
    ɵɵlistener("addClicked", function ResourcePermissionManagementComponent_ng_template_3_Conditional_1_Case_0_Template_abp_resource_permission_list_addClicked_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onAddClicked());
    })("editClicked", function ResourcePermissionManagementComponent_ng_template_3_Conditional_1_Case_0_Template_abp_resource_permission_list_editClicked_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onEditClicked($event));
    })("deleteClicked", function ResourcePermissionManagementComponent_ng_template_3_Conditional_1_Case_0_Template_abp_resource_permission_list_deleteClicked_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onDeleteClicked($event));
    });
    ɵɵelementEnd();
  }
}
function ResourcePermissionManagementComponent_ng_template_3_Conditional_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-resource-permission-form", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("mode", ctx_r1.eResourcePermissionViewModes.Add)("resourceName", ctx_r1.resourceName());
  }
}
function ResourcePermissionManagementComponent_ng_template_3_Conditional_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-resource-permission-form", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("mode", ctx_r1.eResourcePermissionViewModes.Edit)("resourceName", ctx_r1.resourceName());
  }
}
function ResourcePermissionManagementComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ResourcePermissionManagementComponent_ng_template_3_Conditional_1_Case_0_Template, 1, 0, "abp-resource-permission-list")(1, ResourcePermissionManagementComponent_ng_template_3_Conditional_1_Case_1_Template, 1, 2, "abp-resource-permission-form", 6)(2, ResourcePermissionManagementComponent_ng_template_3_Conditional_1_Case_2_Template, 1, 2, "abp-resource-permission-form", 6);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional((tmp_5_0 = ctx_r1.state.viewMode()) === ctx_r1.eResourcePermissionViewModes.List ? 0 : tmp_5_0 === ctx_r1.eResourcePermissionViewModes.Add ? 1 : tmp_5_0 === ctx_r1.eResourcePermissionViewModes.Edit ? 2 : -1);
  }
}
function ResourcePermissionManagementComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ResourcePermissionManagementComponent_ng_template_3_Conditional_0_Template, 3, 1, "div", 5)(1, ResourcePermissionManagementComponent_ng_template_3_Conditional_1_Template, 3, 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(!ctx_r1.state.hasResourcePermission() || !ctx_r1.state.hasProviderKeyLookupService() ? 0 : 1);
  }
}
function ResourcePermissionManagementComponent_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 8);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "AbpUi::Close"), " ");
  }
}
function ResourcePermissionManagementComponent_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function ResourcePermissionManagementComponent_ng_template_5_Conditional_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.state.goToListMode());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "abp-button", 10);
    ɵɵlistener("click", function ResourcePermissionManagementComponent_ng_template_5_Conditional_1_Template_abp_button_click_3_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.savePermission());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpUi::Cancel"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 4, "AbpUi::Save"), " ");
  }
}
function ResourcePermissionManagementComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ResourcePermissionManagementComponent_ng_template_5_Conditional_0_Template, 3, 3, "button", 8)(1, ResourcePermissionManagementComponent_ng_template_5_Conditional_1_Template, 6, 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.state.isListMode() ? 0 : 1);
  }
}
var PermissionManagementComponent = class _PermissionManagementComponent {
  get providerName() {
    return this._providerNameOverride ?? this.providerNameInput();
  }
  set providerName(value) {
    this._providerNameOverride = value;
  }
  get providerKey() {
    return this._providerKeyOverride ?? this.providerKeyInput();
  }
  set providerKey(value) {
    this._providerKeyOverride = value;
  }
  get hideBadges() {
    return this._hideBadgesOverride ?? this.hideBadgesInput();
  }
  set hideBadges(value) {
    this._hideBadgesOverride = value;
  }
  // Backward-compatible getters/setters for ReplaceableTemplateDirective.
  get visible() {
    return this.modalVisible();
  }
  set visible(value) {
    this.setVisible(value);
  }
  setVisible(value) {
    if (value && this.isClosingModal) {
      return;
    }
    if (value === this.modalVisible()) {
      return;
    }
    if (value) {
      this.showModal();
    } else {
      this.hideModal();
    }
  }
  get permissions() {
    return this.permissionsState();
  }
  set permissions(value) {
    this.permissionsState.set(value);
  }
  get selectedGroup() {
    return this.selectedGroupState();
  }
  get selectThisTab() {
    return this.selectThisTabState().checked;
  }
  get selectAllTab() {
    return this.selectAllTabState().checked;
  }
  onModalVisibleChange(value) {
    this.visibleChange.emit(value);
  }
  onModalDisappear() {
    setTimeout(() => {
      if (!this.modalVisible()) {
        this.resetModalState();
      }
      this.isClosingModal = false;
    });
  }
  showModal() {
    if (this.isOpening || this.modalVisible()) {
      return;
    }
    this.isClosingModal = false;
    this.isOpening = true;
    this.openModal().pipe(finalize(() => this.isOpening = false)).subscribe(() => {
      this.modalVisible.set(true);
      this.visibleChange.emit(true);
    });
  }
  hideModal() {
    if (!this.modalVisible()) {
      return;
    }
    this.isClosingModal = true;
    this.visibleChange.emit(false);
    this.modalVisible.set(false);
  }
  resetModalState() {
    this.setSelectedGroup(null);
    this.filter.set("");
    this.disabledSelectAllInAllTabsState.set(false);
  }
  // constructor() {
  //   effect(() => {
  //     this.setVisible(this.visibleInput());
  //   });
  // }
  constructor() {
    this.service = inject(PermissionsService);
    this.configState = inject(ConfigStateService);
    this.toasterService = inject(ToasterService);
    this.document = inject(DOCUMENT);
    this.providerNameInput = input("", __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "providerNameInput"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "providerName"
    }));
    this.providerKeyInput = input("", __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "providerKeyInput"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "providerKey"
    }));
    this.hideBadgesInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "hideBadgesInput"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "hideBadges"
    }));
    this.entityDisplayName = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "entityDisplayName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visibleInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "visibleInput"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "visible"
    }));
    this.visibleChange = output();
    this.modalVisible = signal(
      false,
      ...ngDevMode ? [{
        debugName: "modalVisible"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.modalBusy = signal(
      false,
      ...ngDevMode ? [{
        debugName: "modalBusy"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter = signal(
      "",
      ...ngDevMode ? [{
        debugName: "filter"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isOpening = false;
    this.isClosingModal = false;
    this.data = {
      groups: [],
      entityDisplayName: ""
    };
    this.permissionsState = signal(
      [],
      ...ngDevMode ? [{
        debugName: "permissionsState"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectedGroupState = signal(
      null,
      ...ngDevMode ? [{
        debugName: "selectedGroupState"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.permissionGroupSignal = signal(
      [],
      ...ngDevMode ? [{
        debugName: "permissionGroupSignal"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectedGroupPermissions = computed(
      () => {
        const group = this.selectedGroupState();
        if (!group) {
          return [];
        }
        const margin = `margin-${this.document.body?.dir === "rtl" ? "right" : "left"}.px`;
        const groupPermissions = this.permissionGroupSignal().find((item) => item.name === group.name)?.permissions || [];
        const permissions = this.permissionsState();
        return groupPermissions.map((permission) => __spreadProps(__spreadValues({}, permission), {
          style: {
            [margin]: findMargin(groupPermissions, permission)
          },
          isGranted: (permissions.find((per) => per.name === permission.name) || {}).isGranted
        }));
      },
      ...ngDevMode ? [{
        debugName: "selectedGroupPermissions"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectThisTabState = computed(
      () => getSelectAllCheckboxState(this.selectedGroupPermissions()),
      ...ngDevMode ? [{
        debugName: "selectThisTabState"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectAllTabState = computed(
      () => getSelectAllCheckboxState(this.permissionsState()),
      ...ngDevMode ? [{
        debugName: "selectAllTabState"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disableSelectAllTab = computed(
      () => isSelectAllDisabled(this.selectedGroupState()?.permissions, this.providerName),
      ...ngDevMode ? [{
        debugName: "disableSelectAllTab"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabledSelectAllInAllTabsState = signal(
      false,
      ...ngDevMode ? [{
        debugName: "disabledSelectAllInAllTabsState"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabledSelectAllInAllTabs = this.disabledSelectAllInAllTabsState.asReadonly();
    this.permissionGroups = computed(
      () => {
        const search = this.filter().toLowerCase().trim();
        const groups = this.permissionGroupSignal();
        if (!search) {
          return groups;
        }
        const includesSearch = (text) => text.toLowerCase().includes(search);
        return groups.filter((group) => group.permissions.some((permission) => includesSearch(permission.displayName) || includesSearch(group.displayName)));
      },
      ...ngDevMode ? [{
        debugName: "permissionGroups"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.trackByFn = (_, item) => item.name;
    effect(() => {
      const visible = this.visibleInput();
      untracked(() => this.setVisible(visible));
    });
  }
  getChecked(name) {
    return (this.permissionsState().find((per) => per.name === name) || {
      isGranted: false
    }).isGranted;
  }
  setSelectedGroup(group) {
    this.selectedGroupState.set(group);
  }
  isGrantedByOtherProviderName(grantedProviders) {
    if (grantedProviders?.length) {
      return grantedProviders.findIndex((p) => p.providerName !== this.providerName) > -1;
    }
    return false;
  }
  onClickCheckbox(clickedPermission) {
    const {
      isGranted,
      grantedProviders
    } = clickedPermission;
    if (isGranted && this.isGrantedByOtherProviderName(grantedProviders)) {
      return;
    }
    setTimeout(() => {
      this.updatePermissionStatus(clickedPermission);
      this.setParentClicked(clickedPermission);
    }, 0);
  }
  updatePermissionStatus(clickedPermission) {
    this.permissionsState.update((permissions) => permissions.map((permission) => {
      const isExactMatch = clickedPermission.name == permission.name;
      const isParentOfPermission = clickedPermission.parentName === permission.name;
      const isChildOfPermission = clickedPermission.name === permission.parentName;
      if (isExactMatch) {
        return __spreadProps(__spreadValues({}, permission), {
          isGranted: !permission.isGranted
        });
      }
      if (isChildOfPermission && permission.isGranted) {
        return __spreadProps(__spreadValues({}, permission), {
          isGranted: false
        });
      }
      if (isParentOfPermission && !permission.isGranted) {
        return __spreadProps(__spreadValues({}, permission), {
          isGranted: true
        });
      }
      return permission;
    }));
  }
  setParentClicked(clickedPermission) {
    if (clickedPermission.parentName) {
      const parentPermissions = findParentPermissions(this.permissionsState(), clickedPermission);
      if (parentPermissions.length > 0) {
        const parentNames = new Set(parentPermissions.map((parent) => parent.name));
        this.permissionsState.update((permissions) => permissions.map((per) => {
          let updatedIsGranted = per.isGranted;
          if (per.parentName === clickedPermission.name && !clickedPermission.isGranted) {
            updatedIsGranted = false;
          }
          if (parentNames.has(per.name)) {
            updatedIsGranted = true;
          }
          return __spreadProps(__spreadValues({}, per), {
            isGranted: updatedIsGranted
          });
        }));
      }
      return;
    }
    this.permissionsState.update((permissions) => permissions.map((per) => {
      const parents = findParentPermissions(permissions, per);
      if (parents.length > 0) {
        const rootParent = parents[parents.length - 1];
        if (rootParent.name === clickedPermission.name && !rootParent.isGranted) {
          return __spreadProps(__spreadValues({}, per), {
            isGranted: false
          });
        }
      }
      return per;
    }));
  }
  onSelectThisTabChange(event) {
    if (this.disableSelectAllTab()) {
      return;
    }
    const state = this.selectThisTabState();
    const checked = !state.checked || state.indeterminate;
    this.permissionsState.update((permissions) => {
      let updatedPermissions = [...permissions];
      this.selectedGroupPermissions().forEach((permission) => {
        if (this.isGrantedByOtherProviderName(permission.grantedProviders)) {
          return;
        }
        const index = updatedPermissions.findIndex((per) => per.name === permission.name);
        if (index < 0) {
          return;
        }
        updatedPermissions = [...updatedPermissions.slice(0, index), __spreadProps(__spreadValues({}, updatedPermissions[index]), {
          isGranted: checked
        }), ...updatedPermissions.slice(index + 1)];
      });
      return updatedPermissions;
    });
  }
  onSelectAllChange(event) {
    if (this.disabledSelectAllInAllTabs()) {
      return;
    }
    const state = this.selectAllTabState();
    const checked = !state.checked || state.indeterminate;
    if (this.filter()) {
      this.onFilterChange("");
    }
    this.permissionsState.update((permissions) => permissions.map((permission) => __spreadProps(__spreadValues({}, permission), {
      isGranted: this.isGrantedByOtherProviderName(permission.grantedProviders) || checked
    })));
  }
  onFilterChange(value) {
    this.filter.set(value);
    this.syncSelectedGroupWithFilter();
  }
  syncSelectedGroupWithFilter() {
    const groups = this.permissionGroups();
    if (!groups.length) {
      this.setSelectedGroup(null);
      return;
    }
    if (!groups.some((group) => group.name === this.selectedGroupState()?.name)) {
      this.onChangeGroup(groups[0]);
    }
  }
  onTabChange(groupName) {
    const group = this.permissionGroups().find((g) => g.name === groupName);
    if (group) {
      this.onChangeGroup(group);
    }
  }
  onChangeGroup(group) {
    this.setSelectedGroup(group);
  }
  submit() {
    if (this.modalBusy()) {
      return;
    }
    const unchangedPermissions = getPermissions(this.data.groups);
    const changedPermissions = this.permissionsState().filter((per) => (unchangedPermissions.find((unchanged) => unchanged.name === per.name) || {}).isGranted === per.isGranted ? false : true).map(({
      name,
      isGranted
    }) => ({
      name,
      isGranted
    }));
    if (!changedPermissions.length) {
      this.hideModal();
      return;
    }
    this.modalBusy.set(true);
    this.service.update(this.providerName, this.providerKey, {
      permissions: changedPermissions
    }).pipe(tap(() => this.hideModal()), switchMap(() => this.shouldFetchAppConfig() ? this.configState.refreshAppState() : of(null)), finalize(() => this.modalBusy.set(false))).subscribe(() => {
      this.toasterService.success("AbpUi::SavedSuccessfully");
    });
  }
  openModal() {
    const providerName = this.providerName;
    const providerKey = this.providerKey;
    if (!providerKey || !providerName) {
      throw new Error("Provider Key and Provider Name are required.");
    }
    return this.service.get(providerName, providerKey).pipe(tap((permissionRes) => {
      const {
        groups
      } = permissionRes || {};
      this.data = permissionRes;
      this.permissionGroupSignal.set(groups);
      const permissions = getPermissions(groups);
      this.permissionsState.set(permissions);
      this.disabledSelectAllInAllTabsState.set(isSelectAllDisabled(permissions, providerName));
      this.setSelectedGroup(groups[0] ?? null);
    }));
  }
  getAssignedCount(groupName) {
    return this.permissionsState().reduce((acc, val) => val.groupName === groupName && val.isGranted ? acc + 1 : acc, 0);
  }
  shouldFetchAppConfig() {
    const currentUser = this.configState.getOne("currentUser");
    const providerName = this.providerName;
    const providerKey = this.providerKey;
    if (providerName === "R") return currentUser.roles.some((role) => role === providerKey);
    if (providerName === "U") return currentUser.id === providerKey;
    return false;
  }
  static {
    this.ɵfac = function PermissionManagementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionManagementComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PermissionManagementComponent,
      selectors: [["abp-permission-management"]],
      inputs: {
        providerNameInput: [1, "providerName", "providerNameInput"],
        providerKeyInput: [1, "providerKey", "providerKeyInput"],
        hideBadgesInput: [1, "hideBadges", "hideBadgesInput"],
        entityDisplayName: [1, "entityDisplayName"],
        visibleInput: [1, "visible", "visibleInput"]
      },
      outputs: {
        visibleChange: "visibleChange"
      },
      exportAs: ["abpPermissionManagement"],
      decls: 2,
      vars: 6,
      consts: [["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], ["selectAllInAllTabsRef", ""], ["tab", "ngTab"], ["selectAllInThisTabsRef", ""], ["permissionCheckbox", ""], [3, "visibleChange", "disappear", "visible", "busy", "suppressUnsavedChangesWarning", "options"], [1, "row", "d-flex", "align-items-center", "mb-2"], [1, "col"], [1, "input-group", "mb-2"], ["id", "basic-addon1", 1, "input-group-text"], [1, "bi", "bi-search"], ["type", "text", "id", "permission-search", "placeholder", "Filter", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-auto"], [1, "form-check", "mb-2"], ["type", "checkbox", "id", "select-all-in-all-tabs", "name", "select-all-in-all-tabs", 1, "form-check-input", 3, "change", "checked", "indeterminate", "disabled"], ["for", "select-all-in-all-tabs", 1, "form-check-label"], [1, "border", "rounded-4", "p-3"], [1, "px-1", "h5", "mb-0"], ["ngTabs", "", "orientation", "vertical", 1, "row"], [1, "col-md-4"], ["ngTabList", "", "orientation", "vertical", "selectionMode", "follow", 1, "overflow-auto", "lpx-scroll-pills-container", "scroll-in-modal", 3, "selectedTabChange", "selectedTab"], [1, "nav", "nav-pills", "flex-column"], [1, "border", "nav-item"], [1, "col-md-8", "scroll-in-modal"], ["ngTabPanel", "", 3, "value"], ["ngTab", "", "type", "button", 1, "nav-link", "pointer", "text-start", "w-100", 3, "value", "active"], ["ngTab", "", "type", "button", 1, "nav-link", "pointer", "text-start", "w-100", 3, "value"], ["ngTabContent", ""], [1, "ps-1"], ["type", "checkbox", "id", "select-all-in-this-tabs", "name", "select-all-in-this-tabs", 1, "form-check-input", 3, "change", "checked", "indeterminate", "disabled"], ["for", "select-all-in-this-tabs", 1, "form-check-label"], [1, "my-2"], [1, "form-check", "mb-2", 3, "ngStyle"], ["type", "checkbox", 1, "form-check-input", 3, "click", "checked", "value", "disabled"], [1, "form-check-label"], [1, "badge", "bg-primary", "text-dark"], ["type", "button", "abpClose", "", 1, "btn", "btn-outline-primary"], ["iconClass", "fa fa-check", "buttonType", "button", 3, "click"]],
      template: function PermissionManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "abp-modal", 7);
          ɵɵtwoWayListener("visibleChange", function PermissionManagementComponent_Template_abp_modal_visibleChange_0_listener($event) {
            ɵɵtwoWayBindingSet(ctx.modalVisible, $event) || (ctx.modalVisible = $event);
            return $event;
          });
          ɵɵlistener("visibleChange", function PermissionManagementComponent_Template_abp_modal_visibleChange_0_listener($event) {
            return ctx.onModalVisibleChange($event);
          })("disappear", function PermissionManagementComponent_Template_abp_modal_disappear_0_listener() {
            return ctx.onModalDisappear();
          });
          ɵɵconditionalCreate(1, PermissionManagementComponent_Conditional_1_Template, 6, 0);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵtwoWayProperty("visible", ctx.modalVisible);
          ɵɵproperty("busy", ctx.modalBusy())("suppressUnsavedChangesWarning", true)("options", ɵɵpureFunction0(5, _c02));
          ɵɵadvance();
          ɵɵconditional(ctx.data.entityDisplayName || ctx.entityDisplayName() ? 1 : -1);
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgStyle, ModalComponent, ButtonComponent, ModalCloseDirective, Tabs, TabList, Tab, TabPanel, TabContent, LocalizationPipe],
      styles: [".scroll-in-modal[_ngcontent-%COMP%]{overflow:auto;max-height:calc(100vh - 23.1rem)}.lpx-scroll-pills-container[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]{display:block;overflow-y:auto}@media(max-width:768px){.scroll-in-modal[_ngcontent-%COMP%]{max-height:calc(100vh - 15rem)}.lpx-scroll-pills-container[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]{max-height:500px}}fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{float:none;width:auto}.lpx-scroll-pills-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.lpx-scroll-pills-container[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin-bottom:10px;border-radius:10px}.lpx-scroll-pills-container[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#fff!important;border-color:#6c5dd3!important;background-color:#6c5dd3!important}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionManagementComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-permission-management",
      exportAs: "abpPermissionManagement",
      imports: [FormsModule, NgStyle, ModalComponent, LocalizationPipe, ButtonComponent, ModalCloseDirective, Tabs, TabList, Tab, TabPanel, TabContent],
      template: `<abp-modal\r
  [(visible)]="modalVisible"\r
  (visibleChange)="onModalVisibleChange($event)"\r
  (disappear)="onModalDisappear()"\r
  [busy]="modalBusy()"\r
  [suppressUnsavedChangesWarning]="true"\r
  [options]="{ size: 'lg', scrollable: false }"\r
>\r
  @if (data.entityDisplayName || entityDisplayName()) {\r
    <ng-template #abpHeader>\r
      <h4>\r
        {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} -\r
        {{ entityDisplayName() || data.entityDisplayName }}\r
      </h4>\r
    </ng-template>\r
    <ng-template #abpBody>\r
      <div class="row d-flex align-items-center mb-2">\r
        <div class="col">\r
          <div class="input-group mb-2">\r
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>\r
            <input\r
              type="text"\r
              class="form-control"\r
              id="permission-search"\r
              placeholder="Filter"\r
              [ngModel]="filter()"\r
              (ngModelChange)="onFilterChange($event)"\r
            />\r
          </div>\r
        </div>\r
        <div class="col-auto">\r
          <div class="form-check mb-2">\r
            <input\r
              #selectAllInAllTabsRef\r
              type="checkbox"\r
              id="select-all-in-all-tabs"\r
              name="select-all-in-all-tabs"\r
              class="form-check-input"\r
              [checked]="selectAllTabState().checked"\r
              [indeterminate]="selectAllTabState().indeterminate"\r
              (change)="onSelectAllChange($event)"\r
              [disabled]="disabledSelectAllInAllTabs()"\r
            />\r
            <label class="form-check-label" for="select-all-in-all-tabs">{{\r
              'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization\r
            }}</label>\r
          </div>\r
        </div>\r
      </div>\r
      <fieldset class="border rounded-4 p-3">\r
        <legend class="px-1 h5 mb-0">\r
          {{ 'AbpPermissionManagement::PermissionGroup' | abpLocalization }}\r
        </legend>\r
        <div class="row" ngTabs orientation="vertical">\r
          <div class="col-md-4">\r
            <div\r
              class="overflow-auto lpx-scroll-pills-container scroll-in-modal"\r
              ngTabList\r
              orientation="vertical"\r
              selectionMode="follow"\r
              [selectedTab]="selectedGroup?.name"\r
              (selectedTabChange)="onTabChange($event)"\r
            >\r
              <div class="nav nav-pills flex-column">\r
                @for (group of permissionGroups(); track $index) {\r
                  <div class="border nav-item">\r
                    @if ({ assignedCount: getAssignedCount(group.name) }; as count) {\r
                      <button\r
                        ngTab\r
                        [value]="group.name"\r
                        class="nav-link pointer text-start w-100"\r
                        #tab="ngTab"\r
                        [class.active]="tab.selected()"\r
                        type="button"\r
                      >\r
                        <div [class.font-weight-bold]="count.assignedCount">\r
                          {{ group?.displayName }}\r
                          @if (count.assignedCount > 0) {\r
                            <span>({{ count.assignedCount }})</span>\r
                          }\r
                        </div>\r
                      </button>\r
                    }\r
                  </div>\r
                }\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="col-md-8 scroll-in-modal">\r
            @for (group of permissionGroups(); track $index) {\r
              <div ngTabPanel [value]="group.name">\r
                <ng-template ngTabContent>\r
                  <div class="ps-1">\r
                    @if (selectedGroup?.name === group.name && selectedGroupPermissions().length) {\r
                      <div class="form-check mb-2">\r
                        <input\r
                          #selectAllInThisTabsRef\r
                          type="checkbox"\r
                          id="select-all-in-this-tabs"\r
                          name="select-all-in-this-tabs"\r
                          class="form-check-input"\r
                          [checked]="selectThisTabState().checked"\r
                          [indeterminate]="selectThisTabState().indeterminate"\r
                          [disabled]="disableSelectAllTab()"\r
                          (change)="onSelectThisTabChange($event)"\r
                        />\r
                        <label class="form-check-label" for="select-all-in-this-tabs">{{\r
                          'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization\r
                        }}</label>\r
                      </div>\r
                      <hr class="my-2" />\r
                      @for (permission of selectedGroupPermissions(); track $index; let i = $index) {\r
                        <div [ngStyle]="permission.style" class="form-check mb-2">\r
                          <input\r
                            #permissionCheckbox\r
                            type="checkbox"\r
                            [checked]="getChecked(permission.name)"\r
                            [value]="getChecked(permission.name)"\r
                            [attr.id]="permission.name"\r
                            class="form-check-input"\r
                            [disabled]="isGrantedByOtherProviderName(permission.grantedProviders)"\r
                            (click)="onClickCheckbox(permission)"\r
                          />\r
                          <label class="form-check-label" [attr.for]="permission.name"\r
                            >{{ permission.displayName }}\r
                            @if (!hideBadges) {\r
                              @for (provider of permission.grantedProviders; track $index) {\r
                                <span class="badge bg-primary text-dark"\r
                                  >{{ provider.providerName }}: {{ provider.providerKey }}</span\r
                                >\r
                              }\r
                            }\r
                          </label>\r
                        </div>\r
                      }\r
                    }\r
                  </div>\r
                </ng-template>\r
              </div>\r
            }\r
          </div>\r
        </div>\r
      </fieldset>\r
    </ng-template>\r
    <ng-template #abpFooter>\r
      <button type="button" class="btn btn-outline-primary" abpClose>\r
        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r
      </button>\r
      <abp-button iconClass="fa fa-check" buttonType="button" (click)="submit()">{{\r
        'AbpIdentity::Save' | abpLocalization\r
      }}</abp-button>\r
    </ng-template>\r
  }\r
</abp-modal>\r
`,
      styles: [".scroll-in-modal{overflow:auto;max-height:calc(100vh - 23.1rem)}.lpx-scroll-pills-container .nav-pills{display:block;overflow-y:auto}@media(max-width:768px){.scroll-in-modal{max-height:calc(100vh - 15rem)}.lpx-scroll-pills-container .nav-pills{max-height:500px}}fieldset legend{float:none;width:auto}.lpx-scroll-pills-container .tab-content{padding-top:0!important;padding-bottom:0!important}.lpx-scroll-pills-container .nav-item{margin-bottom:10px;border-radius:10px}.lpx-scroll-pills-container .nav-item .nav-link.active{color:#fff!important;border-color:#6c5dd3!important;background-color:#6c5dd3!important}\n"]
    }]
  }], () => [], {
    providerNameInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "providerName",
        required: false
      }]
    }],
    providerKeyInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "providerKey",
        required: false
      }]
    }],
    hideBadgesInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "hideBadges",
        required: false
      }]
    }],
    entityDisplayName: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "entityDisplayName",
        required: false
      }]
    }],
    visibleInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    visibleChange: [{
      type: Output,
      args: ["visibleChange"]
    }]
  });
})();
function isSelectAllDisabled(permissions, providerName) {
  if (!permissions?.length) {
    return false;
  }
  return permissions.every((permission) => permission.isGranted && permission.grantedProviders?.every((p) => p.providerName !== providerName));
}
function getSelectAllCheckboxState(permissions) {
  if (!permissions.length) {
    return {
      checked: false,
      indeterminate: false
    };
  }
  const grantedCount = permissions.filter((permission) => permission.isGranted).length;
  if (grantedCount === 0) {
    return {
      checked: false,
      indeterminate: false
    };
  }
  if (grantedCount === permissions.length) {
    return {
      checked: true,
      indeterminate: false
    };
  }
  return {
    checked: false,
    indeterminate: true
  };
}
function findParentPermissions(permissions, permission) {
  const permissionMap = new Map(permissions.map((p) => [p.name, p]));
  let currentPermission = permissionMap.get(permission.name) ?? null;
  const parentPermissions = [];
  while (currentPermission && currentPermission.parentName) {
    const parentPermission = permissionMap.get(currentPermission.parentName);
    if (!parentPermission) {
      break;
    }
    parentPermissions.push(parentPermission);
    currentPermission = parentPermission;
  }
  return parentPermissions;
}
function findMargin(permissions, permission) {
  const parentPermission = permissions.find((per) => per.name === permission.parentName);
  if (parentPermission && parentPermission.parentName) {
    let margin = 20;
    return margin += findMargin(permissions, parentPermission);
  }
  return parentPermission ? 20 : 0;
}
function getPermissions(groups) {
  return groups.reduce((acc, val) => [...acc, ...val.permissions.map((p) => __spreadProps(__spreadValues({}, p), {
    groupName: val.name || ""
  }))], []);
}
var eResourcePermissionViewModes;
(function(eResourcePermissionViewModes2) {
  eResourcePermissionViewModes2["List"] = "list";
  eResourcePermissionViewModes2["Add"] = "add";
  eResourcePermissionViewModes2["Edit"] = "edit";
})(eResourcePermissionViewModes || (eResourcePermissionViewModes = {}));
var ResourcePermissionStateService = class _ResourcePermissionStateService {
  constructor() {
    this.viewMode = signal(
      eResourcePermissionViewModes.List,
      ...ngDevMode ? [{
        debugName: "viewMode"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.modalBusy = signal(
      false,
      ...ngDevMode ? [{
        debugName: "modalBusy"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hasResourcePermission = signal(
      false,
      ...ngDevMode ? [{
        debugName: "hasResourcePermission"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hasProviderKeyLookupService = signal(
      false,
      ...ngDevMode ? [{
        debugName: "hasProviderKeyLookupService"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resourceName = signal(
      "",
      ...ngDevMode ? [{
        debugName: "resourceName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resourceKey = signal(
      "",
      ...ngDevMode ? [{
        debugName: "resourceKey"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resourceDisplayName = signal(
      void 0,
      ...ngDevMode ? [{
        debugName: "resourceDisplayName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allResourcePermissions = signal(
      [],
      ...ngDevMode ? [{
        debugName: "allResourcePermissions"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resourcePermissions = signal(
      [],
      ...ngDevMode ? [{
        debugName: "resourcePermissions"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.totalCount = signal(
      0,
      ...ngDevMode ? [{
        debugName: "totalCount"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.permissionDefinitions = signal(
      [],
      ...ngDevMode ? [{
        debugName: "permissionDefinitions"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.permissionsWithProvider = signal(
      [],
      ...ngDevMode ? [{
        debugName: "permissionsWithProvider"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectedPermissions = signal(
      [],
      ...ngDevMode ? [{
        debugName: "selectedPermissions"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.providers = signal(
      [],
      ...ngDevMode ? [{
        debugName: "providers"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectedProviderName = signal(
      "",
      ...ngDevMode ? [{
        debugName: "selectedProviderName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectedProviderKey = signal(
      "",
      ...ngDevMode ? [{
        debugName: "selectedProviderKey"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.editProviderName = signal(
      "",
      ...ngDevMode ? [{
        debugName: "editProviderName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.editProviderKey = signal(
      "",
      ...ngDevMode ? [{
        debugName: "editProviderKey"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.searchFilter = signal(
      "",
      ...ngDevMode ? [{
        debugName: "searchFilter"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.searchResults = signal(
      [],
      ...ngDevMode ? [{
        debugName: "searchResults"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.showDropdown = signal(
      false,
      ...ngDevMode ? [{
        debugName: "showDropdown"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isAddMode = computed(
      () => this.viewMode() === eResourcePermissionViewModes.Add,
      ...ngDevMode ? [{
        debugName: "isAddMode"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isEditMode = computed(
      () => this.viewMode() === eResourcePermissionViewModes.Edit,
      ...ngDevMode ? [{
        debugName: "isEditMode"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isListMode = computed(
      () => this.viewMode() === eResourcePermissionViewModes.List,
      ...ngDevMode ? [{
        debugName: "isListMode"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currentPermissionsList = computed(
      () => this.isAddMode() ? this.permissionDefinitions() : this.permissionsWithProvider(),
      ...ngDevMode ? [{
        debugName: "currentPermissionsList"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allPermissionsSelected = computed(
      () => {
        const definitions = this.currentPermissionsList();
        return definitions.length > 0 && definitions.every((p) => this.selectedPermissions().includes(p.name || ""));
      },
      ...ngDevMode ? [{
        debugName: "allPermissionsSelected"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.canSave = computed(
      () => {
        if (this.isAddMode()) {
          return !!this.selectedProviderKey() && this.selectedPermissions().length > 0;
        }
        return this.selectedPermissions().length >= 0;
      },
      ...ngDevMode ? [{
        debugName: "canSave"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  // State transition methods
  goToListMode() {
    this.viewMode.set(eResourcePermissionViewModes.List);
    this.selectedPermissions.set([]);
  }
  goToAddMode() {
    this.viewMode.set(eResourcePermissionViewModes.Add);
    this.selectedPermissions.set([]);
    this.selectedProviderKey.set("");
    this.searchResults.set([]);
    this.searchFilter.set("");
  }
  prepareEditMode(grant) {
    this.editProviderName.set(grant.providerName || "");
    this.editProviderKey.set(grant.providerKey || "");
  }
  setEditModePermissions(permissions) {
    this.permissionsWithProvider.set(permissions);
    this.selectedPermissions.set(permissions.filter((p) => p.isGranted).map((p) => p.name || ""));
    this.viewMode.set(eResourcePermissionViewModes.Edit);
  }
  // Permission selection methods
  togglePermission(permissionName) {
    const current = this.selectedPermissions();
    if (current.includes(permissionName)) {
      this.selectedPermissions.set(current.filter((p) => p !== permissionName));
    } else {
      this.selectedPermissions.set([...current, permissionName]);
    }
  }
  toggleAllPermissions(selectAll) {
    const permissions = this.currentPermissionsList();
    this.selectedPermissions.set(selectAll ? permissions.map((p) => p.name || "") : []);
  }
  isPermissionSelected(permissionName) {
    return this.selectedPermissions().includes(permissionName);
  }
  // Provider search methods
  onProviderChange(providerName) {
    this.selectedProviderName.set(providerName);
    this.selectedProviderKey.set("");
    this.searchResults.set([]);
    this.searchFilter.set("");
  }
  selectProviderKey(key) {
    this.selectedProviderKey.set(key.providerKey || "");
    this.searchFilter.set(key.providerDisplayName || key.providerKey || "");
    this.searchResults.set([]);
    this.showDropdown.set(false);
  }
  // Reset all state
  reset() {
    this.viewMode.set(eResourcePermissionViewModes.List);
    this.allResourcePermissions.set([]);
    this.resourcePermissions.set([]);
    this.totalCount.set(0);
    this.selectedProviderName.set("");
    this.selectedProviderKey.set("");
    this.searchFilter.set("");
    this.selectedPermissions.set([]);
    this.searchResults.set([]);
    this.editProviderName.set("");
    this.editProviderKey.set("");
  }
  // Data loading helpers
  setResourceData(permissions) {
    this.allResourcePermissions.set(permissions);
    this.totalCount.set(permissions.length);
  }
  setProviders(providers) {
    this.providers.set(providers);
    this.hasProviderKeyLookupService.set(providers.length > 0);
    if (providers.length) {
      this.selectedProviderName.set(providers[0].name || "");
    }
  }
  setDefinitions(permissions) {
    this.permissionDefinitions.set(permissions);
    this.hasResourcePermission.set(permissions.length > 0);
  }
  static {
    this.ɵfac = function ResourcePermissionStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResourcePermissionStateService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ResourcePermissionStateService,
      factory: _ResourcePermissionStateService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResourcePermissionStateService, [{
    type: Injectable
  }], null, null);
})();
var DEFAULT_RESOURCE_PERMISSION_ENTITY_PROPS = EntityProp.createMany([{
  type: "string",
  name: "providerWithKey",
  displayName: "AbpPermissionManagement::Provider",
  sortable: false,
  valueResolver: (data) => {
    const providerName = data.record.providerName || "";
    const providerDisplayName = data.record.providerDisplayName || data.record.providerKey || "";
    const abbr = providerName.charAt(0).toUpperCase();
    return of(`<span class="d-inline-block bg-light rounded-pill px-2 me-1 ms-1 mb-1" title="${data.record.providerNameDisplayName || providerName}">${abbr}</span>${providerDisplayName}`);
  }
}, {
  type: "string",
  name: "permissions",
  displayName: "AbpPermissionManagement::Permissions",
  sortable: false,
  valueResolver: (data) => {
    const permissions = data.record.permissions || [];
    const pills = permissions.map((p) => `<span class="d-inline-block bg-light rounded-pill px-2 me-1 mb-1">${p.displayName}</span>`).join("");
    return of(pills);
  }
}]);
var DEFAULT_RESOURCE_PERMISSION_ENTITY_PROPS_MAP = {
  [
    "PermissionManagement.ResourcePermissionsComponent"
    /* ePermissionManagementComponents.ResourcePermissions */
  ]: DEFAULT_RESOURCE_PERMISSION_ENTITY_PROPS
};
var RESOURCE_PERMISSION_ENTITY_PROP_CONTRIBUTORS = new InjectionToken("RESOURCE_PERMISSION_ENTITY_PROP_CONTRIBUTORS");
function configureResourcePermissionExtensions() {
  const extensions = inject(ExtensionsService);
  const config = {
    optional: true
  };
  const propContributors = inject(RESOURCE_PERMISSION_ENTITY_PROP_CONTRIBUTORS, config) || {};
  mergeWithDefaultProps(extensions.entityProps, DEFAULT_RESOURCE_PERMISSION_ENTITY_PROPS_MAP, propContributors);
}
var ResourcePermissionListComponent = class _ResourcePermissionListComponent {
  constructor() {
    this.state = inject(ResourcePermissionStateService);
    this.list = inject(ListService);
    this.addClicked = output();
    this.editClicked = output();
    this.deleteClicked = output();
    configureResourcePermissionExtensions();
  }
  static {
    this.ɵfac = function ResourcePermissionListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResourcePermissionListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ResourcePermissionListComponent,
      selectors: [["abp-resource-permission-list"]],
      outputs: {
        addClicked: "addClicked",
        editClicked: "editClicked",
        deleteClicked: "deleteClicked"
      },
      features: [ɵɵProvidersFeature([ListService, {
        provide: EXTENSIONS_IDENTIFIER,
        useValue: "PermissionManagement.ResourcePermissionsComponent"
        /* ePermissionManagementComponents.ResourcePermissions */
      }])],
      decls: 9,
      vars: 4,
      consts: [["actionsTemplate", ""], [1, "d-grid", "gap-2", "mb-3", "d-md-flex", "justify-content-md-end"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "fa", "fa-plus", "me-1"], ["actionsText", "AbpUi::Actions", 3, "data", "recordsTotal", "list", "actionsTemplate"], [1, "alert", "alert-info"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "title"], [1, "fa", "fa-edit"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click", "title"], [1, "fa", "fa-trash"]],
      template: function ResourcePermissionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1)(1, "button", 2);
          ɵɵlistener("click", function ResourcePermissionListComponent_Template_button_click_1_listener() {
            return ctx.addClicked.emit();
          });
          ɵɵelement(2, "i", 3);
          ɵɵtext(3);
          ɵɵpipe(4, "abpLocalization");
          ɵɵelementEnd()();
          ɵɵtemplate(5, ResourcePermissionListComponent_ng_template_5_Template, 7, 6, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵconditionalCreate(7, ResourcePermissionListComponent_Conditional_7_Template, 1, 4, "abp-extensible-table", 4)(8, ResourcePermissionListComponent_Conditional_8_Template, 3, 3, "div", 5);
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "AbpPermissionManagement::AddResourcePermission"), " ");
          ɵɵadvance(4);
          ɵɵconditional(ctx.state.resourcePermissions().length > 0 ? 7 : 8);
        }
      },
      dependencies: [ExtensibleTableComponent, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResourcePermissionListComponent, [{
    type: Component,
    args: [{
      selector: "abp-resource-permission-list",
      providers: [ListService, {
        provide: EXTENSIONS_IDENTIFIER,
        useValue: "PermissionManagement.ResourcePermissionsComponent"
        /* ePermissionManagementComponents.ResourcePermissions */
      }],
      imports: [LocalizationPipe, ExtensibleTableComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="d-grid gap-2 mb-3 d-md-flex justify-content-md-end">\r
  <button class="btn btn-sm btn-primary" type="button" (click)="addClicked.emit()">\r
    <i class="fa fa-plus me-1"></i>\r
    {{ 'AbpPermissionManagement::AddResourcePermission' | abpLocalization }}\r
  </button>\r
</div>\r
\r
<ng-template #actionsTemplate let-row>\r
  <div class="btn-group btn-group-sm" role="group">\r
    <button\r
      class="btn btn-outline-primary"\r
      type="button"\r
      (click)="editClicked.emit(row)"\r
      [title]="'AbpUi::Edit' | abpLocalization"\r
    >\r
      <i class="fa fa-edit"></i>\r
    </button>\r
    <button\r
      class="btn btn-outline-danger"\r
      type="button"\r
      (click)="deleteClicked.emit(row)"\r
      [title]="'AbpUi::Delete' | abpLocalization"\r
    >\r
      <i class="fa fa-trash"></i>\r
    </button>\r
  </div>\r
</ng-template>\r
\r
@if (state.resourcePermissions().length > 0) {\r
  <abp-extensible-table\r
    [data]="state.resourcePermissions()"\r
    [recordsTotal]="state.totalCount()"\r
    [list]="list"\r
    [actionsTemplate]="actionsTemplate"\r
    actionsText="AbpUi::Actions"\r
  />\r
} @else {\r
  <div class="alert alert-info">\r
    {{ 'AbpPermissionManagement::NoPermissionsAssigned' | abpLocalization }}\r
  </div>\r
}\r
`
    }]
  }], () => [], {
    addClicked: [{
      type: Output,
      args: ["addClicked"]
    }],
    editClicked: [{
      type: Output,
      args: ["editClicked"]
    }],
    deleteClicked: [{
      type: Output,
      args: ["deleteClicked"]
    }]
  });
})();
var ProviderKeySearchComponent = class _ProviderKeySearchComponent {
  constructor() {
    this.state = inject(ResourcePermissionStateService);
    this.service = inject(PermissionsService);
    this.destroyRef = inject(DestroyRef);
    this.resourceName = input.required(
      ...ngDevMode ? [{
        debugName: "resourceName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.searchFn = () => new Observable();
  }
  ngOnInit() {
    this.searchFn = (filter) => this.loadProviderKeys(filter);
  }
  onItemSelected(item) {
  }
  loadProviderKeys(filter) {
    const providerName = this.state.selectedProviderName();
    if (!providerName) {
      return new Observable((subscriber) => {
        subscriber.next([]);
        subscriber.complete();
      });
    }
    return this.service.searchResourceProviderKey(this.resourceName(), providerName, filter, 1).pipe(map((res) => (res.keys || []).map((k) => ({
      key: k.providerKey || "",
      displayName: k.providerDisplayName || k.providerKey || "",
      providerKey: k.providerKey || "",
      providerDisplayName: k.providerDisplayName || void 0
    }))), takeUntilDestroyed(this.destroyRef));
  }
  static {
    this.ɵfac = function ProviderKeySearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProviderKeySearchComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProviderKeySearchComponent,
      selectors: [["abp-provider-key-search"]],
      inputs: {
        resourceName: [1, "resourceName"]
      },
      decls: 1,
      vars: 3,
      consts: [["label", "AbpPermissionManagement::SearchProviderKey", "placeholder", "AbpPermissionManagement::SearchProviderKey", 3, "displayValueChange", "selectedValueChange", "itemSelected", "searchFn", "displayValue", "selectedValue"]],
      template: function ProviderKeySearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "abp-lookup-search", 0);
          ɵɵlistener("displayValueChange", function ProviderKeySearchComponent_Template_abp_lookup_search_displayValueChange_0_listener($event) {
            return ctx.state.searchFilter.set($event);
          })("selectedValueChange", function ProviderKeySearchComponent_Template_abp_lookup_search_selectedValueChange_0_listener($event) {
            return ctx.state.selectedProviderKey.set($event);
          })("itemSelected", function ProviderKeySearchComponent_Template_abp_lookup_search_itemSelected_0_listener($event) {
            return ctx.onItemSelected($event);
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("searchFn", ctx.searchFn)("displayValue", ctx.state.searchFilter())("selectedValue", ctx.state.selectedProviderKey());
        }
      },
      dependencies: [LookupSearchComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProviderKeySearchComponent, [{
    type: Component,
    args: [{
      selector: "abp-provider-key-search",
      imports: [LookupSearchComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<abp-lookup-search\r\n  label="AbpPermissionManagement::SearchProviderKey"\r\n  placeholder="AbpPermissionManagement::SearchProviderKey"\r\n  [searchFn]="searchFn"\r\n  [displayValue]="state.searchFilter()"\r\n  (displayValueChange)="state.searchFilter.set($event)"\r\n  [selectedValue]="state.selectedProviderKey()"\r\n  (selectedValueChange)="state.selectedProviderKey.set($event)"\r\n  (itemSelected)="onItemSelected($event)"\r\n/>\r\n'
    }]
  }], null, {
    resourceName: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "resourceName",
        required: true
      }]
    }]
  });
})();
var PermissionCheckboxListComponent = class _PermissionCheckboxListComponent {
  constructor() {
    this.state = inject(ResourcePermissionStateService);
    this.permissions = input.required(
      ...ngDevMode ? [{
        debugName: "permissions"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.idPrefix = input(
      "default",
      ...ngDevMode ? [{
        debugName: "idPrefix"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.title = input(
      "AbpPermissionManagement::ResourcePermissionPermissions",
      ...ngDevMode ? [{
        debugName: "title"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.showTitle = input(
      true,
      ...ngDevMode ? [{
        debugName: "showTitle"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.ɵfac = function PermissionCheckboxListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionCheckboxListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PermissionCheckboxListComponent,
      selectors: [["abp-permission-checkbox-list"]],
      inputs: {
        permissions: [1, "permissions"],
        idPrefix: [1, "idPrefix"],
        title: [1, "title"],
        showTitle: [1, "showTitle"]
      },
      decls: 10,
      vars: 9,
      consts: [[1, "mb-3"], [1, "form-check", "form-switch", "mb-2"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "checked"], [1, "form-check-label", 3, "for"], [1, "abp-permission-list-container", "border", "rounded", "p-3"], [1, "form-check"]],
      template: function PermissionCheckboxListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "div", 0);
          ɵɵconditionalCreate(1, PermissionCheckboxListComponent_Conditional_1_Template, 3, 3, "h5");
          ɵɵdomElementStart(2, "div", 1)(3, "input", 2);
          ɵɵdomListener("change", function PermissionCheckboxListComponent_Template_input_change_3_listener() {
            return ctx.state.toggleAllPermissions(!ctx.state.allPermissionsSelected());
          });
          ɵɵdomElementEnd();
          ɵɵdomElementStart(4, "label", 3);
          ɵɵtext(5);
          ɵɵpipe(6, "abpLocalization");
          ɵɵdomElementEnd()();
          ɵɵdomElementStart(7, "div", 4);
          ɵɵrepeaterCreate(8, PermissionCheckboxListComponent_For_9_Template, 4, 8, "div", 5, _forTrack02);
          ɵɵdomElementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.showTitle() ? 1 : -1);
          ɵɵadvance(2);
          ɵɵdomProperty("id", ɵɵinterpolate1("grantAll-", ctx.idPrefix()))("checked", ctx.state.allPermissionsSelected());
          ɵɵadvance();
          ɵɵdomProperty("htmlFor", ɵɵinterpolate1("grantAll-", ctx.idPrefix()));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 7, "AbpPermissionManagement::GrantAllResourcePermissions"), " ");
          ɵɵadvance(3);
          ɵɵrepeater(ctx.permissions());
        }
      },
      dependencies: [LocalizationPipe],
      styles: [".abp-permission-list-container[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionCheckboxListComponent, [{
    type: Component,
    args: [{
      selector: "abp-permission-checkbox-list",
      imports: [LocalizationPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="mb-3">\r
  @if (showTitle()) {\r
    <h5>{{ title() | abpLocalization }}</h5>\r
  }\r
  <div class="form-check form-switch mb-2">\r
    <input\r
      class="form-check-input"\r
      type="checkbox"\r
      id="grantAll-{{ idPrefix() }}"\r
      [checked]="state.allPermissionsSelected()"\r
      (change)="state.toggleAllPermissions(!state.allPermissionsSelected())"\r
    />\r
    <label class="form-check-label" for="grantAll-{{ idPrefix() }}">\r
      {{ 'AbpPermissionManagement::GrantAllResourcePermissions' | abpLocalization }}\r
    </label>\r
  </div>\r
  <div class="abp-permission-list-container border rounded p-3">\r
    @for (perm of permissions(); track perm.name) {\r
      <div class="form-check">\r
        <input\r
          class="form-check-input"\r
          type="checkbox"\r
          id="perm-{{ idPrefix() }}-{{ perm.name }}"\r
          [checked]="state.isPermissionSelected(perm.name || '')"\r
          (change)="state.togglePermission(perm.name || '')"\r
        />\r
        <label class="form-check-label" for="perm-{{ idPrefix() }}-{{ perm.name }}">\r
          {{ perm.displayName }}\r
        </label>\r
      </div>\r
    }\r
  </div>\r
</div>\r
`,
      styles: [".abp-permission-list-container{max-height:300px;overflow-y:auto}\n"]
    }]
  }], null, {
    permissions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "permissions",
        required: true
      }]
    }],
    idPrefix: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "idPrefix",
        required: false
      }]
    }],
    title: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "title",
        required: false
      }]
    }],
    showTitle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "showTitle",
        required: false
      }]
    }]
  });
})();
var ResourcePermissionFormComponent = class _ResourcePermissionFormComponent {
  constructor() {
    this.state = inject(ResourcePermissionStateService);
    this.eResourcePermissionViewModes = eResourcePermissionViewModes;
    this.mode = input.required(
      ...ngDevMode ? [{
        debugName: "mode"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resourceName = input.required(
      ...ngDevMode ? [{
        debugName: "resourceName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.save = output();
    this.cancel = output();
  }
  static {
    this.ɵfac = function ResourcePermissionFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResourcePermissionFormComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ResourcePermissionFormComponent,
      selectors: [["abp-resource-permission-form"]],
      inputs: {
        mode: [1, "mode"],
        resourceName: [1, "resourceName"]
      },
      outputs: {
        save: "save",
        cancel: "cancel"
      },
      decls: 2,
      vars: 1,
      consts: [["id", "permissionList", 1, "mb-3"], [1, "mb-3"], [1, "form-label", "fw-bold"], [1, "mb-2"], [1, "form-check", "form-check-inline"], [3, "resourceName"], ["idPrefix", "add", 3, "permissions"], ["type", "radio", 1, "form-check-input", 3, "change", "id", "value", "checked"], [1, "form-check-label", 3, "for"], ["idPrefix", "edit", 3, "permissions", "showTitle"]],
      template: function ResourcePermissionFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, ResourcePermissionFormComponent_Conditional_0_Template, 9, 5)(1, ResourcePermissionFormComponent_Conditional_1_Template, 2, 2, "div", 0);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.mode() === ctx.eResourcePermissionViewModes.Add ? 0 : 1);
        }
      },
      dependencies: [FormsModule, ProviderKeySearchComponent, PermissionCheckboxListComponent, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResourcePermissionFormComponent, [{
    type: Component,
    args: [{
      selector: "abp-resource-permission-form",
      imports: [FormsModule, LocalizationPipe, ProviderKeySearchComponent, PermissionCheckboxListComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@if (mode() === eResourcePermissionViewModes.Add) {\r
  <div class="mb-3">\r
    <label class="form-label fw-bold">\r
      {{ 'AbpPermissionManagement::SelectProvider' | abpLocalization }}\r
    </label>\r
    <div class="mb-2">\r
      @for (provider of state.providers(); track provider.name; let i = $index) {\r
        <div class="form-check form-check-inline">\r
          <input\r
            class="form-check-input"\r
            type="radio"\r
            [id]="'provider-' + i"\r
            [value]="provider.name"\r
            [checked]="state.selectedProviderName() === provider.name"\r
            (change)="state.onProviderChange(provider.name || '')"\r
          />\r
          <label class="form-check-label" [for]="'provider-' + i">\r
            {{ provider.displayName }}\r
          </label>\r
        </div>\r
      }\r
    </div>\r
\r
    <abp-provider-key-search [resourceName]="resourceName()" />\r
  </div>\r
\r
  <abp-permission-checkbox-list [permissions]="state.permissionDefinitions()" idPrefix="add" />\r
} @else {\r
  <div class="mb-3" id="permissionList">\r
    <abp-permission-checkbox-list\r
      [permissions]="state.permissionsWithProvider()"\r
      idPrefix="edit"\r
      [showTitle]="false"\r
    />\r
  </div>\r
}\r
`
    }]
  }], null, {
    mode: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "mode",
        required: true
      }]
    }],
    resourceName: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "resourceName",
        required: true
      }]
    }],
    save: [{
      type: Output,
      args: ["save"]
    }],
    cancel: [{
      type: Output,
      args: ["cancel"]
    }]
  });
})();
var DEFAULT_MAX_RESULT_COUNT = 10;
var ResourcePermissionManagementComponent = class _ResourcePermissionManagementComponent {
  constructor() {
    this.eResourcePermissionViewModes = eResourcePermissionViewModes;
    this.service = inject(PermissionsService);
    this.toasterService = inject(ToasterService);
    this.confirmationService = inject(ConfirmationService);
    this.state = inject(ResourcePermissionStateService);
    this.list = inject(ListService);
    this.resourceName = input.required(
      ...ngDevMode ? [{
        debugName: "resourceName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resourceKey = input.required(
      ...ngDevMode ? [{
        debugName: "resourceKey"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resourceDisplayName = input(
      ...ngDevMode ? [void 0, {
        debugName: "resourceDisplayName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visible = model(
      false,
      ...ngDevMode ? [{
        debugName: "visible"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.previousVisible = signal(
      false,
      ...ngDevMode ? [{
        debugName: "previousVisible"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.listData = toSignal(this.list.hookToQuery((query) => {
      const allData = this.state.allResourcePermissions();
      const skipCount = query.skipCount || 0;
      const maxResultCount = query.maxResultCount || DEFAULT_MAX_RESULT_COUNT;
      const paginatedData = allData.slice(skipCount, skipCount + maxResultCount);
      return of({
        items: paginatedData,
        totalCount: allData.length
      });
    }), {
      initialValue: {
        items: [],
        totalCount: 0
      }
    });
    effect(() => {
      const result = this.listData();
      untracked(() => {
        this.state.resourcePermissions.set(result.items);
        this.state.totalCount.set(result.totalCount);
      });
    });
    effect(() => {
      const resourceName = this.resourceName();
      const resourceKey = this.resourceKey();
      const resourceDisplayName = this.resourceDisplayName();
      untracked(() => {
        this.state.resourceName.set(resourceName);
        this.state.resourceKey.set(resourceKey);
        this.state.resourceDisplayName.set(resourceDisplayName);
      });
    });
    effect(() => {
      const isVisible = this.visible();
      const wasVisible = this.previousVisible();
      if (isVisible && !wasVisible) {
        this.openModal();
      } else if (!isVisible && wasVisible) {
        this.state.reset();
      }
      untracked(() => this.previousVisible.set(isVisible));
    });
  }
  openModal() {
    this.state.modalBusy.set(true);
    this.service.getResource(this.resourceName(), this.resourceKey()).pipe(switchMap((permRes) => {
      this.state.setResourceData(permRes.permissions || []);
      this.list.get();
      return this.service.getResourceProviderKeyLookupServices(this.resourceName());
    }), switchMap((providerRes) => {
      this.state.setProviders(providerRes.providers || []);
      return this.service.getResourceDefinitions(this.resourceName());
    }), finalize(() => this.state.modalBusy.set(false))).subscribe({
      next: (defRes) => {
        this.state.setDefinitions(defRes.permissions || []);
      },
      error: () => {
        this.toasterService.error("AbpPermissionManagement::ErrorLoadingPermissions");
      }
    });
  }
  onAddClicked() {
    this.state.goToAddMode();
  }
  onEditClicked(grant) {
    this.state.prepareEditMode(grant);
    this.state.modalBusy.set(true);
    this.service.getResourceByProvider(this.resourceName(), this.resourceKey(), grant.providerName || "", grant.providerKey || "").pipe(finalize(() => this.state.modalBusy.set(false))).subscribe({
      next: (res) => {
        this.state.setEditModePermissions(res.permissions || []);
      }
    });
  }
  onDeleteClicked(grant) {
    this.confirmationService.warn("AbpPermissionManagement::ResourcePermissionDeletionConfirmationMessage", "AbpPermissionManagement::AreYouSure", {
      messageLocalizationParams: [grant.providerKey || ""]
    }).subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.state.modalBusy.set(true);
        this.service.deleteResource(this.resourceName(), this.resourceKey(), grant.providerName || "", grant.providerKey || "").pipe(switchMap(() => this.service.getResource(this.resourceName(), this.resourceKey())), finalize(() => this.state.modalBusy.set(false))).subscribe({
          next: (res) => {
            this.state.setResourceData(res.permissions || []);
            this.list.get();
            this.toasterService.success("AbpUi::DeletedSuccessfully");
          }
        });
      }
    });
  }
  savePermission() {
    const isEdit = this.state.isEditMode();
    const providerName = isEdit ? this.state.editProviderName() : this.state.selectedProviderName();
    const providerKey = isEdit ? this.state.editProviderKey() : this.state.selectedProviderKey();
    if (!isEdit && !this.state.canSave()) {
      this.toasterService.warn("AbpPermissionManagement::PleaseSelectProviderAndPermissions");
      return;
    }
    this.state.modalBusy.set(true);
    this.service.updateResource(this.resourceName(), this.resourceKey(), {
      providerName,
      providerKey,
      permissions: this.state.selectedPermissions()
    }).pipe(switchMap(() => this.service.getResource(this.resourceName(), this.resourceKey())), finalize(() => this.state.modalBusy.set(false))).subscribe({
      next: (res) => {
        this.state.setResourceData(res.permissions || []);
        this.list.get();
        this.toasterService.success("AbpUi::SavedSuccessfully");
        this.state.goToListMode();
      }
    });
  }
  static {
    this.ɵfac = function ResourcePermissionManagementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResourcePermissionManagementComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ResourcePermissionManagementComponent,
      selectors: [["abp-resource-permission-management"]],
      inputs: {
        resourceName: [1, "resourceName"],
        resourceKey: [1, "resourceKey"],
        resourceDisplayName: [1, "resourceDisplayName"],
        visible: [1, "visible"]
      },
      outputs: {
        visible: "visibleChange"
      },
      exportAs: ["abpResourcePermissionManagement"],
      features: [ɵɵProvidersFeature([ResourcePermissionStateService, ListService])],
      decls: 7,
      vars: 4,
      consts: [["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], [3, "visibleChange", "visible", "busy", "options"], [1, "modal-title"], ["role", "alert", 1, "alert", "alert-warning"], [3, "mode", "resourceName"], [3, "addClicked", "editClicked", "deleteClicked"], ["type", "button", "abpClose", "", 1, "btn", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["iconClass", "fa fa-check", 3, "click"]],
      template: function ResourcePermissionManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "abp-modal", 3);
          ɵɵtwoWayListener("visibleChange", function ResourcePermissionManagementComponent_Template_abp_modal_visibleChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.visible, $event) || (ctx.visible = $event);
            return ɵɵresetView($event);
          });
          ɵɵtemplate(1, ResourcePermissionManagementComponent_ng_template_1_Template, 4, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, ResourcePermissionManagementComponent_ng_template_3_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(5, ResourcePermissionManagementComponent_ng_template_5_Template, 2, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵtwoWayProperty("visible", ctx.visible);
          ɵɵproperty("busy", ctx.state.modalBusy())("options", ɵɵpureFunction0(3, _c22));
        }
      },
      dependencies: [ModalComponent, ButtonComponent, ModalCloseDirective, ResourcePermissionListComponent, ResourcePermissionFormComponent, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResourcePermissionManagementComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-resource-permission-management",
      exportAs: "abpResourcePermissionManagement",
      providers: [ResourcePermissionStateService, ListService],
      imports: [ModalComponent, LocalizationPipe, ButtonComponent, ModalCloseDirective, ResourcePermissionListComponent, ResourcePermissionFormComponent],
      template: `<abp-modal\r
  [(visible)]="visible"\r
  [busy]="state.modalBusy()"\r
  [options]="{ size: 'xl', scrollable: false }"\r
>\r
  <ng-template #abpHeader>\r
    <h5 class="modal-title">\r
      @switch (state.viewMode()) {\r
        @case (eResourcePermissionViewModes.Edit) {\r
          {{ 'AbpPermissionManagement::UpdatePermission' | abpLocalization }}\r
        }\r
        @case (eResourcePermissionViewModes.Add) {\r
          {{ 'AbpPermissionManagement::AddResourcePermission' | abpLocalization }}\r
        }\r
        @default {\r
          {{ 'AbpPermissionManagement::ResourcePermissions' | abpLocalization }}\r
          @if (resourceDisplayName()) {\r
            - {{ resourceDisplayName() }}\r
          }\r
        }\r
      }\r
    </h5>\r
  </ng-template>\r
\r
  <ng-template #abpBody>\r
    @if (!state.hasResourcePermission() || !state.hasProviderKeyLookupService()) {\r
      <div class="alert alert-warning" role="alert">\r
        @if (!state.hasResourcePermission()) {\r
          {{ 'AbpPermissionManagement::NoResourcePermissionFound' | abpLocalization }}\r
        } @else {\r
          {{ 'AbpPermissionManagement::NoResourceProviderKeyLookupServiceFound' | abpLocalization }}\r
        }\r
      </div>\r
    } @else {\r
      @switch (state.viewMode()) {\r
        @case (eResourcePermissionViewModes.List) {\r
          <abp-resource-permission-list\r
            (addClicked)="onAddClicked()"\r
            (editClicked)="onEditClicked($event)"\r
            (deleteClicked)="onDeleteClicked($event)"\r
          />\r
        }\r
        @case (eResourcePermissionViewModes.Add) {\r
          <abp-resource-permission-form [mode]="eResourcePermissionViewModes.Add" [resourceName]="resourceName()" />\r
        }\r
        @case (eResourcePermissionViewModes.Edit) {\r
          <abp-resource-permission-form [mode]="eResourcePermissionViewModes.Edit" [resourceName]="resourceName()" />\r
        }\r
      }\r
    }\r
  </ng-template>\r
\r
  <ng-template #abpFooter>\r
    @if (state.isListMode()) {\r
      <button type="button" class="btn btn-outline-primary" abpClose>\r
        {{ 'AbpUi::Close' | abpLocalization }}\r
      </button>\r
    } @else {\r
      <button type="button" class="btn btn-outline-secondary" (click)="state.goToListMode()">\r
        {{ 'AbpUi::Cancel' | abpLocalization }}\r
      </button>\r
      <abp-button iconClass="fa fa-check" (click)="savePermission()">\r
        {{ 'AbpUi::Save' | abpLocalization }}\r
      </abp-button>\r
    }\r
  </ng-template>\r
</abp-modal>\r
`
    }]
  }], () => [], {
    resourceName: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "resourceName",
        required: true
      }]
    }],
    resourceKey: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "resourceKey",
        required: true
      }]
    }],
    resourceDisplayName: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "resourceDisplayName",
        required: false
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }, {
      type: Output,
      args: ["visibleChange"]
    }]
  });
})();
var PermissionManagementModule = class _PermissionManagementModule {
  static {
    this.ɵfac = function PermissionManagementModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionManagementModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PermissionManagementModule,
      imports: [PermissionManagementComponent],
      exports: [PermissionManagementComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [PermissionManagementComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionManagementModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [PermissionManagementComponent],
      exports: [PermissionManagementComponent]
    }]
  }], null, null);
})();

// node_modules/@abp/ng.identity/fesm2022/abp-ng.identity.mjs
var _c03 = () => ({
  value: "R"
});
var _c13 = (a0) => ({
  value: a0
});
var _c23 = (a0) => ({
  value: a0,
  twoWay: true
});
var _c3 = () => ({
  value: true
});
var _c4 = (a0, a1, a2, a3) => ({
  providerName: a0,
  providerKey: a1,
  visible: a2,
  hideBadges: a3
});
var _c5 = (a0) => ({
  visibleChange: a0
});
var _c6 = (a0, a1, a2) => ({
  inputs: a0,
  outputs: a1,
  componentKey: a2
});
function RolesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, ctx_r0.selected?.id ? "AbpIdentity::Edit" : "AbpIdentity::NewRole"));
  }
}
function RolesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 10);
    ɵɵlistener("ngSubmit", function RolesComponent_ng_template_8_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.save());
    });
    ɵɵelement(1, "abp-extensible-form", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r0.form)("validateOnSubmit", true);
    ɵɵadvance();
    ɵɵproperty("selectedRecord", ctx_r0.selected);
  }
}
function RolesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "abp-button", 13);
    ɵɵlistener("click", function RolesComponent_ng_template_10_Template_abp_button_click_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.save());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "AbpIdentity::Cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r0.form?.invalid);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 5, "AbpIdentity::Save"));
  }
}
function RolesComponent_abp_permission_management_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-permission-management", 14, 3);
    ɵɵlistener("abpInit", function RolesComponent_abp_permission_management_12_Template_abp_permission_management_abpInit_0_listener() {
      const init_r5 = ɵɵrestoreView(_r4).initTemplate;
      const abpPermissionManagement_r6 = ɵɵreference(1);
      return ɵɵresetView(init_r5(abpPermissionManagement_r6));
    });
    ɵɵelementEnd();
  }
}
var _c7 = ["modalContent"];
var _c8 = () => ({
  value: "U"
});
var _c9 = (a0, a1, a2) => ({
  providerName: a0,
  providerKey: a1,
  visible: a2
});
var _c10 = (a0, a1, a2) => ({
  checkboxId: a0,
  label: a1,
  formControl: a2
});
var _c11 = (a0, a1) => ({
  inputs: a0,
  componentKey: a1
});
function UsersComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, ctx_r1.selected?.id ? "AbpIdentity::Edit" : "AbpIdentity::NewUser"));
  }
}
function UsersComponent_ng_template_12_Conditional_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-extensible-form", 23);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("selectedRecord", ctx_r1.selected);
  }
}
function UsersComponent_ng_template_12_Conditional_0_ng_template_12_For_1_abp_checkbox_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-checkbox", 26);
    ɵɵcontrolCreate();
  }
  if (rf & 2) {
    const ɵ$index_50_r4 = ɵɵnextContext().$index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("checkboxId", "roles-" + ɵ$index_50_r4)("formControlName", ctx_r1.roles()[ɵ$index_50_r4].name)("label", ctx_r1.roles()[ɵ$index_50_r4].name);
    ɵɵcontrol();
  }
}
function UsersComponent_ng_template_12_Conditional_0_ng_template_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵtemplate(1, UsersComponent_ng_template_12_Conditional_0_ng_template_12_For_1_abp_checkbox_1_Template, 1, 3, "abp-checkbox", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const roleGroup_r5 = ctx.$implicit;
    const ɵ$index_50_r4 = ctx.$index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("formGroup", roleGroup_r5);
    ɵɵadvance();
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction2(12, _c11, ɵɵpureFunction3(8, _c10, ɵɵpureFunction1(2, _c13, "roles-" + ɵ$index_50_r4), ɵɵpureFunction1(4, _c13, ctx_r1.roles()[ɵ$index_50_r4].name), ɵɵpureFunction1(6, _c23, roleGroup_r5.get(ctx_r1.roles()[ɵ$index_50_r4].name))), ctx_r1.inputKey));
  }
}
function UsersComponent_ng_template_12_Conditional_0_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, UsersComponent_ng_template_12_Conditional_0_ng_template_12_For_1_Template, 2, 15, "div", 24, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵrepeater(ctx_r1.roleGroups);
  }
}
function UsersComponent_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 16);
    ɵɵlistener("ngSubmit", function UsersComponent_ng_template_12_Conditional_0_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵelementStart(1, "ul", 17, 3);
    ɵɵtwoWayListener("activeIdChange", function UsersComponent_ng_template_12_Conditional_0_Template_ul_activeIdChange_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.selectedTab, $event) || (ctx_r1.selectedTab = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementStart(3, "li", 18)(4, "a", 19);
    ɵɵtext(5);
    ɵɵpipe(6, "abpLocalization");
    ɵɵelementEnd();
    ɵɵtemplate(7, UsersComponent_ng_template_12_Conditional_0_ng_template_7_Template, 1, 1, "ng-template", 20);
    ɵɵelementEnd();
    ɵɵelementStart(8, "li", 21)(9, "a", 19);
    ɵɵtext(10);
    ɵɵpipe(11, "abpLocalization");
    ɵɵelementEnd();
    ɵɵtemplate(12, UsersComponent_ng_template_12_Conditional_0_ng_template_12_Template, 2, 0, "ng-template", 20);
    ɵɵelementEnd()();
    ɵɵelement(13, "div", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const newUserNav_r6 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance();
    ɵɵtwoWayProperty("activeId", ctx_r1.selectedTab);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 5, "AbpIdentity::UserInformations"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 7, "AbpIdentity::Roles"));
    ɵɵadvance(3);
    ɵɵproperty("ngbNavOutlet", newUserNav_r6);
  }
}
function UsersComponent_ng_template_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵelement(1, "i", 27);
    ɵɵelementEnd();
  }
}
function UsersComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, UsersComponent_ng_template_12_Conditional_0_Template, 14, 9, "form", 14)(1, UsersComponent_ng_template_12_Conditional_1_Template, 2, 0, "div", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.form ? 0 : 1);
  }
}
function UsersComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 28);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "abp-button", 29);
    ɵɵlistener("click", function UsersComponent_ng_template_14_Template_abp_button_click_3_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "AbpIdentity::Cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r1.form?.invalid);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 5, "AbpIdentity::Save"));
  }
}
function UsersComponent_abp_permission_management_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-permission-management", 30, 4);
    ɵɵlistener("abpInit", function UsersComponent_abp_permission_management_16_Template_abp_permission_management_abpInit_0_listener() {
      const init_r9 = ɵɵrestoreView(_r8).initTemplate;
      const abpPermissionManagement_r10 = ɵɵreference(1);
      return ɵɵresetView(init_r9(abpPermissionManagement_r10));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("entityDisplayName", ctx_r1.entityDisplayName);
  }
}
var RolesComponent = class _RolesComponent {
  constructor() {
    this.list = inject(ListService);
    this.confirmationService = inject(ConfirmationService);
    this.toasterService = inject(ToasterService);
    this.injector = inject(Injector);
    this.service = inject(IdentityRoleService);
    this.data = toSignal(this.list.hookToQuery((query) => this.service.getList(query)), {
      initialValue: {
        items: [],
        totalCount: 0
      }
    });
    this.isModalVisible = signal(
      false,
      ...ngDevMode ? [{
        debugName: "isModalVisible"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visiblePermissions = signal(
      false,
      ...ngDevMode ? [{
        debugName: "visiblePermissions"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.modalBusy = signal(
      false,
      ...ngDevMode ? [{
        debugName: "modalBusy"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.permissionManagementKey = "PermissionManagement.PermissionManagementComponent";
    this.onVisiblePermissionChange = (event) => {
      this.visiblePermissions.set(event);
    };
  }
  buildForm() {
    const data = new FormPropData(this.injector, this.selected);
    this.form = generateFormFromProps(data);
  }
  openModal() {
    this.buildForm();
    this.isModalVisible.set(true);
  }
  add() {
    this.selected = {};
    this.openModal();
  }
  edit(id) {
    this.service.get(id).subscribe((res) => {
      this.selected = res;
      this.openModal();
    });
  }
  save() {
    if (!this.form.valid) return;
    this.modalBusy.set(true);
    const {
      id
    } = this.selected || {};
    (id ? this.service.update(id, __spreadValues(__spreadValues({}, this.selected), this.form.value)) : this.service.create(this.form.value)).pipe(finalize(() => this.modalBusy.set(false))).subscribe(() => {
      this.isModalVisible.set(false);
      this.toasterService.success("AbpUi::SavedSuccessfully");
      this.list.get();
    });
  }
  delete(id, name) {
    this.confirmationService.warn("AbpIdentity::RoleDeletionConfirmationMessage", "AbpIdentity::AreYouSure", {
      messageLocalizationParams: [name]
    }).subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.service.delete(id).subscribe(() => {
          this.toasterService.success("AbpUi::DeletedSuccessfully");
          this.list.get();
        });
      }
    });
  }
  openPermissionsModal(providerKey) {
    this.providerKey = providerKey;
    setTimeout(() => {
      this.visiblePermissions.set(true);
    }, 0);
  }
  sort(data) {
    const {
      prop,
      dir
    } = data.sorts[0];
    this.list.sortKey = prop;
    this.list.sortOrder = dir;
  }
  static {
    this.ɵfac = function RolesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RolesComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RolesComponent,
      selectors: [["abp-roles"]],
      features: [ɵɵProvidersFeature([ListService, {
        provide: EXTENSIONS_IDENTIFIER,
        useValue: "Identity.RolesComponent"
        /* eIdentityComponents.Roles */
      }])],
      decls: 13,
      vars: 27,
      consts: [["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], ["abpPermissionManagement", "abpPermissionManagement"], [3, "title", "toolbar"], ["id", "identity-roles-wrapper", 1, "card"], [1, "card-body"], [3, "data", "recordsTotal", "list"], [3, "visibleChange", "visible", "busy"], [3, "abpInit", 4, "abpReplaceableTemplate"], [3, "ngSubmit", "formGroup", "validateOnSubmit"], [3, "selectedRecord"], ["type", "button", "abpClose", "", 1, "btn", "btn-outline-primary"], ["iconClass", "fa fa-check", 3, "click", "disabled"], [3, "abpInit"]],
      template: function RolesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "abp-page", 4);
          ɵɵpipe(1, "abpLocalization");
          ɵɵelementStart(2, "div", 5)(3, "div", 6);
          ɵɵelement(4, "abp-extensible-table", 7);
          ɵɵelementEnd()();
          ɵɵelementStart(5, "abp-modal", 8);
          ɵɵlistener("visibleChange", function RolesComponent_Template_abp_modal_visibleChange_5_listener($event) {
            return ctx.isModalVisible.set($event);
          });
          ɵɵtemplate(6, RolesComponent_ng_template_6_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(8, RolesComponent_ng_template_8_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor)(10, RolesComponent_ng_template_10_Template, 6, 7, "ng-template", null, 2, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
          ɵɵtemplate(12, RolesComponent_abp_permission_management_12_Template, 2, 0, "abp-permission-management", 9);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("title", ɵɵpipeBind1(1, 8, "AbpIdentity::Roles"))("toolbar", ctx.data().items);
          ɵɵadvance(4);
          ɵɵproperty("data", ctx.data().items)("recordsTotal", ctx.data().totalCount)("list", ctx.list);
          ɵɵadvance();
          ɵɵproperty("visible", ctx.isModalVisible())("busy", ctx.modalBusy());
          ɵɵadvance(7);
          ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction3(23, _c6, ɵɵpureFunction4(16, _c4, ɵɵpureFunction0(10, _c03), ɵɵpureFunction1(11, _c13, ctx.providerKey), ɵɵpureFunction1(13, _c23, ctx.visiblePermissions()), ɵɵpureFunction0(15, _c3)), ɵɵpureFunction1(21, _c5, ctx.onVisiblePermissionChange), ctx.permissionManagementKey));
        }
      },
      dependencies: [ReactiveFormsModule, ɵNgNoValidate, NgControlStatusGroup, FormGroupDirective, ExtensibleTableComponent, ModalComponent, ButtonComponent, PageComponent, ExtensibleFormComponent, ModalCloseDirective, PermissionManagementComponent, ReplaceableTemplateDirective, NgxValidateCoreModule, ValidationGroupDirective, InitDirective, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-roles",
      providers: [ListService, {
        provide: EXTENSIONS_IDENTIFIER,
        useValue: "Identity.RolesComponent"
        /* eIdentityComponents.Roles */
      }],
      imports: [ReactiveFormsModule, LocalizationPipe, ExtensibleTableComponent, ModalComponent, ButtonComponent, PageComponent, ExtensibleFormComponent, ModalCloseDirective, PermissionManagementComponent, ReplaceableTemplateDirective, NgxValidateCoreModule, InitDirective],
      template: `<abp-page [title]="'AbpIdentity::Roles' | abpLocalization" [toolbar]="data().items">\r
  <div id="identity-roles-wrapper" class="card">\r
    <div class="card-body">\r
      <abp-extensible-table\r
        [data]="data().items"\r
        [recordsTotal]="data().totalCount"\r
        [list]="list"\r
      />\r
    </div>\r
  </div>\r
\r
  <abp-modal\r
    [visible]="isModalVisible()"\r
    (visibleChange)="isModalVisible.set($event)"\r
    [busy]="modalBusy()"\r
  >\r
    <ng-template #abpHeader>\r
      <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization }}</h3>\r
    </ng-template>\r
\r
    <ng-template #abpBody>\r
      <form [formGroup]="form" (ngSubmit)="save()" [validateOnSubmit]="true">\r
        <abp-extensible-form [selectedRecord]="selected" />\r
      </form>\r
    </ng-template>\r
\r
    <ng-template #abpFooter>\r
      <button type="button" class="btn btn-outline-primary" abpClose>\r
        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r
      </button>\r
      <abp-button iconClass="fa fa-check" [disabled]="form?.invalid" (click)="save()">{{\r
        'AbpIdentity::Save' | abpLocalization\r
      }}</abp-button>\r
    </ng-template>\r
  </abp-modal>\r
\r
  <abp-permission-management\r
    #abpPermissionManagement="abpPermissionManagement"\r
    *abpReplaceableTemplate="\r
      {\r
        inputs: {\r
          providerName: { value: 'R' },\r
          providerKey: { value: providerKey },\r
          visible: { value: visiblePermissions(), twoWay: true },\r
          hideBadges: { value: true },\r
        },\r
        outputs: { visibleChange: onVisiblePermissionChange },\r
        componentKey: permissionManagementKey,\r
      };\r
      let init = initTemplate\r
    "\r
    (abpInit)="init(abpPermissionManagement)"\r
  />\r
</abp-page>\r
`
    }]
  }], null, null);
})();
var UsersComponent = class _UsersComponent {
  constructor() {
    this.list = inject(ListService);
    this.confirmationService = inject(ConfirmationService);
    this.service = inject(IdentityUserService);
    this.toasterService = inject(ToasterService);
    this.fb = inject(UntypedFormBuilder);
    this.injector = inject(Injector);
    this.data = toSignal(this.list.hookToQuery((query) => this.service.getList(query)), {
      initialValue: {
        items: [],
        totalCount: 0
      }
    });
    this.modalContent = viewChild.required(
      "modalContent",
      ...ngDevMode ? [{
        debugName: "modalContent"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectedTab = "user-info";
    this.roles = signal(
      [],
      ...ngDevMode ? [{
        debugName: "roles"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visiblePermissions = signal(
      false,
      ...ngDevMode ? [{
        debugName: "visiblePermissions"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isModalVisible = signal(
      false,
      ...ngDevMode ? [{
        debugName: "isModalVisible"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.modalBusy = signal(
      false,
      ...ngDevMode ? [{
        debugName: "modalBusy"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.permissionManagementKey = "PermissionManagement.PermissionManagementComponent";
    this.inputKey = eFormComponets.FormCheckboxComponent;
    this.trackByFn = (index, item) => Object.keys(item)[0] || index;
    this.onVisiblePermissionChange = (event) => {
      this.visiblePermissions.set(event);
    };
  }
  get roleGroups() {
    return this.form.get("roleNames")?.controls || [];
  }
  buildForm() {
    const data = new FormPropData(this.injector, this.selected);
    this.form = generateFormFromProps(data);
    this.service.getAssignableRoles().subscribe(({
      items
    }) => {
      this.roles.set(items);
      if (items?.length) {
        this.form.addControl("roleNames", this.fb.array(items.map((role) => this.fb.group({
          [role.name]: [this.selected?.id ? !!this.selectedUserRoles?.find((userRole) => userRole.id === role.id) : role.isDefault]
        }))));
      }
    });
  }
  openModal() {
    this.selectedTab = "user-info";
    this.buildForm();
    this.isModalVisible.set(true);
  }
  add() {
    this.selected = {};
    this.selectedUserRoles = [];
    this.openModal();
  }
  edit(id) {
    this.service.get(id).pipe(tap((user) => this.selected = user), switchMap(() => this.service.getRoles(id))).subscribe((userRole) => {
      this.selectedUserRoles = userRole.items || [];
      this.openModal();
    });
  }
  save() {
    if (!this.form.valid || this.modalBusy()) return;
    this.modalBusy.set(true);
    const {
      roleNames = []
    } = this.form.value;
    const mappedRoleNames = roleNames.filter((role) => !!role[Object.keys(role)[0]]).map((role) => Object.keys(role)[0]) || [];
    const {
      id
    } = this.selected || {};
    (id ? this.service.update(id, __spreadProps(__spreadValues(__spreadValues({}, this.selected), this.form.value), {
      roleNames: mappedRoleNames
    })) : this.service.create(__spreadProps(__spreadValues({}, this.form.value), {
      roleNames: mappedRoleNames
    }))).pipe(finalize(() => this.modalBusy.set(false))).subscribe(() => {
      this.isModalVisible.set(false);
      this.toasterService.success("AbpUi::SavedSuccessfully");
      this.list.get();
    });
  }
  delete(id, userName) {
    this.confirmationService.warn("AbpIdentity::UserDeletionConfirmationMessage", "AbpIdentity::AreYouSure", {
      messageLocalizationParams: [userName]
    }).subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.service.delete(id).subscribe(() => {
          this.toasterService.success("AbpUi::DeletedSuccessfully");
          this.list.get();
        });
      }
    });
  }
  sort(data) {
    const {
      prop,
      dir
    } = data.sorts[0];
    this.list.sortKey = prop;
    this.list.sortOrder = dir;
  }
  openPermissionsModal(providerKey, entityDisplayName) {
    this.providerKey = providerKey;
    this.entityDisplayName = entityDisplayName;
    setTimeout(() => {
      this.visiblePermissions.set(true);
    }, 0);
  }
  static {
    this.ɵfac = function UsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsersComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UsersComponent,
      selectors: [["abp-users"]],
      viewQuery: function UsersComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.modalContent, _c7, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      features: [ɵɵProvidersFeature([ListService, {
        provide: EXTENSIONS_IDENTIFIER,
        useValue: "Identity.UsersComponent"
        /* eIdentityComponents.Users */
      }])],
      decls: 17,
      vars: 29,
      consts: [["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], ["newUserNav", "ngbNav"], ["abpPermissionManagement", "abpPermissionManagement"], [3, "title", "toolbar"], ["id", "identity-roles-wrapper", 1, "card"], [1, "card-body"], ["id", "data-tables-table-filter", 1, "data-tables-filter", "mb-3"], [1, "input-group"], ["type", "search", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], [3, "data", "recordsTotal", "list"], [3, "visibleChange", "visible", "busy"], [3, "entityDisplayName", "abpInit", 4, "abpReplaceableTemplate"], [3, "formGroup"], [1, "text-center"], [3, "ngSubmit", "formGroup"], ["ngbNav", "", 1, "nav-tabs", 3, "activeIdChange", "activeId"], ["ngbNavItem", "user-info"], ["ngbNavLink", ""], ["ngbNavContent", ""], ["ngbNavItem", "roles"], [1, "mt-2", "fade-in-top", 3, "ngbNavOutlet"], [3, "selectedRecord"], [1, "form-check", "mb-2", 3, "formGroup"], [3, "checkboxId", "formControlName", "label", 4, "abpReplaceableTemplate"], [3, "checkboxId", "formControlName", "label"], ["aria-hidden", "true", 1, "fa", "fa-pulse", "fa-spinner"], ["type", "button", "abpClose", "", 1, "btn", "btn-outline-primary"], ["iconClass", "fa fa-check", 3, "click", "disabled"], [3, "abpInit", "entityDisplayName"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "abp-page", 5);
          ɵɵpipe(1, "abpLocalization");
          ɵɵelementStart(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "input", 10);
          ɵɵpipe(7, "abpLocalization");
          ɵɵtwoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_6_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.list.filter, $event) || (ctx.list.filter = $event);
            return ɵɵresetView($event);
          });
          ɵɵelementEnd();
          ɵɵcontrolCreate();
          ɵɵelementEnd()();
          ɵɵelement(8, "abp-extensible-table", 11);
          ɵɵelementEnd()();
          ɵɵelementStart(9, "abp-modal", 12);
          ɵɵlistener("visibleChange", function UsersComponent_Template_abp_modal_visibleChange_9_listener($event) {
            return ctx.isModalVisible.set($event);
          });
          ɵɵtemplate(10, UsersComponent_ng_template_10_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(12, UsersComponent_ng_template_12_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(14, UsersComponent_ng_template_14_Template, 6, 7, "ng-template", null, 2, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
          ɵɵtemplate(16, UsersComponent_abp_permission_management_16_Template, 2, 1, "abp-permission-management", 13);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("title", ɵɵpipeBind1(1, 10, "AbpIdentity::Users"))("toolbar", ctx.data().items);
          ɵɵadvance(6);
          ɵɵproperty("placeholder", ɵɵpipeBind1(7, 12, "AbpUi::PagerSearch"));
          ɵɵtwoWayProperty("ngModel", ctx.list.filter);
          ɵɵcontrol();
          ɵɵadvance(2);
          ɵɵproperty("data", ctx.data().items)("recordsTotal", ctx.data().totalCount)("list", ctx.list);
          ɵɵadvance();
          ɵɵproperty("visible", ctx.isModalVisible())("busy", ctx.modalBusy());
          ɵɵadvance(7);
          ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction3(25, _c6, ɵɵpureFunction3(19, _c9, ɵɵpureFunction0(14, _c8), ɵɵpureFunction1(15, _c13, ctx.providerKey), ɵɵpureFunction1(17, _c23, ctx.visiblePermissions())), ɵɵpureFunction1(23, _c5, ctx.onVisiblePermissionChange), ctx.permissionManagementKey));
        }
      },
      dependencies: [ReactiveFormsModule, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, PermissionManagementComponent, PageComponent, NgbDropdownModule, NgbNavModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, NgxValidateCoreModule, ValidationGroupDirective, ValidationDirective, ExtensibleTableComponent, ModalComponent, ExtensibleFormComponent, FormCheckboxComponent, ButtonComponent, ReplaceableTemplateDirective, ModalCloseDirective, InitDirective, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-users",
      providers: [ListService, {
        provide: EXTENSIONS_IDENTIFIER,
        useValue: "Identity.UsersComponent"
        /* eIdentityComponents.Users */
      }],
      imports: [ReactiveFormsModule, FormsModule, PermissionManagementComponent, PageComponent, NgbDropdownModule, NgbNavModule, NgxValidateCoreModule, LocalizationPipe, ExtensibleTableComponent, ModalComponent, ExtensibleFormComponent, FormCheckboxComponent, ButtonComponent, ReplaceableTemplateDirective, ModalCloseDirective, InitDirective],
      template: `<abp-page [title]="'AbpIdentity::Users' | abpLocalization" [toolbar]="data().items">\r
  <div id="identity-roles-wrapper" class="card">\r
    <div class="card-body">\r
      <div id="data-tables-table-filter" class="data-tables-filter mb-3">\r
        <div class="input-group">\r
          <input\r
            type="search"\r
            class="form-control"\r
            [placeholder]="'AbpUi::PagerSearch' | abpLocalization"\r
            [(ngModel)]="list.filter"\r
          />\r
        </div>\r
      </div>\r
\r
      <abp-extensible-table\r
        [data]="data().items"\r
        [recordsTotal]="data().totalCount"\r
        [list]="list"\r
      />\r
    </div>\r
  </div>\r
\r
  <abp-modal\r
    [visible]="isModalVisible()"\r
    (visibleChange)="isModalVisible.set($event)"\r
    [busy]="modalBusy()"\r
  >\r
    <ng-template #abpHeader>\r
      <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\r
    </ng-template>\r
\r
    <ng-template #abpBody>\r
      @if (form) {\r
        <form [formGroup]="form" (ngSubmit)="save()">\r
          <ul ngbNav #newUserNav="ngbNav" class="nav-tabs" [(activeId)]="selectedTab">\r
            <li ngbNavItem="user-info">\r
              <a ngbNavLink>{{ 'AbpIdentity::UserInformations' | abpLocalization }}</a>\r
              <ng-template ngbNavContent>\r
                <abp-extensible-form [selectedRecord]="selected" />\r
              </ng-template>\r
            </li>\r
            <li ngbNavItem="roles">\r
              <a ngbNavLink>{{ 'AbpIdentity::Roles' | abpLocalization }}</a>\r
              <ng-template ngbNavContent>\r
                @for (roleGroup of roleGroups; track $index; let i = $index) {\r
                  <div class="form-check mb-2" [formGroup]="roleGroup">\r
                    <abp-checkbox\r
                      *abpReplaceableTemplate="{\r
                        inputs: {\r
                          checkboxId: { value: 'roles-' + i },\r
                          label: { value: roles()[i].name },\r
                          formControl: { value: roleGroup.get(roles()[i].name!), twoWay: true },\r
                        },\r
                        componentKey: inputKey,\r
                      }"\r
                      [checkboxId]="'roles-' + i"\r
                      [formControlName]="roles()[i].name!"\r
                      [label]="roles()[i].name"\r
                    />\r
                  </div>\r
                }\r
              </ng-template>\r
            </li>\r
          </ul>\r
\r
          <div class="mt-2 fade-in-top" [ngbNavOutlet]="newUserNav"></div>\r
        </form>\r
      } @else {\r
        <div class="text-center"><i class="fa fa-pulse fa-spinner" aria-hidden="true"></i></div>\r
      }\r
    </ng-template>\r
\r
    <ng-template #abpFooter>\r
      <button type="button" class="btn btn-outline-primary" abpClose>\r
        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r
      </button>\r
      <abp-button iconClass="fa fa-check" [disabled]="form?.invalid" (click)="save()">{{\r
        'AbpIdentity::Save' | abpLocalization\r
      }}</abp-button>\r
    </ng-template>\r
  </abp-modal>\r
\r
  <abp-permission-management\r
    #abpPermissionManagement="abpPermissionManagement"\r
    *abpReplaceableTemplate="\r
      {\r
        inputs: {\r
          providerName: { value: 'U' },\r
          providerKey: { value: providerKey },\r
          visible: { value: visiblePermissions(), twoWay: true },\r
        },\r
        outputs: { visibleChange: onVisiblePermissionChange },\r
        componentKey: permissionManagementKey,\r
      };\r
      let init = initTemplate\r
    "\r
    [entityDisplayName]="entityDisplayName"\r
    (abpInit)="init(abpPermissionManagement)"\r
  />\r
</abp-page>\r
`
    }]
  }], null, {
    modalContent: [{
      type: ViewChild,
      args: ["modalContent", {
        isSignal: true
      }]
    }]
  });
})();
var DEFAULT_ROLES_ENTITY_ACTIONS = EntityAction.createMany([{
  text: "AbpIdentity::Edit",
  action: (data) => {
    const component = data.getInjected(RolesComponent);
    component.edit(data.record.id || "");
  },
  permission: "AbpIdentity.Roles.Update"
}, {
  text: "AbpIdentity::Permissions",
  action: (data) => {
    const component = data.getInjected(RolesComponent);
    component.openPermissionsModal(data.record.name || "");
  },
  permission: "AbpIdentity.Roles.ManagePermissions"
}, {
  text: "AbpIdentity::Delete",
  action: (data) => {
    const component = data.getInjected(RolesComponent);
    component.delete(data.record.id || "", data.record.name || "");
  },
  permission: "AbpIdentity.Roles.Delete",
  visible: (data) => !data?.record.isStatic
}]);
var DEFAULT_ROLES_ENTITY_PROPS = EntityProp.createMany([{
  type: "string",
  name: "name",
  displayName: "AbpIdentity::RoleName",
  sortable: true,
  valueResolver: (data) => {
    const l10n = data.getInjected(LocalizationService);
    const t = l10n.instant.bind(l10n);
    const {
      isDefault,
      isPublic,
      name
    } = data.record;
    return of(escapeHtmlChars(name) + (isDefault ? `<span class="badge rounded-pill bg-success ms-1">${t("AbpIdentity::DisplayName:IsDefault")}</span>` : "") + (isPublic ? `<span class="badge rounded-pill bg-info ms-1">${t("AbpIdentity::DisplayName:IsPublic")}</span>` : ""));
  }
}]);
var DEFAULT_ROLES_CREATE_FORM_PROPS = FormProp.createMany([{
  type: "string",
  name: "name",
  displayName: "AbpIdentity::RoleName",
  id: "role-name",
  disabled: (data) => data.record && data.record.isStatic,
  validators: () => [Validators.required]
}, {
  type: "boolean",
  name: "isDefault",
  displayName: "AbpIdentity::DisplayName:IsDefault",
  id: "role-is-default",
  defaultValue: false
}, {
  type: "boolean",
  name: "isPublic",
  displayName: "AbpIdentity::DisplayName:IsPublic",
  id: "role-is-public",
  defaultValue: false
}]);
var DEFAULT_ROLES_EDIT_FORM_PROPS = DEFAULT_ROLES_CREATE_FORM_PROPS;
var DEFAULT_ROLES_TOOLBAR_ACTIONS = ToolbarAction.createMany([{
  text: "AbpIdentity::NewRole",
  action: (data) => {
    const component = data.getInjected(RolesComponent);
    component.add();
  },
  permission: "AbpIdentity.Roles.Create",
  icon: "fa fa-plus"
}]);
var DEFAULT_USERS_ENTITY_ACTIONS = EntityAction.createMany([{
  text: "AbpIdentity::Edit",
  action: (data) => {
    const component = data.getInjected(UsersComponent);
    component.edit(data.record.id || "");
  },
  permission: "AbpIdentity.Users.Update"
}, {
  text: "AbpIdentity::Permissions",
  action: (data) => {
    const component = data.getInjected(UsersComponent);
    component.openPermissionsModal(data.record.id || "", data.record.userName);
  },
  permission: "AbpIdentity.Users.ManagePermissions"
}, {
  text: "AbpIdentity::Delete",
  action: (data) => {
    const component = data.getInjected(UsersComponent);
    component.delete(data.record.id || "", data.record.name || data.record.userName || "");
  },
  visible: (data) => {
    const userName = data?.record.userName;
    const configStateService = data?.getInjected(ConfigStateService);
    const currentUser = configStateService?.getOne("currentUser");
    return userName !== currentUser.userName;
  },
  permission: "AbpIdentity.Users.Delete"
}]);
var DEFAULT_USERS_ENTITY_PROPS = EntityProp.createMany([{
  type: "string",
  name: "userName",
  displayName: "AbpIdentity::UserName",
  sortable: true,
  columnWidth: 250,
  valueResolver: (data) => {
    const l10n = data.getInjected(LocalizationService);
    const t = l10n.instant.bind(l10n);
    const inactiveIcon = `<i title="${t("AbpIdentity::ThisUserIsNotActiveMessage")}" class="fas fa-ban text-danger me-1" aria-hidden="true"></i>`;
    return of(`
        ${!data.record.isActive ? inactiveIcon : ""}
        <span class="${!data.record.isActive ? "text-muted" : ""}">${escapeHtmlChars(data.record.userName)}</span>`);
  }
}, {
  type: "string",
  name: "email",
  displayName: "AbpIdentity::EmailAddress",
  sortable: true,
  columnWidth: 250
}, {
  type: "string",
  name: "phoneNumber",
  displayName: "AbpIdentity::PhoneNumber",
  sortable: true,
  columnWidth: 250
}]);
var DEFAULT_USERS_CREATE_FORM_PROPS = FormProp.createMany([{
  type: "string",
  name: "userName",
  displayName: "AbpIdentity::UserName",
  id: "user-name",
  validators: () => [Validators.required, Validators.maxLength(256)]
}, {
  type: "passwordinputgroup",
  name: "password",
  displayName: "AbpIdentity::Password",
  id: "password",
  autocomplete: "new-password",
  validators: (data) => [Validators.required, ...getPasswordValidators({
    get: data.getInjected
  })]
}, {
  type: "string",
  name: "name",
  displayName: "AbpIdentity::DisplayName:Name",
  id: "name",
  validators: () => [Validators.maxLength(64)]
}, {
  type: "string",
  name: "surname",
  displayName: "AbpIdentity::DisplayName:Surname",
  id: "surname",
  validators: () => [Validators.maxLength(64)]
}, {
  type: "email",
  name: "email",
  displayName: "AbpIdentity::EmailAddress",
  id: "email",
  validators: () => [Validators.required, Validators.maxLength(256), Validators.email]
}, {
  type: "string",
  name: "phoneNumber",
  displayName: "AbpIdentity::PhoneNumber",
  id: "phone-number",
  validators: () => [Validators.maxLength(16)]
}, {
  type: "boolean",
  name: "isActive",
  displayName: "AbpIdentity::DisplayName:IsActive",
  id: "active-checkbox",
  defaultValue: true
}, {
  type: "boolean",
  name: "lockoutEnabled",
  displayName: "AbpIdentity::DisplayName:LockoutEnabled",
  id: "lockout-checkbox",
  defaultValue: true
}]);
var DEFAULT_USERS_EDIT_FORM_PROPS = DEFAULT_USERS_CREATE_FORM_PROPS.map((prop) => {
  if (prop.name === "password") {
    return __spreadProps(__spreadValues({}, prop), {
      validators: (data) => [...getPasswordValidators({
        get: data.getInjected
      })]
    });
  }
  if (prop.name === "isActive") {
    return __spreadProps(__spreadValues({}, prop), {
      visible: (data) => {
        const configState = data.getInjected(ConfigStateService);
        const currentUserId = configState.getDeep("currentUser.id");
        return currentUserId !== data.record.id;
      }
    });
  }
  return prop;
});
var DEFAULT_USERS_TOOLBAR_ACTIONS = ToolbarAction.createMany([{
  text: "AbpIdentity::NewUser",
  action: (data) => {
    const component = data.getInjected(UsersComponent);
    component.add();
  },
  permission: "AbpIdentity.Users.Create",
  icon: "fa fa-plus"
}]);
var DEFAULT_IDENTITY_ENTITY_ACTIONS = {
  [
    "Identity.RolesComponent"
    /* eIdentityComponents.Roles */
  ]: DEFAULT_ROLES_ENTITY_ACTIONS,
  [
    "Identity.UsersComponent"
    /* eIdentityComponents.Users */
  ]: DEFAULT_USERS_ENTITY_ACTIONS
};
var DEFAULT_IDENTITY_TOOLBAR_ACTIONS = {
  [
    "Identity.RolesComponent"
    /* eIdentityComponents.Roles */
  ]: DEFAULT_ROLES_TOOLBAR_ACTIONS,
  [
    "Identity.UsersComponent"
    /* eIdentityComponents.Users */
  ]: DEFAULT_USERS_TOOLBAR_ACTIONS
};
var DEFAULT_IDENTITY_ENTITY_PROPS = {
  [
    "Identity.RolesComponent"
    /* eIdentityComponents.Roles */
  ]: DEFAULT_ROLES_ENTITY_PROPS,
  [
    "Identity.UsersComponent"
    /* eIdentityComponents.Users */
  ]: DEFAULT_USERS_ENTITY_PROPS
};
var DEFAULT_IDENTITY_CREATE_FORM_PROPS = {
  [
    "Identity.RolesComponent"
    /* eIdentityComponents.Roles */
  ]: DEFAULT_ROLES_CREATE_FORM_PROPS,
  [
    "Identity.UsersComponent"
    /* eIdentityComponents.Users */
  ]: DEFAULT_USERS_CREATE_FORM_PROPS
};
var DEFAULT_IDENTITY_EDIT_FORM_PROPS = {
  [
    "Identity.RolesComponent"
    /* eIdentityComponents.Roles */
  ]: DEFAULT_ROLES_EDIT_FORM_PROPS,
  [
    "Identity.UsersComponent"
    /* eIdentityComponents.Users */
  ]: DEFAULT_USERS_EDIT_FORM_PROPS
};
var IDENTITY_ENTITY_ACTION_CONTRIBUTORS = new InjectionToken("IDENTITY_ENTITY_ACTION_CONTRIBUTORS");
var IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS = new InjectionToken("IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS");
var IDENTITY_ENTITY_PROP_CONTRIBUTORS = new InjectionToken("IDENTITY_ENTITY_PROP_CONTRIBUTORS");
var IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS = new InjectionToken("IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS");
var IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS = new InjectionToken("IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS");
var IdentityExtensionsGuard = class _IdentityExtensionsGuard {
  constructor() {
    this.injector = inject(Injector);
    this.extensions = inject(ExtensionsService);
  }
  canActivate() {
    const config = {
      optional: true
    };
    const actionContributors = inject(IDENTITY_ENTITY_ACTION_CONTRIBUTORS, config) || {};
    const toolbarContributors = inject(IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS, config) || {};
    const propContributors = inject(IDENTITY_ENTITY_PROP_CONTRIBUTORS, config) || {};
    const createFormContributors = inject(IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS, config) || {};
    const editFormContributors = inject(IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS, config) || {};
    return getObjectExtensionEntitiesFromStore(this.injector, "Identity").pipe(map((entities) => ({
      [
        "Identity.RolesComponent"
        /* eIdentityComponents.Roles */
      ]: entities.Role,
      [
        "Identity.UsersComponent"
        /* eIdentityComponents.Users */
      ]: entities.User
    })), mapEntitiesToContributors(this.injector, "AbpIdentity"), tap((objectExtensionContributors) => {
      mergeWithDefaultActions(this.extensions.entityActions, DEFAULT_IDENTITY_ENTITY_ACTIONS, actionContributors);
      mergeWithDefaultActions(this.extensions.toolbarActions, DEFAULT_IDENTITY_TOOLBAR_ACTIONS, toolbarContributors);
      mergeWithDefaultProps(this.extensions.entityProps, DEFAULT_IDENTITY_ENTITY_PROPS, objectExtensionContributors.prop, propContributors);
      mergeWithDefaultProps(this.extensions.createFormProps, DEFAULT_IDENTITY_CREATE_FORM_PROPS, objectExtensionContributors.createForm, createFormContributors);
      mergeWithDefaultProps(this.extensions.editFormProps, DEFAULT_IDENTITY_EDIT_FORM_PROPS, objectExtensionContributors.editForm, editFormContributors);
    }), map(() => true));
  }
  static {
    this.ɵfac = function IdentityExtensionsGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IdentityExtensionsGuard)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _IdentityExtensionsGuard,
      factory: _IdentityExtensionsGuard.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityExtensionsGuard, [{
    type: Injectable
  }], null, null);
})();
var identityExtensionsResolver = () => {
  const extensions = inject(ExtensionsService);
  const config = {
    optional: true
  };
  const actionContributors = inject(IDENTITY_ENTITY_ACTION_CONTRIBUTORS, config) || {};
  const toolbarContributors = inject(IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS, config) || {};
  const propContributors = inject(IDENTITY_ENTITY_PROP_CONTRIBUTORS, config) || {};
  const createFormContributors = inject(IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS, config) || {};
  const editFormContributors = inject(IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS, config) || {};
  const injector = inject(Injector);
  return getObjectExtensionEntitiesFromStore(injector, "Identity").pipe(map((entities) => ({
    [
      "Identity.RolesComponent"
      /* eIdentityComponents.Roles */
    ]: entities.Role,
    [
      "Identity.UsersComponent"
      /* eIdentityComponents.Users */
    ]: entities.User
  })), mapEntitiesToContributors(injector, "AbpIdentity"), tap((objectExtensionContributors) => {
    mergeWithDefaultActions(extensions.entityActions, DEFAULT_IDENTITY_ENTITY_ACTIONS, actionContributors);
    mergeWithDefaultActions(extensions.toolbarActions, DEFAULT_IDENTITY_TOOLBAR_ACTIONS, toolbarContributors);
    mergeWithDefaultProps(extensions.entityProps, DEFAULT_IDENTITY_ENTITY_PROPS, objectExtensionContributors.prop, propContributors);
    mergeWithDefaultProps(extensions.createFormProps, DEFAULT_IDENTITY_CREATE_FORM_PROPS, objectExtensionContributors.createForm, createFormContributors);
    mergeWithDefaultProps(extensions.editFormProps, DEFAULT_IDENTITY_EDIT_FORM_PROPS, objectExtensionContributors.editForm, editFormContributors);
  }));
};
var routes = [{
  path: "",
  redirectTo: "roles",
  pathMatch: "full"
}, {
  path: "",
  component: RouterOutletComponent,
  canActivate: [authGuard, permissionGuard],
  resolve: [identityExtensionsResolver],
  children: [{
    path: "roles",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpIdentity.Roles",
      replaceableComponent: {
        key: "Identity.RolesComponent",
        defaultComponent: RolesComponent
      }
    },
    title: "AbpIdentity::Roles"
  }, {
    path: "users",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpIdentity.Users",
      replaceableComponent: {
        key: "Identity.UsersComponent",
        defaultComponent: UsersComponent
      }
    },
    title: "AbpIdentity::Users"
  }]
}];
var IdentityRoutingModule = class _IdentityRoutingModule {
  static {
    this.ɵfac = function IdentityRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IdentityRoutingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _IdentityRoutingModule,
      imports: [RouterModule],
      exports: [RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [RouterModule.forChild(routes), RouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
var IdentityModule = class _IdentityModule {
  static forChild(options = {}) {
    return {
      ngModule: _IdentityModule,
      providers: [{
        provide: IDENTITY_ENTITY_ACTION_CONTRIBUTORS,
        useValue: options.entityActionContributors
      }, {
        provide: IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS,
        useValue: options.toolbarActionContributors
      }, {
        provide: IDENTITY_ENTITY_PROP_CONTRIBUTORS,
        useValue: options.entityPropContributors
      }, {
        provide: IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS,
        useValue: options.createFormPropContributors
      }, {
        provide: IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS,
        useValue: options.editFormPropContributors
      }, IdentityExtensionsGuard]
    };
  }
  /**
   * @deprecated `IdentityModule.forLazy()` is deprecated. You can use `createRoutes` **function** instead.
   */
  static forLazy(options = {}) {
    return new LazyModuleFactory(_IdentityModule.forChild(options));
  }
  static {
    this.ɵfac = function IdentityModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IdentityModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _IdentityModule,
      imports: [IdentityRoutingModule, RolesComponent, UsersComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [IdentityRoutingModule, RolesComponent, UsersComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      exports: [],
      imports: [IdentityRoutingModule, RolesComponent, UsersComponent]
    }]
  }], null, null);
})();
function provideIdentity(options = {}) {
  return [{
    provide: IDENTITY_ENTITY_ACTION_CONTRIBUTORS,
    useValue: options.entityActionContributors
  }, {
    provide: IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS,
    useValue: options.toolbarActionContributors
  }, {
    provide: IDENTITY_ENTITY_PROP_CONTRIBUTORS,
    useValue: options.entityPropContributors
  }, {
    provide: IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS,
    useValue: options.createFormPropContributors
  }, {
    provide: IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS,
    useValue: options.editFormPropContributors
  }];
}
var createRoutes = (options = {}) => [{
  path: "",
  component: RouterOutletComponent,
  canActivate: [authGuard, permissionGuard],
  resolve: [identityExtensionsResolver],
  providers: provideIdentity(options),
  children: [{
    path: "",
    redirectTo: "roles",
    pathMatch: "full"
  }, {
    path: "roles",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpIdentity.Roles",
      replaceableComponent: {
        key: "Identity.RolesComponent",
        defaultComponent: RolesComponent
      }
    },
    title: "AbpIdentity::Roles"
  }, {
    path: "users",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpIdentity.Users",
      replaceableComponent: {
        key: "Identity.UsersComponent",
        defaultComponent: UsersComponent
      }
    },
    title: "AbpIdentity::Users"
  }]
}];
export {
  DEFAULT_IDENTITY_CREATE_FORM_PROPS,
  DEFAULT_IDENTITY_EDIT_FORM_PROPS,
  DEFAULT_IDENTITY_ENTITY_ACTIONS,
  DEFAULT_IDENTITY_ENTITY_PROPS,
  DEFAULT_IDENTITY_TOOLBAR_ACTIONS,
  IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS,
  IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS,
  IDENTITY_ENTITY_ACTION_CONTRIBUTORS,
  IDENTITY_ENTITY_PROP_CONTRIBUTORS,
  IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS,
  IdentityExtensionsGuard,
  IdentityModule,
  RolesComponent,
  UsersComponent,
  createRoutes,
  identityExtensionsResolver,
  provideIdentity
};
//# sourceMappingURL=@abp_ng__identity.js.map
