import {
  SettingTabsService
} from "./chunk-FTPM2NMA.js";
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
import "./chunk-ZVIHN2OM.js";
import "./chunk-6MBLSBLR.js";
import "./chunk-ORSPOGRK.js";
import "./chunk-5FWCSE5I.js";
import "./chunk-T2QD5I46.js";
import {
  ForDirective,
  LazyModuleFactory,
  LocalizationPipe,
  PermissionDirective,
  ReplaceableRouteContainerComponent,
  RouterOutletComponent,
  authGuard
} from "./chunk-NI4ZFAY4.js";
import {
  RouterModule
} from "./chunk-VHKPOJBK.js";
import "./chunk-LMDSVWKI.js";
import "./chunk-KEK2ONVT.js";
import "./chunk-T5EWVHFZ.js";
import {
  NgComponentOutlet
} from "./chunk-IMWYUKDZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-EZ2ZVKYO.js";
import {
  toSignal
} from "./chunk-HM3VFUK5.js";
import {
  effect,
  inject,
  signal,
  ɵɵdefineInjector,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-TVT7XMKI.js";
import "./chunk-3RPBTBI6.js";

// node_modules/@abp/ng.setting-management/fesm2022/abp-ng.setting-management.mjs
function SettingManagementComponent_Conditional_5_ng_container_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12, 0);
    ɵɵlistener("click", function SettingManagementComponent_Conditional_5_ng_container_3_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const setting_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.selected.set(setting_r2));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ɵɵreference(1);
    const setting_r2 = ɵɵnextContext().$implicit;
    ɵɵclassProp("active", tab_r4.selected());
    ɵɵproperty("value", setting_r2.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, setting_r2.name), " ");
  }
}
function SettingManagementComponent_Conditional_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SettingManagementComponent_Conditional_5_ng_container_3_button_1_Template, 4, 6, "button", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const setting_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("abpPermission", setting_r2.requiredPolicy);
  }
}
function SettingManagementComponent_Conditional_5_ng_container_5_div_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SettingManagementComponent_Conditional_5_ng_container_5_div_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SettingManagementComponent_Conditional_5_ng_container_5_div_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const setting_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngComponentOutlet", setting_r5.component);
  }
}
function SettingManagementComponent_Conditional_5_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, SettingManagementComponent_Conditional_5_ng_container_5_div_1_ng_template_1_Template, 1, 1, "ng-template", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const setting_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("value", setting_r5.name);
  }
}
function SettingManagementComponent_Conditional_5_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SettingManagementComponent_Conditional_5_ng_container_5_div_1_Template, 2, 1, "div", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const setting_r5 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("abpPermission", setting_r5.requiredPolicy);
  }
}
function SettingManagementComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "div", 7)(2, "div", 8);
    ɵɵtemplate(3, SettingManagementComponent_Conditional_5_ng_container_3_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd()();
    ɵɵelementStart(4, "div", 10);
    ɵɵtemplate(5, SettingManagementComponent_Conditional_5_ng_container_5_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("selectedTab", ctx_r2.selected()?.name);
    ɵɵadvance();
    ɵɵproperty("abpForOf", ctx_r2.settings());
    ɵɵadvance(2);
    ɵɵproperty("abpForOf", ctx_r2.settings());
  }
}
function SettingManagementComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelement(1, "i", 17);
    ɵɵelementStart(2, "p", 18);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 1, "AbpSettingManagement::NoSettingsAvailable"), " ");
  }
}
var SettingManagementComponent = class _SettingManagementComponent {
  constructor() {
    this.settingTabsService = inject(SettingTabsService);
    this.settings = toSignal(this.settingTabsService.visible$, {
      initialValue: []
    });
    this.selected = signal(
      void 0,
      ...ngDevMode ? [{
        debugName: "selected"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const settings = this.settings();
      if (!this.selected() && settings.length) {
        this.selected.set(settings[0]);
      }
    });
  }
  static {
    this.ɵfac = function SettingManagementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingManagementComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SettingManagementComponent,
      selectors: [["abp-setting-management"]],
      decls: 7,
      vars: 4,
      consts: [["tab", "ngTab"], [3, "title"], ["id", "SettingManagementWrapper"], [1, "card"], [1, "card-body"], ["ngTabs", "", 1, "row"], [1, "text-center", "text-muted", "py-5"], [1, "col-12", "col-md-3", "mb-2", "mb-md-0"], ["id", "nav-tab", "ngTabList", "", "orientation", "vertical", 1, "nav", "flex-column", "nav-pills", 3, "selectedTab"], [4, "abpFor", "abpForOf"], [1, "col-12", "col-md-9"], ["ngTab", "", "class", "nav-link text-start", 3, "value", "active", "click", 4, "abpPermission"], ["ngTab", "", 1, "nav-link", "text-start", 3, "click", "value"], ["ngTabPanel", "", "class", "tab-pane", 3, "value", 4, "abpPermission"], ["ngTabPanel", "", 1, "tab-pane", 3, "value"], ["ngTabContent", ""], [4, "ngComponentOutlet"], ["aria-hidden", "true", 1, "bi", "bi-gear-fill", 2, "font-size", "3rem", "opacity", "0.4"], [1, "mt-3", "mb-0"]],
      template: function SettingManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "abp-page", 1);
          ɵɵpipe(1, "abpLocalization");
          ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
          ɵɵconditionalCreate(5, SettingManagementComponent_Conditional_5_Template, 6, 3, "div", 5)(6, SettingManagementComponent_Conditional_6_Template, 5, 3, "div", 6);
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          ɵɵproperty("title", ɵɵpipeBind1(1, 2, "AbpSettingManagement::Settings"));
          ɵɵadvance(5);
          ɵɵconditional(ctx.settings().length ? 5 : 6);
        }
      },
      dependencies: [NgComponentOutlet, PageComponent, PermissionDirective, ForDirective, Tabs, TabList, Tab, TabPanel, TabContent, LocalizationPipe],
      styles: ["[_nghost-%COMP%]   [ngTabPanel][inert][_ngcontent-%COMP%]{display:none}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingManagementComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-setting-management",
      imports: [NgComponentOutlet, PageComponent, LocalizationPipe, PermissionDirective, ForDirective, Tabs, TabList, Tab, TabPanel, TabContent],
      template: `<abp-page [title]="'AbpSettingManagement::Settings' | abpLocalization">\r
  <div id="SettingManagementWrapper">\r
    <div class="card">\r
      <div class="card-body">\r
        @if (settings().length) {\r
          <div class="row" ngTabs>\r
            <div class="col-12 col-md-3 mb-2 mb-md-0">\r
              <div\r
                class="nav flex-column nav-pills"\r
                id="nav-tab"\r
                ngTabList\r
                orientation="vertical"\r
                [selectedTab]="selected()?.name"\r
              >\r
                <ng-container *abpFor="let setting of settings()">\r
                  <button\r
                    ngTab\r
                    #tab="ngTab"\r
                    [value]="setting.name"\r
                    (click)="selected.set(setting)"\r
                    class="nav-link text-start"\r
                    [class.active]="tab.selected()"\r
                    *abpPermission="setting.requiredPolicy"\r
                  >\r
                    {{ setting.name | abpLocalization }}\r
                  </button>\r
                </ng-container>\r
              </div>\r
            </div>\r
            <div class="col-12 col-md-9">\r
              <ng-container *abpFor="let setting of settings()">\r
                <div\r
                  ngTabPanel\r
                  [value]="setting.name"\r
                  class="tab-pane"\r
                  *abpPermission="setting.requiredPolicy"\r
                >\r
                  <ng-template ngTabContent>\r
                    <ng-container *ngComponentOutlet="setting.component" />\r
                  </ng-template>\r
                </div>\r
              </ng-container>\r
            </div>\r
          </div>\r
        } @else {\r
          <div class="text-center text-muted py-5">\r
            <i class="bi bi-gear-fill" style="font-size: 3rem; opacity: 0.4" aria-hidden="true"></i>\r
            <p class="mt-3 mb-0">\r
              {{ 'AbpSettingManagement::NoSettingsAvailable' | abpLocalization }}\r
            </p>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
</abp-page>\r
`,
      styles: [":host [ngTabPanel][inert]{display:none}\n"]
    }]
  }], () => [], null);
})();
var routes = [{
  path: "",
  component: RouterOutletComponent,
  canActivate: [authGuard],
  children: [{
    path: "",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpAccount.SettingManagement",
      replaceableComponent: {
        key: "SettingManagement.SettingManagementComponent",
        defaultComponent: SettingManagementComponent
      }
    }
  }],
  title: "AbpSettingManagement::Settings"
}];
var SettingManagementRoutingModule = class _SettingManagementRoutingModule {
  static {
    this.ɵfac = function SettingManagementRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingManagementRoutingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SettingManagementRoutingModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingManagementRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
var SETTING_MANAGEMENT_MODULE_EXPORTS = [SettingManagementComponent];
var SettingManagementModule = class _SettingManagementModule {
  static forChild() {
    return {
      ngModule: _SettingManagementModule,
      providers: []
    };
  }
  /**
   * @deprecated `SettingManagementModule.forLazy()` is deprecated. You can use `createRoutes` **function** instead.
   */
  static forLazy() {
    return new LazyModuleFactory(_SettingManagementModule.forChild());
  }
  static {
    this.ɵfac = function SettingManagementModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingManagementModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SettingManagementModule,
      imports: [SettingManagementRoutingModule, SettingManagementComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [SettingManagementRoutingModule, SETTING_MANAGEMENT_MODULE_EXPORTS]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingManagementModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      exports: [],
      imports: [SettingManagementRoutingModule, ...SETTING_MANAGEMENT_MODULE_EXPORTS]
    }]
  }], null, null);
})();
function provideSettingManagement() {
  return [];
}
var createRoutes = () => [{
  path: "",
  component: RouterOutletComponent,
  canActivate: [authGuard],
  providers: provideSettingManagement(),
  children: [{
    path: "",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpAccount.SettingManagement",
      replaceableComponent: {
        key: "SettingManagement.SettingManagementComponent",
        defaultComponent: SettingManagementComponent
      }
    }
  }],
  title: "AbpSettingManagement::Settings"
}];
export {
  SETTING_MANAGEMENT_MODULE_EXPORTS,
  SettingManagementComponent,
  SettingManagementModule,
  createRoutes,
  provideSettingManagement
};
//# sourceMappingURL=@abp_ng__setting-management.js.map
