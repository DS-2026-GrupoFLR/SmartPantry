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
  ButtonComponent,
  Confirmation,
  ConfirmationService,
  ModalCloseDirective,
  ModalComponent,
  ToasterService
} from "./chunk-6MBLSBLR.js";
import {
  ConfigStateService,
  LocalizationPipe,
  ReplaceableTemplateDirective,
  RestService,
  TrackByService
} from "./chunk-NI4ZFAY4.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-T5EWVHFZ.js";
import {
  NgTemplateOutlet
} from "./chunk-IMWYUKDZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Injectable,
  Input,
  NgModule,
  Output,
  Renderer2,
  input,
  output,
  provideAppInitializer,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EZ2ZVKYO.js";
import {
  DOCUMENT,
  effect,
  finalize,
  inject,
  makeEnvironmentProviders,
  signal,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-TVT7XMKI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/@abp/ng.feature-management/fesm2022/abp-ng.feature-management-proxy.mjs
var FeaturesService = class _FeaturesService {
  constructor() {
    this.restService = inject(RestService);
    this.apiName = "AbpFeatureManagement";
    this.delete = (providerName, providerKey) => this.restService.request({
      method: "DELETE",
      url: "/api/feature-management/features",
      params: {
        providerName,
        providerKey
      }
    }, {
      apiName: this.apiName
    });
    this.get = (providerName, providerKey) => this.restService.request({
      method: "GET",
      url: "/api/feature-management/features",
      params: {
        providerName,
        providerKey
      }
    }, {
      apiName: this.apiName
    });
    this.update = (providerName, providerKey, input2) => this.restService.request({
      method: "PUT",
      url: "/api/feature-management/features",
      params: {
        providerName,
        providerKey
      },
      body: input2
    }, {
      apiName: this.apiName
    });
  }
  static {
    this.ɵfac = function FeaturesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeaturesService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FeaturesService,
      factory: _FeaturesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var index = Object.freeze({
  __proto__: null
});

// node_modules/@abp/ng.feature-management/fesm2022/abp-ng.feature-management.mjs
var _c0 = () => ({
  size: "lg"
});
var _c1 = (a0) => ({
  $implicit: a0
});
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.name || $index;
var _forTrack2 = ($index, $item) => $item.value;
function FeatureManagementComponent_Conditional_0_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵtextInterpolate1(" - ", ctx_r1.providerTitle(), " ");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵconditionalCreate(3, FeatureManagementComponent_Conditional_0_ng_template_1_Conditional_3_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpFeatureManagement::Features"), " ");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.providerTitle() ? 3 : -1);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 15, 4);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    const tab_r5 = ɵɵreference(1);
    ɵɵclassProp("active", tab_r5.selected());
    ɵɵproperty("value", group_r4.displayName);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", group_r4.displayName, " ");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "small", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const description_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(description_r6);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_ng_template_5_Conditional_0_Template, 2, 1, "small", 16);
  }
  if (rf & 2) {
    const description_r6 = ctx.$implicit;
    ɵɵconditional(description_r6 ? 0 : -1);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const provider_r10 = ɵɵreadContextLet(0);
    ɵɵadvance();
    ɵɵtextInterpolate1("(", provider_r10, ")");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 23)(1, "input", 24);
    ɵɵtwoWayListener("ngModelChange", function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_3_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r8);
      const feature_r9 = ɵɵnextContext().$implicit;
      ɵɵtwoWayBindingSet(feature_r9.value, $event) || (feature_r9.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("ngModelChange", function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_3_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r8);
      const feature_r9 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.onCheckboxClick($event, feature_r9));
    });
    ɵɵelementEnd();
    ɵɵcontrolCreate();
    ɵɵelementStart(2, "label", 25);
    ɵɵtext(3);
    ɵɵconditionalCreate(4, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_3_Conditional_4_Template, 2, 1, "span");
    ɵɵelementEnd();
    ɵɵtemplate(5, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_3_ng_container_5_Template, 1, 0, "ng-container", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const feature_r9 = ɵɵnextContext().$implicit;
    const isFeatureDisabled_r11 = ɵɵreadContextLet(1);
    ɵɵnextContext(3);
    const descTmp_r12 = ɵɵreference(6);
    ɵɵclassProp("px-4", !!feature_r9.parentName);
    ɵɵadvance();
    ɵɵproperty("id", feature_r9.name);
    ɵɵtwoWayProperty("ngModel", feature_r9.value);
    ɵɵproperty("disabled", isFeatureDisabled_r11);
    ɵɵcontrol();
    ɵɵadvance();
    ɵɵproperty("htmlFor", feature_r9.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", feature_r9.displayName, " ");
    ɵɵadvance();
    ɵɵconditional(isFeatureDisabled_r11 ? 4 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", descTmp_r12)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c1, feature_r9.description));
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const provider_r10 = ɵɵreadContextLet(0);
    ɵɵadvance();
    ɵɵtextInterpolate1("(", provider_r10, ")");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 27)(1, "label", 28);
    ɵɵtext(2);
    ɵɵconditionalCreate(3, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_4_Conditional_3_Template, 2, 1, "span");
    ɵɵelementEnd();
    ɵɵelementStart(4, "input", 29);
    ɵɵtwoWayListener("ngModelChange", function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_4_Template_input_ngModelChange_4_listener($event) {
      ɵɵrestoreView(_r13);
      const feature_r9 = ɵɵnextContext().$implicit;
      ɵɵtwoWayBindingSet(feature_r9.value, $event) || (feature_r9.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
    ɵɵcontrolCreate();
    ɵɵtemplate(5, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_4_ng_container_5_Template, 1, 0, "ng-container", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const feature_r9 = ɵɵnextContext().$implicit;
    const isFeatureDisabled_r11 = ɵɵreadContextLet(1);
    ɵɵnextContext(3);
    const descTmp_r12 = ɵɵreference(6);
    ɵɵclassProp("px-2", !!feature_r9.parentName);
    ɵɵadvance();
    ɵɵproperty("htmlFor", feature_r9.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", feature_r9.displayName, " ");
    ɵɵadvance();
    ɵɵconditional(isFeatureDisabled_r11 ? 3 : -1);
    ɵɵadvance();
    ɵɵproperty("id", feature_r9.name);
    ɵɵtwoWayProperty("ngModel", feature_r9.value);
    ɵɵproperty("abpFeatureManagementFreeText", feature_r9)("disabled", isFeatureDisabled_r11);
    ɵɵcontrol();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", descTmp_r12)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c1, feature_r9.description));
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_5_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const provider_r10 = ɵɵreadContextLet(0);
    ɵɵadvance();
    ɵɵtextInterpolate1("(", provider_r10, ")");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_5_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 31);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    ɵɵproperty("ngValue", item_r15.value);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, item_r15.displayText?.resourceName + "::" + item_r15.displayText?.name), " ");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_5_Conditional_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 27)(1, "label", 28);
    ɵɵtext(2);
    ɵɵconditionalCreate(3, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_5_Conditional_0_Conditional_3_Template, 2, 1, "span");
    ɵɵelementEnd();
    ɵɵelementStart(4, "select", 30);
    ɵɵtwoWayListener("ngModelChange", function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_5_Conditional_0_Template_select_ngModelChange_4_listener($event) {
      ɵɵrestoreView(_r14);
      const feature_r9 = ɵɵnextContext(2).$implicit;
      ɵɵtwoWayBindingSet(feature_r9.value, $event) || (feature_r9.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵrepeaterCreate(5, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_5_Conditional_0_For_6_Template, 3, 4, "option", 31, _forTrack2);
    ɵɵelementEnd();
    ɵɵcontrolCreate();
    ɵɵtemplate(7, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_5_Conditional_0_ng_container_7_Template, 1, 0, "ng-container", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const feature_r9 = ɵɵnextContext(2).$implicit;
    const isFeatureDisabled_r11 = ɵɵreadContextLet(1);
    ɵɵnextContext(3);
    const descTmp_r12 = ɵɵreference(6);
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassProp("px-2", !!feature_r9.parentName);
    ɵɵadvance();
    ɵɵproperty("htmlFor", feature_r9.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", feature_r9.displayName, " ");
    ɵɵadvance();
    ɵɵconditional(isFeatureDisabled_r11 ? 3 : -1);
    ɵɵadvance();
    ɵɵproperty("id", feature_r9.name);
    ɵɵtwoWayProperty("ngModel", feature_r9.value);
    ɵɵproperty("disabled", isFeatureDisabled_r11);
    ɵɵcontrol();
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.getSelectionItems(feature_r9));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", descTmp_r12)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c1, feature_r9.description));
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_5_Conditional_0_Template, 8, 12, "div", 22);
  }
  if (rf & 2) {
    const feature_r9 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵconditional(ctx_r1.getSelectionItems(feature_r9).length ? 0 : -1);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const feature_r9 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", feature_r9.displayName, " ");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵdeclareLet(0)(1);
    ɵɵelementStart(2, "div", 20);
    ɵɵlistener("keyup.enter", function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Template_div_keyup_enter_2_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵconditionalCreate(3, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_3_Template, 6, 12, "div", 21)(4, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_4_Template, 6, 13, "div", 22)(5, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_5_Template, 1, 1)(6, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Case_6_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_32_0;
    const feature_r9 = ctx.$implicit;
    const group_r16 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    const provider_r17 = ɵɵstoreLet(feature_r9.provider.name);
    ɵɵadvance();
    ɵɵstoreLet(!feature_r9.parentName ? ctx_r1.isParentDisabled(feature_r9.name, group_r16.name, provider_r17) : provider_r17 !== ctx_r1.providerName() && provider_r17 !== ctx_r1.defaultProviderName);
    ɵɵadvance();
    ɵɵstyleMap(feature_r9.style);
    ɵɵadvance();
    ɵɵconditional((tmp_32_0 = feature_r9.valueType?.name) === ctx_r1.valueTypes.ToggleStringValueType ? 3 : tmp_32_0 === ctx_r1.valueTypes.FreeTextStringValueType ? 4 : tmp_32_0 === ctx_r1.valueTypes.SelectionStringValueType ? 5 : 6);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h4");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelement(2, "hr", 18);
    ɵɵrepeaterCreate(3, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_For_4_Template, 7, 5, "div", 19, _forTrack1);
  }
  if (rf & 2) {
    const group_r16 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.selectedGroupDisplayName());
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r1.features()[group_r16.name]);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_ng_template_1_Template, 5, 1, "ng-template", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r16 = ctx.$implicit;
    ɵɵproperty("value", group_r16.displayName);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8)(1, "div", 10)(2, "div", 11);
    ɵɵtwoWayListener("selectedTabChange", function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_Template_div_selectedTabChange_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      ɵɵtwoWayBindingSet(ctx_r1.selectedGroupDisplayName, $event) || (ctx_r1.selectedGroupDisplayName = $event);
      return ɵɵresetView($event);
    });
    ɵɵrepeaterCreate(3, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_Template, 3, 4, "button", 12, _forTrack0);
    ɵɵelementEnd()();
    ɵɵtemplate(5, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_ng_template_5_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementStart(7, "div", 13);
    ɵɵrepeaterCreate(8, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_9_Template, 2, 1, "div", 14, _forTrack0);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtwoWayProperty("selectedTab", ctx_r1.selectedGroupDisplayName);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.groups());
    ɵɵadvance(5);
    ɵɵrepeater(ctx_r1.groups());
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "AbpFeatureManagement::NoFeatureFoundMessage"), " ");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵconditionalCreate(1, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_Template, 10, 1, "div", 8);
    ɵɵconditionalCreate(2, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_2_Template, 3, 3, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.groups().length ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.groups().length ? 2 : -1);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-button", 35);
    ɵɵlistener("click", function FeatureManagementComponent_Conditional_0_ng_template_5_Conditional_3_Template_abp_button_click_0_listener() {
      ɵɵrestoreView(_r18);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.resetToDefault());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r1.modalBusy());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpFeatureManagement::ResetToDefault"), " ");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-button", 36);
    ɵɵlistener("click", function FeatureManagementComponent_Conditional_0_ng_template_5_Conditional_4_Template_abp_button_click_0_listener() {
      ɵɵrestoreView(_r19);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r1.modalBusy());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpFeatureManagement::Save"), " ");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 32);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵconditionalCreate(3, FeatureManagementComponent_Conditional_0_ng_template_5_Conditional_3_Template, 3, 4, "abp-button", 33);
    ɵɵconditionalCreate(4, FeatureManagementComponent_Conditional_0_ng_template_5_Conditional_4_Template, 3, 4, "abp-button", 34);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "AbpFeatureManagement::Cancel"), " ");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.groups().length ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.groups().length ? 4 : -1);
  }
}
function FeatureManagementComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-modal", 6);
    ɵɵtwoWayListener("visibleChange", function FeatureManagementComponent_Conditional_0_Template_abp_modal_visibleChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.visible, $event) || (ctx_r1.visible = $event);
      return ɵɵresetView($event);
    });
    ɵɵtemplate(1, FeatureManagementComponent_Conditional_0_ng_template_1_Template, 4, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, FeatureManagementComponent_Conditional_0_ng_template_3_Template, 3, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor)(5, FeatureManagementComponent_Conditional_0_ng_template_5_Template, 5, 5, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtwoWayProperty("visible", ctx_r1.visible);
    ɵɵproperty("busy", ctx_r1.modalBusy())("options", ɵɵpureFunction0(3, _c0));
  }
}
var _c2 = () => ({
  value: "T"
});
var _c3 = (a0) => ({
  value: a0
});
var _c4 = (a0) => ({
  value: a0,
  twoWay: true
});
var _c5 = (a0, a1, a2) => ({
  providerName: a0,
  providerKey: a1,
  visible: a2
});
var _c6 = (a0) => ({
  visibleChange: a0
});
var _c7 = (a0, a1) => ({
  inputs: a0,
  outputs: a1,
  componentKey: "FeatureManagement.FeatureManagementComponent"
});
function FeatureManagementTabComponent_Conditional_7_abp_feature_management_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-feature-management", 5);
    ɵɵtwoWayListener("visibleChange", function FeatureManagementTabComponent_Conditional_7_abp_feature_management_0_Template_abp_feature_management_visibleChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.visibleFeatures, $event) || (ctx_r1.visibleFeatures = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵtwoWayProperty("visible", ctx_r1.visibleFeatures);
    ɵɵproperty("providerKey", ctx_r1.providerKey);
  }
}
function FeatureManagementTabComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FeatureManagementTabComponent_Conditional_7_abp_feature_management_0_Template, 1, 2, "abp-feature-management", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction2(12, _c7, ɵɵpureFunction3(6, _c5, ɵɵpureFunction0(1, _c2), ɵɵpureFunction1(2, _c3, ctx_r1.providerKey), ɵɵpureFunction1(4, _c4, ctx_r1.visibleFeatures)), ɵɵpureFunction1(10, _c6, ctx_r1.onVisibleFeaturesChange)));
  }
}
var INPUT_TYPES = {
  numeric: "number",
  default: "text"
};
var FreeTextInputDirective = class _FreeTextInputDirective {
  constructor() {
    this.elRef = inject(ElementRef);
    this.renderer = inject(Renderer2);
    this.feature = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "feature"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "abpFeatureManagementFreeText"
    }));
    effect(() => {
      const feature = this.feature();
      if (feature) {
        this.setInputType(feature);
      }
    });
  }
  setInputType(feature) {
    const validatorType = feature?.valueType?.validator?.name?.toLowerCase();
    const type = INPUT_TYPES[validatorType] ?? INPUT_TYPES["default"];
    this.renderer.setAttribute(this.elRef.nativeElement, "type", type);
  }
  static {
    this.ɵfac = function FreeTextInputDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FreeTextInputDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FreeTextInputDirective,
      selectors: [["input", "abpFeatureManagementFreeText", ""]],
      inputs: {
        feature: [1, "abpFeatureManagementFreeText", "feature"]
      },
      exportAs: ["inputAbpFeatureManagementFreeText"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FreeTextInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[abpFeatureManagementFreeText]",
      exportAs: "inputAbpFeatureManagementFreeText"
    }]
  }], () => [], {
    feature: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpFeatureManagementFreeText",
        required: false
      }]
    }]
  });
})();
var ValueTypes;
(function(ValueTypes2) {
  ValueTypes2["ToggleStringValueType"] = "ToggleStringValueType";
  ValueTypes2["FreeTextStringValueType"] = "FreeTextStringValueType";
  ValueTypes2["SelectionStringValueType"] = "SelectionStringValueType";
})(ValueTypes || (ValueTypes = {}));
var DEFAULT_PROVIDER_NAME = "D";
var FeatureManagementComponent = class _FeatureManagementComponent {
  // Getter/setter for backward compatibility
  get visible() {
    return this._visible();
  }
  set visible(value) {
    if (this._visible() === value) {
      return;
    }
    this._visible.set(value);
    this.visibleChange.emit(value);
    if (value) {
      this.openModal();
    }
  }
  constructor() {
    this.track = inject(TrackByService);
    this.toasterService = inject(ToasterService);
    this.service = inject(FeaturesService);
    this.configState = inject(ConfigStateService);
    this.confirmationService = inject(ConfirmationService);
    this.document = inject(DOCUMENT);
    this.providerKey = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "providerKey"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.providerName = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "providerName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.providerTitle = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "providerTitle"
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
    this._visible = signal(
      false,
      ...ngDevMode ? [{
        debugName: "_visible"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectedGroupDisplayName = signal(
      void 0,
      ...ngDevMode ? [{
        debugName: "selectedGroupDisplayName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.groups = signal(
      [],
      ...ngDevMode ? [{
        debugName: "groups"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = signal(
      {},
      ...ngDevMode ? [{
        debugName: "features"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.valueTypes = ValueTypes;
    this.defaultProviderName = DEFAULT_PROVIDER_NAME;
    this.modalBusy = signal(
      false,
      ...ngDevMode ? [{
        debugName: "modalBusy"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const inputValue = this.visibleInput();
      if (this._visible() !== inputValue) {
        this._visible.set(inputValue);
        if (inputValue) {
          this.openModal();
        }
      }
    });
  }
  openModal() {
    if (!this.providerName()) {
      throw new Error("providerName is required.");
    }
    this.getFeatures();
  }
  getFeatures() {
    this.service.get(this.providerName(), this.providerKey()).subscribe((res) => {
      if (!res.groups?.length) return;
      const groups = res.groups.map(({
        name,
        displayName
      }) => ({
        name,
        displayName
      }));
      this.groups.set(groups);
      this.selectedGroupDisplayName.set(groups[0].displayName);
      this.features.set(res.groups.reduce((acc, val) => __spreadProps(__spreadValues({}, acc), {
        [val.name]: mapFeatures(val.features, this.document.body?.dir)
      }), {}));
    });
  }
  save() {
    if (this.modalBusy()) return;
    const changedFeatures = [];
    Object.keys(this.features()).forEach((key) => {
      this.features()[key].forEach((feature) => {
        if (feature.value !== feature.initialValue) changedFeatures.push({
          name: feature.name,
          value: `${feature.value}`
        });
      });
    });
    if (!changedFeatures.length) {
      this.visible = false;
      return;
    }
    this.modalBusy.set(true);
    this.service.update(this.providerName(), this.providerKey(), {
      features: changedFeatures
    }).pipe(finalize(() => this.modalBusy.set(false))).subscribe(() => {
      this.visible = false;
      this.toasterService.success("AbpUi::SavedSuccessfully");
      if (!this.providerKey()) {
        this.configState.refreshAppState().subscribe();
      }
    });
  }
  resetToDefault() {
    this.confirmationService.warn("AbpFeatureManagement::AreYouSureToResetToDefault", "AbpFeatureManagement::AreYouSure").subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.service.delete(this.providerName(), this.providerKey()).subscribe(() => {
          this.toasterService.success("AbpFeatureManagement::ResetedToDefault");
          this.visible = false;
          if (!this.providerKey()) {
            this.configState.refreshAppState().subscribe();
          }
        });
      }
    });
  }
  onCheckboxClick(val, feature) {
    if (val) {
      this.checkToggleAncestors(feature);
    } else {
      this.uncheckToggleDescendants(feature);
    }
  }
  getSelectionItems(feature) {
    if (feature.valueType?.name !== ValueTypes.SelectionStringValueType) {
      return [];
    }
    return feature.valueType.itemSource?.items ?? [];
  }
  isParentDisabled(parentName, groupName, provider) {
    const children = this.features()[groupName]?.filter((f) => f.parentName === parentName);
    const providerNameValue = this.providerName();
    if (children?.length) {
      return children.some((child) => {
        const childProvider = child.provider?.name;
        return childProvider !== providerNameValue && childProvider !== this.defaultProviderName || provider !== providerNameValue && provider !== this.defaultProviderName;
      });
    } else {
      return provider !== providerNameValue && provider !== this.defaultProviderName;
    }
  }
  uncheckToggleDescendants(feature) {
    this.findAllDescendantsOfByType(feature, ValueTypes.ToggleStringValueType).forEach((node) => this.setFeatureValue(node, false));
  }
  checkToggleAncestors(feature) {
    this.findAllAncestorsOfByType(feature, ValueTypes.ToggleStringValueType).forEach((node) => this.setFeatureValue(node, true));
  }
  findAllAncestorsOfByType(feature, type) {
    let parent = this.findParentByType(feature, type);
    const ancestors = [];
    while (parent) {
      ancestors.push(parent);
      parent = this.findParentByType(parent, type);
    }
    return ancestors;
  }
  findAllDescendantsOfByType(feature, type) {
    const descendants = [];
    const queue = [feature];
    while (queue.length) {
      const node = queue.pop();
      const newDescendants = this.findChildrenByType(node, type);
      descendants.push(...newDescendants);
      queue.push(...newDescendants);
    }
    return descendants;
  }
  findParentByType(feature, type) {
    return this.getCurrentGroup().find((f) => f.valueType.name === type && f.name === feature.parentName);
  }
  findChildrenByType(feature, type) {
    return this.getCurrentGroup().filter((f) => f.valueType.name === type && f.parentName === feature.name);
  }
  getCurrentGroup() {
    const selectedGroup = this.selectedGroupDisplayName();
    return selectedGroup ? this.features()[selectedGroup] ?? [] : [];
  }
  setFeatureValue(feature, val) {
    feature.value = val;
  }
  static {
    this.ɵfac = function FeatureManagementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeatureManagementComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FeatureManagementComponent,
      selectors: [["abp-feature-management"]],
      inputs: {
        providerKey: [1, "providerKey"],
        providerName: [1, "providerName"],
        providerTitle: [1, "providerTitle"],
        visibleInput: [1, "visible", "visibleInput"]
      },
      outputs: {
        visibleChange: "visibleChange"
      },
      exportAs: ["abpFeatureManagement"],
      decls: 1,
      vars: 1,
      consts: [["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], ["descTmp", ""], ["tab", "ngTab"], [3, "visible", "busy", "options"], [3, "visibleChange", "visible", "busy", "options"], [1, "row"], ["ngTabs", "", "orientation", "vertical", 1, "row"], [1, "col"], [1, "col-md-4"], ["ngTabList", "", "orientation", "vertical", "selectionMode", "follow", 1, "nav", "nav-pills", "flex-column", 3, "selectedTabChange", "selectedTab"], ["ngTab", "", "type", "button", 1, "nav-link", "text-start", 3, "value", "active"], [1, "col-md-8"], ["ngTabPanel", "", 3, "value"], ["ngTab", "", "type", "button", 1, "nav-link", "text-start", 3, "value"], [1, "d-block", "form-text", "text-muted"], ["ngTabContent", ""], [1, "mt-2", "mb-3"], [1, "mt-2", 3, "style"], [1, "mt-2", 3, "keyup.enter"], [1, "form-check", 3, "px-4"], [1, "mb-3", "form-group", 3, "px-2"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "id", "ngModel", "disabled"], [1, "form-check-label", 3, "htmlFor"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mb-3", "form-group"], [1, "form-label", 3, "htmlFor"], ["type", "text", 1, "form-control", 3, "ngModelChange", "id", "ngModel", "abpFeatureManagementFreeText", "disabled"], [1, "form-select", 3, "ngModelChange", "id", "ngModel", "disabled"], [3, "ngValue"], ["abpClose", "", "type", "button", 1, "btn", "btn-link"], ["buttonClass", "btn btn-outline-primary", "aria-hidden", "true", 3, "disabled"], ["iconClass", "fa fa-check", "aria-hidden", "true", 3, "disabled"], ["buttonClass", "btn btn-outline-primary", "aria-hidden", "true", 3, "click", "disabled"], ["iconClass", "fa fa-check", "aria-hidden", "true", 3, "click", "disabled"]],
      template: function FeatureManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, FeatureManagementComponent_Conditional_0_Template, 7, 4, "abp-modal", 5);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.visible ? 0 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, ButtonComponent, ModalComponent, FormsModule, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Tabs, TabList, Tab, TabPanel, TabContent, FreeTextInputDirective, ModalCloseDirective, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureManagementComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-feature-management",
      exportAs: "abpFeatureManagement",
      imports: [NgTemplateOutlet, ButtonComponent, ModalComponent, LocalizationPipe, FormsModule, Tabs, TabList, Tab, TabPanel, TabContent, FreeTextInputDirective, ModalCloseDirective],
      template: `@if (visible) {\r
  <abp-modal [(visible)]="visible" [busy]="modalBusy()" [options]="{ size: 'lg' }">\r
    <ng-template #abpHeader>\r
      <h3>\r
        {{ 'AbpFeatureManagement::Features' | abpLocalization }}\r
        @if (providerTitle()) {\r
          - {{ providerTitle() }}\r
        }\r
      </h3>\r
    </ng-template>\r
\r
    <ng-template #abpBody>\r
      <div class="row">\r
        @if (groups().length) {\r
          <div ngTabs orientation="vertical" class="row">\r
            <div class="col-md-4">\r
              <div\r
                ngTabList\r
                orientation="vertical"\r
                selectionMode="follow"\r
                [(selectedTab)]="selectedGroupDisplayName"\r
                class="nav nav-pills flex-column"\r
              >\r
                @for (group of groups(); track group.name) {\r
                  <button\r
                    ngTab\r
                    #tab="ngTab"\r
                    type="button"\r
                    [value]="group.displayName"\r
                    class="nav-link text-start"\r
                    [class.active]="tab.selected()"\r
                  >\r
                    {{ group.displayName }}\r
                  </button>\r
                }\r
              </div>\r
            </div>\r
            <ng-template #descTmp let-description>\r
              @if (description) {\r
                <small class="d-block form-text text-muted">{{ description }}</small>\r
              }\r
            </ng-template>\r
\r
            <div class="col-md-8">\r
              @for (group of groups(); track group.name) {\r
                <div ngTabPanel [value]="group.displayName">\r
                  <ng-template ngTabContent>\r
                    <h4>{{ selectedGroupDisplayName() }}</h4>\r
                    <hr class="mt-2 mb-3" />\r
\r
                    @for (\r
                      feature of features()[group.name];\r
                      track feature.name || i;\r
                      let i = $index\r
                    ) {\r
                      @let provider = feature.provider.name;\r
                      @let isFeatureDisabled =\r
                        !feature.parentName\r
                          ? isParentDisabled(feature.name, group.name, provider)\r
                          : provider !== providerName() && provider !== defaultProviderName;\r
\r
                      <div class="mt-2" [style]="feature.style" (keyup.enter)="save()">\r
                        @switch (feature.valueType?.name) {\r
                          @case (valueTypes.ToggleStringValueType) {\r
                            <div class="form-check" [class.px-4]="!!feature.parentName">\r
                              <input\r
                                class="form-check-input"\r
                                type="checkbox"\r
                                [id]="feature.name"\r
                                [(ngModel)]="feature.value"\r
                                (ngModelChange)="onCheckboxClick($event, feature)"\r
                                [disabled]="isFeatureDisabled"\r
                              />\r
\r
                              <label class="form-check-label" [htmlFor]="feature.name">\r
                                {{ feature.displayName }}\r
                                @if (isFeatureDisabled) {\r
                                  <span>({{ provider }})</span>\r
                                }\r
                              </label>\r
                              <ng-container\r
                                *ngTemplateOutlet="\r
                                  descTmp;\r
                                  context: { $implicit: feature.description }\r
                                "\r
                              />\r
                            </div>\r
                          }\r
                          @case (valueTypes.FreeTextStringValueType) {\r
                            <div class="mb-3 form-group" [class.px-2]="!!feature.parentName">\r
                              <label [htmlFor]="feature.name" class="form-label">\r
                                {{ feature.displayName }}\r
                                @if (isFeatureDisabled) {\r
                                  <span>({{ provider }})</span>\r
                                }\r
                              </label>\r
                              <input\r
                                class="form-control"\r
                                type="text"\r
                                [id]="feature.name"\r
                                [(ngModel)]="feature.value"\r
                                [abpFeatureManagementFreeText]="feature"\r
                                [disabled]="isFeatureDisabled"\r
                              />\r
\r
                              <ng-container\r
                                *ngTemplateOutlet="\r
                                  descTmp;\r
                                  context: { $implicit: feature.description }\r
                                "\r
                              />\r
                            </div>\r
                          }\r
                          @case (valueTypes.SelectionStringValueType) {\r
                            @if (getSelectionItems(feature).length) {\r
                              <div class="mb-3 form-group" [class.px-2]="!!feature.parentName">\r
                                <label [htmlFor]="feature.name" class="form-label">\r
                                  {{ feature.displayName }}\r
                                  @if (isFeatureDisabled) {\r
                                    <span>({{ provider }})</span>\r
                                  }\r
                                </label>\r
                                <select\r
                                  class="form-select"\r
                                  [id]="feature.name"\r
                                  [(ngModel)]="feature.value"\r
                                  [disabled]="isFeatureDisabled"\r
                                >\r
                                  @for (item of getSelectionItems(feature); track item.value) {\r
                                    <option [ngValue]="item.value">\r
                                      {{\r
                                        item.displayText?.resourceName +\r
                                          '::' +\r
                                          item.displayText?.name | abpLocalization\r
                                      }}\r
                                    </option>\r
                                  }\r
                                </select>\r
                                <ng-container\r
                                  *ngTemplateOutlet="\r
                                    descTmp;\r
                                    context: { $implicit: feature.description }\r
                                  "\r
                                />\r
                              </div>\r
                            }\r
                          }\r
                          @default {\r
                            {{ feature.displayName }}\r
                          }\r
                        }\r
                      </div>\r
                    }\r
                  </ng-template>\r
                </div>\r
              }\r
            </div>\r
          </div>\r
        }\r
\r
        @if (!groups().length) {\r
          <div class="col">\r
            {{ 'AbpFeatureManagement::NoFeatureFoundMessage' | abpLocalization }}\r
          </div>\r
        }\r
      </div>\r
    </ng-template>\r
\r
    <ng-template #abpFooter>\r
      <button abpClose type="button" class="btn btn-link">\r
        {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r
      </button>\r
\r
      @if (groups().length) {\r
        <abp-button\r
          buttonClass="btn btn-outline-primary"\r
          [disabled]="modalBusy()"\r
          (click)="resetToDefault()"\r
          aria-hidden="true"\r
        >\r
          {{ 'AbpFeatureManagement::ResetToDefault' | abpLocalization }}\r
        </abp-button>\r
      }\r
\r
      @if (groups().length) {\r
        <abp-button\r
          iconClass="fa fa-check"\r
          [disabled]="modalBusy()"\r
          (click)="save()"\r
          aria-hidden="true"\r
        >\r
          {{ 'AbpFeatureManagement::Save' | abpLocalization }}\r
        </abp-button>\r
      }\r
    </ng-template>\r
  </abp-modal>\r
}\r
`
    }]
  }], () => [], {
    providerKey: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "providerKey",
        required: false
      }]
    }],
    providerName: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "providerName",
        required: false
      }]
    }],
    providerTitle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "providerTitle",
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
function mapFeatures(features, dir) {
  const margin = `margin-${dir === "rtl" ? "right" : "left"}.px`;
  return features.map((feature) => {
    const value = feature.valueType?.name === ValueTypes.ToggleStringValueType ? (feature.value || "").toLowerCase() === "true" : feature.value;
    return __spreadProps(__spreadValues({}, feature), {
      value,
      initialValue: value,
      style: {
        [margin]: feature.depth * 20
      }
    });
  });
}
var FeatureManagementTabComponent = class _FeatureManagementTabComponent {
  constructor() {
    this.visibleFeatures = false;
    this.onVisibleFeaturesChange = (value) => {
      this.visibleFeatures = value;
    };
  }
  openFeaturesModal() {
    this.visibleFeatures = true;
  }
  static {
    this.ɵfac = function FeatureManagementTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeatureManagementTabComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FeatureManagementTabComponent,
      selectors: [["abp-feature-management-tab"]],
      decls: 8,
      vars: 7,
      consts: [[1, "pt-2", "text-wrap"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "me-1", "fa", "fa-cog"], ["providerName", "T", 3, "visible", "providerKey"], ["providerName", "T", 3, "visible", "providerKey", "visibleChange", 4, "abpReplaceableTemplate"], ["providerName", "T", 3, "visibleChange", "visible", "providerKey"]],
      template: function FeatureManagementTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "p", 0);
          ɵɵtext(1);
          ɵɵpipe(2, "abpLocalization");
          ɵɵelementEnd();
          ɵɵelementStart(3, "button", 1);
          ɵɵlistener("click", function FeatureManagementTabComponent_Template_button_click_3_listener() {
            return ctx.openFeaturesModal();
          });
          ɵɵelement(4, "i", 2);
          ɵɵtext(5);
          ɵɵpipe(6, "abpLocalization");
          ɵɵelementEnd();
          ɵɵconditionalCreate(7, FeatureManagementTabComponent_Conditional_7_Template, 1, 15, "abp-feature-management", 3);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵtextInterpolate(ɵɵpipeBind1(2, 3, "AbpFeatureManagement::ManageHostFeaturesText"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 5, "AbpFeatureManagement::ManageHostFeatures"), "\n");
          ɵɵadvance(2);
          ɵɵconditional(ctx.visibleFeatures ? 7 : -1);
        }
      },
      dependencies: [ReplaceableTemplateDirective, FeatureManagementComponent, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureManagementTabComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-feature-management-tab",
      imports: [ReplaceableTemplateDirective, LocalizationPipe, FeatureManagementComponent],
      template: `<p class="pt-2 text-wrap">{{ 'AbpFeatureManagement::ManageHostFeaturesText' | abpLocalization }}</p>\r
\r
<button class="btn btn-primary" type="button" (click)="openFeaturesModal()">\r
  <i class="me-1 fa fa-cog" aria-hidden="true"></i>\r
  {{ 'AbpFeatureManagement::ManageHostFeatures' | abpLocalization }}\r
</button>\r
@if (visibleFeatures) {\r
  <abp-feature-management\r
    *abpReplaceableTemplate="{\r
      inputs: {\r
        providerName: { value: 'T' },\r
        providerKey: { value: providerKey },\r
        visible: { value: visibleFeatures, twoWay: true }\r
      },\r
      outputs: { visibleChange: onVisibleFeaturesChange },\r
      componentKey: 'FeatureManagement.FeatureManagementComponent'\r
    }"\r
    [(visible)]="visibleFeatures"\r
    providerName="T"\r
    [providerKey]="providerKey"\r
  >\r
  </abp-feature-management>\r
}\r
`
    }]
  }], null, null);
})();
var FEATURE_MANAGEMENT_SETTINGS_PROVIDERS = [provideAppInitializer(() => {
  configureSettingTabs();
})];
function configureSettingTabs() {
  const settingtabs = inject(SettingTabsService);
  settingtabs.add([{
    name: "AbpFeatureManagement::Permission:FeatureManagement",
    order: 100,
    requiredPolicy: "FeatureManagement.ManageHostFeatures",
    component: FeatureManagementTabComponent
  }]);
}
function provideFeatureManagementConfig() {
  return makeEnvironmentProviders([FEATURE_MANAGEMENT_SETTINGS_PROVIDERS]);
}
var FEATURE_MANAGEMENT_EXPORTS = [FeatureManagementComponent, FreeTextInputDirective, FeatureManagementTabComponent];
var FeatureManagementModule = class _FeatureManagementModule {
  static forRoot() {
    return {
      ngModule: _FeatureManagementModule,
      providers: [provideFeatureManagementConfig()]
    };
  }
  static {
    this.ɵfac = function FeatureManagementModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeatureManagementModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FeatureManagementModule,
      imports: [FeatureManagementComponent, FreeTextInputDirective, FeatureManagementTabComponent],
      exports: [FeatureManagementComponent, FreeTextInputDirective, FeatureManagementTabComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [FeatureManagementComponent, FeatureManagementTabComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureManagementModule, [{
    type: NgModule,
    args: [{
      imports: [...FEATURE_MANAGEMENT_EXPORTS],
      exports: [...FEATURE_MANAGEMENT_EXPORTS]
    }]
  }], null, null);
})();

export {
  INPUT_TYPES,
  FreeTextInputDirective,
  FeatureManagementComponent,
  FeatureManagementTabComponent,
  FEATURE_MANAGEMENT_SETTINGS_PROVIDERS,
  configureSettingTabs,
  provideFeatureManagementConfig,
  FEATURE_MANAGEMENT_EXPORTS,
  FeatureManagementModule
};
//# sourceMappingURL=chunk-5N4HB53R.js.map
