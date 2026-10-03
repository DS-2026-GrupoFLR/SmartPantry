import {
  animate,
  animation,
  keyframes,
  query,
  sequence,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-ORSPOGRK.js";
import {
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDatepickerI18n,
  NgbInputDatepickerConfig,
  NgbModal,
  NgbTimeAdapter,
  NgbTimepickerI18n,
  NgbTooltip,
  NgbTypeaheadConfig
} from "./chunk-5FWCSE5I.js";
import {
  ColumnMode,
  DatatableComponent,
  NgxDatatableModule
} from "./chunk-T2QD5I46.js";
import {
  AbpRouteCultureUrlPipe,
  AbstractNgModelComponent,
  AuthService,
  CONTENT_STRATEGY,
  ConfigStateService,
  ContentProjectionService,
  DomInsertionService,
  HttpErrorReporterService,
  HttpWaitService,
  InternalStore,
  InternetConnectionService,
  LocalizationPipe,
  LocalizationService,
  NgxValidateCoreModule,
  PROJECTION_STRATEGY,
  RouteBasedCultureUrlService,
  RouterEvents,
  RouterWaitService,
  RoutesService,
  SORT_COMPARE_FUNC,
  SessionStateService,
  StopPropagationDirective,
  SubscriptionService,
  TENANT_NOT_FOUND_BY_NAME,
  VALIDATION_BLUEPRINTS,
  VALIDATION_MAP_ERRORS_FN,
  VALIDATION_VALIDATE_ON_SUBMIT,
  ValidationTargetDirective,
  defaultMapErrorsFn,
  getLocaleDirection,
  normalizeDiacritics,
  uuid
} from "./chunk-NI4ZFAY4.js";
import {
  ResolveEnd,
  Router,
  RouterLink
} from "./chunk-VHKPOJBK.js";
import {
  HttpErrorResponse
} from "./chunk-LMDSVWKI.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel,
  Validators
} from "./chunk-T5EWVHFZ.js";
import {
  AsyncPipe,
  NgTemplateOutlet,
  formatDate,
  isPlatformBrowser
} from "./chunk-IMWYUKDZ.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Input,
  LOCALE_ID,
  NgModule,
  Output,
  Renderer2,
  RendererFactory2,
  Service,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  contentChild,
  createComponent,
  input,
  model,
  output,
  provideAppInitializer,
  setClassMetadata,
  viewChild,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresolveWindow,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-EZ2ZVKYO.js";
import {
  takeUntilDestroyed
} from "./chunk-HM3VFUK5.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  DOCUMENT,
  DestroyRef,
  EMPTY,
  EnvironmentInjector,
  InjectionToken,
  Injector,
  Observable,
  PLATFORM_ID,
  ReplaySubject,
  RuntimeError,
  Subject,
  Subscription,
  combineLatest,
  computed,
  debounceTime,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  from,
  fromEvent,
  inject,
  makeEnvironmentProviders,
  map,
  of,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  timer,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵinject,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-TVT7XMKI.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static ɵfac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static ɵprov = ɵɵdefineService({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))()
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Service,
    args: [{
      factory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static ɵfac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(ɵɵinject(RendererFactory2), ɵɵinject(DOCUMENT));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  return type === 0 || type === 1;
}

// node_modules/@abp/ng.theme.shared/fesm2022/abp-ng.theme.shared.mjs
var _c0 = (a0) => ({
  $implicit: a0
});
function BreadcrumbItemsComponent_Conditional_0_For_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadcrumbItemsComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 7);
    ɵɵtemplate(1, BreadcrumbItemsComponent_Conditional_0_For_5_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ɵ$index_10_r2 = ctx.$index;
    const ɵ$count_10_r3 = ctx.$count;
    ɵɵnextContext(2);
    const linkTemplate_r4 = ɵɵreference(2);
    const textTemplate_r5 = ɵɵreference(4);
    ɵɵclassProp("active", ɵ$index_10_r2 === ɵ$count_10_r3 - 1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r1.path ? linkTemplate_r4 : textTemplate_r5)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c0, item_r1));
  }
}
function BreadcrumbItemsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ol", 2)(1, "li", 3)(2, "a", 4);
    ɵɵelement(3, "i", 5);
    ɵɵelementEnd()();
    ɵɵrepeaterCreate(4, BreadcrumbItemsComponent_Conditional_0_For_5_Template, 2, 6, "li", 6, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵrepeater(ctx_r5.items());
  }
}
function BreadcrumbItemsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 9);
    ɵɵpipe(1, "abpRouteCultureUrl");
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, item_r7.path));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, item_r7.name));
  }
}
function BreadcrumbItemsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, item_r8.name), "\n");
  }
}
var _c1 = ["button"];
var _c2 = ["*"];
function ConfirmationComponent_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElement(0, "div", 11);
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext(2);
    ɵɵdomProperty("outerHTML", data_r2.options.iconTemplate, ɵɵsanitizeHtml);
  }
}
function ConfirmationComponent_Conditional_0_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElement(0, "i", 13);
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext(2);
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.getIconClass(data_r2));
  }
}
function ConfirmationComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "div", 10);
    ɵɵconditionalCreate(1, ConfirmationComponent_Conditional_0_Conditional_3_Conditional_1_Template, 1, 1, "div", 11)(2, ConfirmationComponent_Conditional_0_Conditional_3_Conditional_2_Template, 1, 2, "i", 12);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext();
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(data_r2.severity);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.isIconTemplateExits(data_r2) ? 1 : 2);
  }
}
function ConfirmationComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElement(0, "h1", 5);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext();
    ɵɵdomProperty("innerHTML", ɵɵpipeBind2(1, 1, data_r2.title, data_r2.options?.titleLocalizationParams), ɵɵsanitizeHtml);
  }
}
function ConfirmationComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElement(0, "p", 6);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext();
    ɵɵdomProperty("innerHTML", ɵɵpipeBind2(1, 1, data_r2.message, data_r2.options?.messageLocalizationParams), ɵɵsanitizeHtml);
  }
}
function ConfirmationComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 14);
    ɵɵpipe(1, "abpLocalization");
    ɵɵdomListener("click", function ConfirmationComponent_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.close(ctx_r2.reject));
    });
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext();
    ɵɵdomProperty("innerHTML", ɵɵpipeBind1(1, 1, data_r2.options?.cancelText || "AbpUi::Cancel"), ɵɵsanitizeHtml);
  }
}
function ConfirmationComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 15);
    ɵɵpipe(1, "abpLocalization");
    ɵɵdomListener("click", function ConfirmationComponent_Conditional_0_Conditional_9_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.close(ctx_r2.confirm));
    });
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext();
    ɵɵdomProperty("innerHTML", ɵɵpipeBind1(1, 1, data_r2.options?.yesText || "AbpUi::Yes"), ɵɵsanitizeHtml);
  }
}
function ConfirmationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 0)(1, "div", 1);
    ɵɵdomListener("click", function ConfirmationComponent_Conditional_0_Template_div_click_1_listener() {
      const data_r2 = ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(data_r2.options?.dismissible ? ctx_r2.close(ctx_r2.dismiss) : null);
    });
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "div", 2);
    ɵɵconditionalCreate(3, ConfirmationComponent_Conditional_0_Conditional_3_Template, 3, 3, "div", 3);
    ɵɵdomElementStart(4, "div", 4);
    ɵɵconditionalCreate(5, ConfirmationComponent_Conditional_0_Conditional_5_Template, 2, 4, "h1", 5);
    ɵɵconditionalCreate(6, ConfirmationComponent_Conditional_0_Conditional_6_Template, 2, 4, "p", 6);
    ɵɵdomElementEnd();
    ɵɵdomElementStart(7, "div", 7);
    ɵɵconditionalCreate(8, ConfirmationComponent_Conditional_0_Conditional_8_Template, 2, 3, "button", 8);
    ɵɵconditionalCreate(9, ConfirmationComponent_Conditional_0_Conditional_9_Template, 2, 3, "button", 9);
    ɵɵdomElementEnd()()();
  }
  if (rf & 2) {
    const data_r2 = ctx;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵconditional(data_r2.severity || ctx_r2.isCustomIconExists(data_r2) ? 3 : -1);
    ɵɵadvance(2);
    ɵɵconditional(data_r2.title ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional(data_r2.message ? 6 : -1);
    ɵɵadvance(2);
    ɵɵconditional(!data_r2?.options?.hideCancelBtn ? 8 : -1);
    ɵɵadvance();
    ɵɵconditional(!data_r2?.options?.hideYesBtn ? 9 : -1);
  }
}
var _c3 = ["container"];
var _c4 = () => ({
  key: "::Menu:Home",
  defaultValue: "Home"
});
function HttpErrorWrapperComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 4);
    ɵɵdomListener("click", function HttpErrorWrapperComponent_Conditional_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.destroy());
    });
    ɵɵdomElementEnd();
  }
}
function HttpErrorWrapperComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "a", 10);
    ɵɵdomListener("click", function HttpErrorWrapperComponent_Conditional_3_Conditional_10_Template_a_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.goHome());
    });
    ɵɵdomElement(1, "span", 11);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, ɵɵpureFunction0(3, _c4)), " ");
  }
}
function HttpErrorWrapperComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "div", 3)(1, "div", 5)(2, "div", 6)(3, "h1");
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(6, "div", 7);
    ɵɵtext(7);
    ɵɵpipe(8, "abpLocalization");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(9, "div", 8);
    ɵɵconditionalCreate(10, HttpErrorWrapperComponent_Conditional_3_Conditional_10_Template, 4, 4, "a", 9);
    ɵɵdomElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate2("", ctx_r1.statusText, " ", ɵɵpipeBind1(5, 4, ctx_r1.title));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 6, ctx_r1.details), " ");
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.isHomeShow ? 10 : -1);
  }
}
var _c5 = (a0, a1) => ({
  "background-color": a0,
  "box-shadow": a1
});
function ToastComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 7);
    ɵɵdomListener("click", function ToastComponent_Conditional_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close());
    });
    ɵɵdomElement(1, "i", 8);
    ɵɵdomElementEnd();
  }
}
var _forTrack0 = ($index, $item) => $item.options?.id;
function ToastContainerComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-toast", 2);
    ɵɵlistener("remove", function ToastContainerComponent_For_2_Template_abp_toast_remove_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.remove($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const toast_r3 = ctx.$implicit;
    ɵɵproperty("toast", toast_r3);
  }
}
var _c6 = ["abpHeader"];
var _c7 = ["abpBody"];
var _c8 = ["abpFooter"];
var _c9 = ["modalContent"];
function ModalComponent_ng_template_1_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ModalComponent_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, ModalComponent_ng_template_1_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵtext(2, " ​ ");
    ɵɵelementStart(3, "button", 5);
    ɵɵlistener("click", function ModalComponent_ng_template_1_Conditional_0_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const modal_r2 = ɵɵnextContext().$implicit;
      return ɵɵresetView(modal_r2.dismiss());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.abpHeader());
  }
}
function ModalComponent_ng_template_1_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ModalComponent_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, ModalComponent_ng_template_1_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.abpBody());
  }
}
function ModalComponent_ng_template_1_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ModalComponent_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, ModalComponent_ng_template_1_Conditional_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.abpFooter());
  }
}
function ModalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ModalComponent_ng_template_1_Conditional_0_Template, 4, 1, "div", 1);
    ɵɵconditionalCreate(1, ModalComponent_ng_template_1_Conditional_1_Template, 2, 1, "div", 2);
    ɵɵconditionalCreate(2, ModalComponent_ng_template_1_Conditional_2_Template, 2, 1, "div", 3);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(ctx_r2.abpHeader() ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.abpBody() ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.abpFooter() ? 2 : -1);
  }
}
var _c10 = (a0, a1) => ({
  "fa-eye-slash": a0,
  "fa-eye": a1
});
function FormCheckboxComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 3);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.labelClass());
    ɵɵproperty("for", ctx_r0.checkboxId());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 4, ctx_r0.label()), " ");
  }
}
function FormInputComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 3);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.labelClass());
    ɵɵproperty("for", ctx_r0.inputId());
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 4, ctx_r0.label()), " ");
  }
}
function InternetConnectionStatusComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵelement(1, "i", 1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("ngbTooltip", ɵɵinterpolate(ɵɵpipeBind1(2, 2, "AbpUi::InternetConnectionInfo")));
  }
}
var DateTimeAdapter = class _DateTimeAdapter {
  fromModel(value) {
    if (!value) {
      return null;
    }
    const date = new Date(value);
    if (isNaN(date)) {
      return null;
    }
    this.value = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    return this.value;
  }
  toModel(value) {
    if (!value) {
      return "";
    }
    const now = /* @__PURE__ */ new Date();
    const newValue = __spreadValues(__spreadValues({
      year: now.getUTCFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate(),
      hour: 0,
      minute: 0,
      second: 0
    }, this.value), value);
    const date = new Date(Date.UTC(newValue.year, newValue.month - 1, newValue.day, newValue.hour, newValue.minute, newValue.second));
    return date.toISOString().replace("Z", "");
  }
  static {
    this.ɵfac = function DateTimeAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateTimeAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DateTimeAdapter,
      factory: _DateTimeAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateTimeAdapter, [{
    type: Injectable
  }], null, null);
})();
var DateAdapter = class _DateAdapter extends NgbDateAdapter {
  fromModel(value) {
    if (!value) return null;
    let date;
    if (typeof value === "string") {
      date = this.dateOf(value);
    } else {
      date = new Date(value);
    }
    if (isNaN(date)) return null;
    return {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear()
    };
  }
  toModel(value) {
    if (!value) return "";
    const date = new Date(value.year, value.month - 1, value.day);
    const formattedDate = formatDate(date, "yyyy-MM-dd", "en");
    return formattedDate;
  }
  dateOf(value) {
    const dateUtc = new Date(Date.parse(value));
    return new Date(dateUtc.getTime() + Math.abs(dateUtc.getTimezoneOffset() * 6e4));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDateAdapter_BaseFactory;
      return function DateAdapter_Factory(__ngFactoryType__) {
        return (ɵDateAdapter_BaseFactory || (ɵDateAdapter_BaseFactory = ɵɵgetInheritedFactory(_DateAdapter)))(__ngFactoryType__ || _DateAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DateAdapter,
      factory: _DateAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateAdapter, [{
    type: Injectable
  }], null, null);
})();
var DatepickerI18nAdapter = class _DatepickerI18nAdapter extends NgbDatepickerI18n {
  constructor() {
    super(...arguments);
    this.configState = inject(ConfigStateService, {
      optional: true
    });
    this.defaultLocale = inject(LOCALE_ID);
  }
  get locale() {
    return this.configState?.getDeep("localization.currentCulture.cultureName") || this.defaultLocale;
  }
  getWeekdayLabel(weekday) {
    const date = new Date(2017, 0, weekday + 1);
    return formatDate(date, "EEEEE", this.locale);
  }
  getWeekLabel() {
    return "";
  }
  getMonthShortName(month) {
    const date = new Date(2017, month - 1, 1);
    return formatDate(date, "MMM", this.locale);
  }
  getMonthFullName(month) {
    const date = new Date(2017, month - 1, 1);
    return formatDate(date, "MMMM", this.locale);
  }
  getDayAriaLabel(date) {
    const d = new Date(date.year, date.month - 1, date.day);
    return formatDate(d, "fullDate", this.locale);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDatepickerI18nAdapter_BaseFactory;
      return function DatepickerI18nAdapter_Factory(__ngFactoryType__) {
        return (ɵDatepickerI18nAdapter_BaseFactory || (ɵDatepickerI18nAdapter_BaseFactory = ɵɵgetInheritedFactory(_DatepickerI18nAdapter)))(__ngFactoryType__ || _DatepickerI18nAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DatepickerI18nAdapter,
      factory: _DatepickerI18nAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatepickerI18nAdapter, [{
    type: Injectable
  }], null, null);
})();
var TimeAdapter = class _TimeAdapter extends NgbTimeAdapter {
  fromModel(value) {
    if (!value) return null;
    const date = isTimeStr(value) ? new Date(0, 0, 1, ...value.split(":").map(Number)) : new Date(value);
    if (isNaN(date)) return null;
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  }
  toModel(value) {
    if (!value) {
      return null;
    }
    const date = new Date(0, 0, 1, value.hour, value.minute, value.second);
    const formattedDate = formatDate(date, "HH:mm:ss", "en");
    return formattedDate;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTimeAdapter_BaseFactory;
      return function TimeAdapter_Factory(__ngFactoryType__) {
        return (ɵTimeAdapter_BaseFactory || (ɵTimeAdapter_BaseFactory = ɵɵgetInheritedFactory(_TimeAdapter)))(__ngFactoryType__ || _TimeAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TimeAdapter,
      factory: _TimeAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeAdapter, [{
    type: Injectable
  }], null, null);
})();
function isTimeStr(value) {
  return /^((2[123])|[01][0-9])(:[0-5][0-9]){1,2}$/.test(String(value));
}
var TimepickerI18nAdapter = class _TimepickerI18nAdapter extends NgbTimepickerI18n {
  constructor() {
    super(...arguments);
    this.configState = inject(ConfigStateService, {
      optional: true
    });
    this.defaultLocale = inject(LOCALE_ID);
  }
  get locale() {
    return this.configState?.getDeep("localization.currentCulture.cultureName") || this.defaultLocale;
  }
  getMorningPeriod() {
    const date = new Date(2e3, 0, 1, 10, 0, 0);
    return formatDate(date, "a", this.locale);
  }
  getAfternoonPeriod() {
    const date = new Date(2e3, 0, 1, 22, 0, 0);
    return formatDate(date, "a", this.locale);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTimepickerI18nAdapter_BaseFactory;
      return function TimepickerI18nAdapter_Factory(__ngFactoryType__) {
        return (ɵTimepickerI18nAdapter_BaseFactory || (ɵTimepickerI18nAdapter_BaseFactory = ɵɵgetInheritedFactory(_TimepickerI18nAdapter)))(__ngFactoryType__ || _TimepickerI18nAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TimepickerI18nAdapter,
      factory: _TimepickerI18nAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimepickerI18nAdapter, [{
    type: Injectable
  }], null, null);
})();
var bounceIn = animation([style({
  opacity: "0",
  display: "{{ display }}"
}), animate("{{ time}} {{ easing }}", keyframes([style({
  opacity: "0",
  transform: "{{ transform }} scale(0.0)",
  offset: 0
}), style({
  opacity: "0",
  transform: "{{ transform }} scale(0.8)",
  offset: 0.5
}), style({
  opacity: "1",
  transform: "{{ transform }} scale(1.0)",
  offset: 1
})]))], {
  params: {
    time: "350ms",
    easing: "cubic-bezier(.7,.31,.72,1.47)",
    display: "block",
    transform: "translate(-50%, -50%)"
  }
});
var collapseY = animation([style({
  height: "*",
  overflow: "hidden",
  "box-sizing": "border-box"
}), animate("{{ time }} {{ easing }}", style({
  height: "0",
  padding: "0px"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var collapseYWithMargin = animation([style({
  "margin-top": "0"
}), animate("{{ time }} {{ easing }}", style({
  "margin-left": "-100%"
}))], {
  params: {
    time: "500ms",
    easing: "ease"
  }
});
var collapseX = animation([style({
  width: "*",
  overflow: "hidden",
  "box-sizing": "border-box"
}), animate("{{ time }} {{ easing }}", style({
  width: "0",
  padding: "0px"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var expandY = animation([style({
  height: "0",
  overflow: "hidden",
  "box-sizing": "border-box"
}), animate("{{ time }} {{ easing }}", style({
  height: "*",
  padding: "*"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var expandYWithMargin = animation([style({
  "margin-top": "-100%"
}), animate("{{ time }} {{ easing }}", style({
  "margin-top": "0"
}))], {
  params: {
    time: "500ms",
    easing: "ease"
  }
});
var expandX = animation([style({
  width: "0",
  overflow: "hidden",
  "box-sizing": "border-box"
}), animate("{{ time }} {{ easing }}", style({
  width: "*",
  padding: "*"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var collapse = trigger("collapse", [state("collapsed", style({
  height: "0",
  overflow: "hidden"
})), state("expanded", style({
  height: "*",
  overflow: "hidden"
})), transition("expanded => collapsed", useAnimation(collapseY)), transition("collapsed => expanded", useAnimation(expandY))]);
var collapseWithMargin = trigger("collapseWithMargin", [state("collapsed", style({
  "margin-top": "-100%"
})), state("expanded", style({
  "margin-top": "0"
})), transition("expanded => collapsed", useAnimation(collapseYWithMargin), {
  params: {
    time: "400ms",
    easing: "linear"
  }
}), transition("collapsed => expanded", useAnimation(expandYWithMargin))]);
var collapseLinearWithMargin = trigger("collapseLinearWithMargin", [state("collapsed", style({
  "margin-top": "-100vh"
})), state("expanded", style({
  "margin-top": "0"
})), transition("expanded => collapsed", useAnimation(collapseYWithMargin, {
  params: {
    time: "200ms",
    easing: "linear"
  }
})), transition("collapsed => expanded", useAnimation(expandYWithMargin, {
  params: {
    time: "250ms",
    easing: "linear"
  }
}))]);
var fadeIn = animation([style({
  opacity: "0"
}), animate("{{ time}} {{ easing }}", style({
  opacity: "1"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var fadeOut = animation([style({
  opacity: "1"
}), animate("{{ time}} {{ easing }}", style({
  opacity: "0"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var fadeInDown = animation([style({
  opacity: "0",
  transform: "{{ transform }} translateY(-20px)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "1",
  transform: "{{ transform }} translateY(0)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeInUp = animation([style({
  opacity: "0",
  transform: "{{ transform }} translateY(20px)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "1",
  transform: "{{ transform }} translateY(0)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeInLeft = animation([style({
  opacity: "0",
  transform: "{{ transform }} translateX(20px)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "1",
  transform: "{{ transform }} translateX(0)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeInRight = animation([style({
  opacity: "0",
  transform: "{{ transform }} translateX(-20px)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "1",
  transform: "{{ transform }} translateX(0)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeOutDown = animation([style({
  opacity: "1",
  transform: "{{ transform }} translateY(0)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "0",
  transform: "{{ transform }} translateY(20px)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeOutUp = animation([style({
  opacity: "1",
  transform: "{{ transform }} translateY(0)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "0",
  transform: "{{ transform }} translateY(-20px)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeOutLeft = animation([style({
  opacity: "1",
  transform: "{{ transform }} translateX(0)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "0",
  transform: "{{ transform }} translateX(20px)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeOutRight = animation([style({
  opacity: "1",
  transform: "{{ transform }} translateX(0)"
}), animate("{{ time }} {{ easing }}", style({
  opacity: "0",
  transform: "{{ transform }} translateX(-20px)"
}))], {
  params: {
    time: "350ms",
    easing: "ease",
    transform: ""
  }
});
var fadeAnimation = trigger("fade", [transition(":enter", useAnimation(fadeIn)), transition(":leave", useAnimation(fadeOut))]);
var dialogAnimation = trigger("dialog", [transition(":enter", useAnimation(fadeInDown)), transition(":leave", useAnimation(fadeOut))]);
var slideFromBottom = trigger("slideFromBottom", [transition("* <=> *", [style({
  "margin-top": "20px",
  opacity: "0"
}), animate("0.2s ease-out", style({
  opacity: "1",
  "margin-top": "0px"
}))])]);
var toastInOut = trigger("toastInOut", [transition("* <=> *", [query(":enter", [style({
  opacity: 0,
  transform: "translateY(20px)"
}), animate("350ms ease", style({
  opacity: 1,
  transform: "translateY(0)"
}))], {
  optional: true
}), query(":leave", animate("450ms ease", style({
  opacity: 0
})), {
  optional: true
})])]);
var BreadcrumbItemsComponent = class _BreadcrumbItemsComponent {
  constructor() {
    this.items = input(
      [],
      ...ngDevMode ? [{
        debugName: "items"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.ɵfac = function BreadcrumbItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BreadcrumbItemsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BreadcrumbItemsComponent,
      selectors: [["abp-breadcrumb-items"]],
      inputs: {
        items: [1, "items"]
      },
      decls: 5,
      vars: 1,
      consts: [["linkTemplate", ""], ["textTemplate", ""], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["aria-current", "page", 1, "breadcrumb-item", 3, "active"], ["aria-current", "page", 1, "breadcrumb-item"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "routerLink"]],
      template: function BreadcrumbItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, BreadcrumbItemsComponent_Conditional_0_Template, 6, 0, "ol", 2);
          ɵɵtemplate(1, BreadcrumbItemsComponent_ng_template_1_Template, 4, 6, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, BreadcrumbItemsComponent_ng_template_3_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.items().length ? 0 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, RouterLink, LocalizationPipe, AbpRouteCultureUrlPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbItemsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-breadcrumb-items",
      imports: [NgTemplateOutlet, RouterLink, LocalizationPipe, AbpRouteCultureUrlPipe],
      template: '@if (items().length) {\r\n  <ol class="breadcrumb">\r\n    <li class="breadcrumb-item">\r\n      <a routerLink="/"><i class="fa fa-home" aria-hidden="true"></i> </a>\r\n    </li>\r\n    @for (item of items(); track $index; let last = $last) {\r\n      <li class="breadcrumb-item" [class.active]="last" aria-current="page">\r\n        <ng-container\r\n          *ngTemplateOutlet="item.path ? linkTemplate : textTemplate; context: { $implicit: item }"\r\n        ></ng-container>\r\n      </li>\r\n    }\r\n  </ol>\r\n}\r\n\r\n<ng-template #linkTemplate let-item>\r\n  <a [routerLink]="item.path | abpRouteCultureUrl"> {{ item.name | abpLocalization }}</a>\r\n</ng-template>\r\n\r\n<ng-template #textTemplate let-item>\r\n  {{ item.name | abpLocalization }}\r\n</ng-template>\r\n'
    }]
  }], null, {
    items: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "items",
        required: false
      }]
    }]
  });
})();
var BreadcrumbComponent = class _BreadcrumbComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.router = inject(Router);
    this.routes = inject(RoutesService);
    this.subscription = inject(SubscriptionService);
    this.routerEvents = inject(RouterEvents);
    this.routeCultureUrl = inject(RouteBasedCultureUrlService);
    this.segments = [];
  }
  ngOnInit() {
    this.subscription.addOne(this.routerEvents.getNavigationEvents("End").pipe(startWith(null), map(() => this.routes.search({
      path: this.routeCultureUrl.getRoutePathForMatching(this.router)
    }))), (route) => {
      this.segments = [];
      if (route) {
        let node = {
          parent: route
        };
        while (node.parent) {
          node = node.parent;
          const _a = node, {
            parent,
            children,
            isLeaf
          } = _a, segment = __objRest(_a, [
            "parent",
            "children",
            "isLeaf"
          ]);
          if (!isAdministration(segment)) this.segments.unshift(segment);
        }
        this.cdRef.detectChanges();
      }
    });
  }
  static {
    this.ɵfac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BreadcrumbComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BreadcrumbComponent,
      selectors: [["abp-breadcrumb"]],
      features: [ɵɵProvidersFeature([SubscriptionService])],
      decls: 1,
      vars: 1,
      consts: [[3, "items"]],
      template: function BreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "abp-breadcrumb-items", 0);
        }
        if (rf & 2) {
          ɵɵproperty("items", ctx.segments);
        }
      },
      dependencies: [BreadcrumbItemsComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbComponent, [{
    type: Component,
    args: [{
      selector: "abp-breadcrumb",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [SubscriptionService],
      imports: [BreadcrumbItemsComponent],
      template: '<abp-breadcrumb-items [items]="segments"></abp-breadcrumb-items>\r\n'
    }]
  }], null, null);
})();
function isAdministration(route) {
  return route.name === "AbpUiNavigation::Menu:Administration";
}
var ButtonComponent = class _ButtonComponent {
  constructor() {
    this.renderer = inject(Renderer2);
    this.buttonId = input(
      "",
      ...ngDevMode ? [{
        debugName: "buttonId"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.buttonClass = input(
      "btn btn-primary",
      ...ngDevMode ? [{
        debugName: "buttonClass"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.buttonType = input(
      "button",
      ...ngDevMode ? [{
        debugName: "buttonType"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.formName = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "formName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.iconClass = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "iconClass"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = input(
      false,
      ...ngDevMode ? [{
        debugName: "loading"
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
    this.attributes = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "attributes"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.modalLoading = signal(
      null,
      ...ngDevMode ? [{
        debugName: "modalLoading"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isLoading = computed(
      () => this.modalLoading() ?? this.loading(),
      ...ngDevMode ? [{
        debugName: "isLoading"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.click = output();
    this.focus = output();
    this.blur = output();
    this.abpClick = output();
    this.abpFocus = output();
    this.abpBlur = output();
    this.buttonRef = viewChild.required(
      "button",
      ...ngDevMode ? [{
        debugName: "buttonRef"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icon = computed(
      () => this.isLoading() ? "fa fa-spinner fa-spin" : this.iconClass() || "d-none",
      ...ngDevMode ? [{
        debugName: "icon"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    const attributes = this.attributes();
    if (attributes) {
      Object.keys(attributes).forEach((key) => {
        if (attributes[key]) {
          this.renderer.setAttribute(this.buttonRef().nativeElement, key, attributes[key]);
        }
      });
    }
  }
  setLoading(value) {
    this.modalLoading.set(value);
  }
  static {
    this.ɵfac = function ButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ButtonComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ButtonComponent,
      selectors: [["abp-button"]],
      viewQuery: function ButtonComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.buttonRef, _c1, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      inputs: {
        buttonId: [1, "buttonId"],
        buttonClass: [1, "buttonClass"],
        buttonType: [1, "buttonType"],
        formName: [1, "formName"],
        iconClass: [1, "iconClass"],
        loading: [1, "loading"],
        disabled: [1, "disabled"],
        attributes: [1, "attributes"]
      },
      outputs: {
        click: "click",
        focus: "focus",
        blur: "blur",
        abpClick: "abpClick",
        abpFocus: "abpFocus",
        abpBlur: "abpBlur"
      },
      ngContentSelectors: _c2,
      decls: 4,
      vars: 8,
      consts: [["button", ""], [3, "click.stop", "focus", "blur", "id", "disabled"], ["aria-hidden", "true", 1, "me-1"]],
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "button", 1, 0);
          ɵɵlistener("click.stop", function ButtonComponent_Template_button_click_stop_0_listener($event) {
            ɵɵrestoreView(_r1);
            ctx.click.emit($event);
            return ɵɵresetView(ctx.abpClick.emit($event));
          })("focus", function ButtonComponent_Template_button_focus_0_listener($event) {
            ɵɵrestoreView(_r1);
            ctx.focus.emit($event);
            return ɵɵresetView(ctx.abpFocus.emit($event));
          })("blur", function ButtonComponent_Template_button_blur_0_listener($event) {
            ɵɵrestoreView(_r1);
            ctx.blur.emit($event);
            return ɵɵresetView(ctx.abpBlur.emit($event));
          });
          ɵɵelement(2, "i", 2);
          ɵɵprojection(3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.buttonClass());
          ɵɵproperty("id", ctx.buttonId())("disabled", ctx.isLoading() || ctx.disabled());
          ɵɵattribute("type", ctx.buttonType())("form", ctx.formName());
          ɵɵadvance(2);
          ɵɵclassMap(ctx.icon());
        }
      },
      dependencies: [StopPropagationDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-button",
      template: `
    <button
      #button
      [id]="buttonId()"
      [attr.type]="buttonType()"
      [attr.form]="formName()"
      [class]="buttonClass()"
      [disabled]="isLoading() || disabled()"
      (click.stop)="click.emit($event); abpClick.emit($event)"
      (focus)="focus.emit($event); abpFocus.emit($event)"
      (blur)="blur.emit($event); abpBlur.emit($event)"
    >
      <i [class]="icon()" class="me-1" aria-hidden="true"></i><ng-content></ng-content>
    </button>
  `,
      imports: [StopPropagationDirective]
    }]
  }], null, {
    buttonId: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "buttonId",
        required: false
      }]
    }],
    buttonClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "buttonClass",
        required: false
      }]
    }],
    buttonType: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "buttonType",
        required: false
      }]
    }],
    formName: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "formName",
        required: false
      }]
    }],
    iconClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "iconClass",
        required: false
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "loading",
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
    attributes: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "attributes",
        required: false
      }]
    }],
    click: [{
      type: Output,
      args: ["click"]
    }],
    focus: [{
      type: Output,
      args: ["focus"]
    }],
    blur: [{
      type: Output,
      args: ["blur"]
    }],
    abpClick: [{
      type: Output,
      args: ["abpClick"]
    }],
    abpFocus: [{
      type: Output,
      args: ["abpFocus"]
    }],
    abpBlur: [{
      type: Output,
      args: ["abpBlur"]
    }],
    buttonRef: [{
      type: ViewChild,
      args: ["button", {
        isSignal: true
      }]
    }]
  });
})();
var Confirmation;
(function(Confirmation2) {
  let Status;
  (function(Status2) {
    Status2["confirm"] = "confirm";
    Status2["reject"] = "reject";
    Status2["dismiss"] = "dismiss";
  })(Status = Confirmation2.Status || (Confirmation2.Status = {}));
})(Confirmation || (Confirmation = {}));
var CONFIRMATION_ICONS = new InjectionToken("CONFIRMATION_ICONS");
var DEFAULT_CONFIRMATION_ICONS = {
  info: "fa fa-info-circle",
  success: "fa fa-check-circle",
  warning: "fa fa-exclamation-triangle",
  error: "fa fa-times-circle",
  default: "fa fa-question-circle",
  neutral: ""
};
var ConfirmationComponent = class _ConfirmationComponent {
  constructor() {
    this.icons = inject(CONFIRMATION_ICONS);
    this.confirm = Confirmation.Status.confirm;
    this.reject = Confirmation.Status.reject;
    this.dismiss = Confirmation.Status.dismiss;
  }
  close(status) {
    this.clear(status);
  }
  getIconClass({
    severity,
    options
  }) {
    if (options && options.icon) {
      return options.icon;
    }
    if (!this.icons) {
      return "";
    }
    if (severity) {
      return this.icons[severity];
    }
    return this.icons.default;
  }
  isCustomIconExists({
    options
  }) {
    return !!(options && (options.iconTemplate || options.icon));
  }
  isIconTemplateExits({
    options
  }) {
    return !!(options && options.iconTemplate);
  }
  static {
    this.ɵfac = function ConfirmationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmationComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfirmationComponent,
      selectors: [["abp-confirmation"]],
      decls: 2,
      vars: 3,
      consts: [[1, "confirmation"], [1, "confirmation-backdrop", 3, "click"], [1, "confirmation-dialog"], [1, "icon-container", 3, "class"], [1, "content"], [1, "title", 3, "innerHTML"], [1, "message", 3, "innerHTML"], [1, "footer"], ["id", "cancel", 1, "btn", "btn-outline-primary", "me-2", 3, "innerHTML"], ["id", "confirm", 1, "btn", "btn-primary", 3, "innerHTML"], [1, "icon-container"], [3, "outerHTML"], [1, "icon", 3, "class"], [1, "icon"], ["id", "cancel", 1, "btn", "btn-outline-primary", "me-2", 3, "click", "innerHTML"], ["id", "confirm", 1, "btn", "btn-primary", 3, "click", "innerHTML"]],
      template: function ConfirmationComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, ConfirmationComponent_Conditional_0_Template, 10, 5, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.confirmation$)) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [AsyncPipe, LocalizationPipe],
      styles: [".confirmation[_ngcontent-%COMP%]{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:1060}.confirmation[_ngcontent-%COMP%]   .confirmation-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1061!important}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:20px auto;padding:0;width:450px;min-height:300px;z-index:1062!important}@media screen and (max-width:500px){.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]{width:90vw}}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:40px 20px 10px}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:100px;height:100px;stroke-width:1;font-size:80px;text-align:center}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex-grow:1;display:block}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:block;margin:0;padding:0;font-size:27px;font-weight:600;text-align:center}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{display:block;padding:8px 20px 20px;font-size:16px;font-weight:400;text-align:center;margin-bottom:0}.confirmation[_ngcontent-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;padding:20px;width:100%}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-confirmation",
      imports: [AsyncPipe, LocalizationPipe],
      template: `@if (confirmation$ | async; as data) {\r
<div class="confirmation">\r
  <div class="confirmation-backdrop" (click)="data.options?.dismissible ? close(dismiss) : null"></div>\r
  <div class="confirmation-dialog">\r
    @if (data.severity || isCustomIconExists(data)) {\r
    <div class="icon-container" [class]="data.severity">\r
      @if (isIconTemplateExits(data)) {\r
      <div [outerHTML]="data.options.iconTemplate"></div>\r
      } @else {\r
      <i class="icon" [class]="getIconClass(data)"></i>\r
      }\r
    </div>\r
    }\r
    <div class="content">\r
      @if (data.title) {\r
      <h1 class="title" [innerHTML]="data.title | abpLocalization: data.options?.titleLocalizationParams"></h1>\r
      }\r
      @if (data.message) {\r
      <p class="message" [innerHTML]="data.message | abpLocalization: data.options?.messageLocalizationParams"></p>\r
      }\r
    </div>\r
    <div class="footer">\r
      @if (!data?.options?.hideCancelBtn) {\r
      <button id="cancel" class="btn btn-outline-primary me-2"\r
        [innerHTML]="data.options?.cancelText || 'AbpUi::Cancel' | abpLocalization" (click)="close(reject)"></button>\r
      }\r
      @if (!data?.options?.hideYesBtn) {\r
      <button id="confirm" class="btn btn-primary" [innerHTML]="data.options?.yesText || 'AbpUi::Yes' | abpLocalization"\r
        (click)="close(confirm)"></button>\r
      }\r
    </div>\r
  </div>\r
</div>\r
}`,
      styles: [".confirmation{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:1060}.confirmation .confirmation-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1061!important}.confirmation .confirmation-dialog{display:flex;flex-direction:column;margin:20px auto;padding:0;width:450px;min-height:300px;z-index:1062!important}@media screen and (max-width:500px){.confirmation .confirmation-dialog{width:90vw}}.confirmation .confirmation-dialog .icon-container{display:flex;align-items:center;justify-content:center;padding:40px 20px 10px}.confirmation .confirmation-dialog .icon-container .icon{width:100px;height:100px;stroke-width:1;font-size:80px;text-align:center}.confirmation .confirmation-dialog .content{flex-grow:1;display:block}.confirmation .confirmation-dialog .content .title{display:block;margin:0;padding:0;font-size:27px;font-weight:600;text-align:center}.confirmation .confirmation-dialog .content .message{display:block;padding:8px 20px 20px;font-size:16px;font-weight:400;text-align:center;margin-bottom:0}.confirmation .confirmation-dialog .footer{display:flex;align-items:center;justify-content:flex-end;padding:20px;width:100%}\n"]
    }]
  }], null, null);
})();
var HttpErrorWrapperComponent = class _HttpErrorWrapperComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.document = inject(DOCUMENT);
    this.window = this.document.defaultView;
    this.router = inject(Router);
    this.status = 0;
    this.title = "_::Oops!";
    this.details = "_::Sorry, an error has occured.";
    this.customComponent = void 0;
    this.hideCloseIcon = false;
    this.isHomeShow = true;
    this.containerRef = viewChild(
      "container",
      ...ngDevMode ? [{
        debugName: "containerRef"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get statusText() {
    return this.status ? `[${this.status}]` : "";
  }
  ngOnInit() {
    const computedStyle = this.window.getComputedStyle(this.document.body);
    const backgroundColor = computedStyle?.getPropertyValue("background-color");
    this.backgroundColor = backgroundColor || "#fff";
  }
  ngAfterViewInit() {
    if (this.customComponent) {
      const customComponentRef = createComponent(this.customComponent, {
        environmentInjector: this.environmentInjector
      });
      customComponentRef.instance.errorStatus = this.status;
      if (customComponentRef.instance.status) {
        customComponentRef.instance.status.set(this.status);
      }
      customComponentRef.instance.destroy$ = this.destroy$;
      this.appRef.attachView(customComponentRef.hostView);
      const containerRef = this.containerRef();
      if (containerRef) {
        containerRef.nativeElement.appendChild(customComponentRef.hostView.rootNodes[0]);
      }
      customComponentRef.changeDetectorRef.detectChanges();
    }
    fromEvent(this.document, "keyup").pipe(debounceTime(150), filter((key) => key && key.key === "Escape"), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.destroy());
  }
  goHome() {
    this.router.navigateByUrl("/", {
      onSameUrlNavigation: "reload"
    });
    this.destroy();
  }
  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnDestroy() {
    this.destroy();
  }
  static {
    this.ɵfac = function HttpErrorWrapperComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpErrorWrapperComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _HttpErrorWrapperComponent,
      selectors: [["abp-http-error-wrapper"]],
      viewQuery: function HttpErrorWrapperComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.containerRef, _c3, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      decls: 4,
      vars: 4,
      consts: [["container", ""], ["id", "abp-http-error-container", 1, "error"], ["id", "abp-close-button", "type", "button", 1, "btn-close", "me-2"], [1, "row", "centered"], ["id", "abp-close-button", "type", "button", 1, "btn-close", "me-2", 3, "click"], [1, "col-md-12"], [1, "error-template"], [1, "error-details"], [1, "error-actions"], [1, "btn", "btn-primary", "btn-md", "mt-2"], [1, "btn", "btn-primary", "btn-md", "mt-2", 3, "click"], [1, "glyphicon", "glyphicon-home"]],
      template: function HttpErrorWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "div", 1, 0);
          ɵɵconditionalCreate(2, HttpErrorWrapperComponent_Conditional_2_Template, 1, 0, "button", 2);
          ɵɵconditionalCreate(3, HttpErrorWrapperComponent_Conditional_3_Template, 11, 8, "div", 3);
          ɵɵdomElementEnd();
        }
        if (rf & 2) {
          ɵɵstyleProp("background-color", ctx.backgroundColor);
          ɵɵadvance(2);
          ɵɵconditional(!ctx.hideCloseIcon ? 2 : -1);
          ɵɵadvance();
          ɵɵconditional(!ctx.customComponent ? 3 : -1);
        }
      },
      dependencies: [LocalizationPipe],
      styles: [".error[_ngcontent-%COMP%]{position:fixed;top:0;width:100vw;height:100vh;z-index:999999}.centered[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpErrorWrapperComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-http-error-wrapper",
      imports: [LocalizationPipe],
      template: `<div\r
  #container\r
  id="abp-http-error-container"\r
  class="error"\r
  [style.backgroundColor]="backgroundColor"\r
>\r
  @if (!hideCloseIcon) {\r
    <button id="abp-close-button" type="button" class="btn-close me-2" (click)="destroy()"></button>\r
  }\r
\r
  @if (!customComponent) {\r
    <div class="row centered">\r
      <div class="col-md-12">\r
        <div class="error-template">\r
          <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r
          <div class="error-details">\r
            {{ details | abpLocalization }}\r
          </div>\r
          <div class="error-actions">\r
            @if (isHomeShow) {\r
              <a (click)="goHome()" class="btn btn-primary btn-md mt-2"\r
                ><span class="glyphicon glyphicon-home"></span>\r
                {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r
              </a>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
`,
      styles: [".error{position:fixed;top:0;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}\n"]
    }]
  }], null, {
    containerRef: [{
      type: ViewChild,
      args: ["container", {
        isSignal: true
      }]
    }]
  });
})();
var LoaderBarComponent = class _LoaderBarComponent {
  constructor() {
    this.subscription = inject(SubscriptionService);
    this.httpWaitService = inject(HttpWaitService);
    this.routerWaitService = inject(RouterWaitService);
    this.isLoadingInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "isLoadingInput"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "isLoading"
    }));
    this.containerClass = input(
      "abp-loader-bar",
      ...ngDevMode ? [{
        debugName: "containerClass"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.color = input(
      "#77b6ff",
      ...ngDevMode ? [{
        debugName: "color"
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
    this.progressLevel = signal(
      0,
      ...ngDevMode ? [{
        debugName: "progressLevel"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.interval = new Subscription();
    this.timer = new Subscription();
    this.intervalPeriod = 350;
    this.stopDelay = 800;
    this.clearProgress = () => {
      this.progressLevel.set(0);
    };
    this.reportProgress = () => {
      const current = this.progressLevel();
      if (current < 75) {
        this.progressLevel.set(current + 1 + Math.random() * 9);
      } else if (current < 90) {
        this.progressLevel.set(current + 0.4);
      } else if (current < 100) {
        this.progressLevel.set(current + 0.1);
      } else {
        this.interval.unsubscribe();
      }
    };
    effect(() => {
      this.isLoading.set(this.isLoadingInput());
    });
  }
  get boxShadow() {
    return `0 0 10px rgba(${this.color()}, 0.5)`;
  }
  ngOnInit() {
    this.subscribeLoading();
  }
  subscribeLoading() {
    this.subscription.addOne(combineLatest([this.httpWaitService.getLoading$(), this.routerWaitService.getLoading$()]), ([httpLoading, routerLoading]) => {
      if (httpLoading || routerLoading) this.startLoading();
      else this.stopLoading();
    });
  }
  ngOnDestroy() {
    this.interval.unsubscribe();
  }
  startLoading() {
    if (this.isLoading() || !this.interval.closed) return;
    this.isLoading.set(true);
    this.progressLevel.set(0);
    this.interval = timer(0, this.intervalPeriod).subscribe(this.reportProgress);
    this.timer.unsubscribe();
  }
  stopLoading() {
    this.interval.unsubscribe();
    this.progressLevel.set(100);
    this.isLoading.set(false);
    if (!this.timer.closed) return;
    this.timer = timer(this.stopDelay).subscribe(this.clearProgress);
  }
  static {
    this.ɵfac = function LoaderBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoaderBarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LoaderBarComponent,
      selectors: [["abp-loader-bar"]],
      inputs: {
        isLoadingInput: [1, "isLoading", "isLoadingInput"],
        containerClass: [1, "containerClass"],
        color: [1, "color"]
      },
      features: [ɵɵProvidersFeature([SubscriptionService])],
      decls: 2,
      vars: 13,
      consts: [["id", "abp-loader-bar"], [1, "abp-progress"]],
      template: function LoaderBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "div", 0);
          ɵɵdomElement(1, "div", 1);
          ɵɵdomElementEnd();
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.containerClass());
          ɵɵclassProp("is-loading", ctx.isLoading());
          ɵɵadvance();
          ɵɵstyleMap(ɵɵpureFunction2(10, _c5, ctx.color(), ctx.boxShadow));
          ɵɵstyleProp("width", ctx.progressLevel(), "vw");
          ɵɵclassProp("progressing", ctx.progressLevel() > 0);
        }
      },
      styles: [".abp-loader-bar[_ngcontent-%COMP%]{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading[_ngcontent-%COMP%]{opacity:1;transition:none}.abp-loader-bar[_ngcontent-%COMP%]   .abp-progress[_ngcontent-%COMP%]{height:3px;left:0;position:fixed;top:0}.abp-loader-bar[_ngcontent-%COMP%]   .abp-progress.progressing[_ngcontent-%COMP%]{transition:width .4s ease}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderBarComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-loader-bar",
      template: `
    <div id="abp-loader-bar" [class]="containerClass()" [class.is-loading]="isLoading()">
      <div
        class="abp-progress"
        [class.progressing]="progressLevel() > 0"
        [style.width.vw]="progressLevel()"
        [style]="{
          'background-color': color(),
          'box-shadow': boxShadow,
        }"
      ></div>
    </div>
  `,
      providers: [SubscriptionService],
      imports: [],
      styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;transition:none}.abp-loader-bar .abp-progress{height:3px;left:0;position:fixed;top:0}.abp-loader-bar .abp-progress.progressing{transition:width .4s ease}\n"]
    }]
  }], () => [], {
    isLoadingInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "isLoading",
        required: false
      }]
    }],
    containerClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "containerClass",
        required: false
      }]
    }],
    color: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "color",
        required: false
      }]
    }]
  });
})();
var LoadingComponent = class _LoadingComponent {
  static {
    this.ɵfac = function LoadingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LoadingComponent,
      selectors: [["abp-loading"]],
      decls: 2,
      vars: 0,
      consts: [[1, "abp-loading"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-pulse", "abp-spinner"]],
      template: function LoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "div", 0);
          ɵɵdomElement(1, "i", 1);
          ɵɵdomElementEnd();
        }
      },
      styles: [".abp-loading{position:absolute;width:100%;height:100%;top:0;left:0;z-index:1040}.abp-loading .abp-spinner{position:absolute;top:50%;left:50%;font-size:14px;-moz-transform:translateX(-50%) translateY(-50%);-o-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);-webkit-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%)}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-loading",
      template: `
    <div class="abp-loading">
      <i class="fa fa-spinner fa-pulse abp-spinner" aria-hidden="true"></i>
    </div>
  `,
      encapsulation: ViewEncapsulation.None,
      imports: [],
      styles: [".abp-loading{position:absolute;width:100%;height:100%;top:0;left:0;z-index:1040}.abp-loading .abp-spinner{position:absolute;top:50%;left:50%;font-size:14px;-moz-transform:translateX(-50%) translateY(-50%);-o-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);-webkit-transform:translateX(-50%) translateY(-50%);transform:translate(-50%) translateY(-50%)}\n"]
    }]
  }], null, null);
})();
var NavItem = class {
  constructor(props) {
    Object.assign(this, props);
  }
};
var UserMenu = class extends NavItem {
};
var ConfirmationService = class _ConfirmationService {
  constructor() {
    this.contentProjectionService = inject(ContentProjectionService);
    this.document = inject(DOCUMENT);
    this.confirmation$ = new ReplaySubject(1);
    this.clear = (status = Confirmation.Status.dismiss) => {
      this.confirmation$.next(null);
      this.status$.next(status);
    };
  }
  setContainer() {
    this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ConfirmationComponent, {
      confirmation$: this.confirmation$,
      clear: this.clear
    }));
    setTimeout(() => {
      this.containerComponentRef.changeDetectorRef.detectChanges();
    }, 0);
  }
  info(message, title, options) {
    return this.show(message, title, "info", options);
  }
  success(message, title, options) {
    return this.show(message, title, "success", options);
  }
  warn(message, title, options) {
    return this.show(message, title, "warning", options);
  }
  error(message, title, options) {
    return this.show(message, title, "error", options);
  }
  show(message, title, severity, options = {}) {
    if (!this.containerComponentRef) this.setContainer();
    this.confirmation$.next({
      message,
      title,
      severity: severity || "neutral",
      options
    });
    this.status$ = new Subject();
    const {
      dismissible = true
    } = options;
    if (dismissible) this.listenToEscape();
    return this.status$;
  }
  listenToEscape() {
    fromEvent(this.document, "keyup").pipe(takeUntil(this.status$), debounceTime(150), filter((key) => key && key.key === "Escape")).subscribe(() => {
      this.clear();
    });
  }
  static {
    this.ɵfac = function ConfirmationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmationService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfirmationService,
      factory: _ConfirmationService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var AbstractMenuService = class {
  get items() {
    return this._items$.value;
  }
  get items$() {
    return this._items$.asObservable();
  }
  constructor() {
    this._items$ = new BehaviorSubject([]);
    this.sortItems = (a, b) => {
      return this.sortFn(a, b);
    };
    this.sortFn = inject(SORT_COMPARE_FUNC);
  }
  addItems(newItems) {
    const items = [...this.items];
    newItems.forEach((item) => {
      const index = items.findIndex((i) => i.id === item.id);
      const data = new this.baseClass(item);
      if (index > -1) {
        items[index] = data;
        return;
      }
      items.push(data);
    });
    items.sort(this.sortItems);
    this._items$.next(items);
  }
  removeItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index < 0) return;
    const items = [...this.items.slice(0, index), ...this.items.slice(index + 1)];
    this._items$.next(items);
  }
  patchItem(id, item) {
    const index = this.items.findIndex((i) => i.id === id);
    if (index < 0) return;
    const items = [...this.items];
    items[index] = new this.baseClass(__spreadValues(__spreadValues({}, items[index]), item));
    items.sort(this.sortItems);
    this._items$.next(items);
  }
};
var NavItemsService = class _NavItemsService extends AbstractMenuService {
  constructor() {
    super(...arguments);
    this.baseClass = NavItem;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNavItemsService_BaseFactory;
      return function NavItemsService_Factory(__ngFactoryType__) {
        return (ɵNavItemsService_BaseFactory || (ɵNavItemsService_BaseFactory = ɵɵgetInheritedFactory(_NavItemsService)))(__ngFactoryType__ || _NavItemsService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NavItemsService,
      factory: _NavItemsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavItemsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PageAlertService = class _PageAlertService {
  constructor() {
    this.alerts = new InternalStore([]);
    this.alerts$ = this.alerts.sliceState((state2) => state2);
  }
  show(alert) {
    const newAlert = __spreadProps(__spreadValues({}, alert), {
      dismissible: alert.dismissible ?? true
    });
    this.alerts.set([newAlert, ...this.alerts.state]);
  }
  remove(index) {
    const alerts = [...this.alerts.state];
    alerts.splice(index, 1);
    this.alerts.set(alerts);
  }
  static {
    this.ɵfac = function PageAlertService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageAlertService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PageAlertService,
      factory: _PageAlertService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageAlertService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ToastComponent = class _ToastComponent {
  constructor() {
    this.toast = input.required(
      ...ngDevMode ? [{
        debugName: "toast"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.remove = output();
    this.isLeaving = false;
  }
  get severityClass() {
    const toast = this.toast();
    if (!toast || !toast.severity) return "";
    return `abp-toast-${toast.severity}`;
  }
  get iconClass() {
    const {
      iconClass
    } = this.toast().options || {};
    if (iconClass) {
      return iconClass;
    }
    switch (this.toast().severity) {
      case "success":
        return "bi-check";
      case "info":
        return "bi-info-circle";
      case "warning":
        return "bi-exclamation-triangle";
      case "error":
        return "bi-shield-exclamation";
      default:
        return "bi-exclamation-triangle";
    }
  }
  ngOnInit() {
    const {
      sticky,
      life
    } = this.toast().options || {};
    if (sticky) return;
    const timeout = life || 5e3;
    setTimeout(() => {
      this.close();
    }, timeout);
  }
  close() {
    if (this.isLeaving) {
      return;
    }
    this.isLeaving = true;
    setTimeout(() => {
      this.remove.emit(this.toast().options?.id);
    }, 450);
  }
  tap() {
    if (this.toast().options?.tapToDismiss) this.close();
  }
  static {
    this.ɵfac = function ToastComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToastComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ToastComponent,
      selectors: [["abp-toast"]],
      hostVars: 2,
      hostBindings: function ToastComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("abp-toast-leaving", ctx.isLeaving);
        }
      },
      inputs: {
        toast: [1, "toast"]
      },
      outputs: {
        remove: "remove"
      },
      decls: 10,
      vars: 13,
      consts: [[1, "abp-toast", 3, "click"], [1, "abp-toast-icon"], ["aria-hidden", "true", 1, "bi", "icon"], [1, "abp-toast-content"], [1, "abp-toast-close-button"], [1, "abp-toast-title"], [1, "abp-toast-message", 3, "innerHTML"], [1, "abp-toast-close-button", 3, "click"], ["aria-hidden", "true", 1, "bi", "bi-x", "fs-4"]],
      template: function ToastComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "div", 0);
          ɵɵdomListener("click", function ToastComponent_Template_div_click_0_listener() {
            return ctx.tap();
          });
          ɵɵdomElementStart(1, "div", 1);
          ɵɵdomElement(2, "i", 2);
          ɵɵdomElementEnd();
          ɵɵdomElementStart(3, "div", 3);
          ɵɵconditionalCreate(4, ToastComponent_Conditional_4_Template, 2, 0, "button", 4);
          ɵɵdomElementStart(5, "div", 5);
          ɵɵtext(6);
          ɵɵpipe(7, "abpLocalization");
          ɵɵdomElementEnd();
          ɵɵdomElement(8, "p", 6);
          ɵɵpipe(9, "abpLocalization");
          ɵɵdomElementEnd()();
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.severityClass);
          ɵɵadvance(2);
          ɵɵclassMap(ctx.iconClass);
          ɵɵadvance(2);
          ɵɵconditional(ctx.toast().options?.closable ? 4 : -1);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(7, 7, ctx.toast().title, ctx.toast().options?.titleLocalizationParams), " ");
          ɵɵadvance(2);
          ɵɵdomProperty("innerHTML", ɵɵpipeBind2(9, 10, ctx.toast().message, ctx.toast().options?.messageLocalizationParams), ɵɵsanitizeHtml);
        }
      },
      dependencies: [LocalizationPipe],
      styles: ["[_nghost-%COMP%]{display:block;animation:_ngcontent-%COMP%_abp-toast-in .35s ease}.abp-toast-leaving[_nghost-%COMP%]{animation:_ngcontent-%COMP%_abp-toast-out .45s ease forwards}@keyframes _ngcontent-%COMP%_abp-toast-in{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_abp-toast-out{to{opacity:0}}.abp-toast[_ngcontent-%COMP%]{display:grid;grid-template-columns:35px 1fr;gap:5px;margin:5px 0;padding:7px;width:350px;-webkit-user-select:none;user-select:none;z-index:9999;color:#fff;border-radius:8px;font-size:14px;box-shadow:0 0 20px #4c577d05;border:2px solid #f0f0f0;background-color:#f0f0f0;color:#000;box-shadow:0 0 10px -5px #0006}.abp-toast[_ngcontent-%COMP%]:hover{border:2px solid #e4e4e4;background-color:#e4e4e4;box-shadow:0 0 15px -5px #0006}.abp-toast[_ngcontent-%COMP%]{opacity:1}.abp-toast.abp-toast-success[_ngcontent-%COMP%]{border:2px solid #4fbf67;background-color:#4fbf67;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-success[_ngcontent-%COMP%]:hover{border:2px solid rgb(27.0980392157%,73.4901960784%,37.0392156863%);background-color:#45bb5e;box-shadow:0 0 15px -5px #0006}.abp-toast.abp-toast-info[_ngcontent-%COMP%]{border:2px solid #438aa7;background-color:#438aa7;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-info[_ngcontent-%COMP%]:hover{border:2px solid rgb(24.9607843137%,51.4117647059%,62.2156862745%);background-color:#40839f;box-shadow:0 0 15px -5px #0006}.abp-toast.abp-toast-warning[_ngcontent-%COMP%]{border:2px solid #ff9f38;background-color:#ff9f38;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-warning[_ngcontent-%COMP%]:hover{border:2px solid rgb(100%,59.4111735146%,15.862745098%);background-color:#ff9728;box-shadow:0 0 15px -5px #0006}.abp-toast.abp-toast-error[_ngcontent-%COMP%]{border:2px solid #c00d49;background-color:#c00d49;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-error[_ngcontent-%COMP%]:hover{border:2px solid rgb(71.5294117647%,4.8431372549%,27.1960784314%);background-color:#b60c45;box-shadow:0 0 15px -5px #0006}.abp-toast[_ngcontent-%COMP%]   .abp-toast-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.abp-toast[_ngcontent-%COMP%]   .abp-toast-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:32px}.abp-toast[_ngcontent-%COMP%]   .abp-toast-content[_ngcontent-%COMP%]{position:relative;display:flex;align-self:center;flex-direction:column;word-break:break-word;padding-bottom:2px}.abp-toast[_ngcontent-%COMP%]   .abp-toast-content[_ngcontent-%COMP%]   .abp-toast-close-button[_ngcontent-%COMP%]{position:absolute;top:0;right:0;display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px 0 0;width:25px;height:100%;border:none;border-radius:50%;background:transparent;color:inherit}.abp-toast[_ngcontent-%COMP%]   .abp-toast-content[_ngcontent-%COMP%]   .abp-toast-close-button[_ngcontent-%COMP%]:focus{outline:none}.abp-toast[_ngcontent-%COMP%]   .abp-toast-content[_ngcontent-%COMP%]   .abp-toast-title[_ngcontent-%COMP%]{margin:0;padding:0;font-size:1rem;font-weight:600}.abp-toast[_ngcontent-%COMP%]   .abp-toast-content[_ngcontent-%COMP%]   .abp-toast-message[_ngcontent-%COMP%]{margin:0;padding:0;max-width:240px}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-toast",
      host: {
        "[class.abp-toast-leaving]": "isLeaving"
      },
      imports: [LocalizationPipe],
      template: '<div class="abp-toast" [class]="severityClass" (click)="tap()">\r\n  <div class="abp-toast-icon">\r\n    <i class="bi icon" [class]="iconClass" aria-hidden="true"></i>\r\n  </div>\r\n  <div class="abp-toast-content">\r\n    @if (toast().options?.closable) {\r\n    <button class="abp-toast-close-button" (click)="close()">\r\n      <i class="bi bi-x fs-4" aria-hidden="true"></i>\r\n    </button>\r\n    }\r\n    <div class="abp-toast-title">\r\n      {{ toast().title | abpLocalization: toast().options?.titleLocalizationParams }}\r\n    </div>\r\n    <p class="abp-toast-message"\r\n      [innerHTML]="toast().message | abpLocalization: toast().options?.messageLocalizationParams"></p>\r\n  </div>\r\n</div>',
      styles: [":host{display:block;animation:abp-toast-in .35s ease}:host.abp-toast-leaving{animation:abp-toast-out .45s ease forwards}@keyframes abp-toast-in{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes abp-toast-out{to{opacity:0}}.abp-toast{display:grid;grid-template-columns:35px 1fr;gap:5px;margin:5px 0;padding:7px;width:350px;-webkit-user-select:none;user-select:none;z-index:9999;color:#fff;border-radius:8px;font-size:14px;box-shadow:0 0 20px #4c577d05;border:2px solid #f0f0f0;background-color:#f0f0f0;color:#000;box-shadow:0 0 10px -5px #0006}.abp-toast:hover{border:2px solid #e4e4e4;background-color:#e4e4e4;box-shadow:0 0 15px -5px #0006}.abp-toast{opacity:1}.abp-toast.abp-toast-success{border:2px solid #4fbf67;background-color:#4fbf67;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-success:hover{border:2px solid rgb(27.0980392157%,73.4901960784%,37.0392156863%);background-color:#45bb5e;box-shadow:0 0 15px -5px #0006}.abp-toast.abp-toast-info{border:2px solid #438aa7;background-color:#438aa7;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-info:hover{border:2px solid rgb(24.9607843137%,51.4117647059%,62.2156862745%);background-color:#40839f;box-shadow:0 0 15px -5px #0006}.abp-toast.abp-toast-warning{border:2px solid #ff9f38;background-color:#ff9f38;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-warning:hover{border:2px solid rgb(100%,59.4111735146%,15.862745098%);background-color:#ff9728;box-shadow:0 0 15px -5px #0006}.abp-toast.abp-toast-error{border:2px solid #c00d49;background-color:#c00d49;color:#fff;box-shadow:0 0 10px -5px #0006}.abp-toast.abp-toast-error:hover{border:2px solid rgb(71.5294117647%,4.8431372549%,27.1960784314%);background-color:#b60c45;box-shadow:0 0 15px -5px #0006}.abp-toast .abp-toast-icon{display:flex;align-items:center;justify-content:center}.abp-toast .abp-toast-icon .icon{font-size:32px}.abp-toast .abp-toast-content{position:relative;display:flex;align-self:center;flex-direction:column;word-break:break-word;padding-bottom:2px}.abp-toast .abp-toast-content .abp-toast-close-button{position:absolute;top:0;right:0;display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px 0 0;width:25px;height:100%;border:none;border-radius:50%;background:transparent;color:inherit}.abp-toast .abp-toast-content .abp-toast-close-button:focus{outline:none}.abp-toast .abp-toast-content .abp-toast-title{margin:0;padding:0;font-size:1rem;font-weight:600}.abp-toast .abp-toast-content .abp-toast-message{margin:0;padding:0;max-width:240px}\n"]
    }]
  }], null, {
    toast: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "toast",
        required: true
      }]
    }],
    remove: [{
      type: Output,
      args: ["remove"]
    }]
  });
})();
var ToastContainerComponent = class _ToastContainerComponent {
  constructor() {
    this.toasts = signal(
      [],
      ...ngDevMode ? [{
        debugName: "toasts"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.top = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "top"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rightInput = input("30px", __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "rightInput"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "right"
    }));
    this.bottom = input(
      "30px",
      ...ngDevMode ? [{
        debugName: "bottom"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.left = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "left"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toastKey = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "toastKey"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.right = signal(
      "30px",
      ...ngDevMode ? [{
        debugName: "right"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.defaultRight = "30px";
    this.defaultMobileRight = "0";
    effect(() => {
      this.right.set(this.rightInput());
    });
  }
  ngOnInit() {
    this.setDefaultRight();
  }
  setToasts(toasts) {
    const key = this.toastKey();
    this.toasts.set(key ? toasts.filter((t) => t.options && t.options.containerKey !== key) : [...toasts]);
  }
  onWindowResize() {
    this.setDefaultRight();
  }
  setDefaultRight() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768 && this.right() === this.defaultRight) {
      this.right.set(this.defaultMobileRight);
    }
  }
  static {
    this.ɵfac = function ToastContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToastContainerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ToastContainerComponent,
      selectors: [["abp-toast-container"]],
      hostAttrs: [1, "abp-toast-host"],
      hostBindings: function ToastContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("resize", function ToastContainerComponent_resize_HostBindingHandler() {
            return ctx.onWindowResize();
          }, ɵɵresolveWindow);
        }
      },
      inputs: {
        top: [1, "top"],
        rightInput: [1, "right", "rightInput"],
        bottom: [1, "bottom"],
        left: [1, "left"],
        toastKey: [1, "toastKey"]
      },
      decls: 3,
      vars: 10,
      consts: [[1, "abp-toast-container"], [3, "toast"], [3, "remove", "toast"]],
      template: function ToastContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵrepeaterCreate(1, ToastContainerComponent_For_2_Template, 1, 1, "abp-toast", 1, _forTrack0);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵstyleProp("top", ctx.top() || "auto")("right", ctx.right() || "auto")("bottom", ctx.bottom() || "auto")("left", ctx.left() || "auto")("display", ctx.toasts().length ? "flex" : "none");
          ɵɵadvance();
          ɵɵrepeater(ctx.toasts());
        }
      },
      dependencies: [ToastComponent],
      styles: [".abp-toast-host[_nghost-%COMP%]{position:fixed;z-index:1900;pointer-events:none}.abp-toast-container[_ngcontent-%COMP%]{position:fixed;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-width:350px;min-height:80px;pointer-events:auto}.abp-toast-container.new-on-top[_ngcontent-%COMP%]{flex-direction:column-reverse}@media only screen and (max-width:768px){.abp-toast-container[_ngcontent-%COMP%]{min-width:100%}}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastContainerComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-toast-container",
      imports: [ToastComponent],
      host: {
        class: "abp-toast-host",
        "(window:resize)": "onWindowResize()"
      },
      template: `<div\r
  class="abp-toast-container"\r
  [style.top]="top() || 'auto'"\r
  [style.right]="right() || 'auto'"\r
  [style.bottom]="bottom() || 'auto'"\r
  [style.left]="left() || 'auto'"\r
  [style.display]="toasts().length ? 'flex' : 'none'"\r
>\r
  @for (toast of toasts(); track toast.options?.id) {\r
    <abp-toast [toast]="toast" (remove)="remove($event)" />\r
  }\r
</div>\r
`,
      styles: [":host.abp-toast-host{position:fixed;z-index:1900;pointer-events:none}.abp-toast-container{position:fixed;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-width:350px;min-height:80px;pointer-events:auto}.abp-toast-container.new-on-top{flex-direction:column-reverse}@media only screen and (max-width:768px){.abp-toast-container{min-width:100%}}\n"]
    }]
  }], () => [], {
    top: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "top",
        required: false
      }]
    }],
    rightInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "right",
        required: false
      }]
    }],
    bottom: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "bottom",
        required: false
      }]
    }],
    left: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "left",
        required: false
      }]
    }],
    toastKey: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "toastKey",
        required: false
      }]
    }]
  });
})();
var ToasterService = class _ToasterService {
  constructor() {
    this.appRef = inject(ApplicationRef);
    this.contentProjectionService = inject(ContentProjectionService);
    this.lastId = -1;
    this.toasts = [];
    this.remove = (id) => {
      this.toasts = this.toasts.filter((toast) => toast.options?.id !== id);
      this.syncContainer();
    };
  }
  setContainer() {
    this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ToastContainerComponent, {
      remove: this.remove
    }));
    this.syncContainer();
  }
  syncContainer() {
    if (!this.containerComponentRef) {
      return;
    }
    this.containerComponentRef.instance.setToasts(this.toasts);
    this.containerComponentRef.changeDetectorRef.detectChanges();
    this.appRef.tick();
  }
  /**
   * Creates an info toast with given parameters.
   * @param message Content of the toast
   * @param title Title of the toast
   * @param options Spesific style or structural options for individual toast
   */
  info(message, title, options) {
    return this.show(message, title, "info", options);
  }
  /**
   * Creates a success toast with given parameters.
   * @param message Content of the toast
   * @param title Title of the toast
   * @param options Spesific style or structural options for individual toast
   */
  success(message, title, options) {
    return this.show(message, title, "success", options);
  }
  /**
   * Creates a warning toast with given parameters.
   * @param message Content of the toast
   * @param title Title of the toast
   * @param options Spesific style or structural options for individual toast
   */
  warn(message, title, options) {
    return this.show(message, title, "warning", options);
  }
  /**
   * Creates an error toast with given parameters.
   * @param message Content of the toast
   * @param title Title of the toast
   * @param options Spesific style or structural options for individual toast
   */
  error(message, title, options) {
    return this.show(message, title, "error", options);
  }
  /**
   * Creates a toast with given parameters.
   * @param message Content of the toast
   * @param title Title of the toast
   * @param severity Sets color of the toast. "success", "warning" etc.
   * @param options Spesific style or structural options for individual toast
   */
  show(message, title = void 0, severity = "neutral", options = {}) {
    if (!this.containerComponentRef) {
      this.setContainer();
    }
    const id = ++this.lastId;
    this.toasts = [...this.toasts, {
      message,
      title,
      severity,
      options: __spreadValues({
        closable: true,
        id
      }, options)
    }];
    this.syncContainer();
    return id;
  }
  /**
   * Removes all open toasts at once.
   */
  clear(containerKey) {
    this.toasts = !containerKey ? [] : this.toasts.filter((toast) => toast.options?.containerKey !== containerKey);
    this.syncContainer();
  }
  static {
    this.ɵfac = function ToasterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToasterService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ToasterService,
      factory: _ToasterService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToasterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UserMenuService = class _UserMenuService extends AbstractMenuService {
  constructor() {
    super(...arguments);
    this.baseClass = UserMenu;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUserMenuService_BaseFactory;
      return function UserMenuService_Factory(__ngFactoryType__) {
        return (ɵUserMenuService_BaseFactory || (ɵUserMenuService_BaseFactory = ɵɵgetInheritedFactory(_UserMenuService)))(__ngFactoryType__ || _UserMenuService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserMenuService,
      factory: _UserMenuService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserMenuService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var HTTP_ERROR_CONFIG = new InjectionToken("HTTP_ERROR_CONFIG");
var HTTP_ERROR_HANDLER = new InjectionToken("HTTP_ERROR_HANDLER");
var CUSTOM_ERROR_HANDLERS = new InjectionToken("CUSTOM_ERROR_HANDLERS");
var CreateErrorComponentService = class _CreateErrorComponentService {
  constructor() {
    this.document = inject(DOCUMENT);
    this.rendererFactory = inject(RendererFactory2);
    this.routerEvents = inject(RouterEvents);
    this.injector = inject(Injector);
    this.envInjector = inject(EnvironmentInjector);
    this.httpErrorConfig = inject(HTTP_ERROR_CONFIG);
    this.componentRef = null;
    this.listenToRouterDataResolved();
  }
  listenToRouterDataResolved() {
    this.routerEvents.getEvents(ResolveEnd).pipe(filter(() => !!this.componentRef)).subscribe(() => {
      this.componentRef?.destroy();
      this.componentRef = null;
    });
  }
  getErrorHostElement() {
    return this.document.body;
  }
  isCloseIconHidden() {
    return !!this.httpErrorConfig?.errorScreen?.hideCloseIcon;
  }
  canCreateCustomError(status) {
    const {
      component,
      forWhichErrors
    } = this.httpErrorConfig?.errorScreen || {};
    if (!component || !forWhichErrors) {
      return false;
    }
    return forWhichErrors.indexOf(status) > -1;
  }
  execute(instance) {
    const renderer = this.rendererFactory.createRenderer(null, null);
    const hostElement = this.getErrorHostElement();
    const host = renderer.selectRootElement(hostElement, true);
    this.componentRef = createComponent(HttpErrorWrapperComponent, {
      environmentInjector: this.envInjector
    });
    for (const key in instance) {
      if (Object.prototype.hasOwnProperty.call(this.componentRef.instance, key)) {
        this.componentRef.instance[key] = instance[key];
      }
    }
    this.componentRef.instance.hideCloseIcon = this.isCloseIconHidden();
    const appRef = this.injector.get(ApplicationRef);
    if (this.canCreateCustomError(instance.status)) {
      this.componentRef.instance.appRef = appRef;
      this.componentRef.instance.environmentInjector = this.envInjector;
      this.componentRef.instance.customComponent = this.httpErrorConfig.errorScreen?.component;
    }
    appRef.attachView(this.componentRef.hostView);
    renderer.appendChild(host, this.componentRef.hostView.rootNodes[0]);
    const destroy$ = new Subject();
    this.componentRef.instance.destroy$ = destroy$;
    destroy$.subscribe(() => {
      this.componentRef?.destroy();
      this.componentRef = null;
    });
  }
  static {
    this.ɵfac = function CreateErrorComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateErrorComponentService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CreateErrorComponentService,
      factory: _CreateErrorComponentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateErrorComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var DEFAULT_ERROR_MESSAGES = {
  defaultError: {
    title: "An error has occurred!",
    details: "Error detail not sent by server."
  },
  defaultError401: {
    title: "You are not authenticated!",
    details: "You should be authenticated (sign in) in order to perform this operation."
  },
  defaultError403: {
    title: "You are not authorized!",
    details: "You are not allowed to perform this operation."
  },
  defaultError404: {
    title: "Resource not found!",
    details: "The resource requested could not found on the server."
  },
  defaultError500: {
    title: "Internal server error",
    details: "Error detail not sent by server."
  }
};
var DEFAULT_ERROR_LOCALIZATIONS = {
  defaultError: {
    title: "AbpUi::DefaultErrorMessage",
    details: "AbpUi::DefaultErrorMessageDetail"
  },
  defaultError401: {
    title: "AbpUi::DefaultErrorMessage401",
    details: "AbpUi::DefaultErrorMessage401Detail"
  },
  defaultError403: {
    title: "AbpUi::DefaultErrorMessage403",
    details: "AbpUi::DefaultErrorMessage403Detail"
  },
  defaultError404: {
    title: "AbpUi::DefaultErrorMessage404",
    details: "AbpUi::DefaultErrorMessage404Detail"
  },
  defaultError500: {
    title: "AbpUi::500Message",
    details: "AbpUi::DefaultErrorMessage"
  }
};
var CUSTOM_HTTP_ERROR_HANDLER_PRIORITY = Object.freeze({
  veryLow: -99,
  low: -9,
  normal: 0,
  high: 9,
  veryHigh: 99
});
var HTTP_ERROR_STATUS = {
  "401": "AbpUi::401Message",
  "403": "AbpUi::403Message",
  "404": "AbpUi::404Message",
  "500": "AbpUi::500Message"
};
var HTTP_ERROR_DETAIL = {
  "401": "AbpUi::DefaultErrorMessage401Detail",
  "403": "AbpUi::DefaultErrorMessage403Detail",
  "404": "AbpUi::DefaultErrorMessage404Detail",
  "500": "AbpUi::DefaultErrorMessage"
};
function getErrorFromRequestBody(body) {
  let message;
  let title;
  if (body.details) {
    message = body.details;
    title = body.message;
  } else if (body.message) {
    title = {
      key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title
    };
    message = body.message;
  } else {
    message = {
      key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title
    };
    title = "";
  }
  return {
    message,
    title
  };
}
var AbpFormatErrorHandlerService = class _AbpFormatErrorHandlerService {
  constructor() {
    this.priority = CUSTOM_HTTP_ERROR_HANDLER_PRIORITY.high;
    this.confirmationService = inject(ConfirmationService);
    this.authService = inject(AuthService);
    this.error = void 0;
  }
  navigateToLogin() {
    return this.authService.navigateToLogin();
  }
  canHandle(error) {
    if (error instanceof HttpErrorResponse && error.headers.get("_AbpErrorFormat")) {
      this.error = error;
      return true;
    }
    return false;
  }
  execute() {
    const {
      message,
      title
    } = getErrorFromRequestBody(this.error?.error?.error);
    this.confirmationService.error(message, title, {
      hideCancelBtn: true,
      yesText: "AbpAccount::Close"
    }).subscribe(() => {
      if (this.error?.status === 401) {
        this.navigateToLogin();
      }
    });
  }
  static {
    this.ɵfac = function AbpFormatErrorHandlerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbpFormatErrorHandlerService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AbpFormatErrorHandlerService,
      factory: _AbpFormatErrorHandlerService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpFormatErrorHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TenantResolveErrorHandlerService = class _TenantResolveErrorHandlerService {
  constructor() {
    this.sessionService = inject(SessionStateService);
    this.priority = CUSTOM_HTTP_ERROR_HANDLER_PRIORITY.high;
    this.authService = inject(AuthService);
  }
  isTenantResolveError(error) {
    return error instanceof HttpErrorResponse && !!error.headers.get("Abp-Tenant-Resolve-Error");
  }
  canHandle(error) {
    return this.isTenantResolveError(error);
  }
  execute() {
    this.sessionService.setTenant(null);
    this.authService.logout().subscribe();
  }
  static {
    this.ɵfac = function TenantResolveErrorHandlerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TenantResolveErrorHandlerService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TenantResolveErrorHandlerService,
      factory: _TenantResolveErrorHandlerService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantResolveErrorHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var StatusCodeErrorHandlerService = class _StatusCodeErrorHandlerService {
  constructor() {
    this.confirmationService = inject(ConfirmationService);
    this.createErrorComponentService = inject(CreateErrorComponentService);
    this.authService = inject(AuthService);
    this.handledStatusCodes = [401, 403, 404, 500];
    this.priority = CUSTOM_HTTP_ERROR_HANDLER_PRIORITY.normal;
  }
  navigateToLogin() {
    this.authService.navigateToLogin();
  }
  showConfirmation(message, title) {
    return this.confirmationService.error(message, title, {
      hideCancelBtn: true,
      yesText: "AbpAccount::Close"
    });
  }
  showPage() {
    const key = `defaultError${this.status}`;
    const shouldRemoveDetail = [401, 404].indexOf(this.status) > -1;
    const instance = {
      title: {
        key: DEFAULT_ERROR_LOCALIZATIONS[key]?.title,
        defaultValue: DEFAULT_ERROR_MESSAGES[key]?.title
      },
      details: {
        key: DEFAULT_ERROR_LOCALIZATIONS[key]?.details,
        defaultValue: DEFAULT_ERROR_MESSAGES[key]?.details
      },
      status: this.status
    };
    if (shouldRemoveDetail) {
      delete instance.details;
    }
    this.createErrorComponentService.execute(instance);
  }
  canHandle(error) {
    this.status = error?.status || 0;
    return this.handledStatusCodes.indexOf(this.status) > -1;
  }
  execute() {
    const key = `defaultError${this.status}`;
    const title = {
      key: DEFAULT_ERROR_LOCALIZATIONS[key]?.title,
      defaultValue: DEFAULT_ERROR_MESSAGES[key]?.title
    };
    const message = {
      key: DEFAULT_ERROR_LOCALIZATIONS[key]?.details,
      defaultValue: DEFAULT_ERROR_MESSAGES[key]?.details
    };
    const canCreateCustomError = this.createErrorComponentService.canCreateCustomError(this.status);
    switch (this.status) {
      case 401:
      case 404:
        if (canCreateCustomError) {
          this.showPage();
          break;
        }
        if (this.status === 401) {
          this.authService.navigateToLogin();
          break;
        }
        this.showConfirmation(title, message).subscribe();
        break;
      case 403:
      case 500:
        this.showPage();
        break;
    }
  }
  static {
    this.ɵfac = function StatusCodeErrorHandlerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatusCodeErrorHandlerService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StatusCodeErrorHandlerService,
      factory: _StatusCodeErrorHandlerService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusCodeErrorHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UnknownStatusCodeErrorHandlerService = class _UnknownStatusCodeErrorHandlerService {
  constructor() {
    this.priority = CUSTOM_HTTP_ERROR_HANDLER_PRIORITY.normal;
    this.statusText = "Unknown Error";
    this.message = "";
    this.createErrorComponentService = inject(CreateErrorComponentService);
  }
  canHandle(error) {
    if (error && error.status === 0 && error.statusText === this.statusText) {
      this.message = error.message;
      return true;
    }
    return false;
  }
  execute() {
    this.createErrorComponentService.execute({
      title: {
        key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title
      },
      details: this.message,
      isHomeShow: false
    });
  }
  static {
    this.ɵfac = function UnknownStatusCodeErrorHandlerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnknownStatusCodeErrorHandlerService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnknownStatusCodeErrorHandlerService,
      factory: _UnknownStatusCodeErrorHandlerService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnknownStatusCodeErrorHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var styles = `
.is-invalid .form-control {
  border-color: #dc3545;
  border-style: solid !important;
  padding-right: calc(1.5em + .75rem);
  background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e);
  background-repeat: no-repeat;
  background-position: right calc(.375em + .1875rem) center;
  background-size: calc(.75em + .375rem) calc(.75em + .375rem);
}

.is-invalid .invalid-feedback,
.is-invalid + * .invalid-feedback {
  display: block;
}

.data-tables-filter {
  text-align: right;
}

[dir=rtl] .data-tables-filter {
  text-align: left;
}

.pointer {
  cursor: pointer;
}

.navbar .dropdown-submenu a::after {
  transform: rotate(-90deg);
  position: absolute;
  right: 16px;
  top: 18px;
}

.navbar .dropdown-menu {
  min-width: 215px;
}

.datatable-scroll {
  margin-bottom: 5px !important;
  width: unset !important;
}

.ui-table-scrollable-body::-webkit-scrollbar {
  height: 5px !important;
  width: 5px !important;
}

.ui-table-scrollable-body::-webkit-scrollbar-track {
  background: #ddd;
}

.ui-table-scrollable-body::-webkit-scrollbar-thumb {
  background: #8a8686;
}

.abp-ellipsis-inline {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.abp-ellipsis {
  overflow: hidden !important;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui-widget-overlay {
  z-index: 1000;
}

.color-white {
  color: #FFF !important;
}

.custom-checkbox > label {
  cursor: pointer;
}

/* <animations */

.fade-in-top {
  animation: fadeInTop 0.2s ease-in-out;
}

.fade-out-top {
  animation: fadeOutTop 0.2s ease-in-out;
}

.abp-collapse-y {
  display: grid;
  grid-template-rows: 1fr;
  overflow: hidden;
  transition: grid-template-rows 200ms linear;
}

.abp-collapse-y.abp-collapse-y-collapsed {
  grid-template-rows: 0fr;
}

.abp-collapse-y-inner {
  overflow: hidden;
}

.abp-collapse-margin {
  margin-top: 0;
  overflow: hidden;
  transition: margin-top 400ms linear;
}

.abp-collapse-margin.abp-collapse-margin-collapsed {
  margin-top: -100%;
}

.abp-collapsed-height {
  -moz-transition: max-height linear 0.35s;
  -ms-transition: max-height linear 0.35s;
  -o-transition: max-height linear 0.35s;
  -webkit-transition: max-height linear 0.35s;
  overflow:hidden;
  transition:max-height 0.35s linear;
  height:auto;
  max-height: 0;
}

.abp-mh-25 {
  max-height: 25vh;
}

.abp-mh-50 {
  transition:max-height 0.65s linear;
  max-height: 50vh;
}

.abp-mh-75 {
  transition:max-height 0.85s linear;
  max-height: 75vh;
}

.abp-mh-100 {
  transition:max-height 1s linear;
  max-height: 100vh;
}

[class^="sorting"] {
  opacity: .3;
  cursor: pointer;
}
[class^="sorting"]:before {
  right: 0.5rem;
  content: "↑";
}
[class^="sorting"]:after {
  right: 0.5rem;
  content: "↓";
}

.sorting_desc {
  opacity: 1;
}
.sorting_desc:before {
  opacity: .3;
}

.sorting_asc {
  opacity: 1;
}
.sorting_asc:after {
  opacity: .3;
}
.ngx-datatable.material {
  box-shadow: none;
}
ngb-typeahead-window, ngb-typeahead-window.dropdown-menu {
  max-height: 25em;
  overflow-y: scroll !important;
  z-index: 1050;
}

.abp-modal-header {
  word-break: break-word;
}


@keyframes fadeInTop {
  from {
    transform: translateY(-5px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes fadeOutTop {
  to {
    transform: translateY(-5px);
    opacity: 0;
  }
}

/* </animations */
.ngb-dp-body {
  z-index: 1055 !important;
}
`;
var THEME_SHARED_APPEND_CONTENT = new InjectionToken("THEME_SHARED_APPEND_CONTENT", {
  providedIn: "root",
  factory: () => {
    const domInsertion = inject(DomInsertionService);
    domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
  }
});
var defaultNgxDatatableMessages = {
  emptyMessage: "AbpUi::NoDataAvailableInDatatable",
  errorMessage: "AbpUi::ErrorLoadingDatatable",
  totalMessage: "AbpUi::Total",
  selectedMessage: "AbpUi::Selected"
};
var NGX_DATATABLE_MESSAGES = new InjectionToken("NGX_DATATABLE_MESSAGES");
var SUPPRESS_UNSAVED_CHANGES_WARNING = new InjectionToken("SUPPRESS_UNSAVED_CHANGES_WARNING");
var LOGO_URL_TOKEN = new InjectionToken("LOGO_URL_TOKEN");
var LOGO_APP_NAME_TOKEN = new InjectionToken("LOGO_APP_NAME_TOKEN");
var THEME_CHANGE_TOKEN = new InjectionToken("THEME_CHANGE_TOKEN");
var RouterErrorHandlerService = class _RouterErrorHandlerService {
  constructor() {
    this.routerEvents = inject(RouterEvents);
    this.httpErrorConfig = inject(HTTP_ERROR_CONFIG);
    this.createErrorComponentService = inject(CreateErrorComponentService);
    this.filterRouteErrors = (navigationError) => {
      if (!this.httpErrorConfig?.skipHandledErrorCodes) {
        return true;
      }
      return navigationError.error?.message?.indexOf("Cannot match") > -1 && this.httpErrorConfig.skipHandledErrorCodes.findIndex((code) => code === 404) < 0;
    };
  }
  listen() {
    this.routerEvents.getNavigationEvents("Error").pipe(filter(this.filterRouteErrors)).subscribe(() => this.show404Page());
  }
  show404Page() {
    const instance = {
      title: {
        key: DEFAULT_ERROR_LOCALIZATIONS.defaultError404.title,
        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title
      },
      status: 404
    };
    this.createErrorComponentService.execute(instance);
  }
  static {
    this.ɵfac = function RouterErrorHandlerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RouterErrorHandlerService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RouterErrorHandlerService,
      factory: _RouterErrorHandlerService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterErrorHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var AbpAuthenticationErrorHandler = class _AbpAuthenticationErrorHandler {
  constructor() {
    this.priority = CUSTOM_HTTP_ERROR_HANDLER_PRIORITY.veryHigh;
    this.authService = inject(AuthService);
    this.configStateService = inject(ConfigStateService);
  }
  canHandle(error) {
    return error instanceof HttpErrorResponse && error.status === 401;
  }
  execute() {
    this.configStateService.refreshAppState().subscribe(({
      currentUser
    }) => {
      if (!currentUser.isAuthenticated) {
        this.authService.logout({
          noRedirectToLogoutUrl: true
        });
      }
    });
  }
  static {
    this.ɵfac = function AbpAuthenticationErrorHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbpAuthenticationErrorHandler)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AbpAuthenticationErrorHandler,
      factory: _AbpAuthenticationErrorHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpAuthenticationErrorHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ModalRefService = class _ModalRefService {
  constructor() {
    this.modalRefs = [];
  }
  register(modal) {
    this.modalRefs.push(modal);
  }
  unregister(modal) {
    const index = this.modalRefs.indexOf(modal);
    if (index > -1) {
      this.modalRefs.splice(index, 1);
    }
  }
  dismissAll(mode) {
    this.modalRefs.forEach((modal) => modal.dismiss(mode));
  }
  static {
    this.ɵfac = function ModalRefService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModalRefService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ModalRefService,
      factory: _ModalRefService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalRefService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ModalComponent = class _ModalComponent {
  get modalWindowRef() {
    return this.document.querySelector(`ngb-modal-window.${this.modalIdentifier}`);
  }
  get isFormDirty() {
    return Boolean(this.modalWindowRef?.querySelector(".ng-dirty"));
  }
  constructor() {
    this.confirmationService = inject(ConfirmationService);
    this.modal = inject(NgbModal);
    this.modalRefService = inject(ModalRefService);
    this.suppressUnsavedChangesWarningToken = inject(SUPPRESS_UNSAVED_CHANGES_WARNING, {
      optional: true
    });
    this.destroyRef = inject(DestroyRef);
    this.document = inject(DOCUMENT);
    this.visible = model(
      false,
      ...ngDevMode ? [{
        debugName: "visible"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.busy = input(
      false,
      ...ngDevMode ? [{
        debugName: "busy"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = input(
      {
        keyboard: true
      },
      ...ngDevMode ? [{
        debugName: "options"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.suppressUnsavedChangesWarning = input(
      this.suppressUnsavedChangesWarningToken,
      ...ngDevMode ? [{
        debugName: "suppressUnsavedChangesWarning"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.modalContent = viewChild(
      "modalContent",
      ...ngDevMode ? [{
        debugName: "modalContent"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.abpHeader = contentChild(
      "abpHeader",
      ...ngDevMode ? [{
        debugName: "abpHeader"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.abpBody = contentChild(
      "abpBody",
      ...ngDevMode ? [{
        debugName: "abpBody"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.abpFooter = contentChild(
      "abpFooter",
      ...ngDevMode ? [{
        debugName: "abpFooter"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.abpSubmit = contentChild(ButtonComponent, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "abpSubmit"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      read: ButtonComponent
    }));
    this.init = output();
    this.appear = output();
    this.disappear = output();
    this.isConfirmationOpen = false;
    this.modalIdentifier = `modal-${uuid()}`;
    effect(() => {
      this.toggle(this.visible());
    });
    effect(() => {
      const submit = this.abpSubmit();
      if (!(submit instanceof ButtonComponent)) {
        return;
      }
      submit.setLoading(this.visible() && this.busy());
    });
  }
  ngOnInit() {
    this.modalRefService.register(this);
  }
  dismiss(mode) {
    switch (mode) {
      case "hard":
        this.visible.set(false);
        break;
      case "soft":
        this.close();
        break;
      default:
        break;
    }
  }
  toggle(value) {
    this.visible.set(value);
    if (!value) {
      if (this.modalRef) {
        const ref = this.modalRef;
        this.modalRef = void 0;
        ref.dismiss();
      }
      this.disappear.emit();
      return;
    }
    if (this.modalWindowRef) {
      return;
    }
    setTimeout(() => this.listen(), 0);
    this.modalRef = this.modal.open(this.modalContent(), __spreadProps(__spreadValues({
      size: "md",
      centered: false,
      keyboard: false,
      scrollable: true,
      beforeDismiss: () => {
        if (!this.visible()) return true;
        this.close();
        return !this.visible();
      }
    }, this.options()), {
      windowClass: `${this.options().windowClass || ""} ${this.modalIdentifier}`
    }));
    this.modalRef.result.finally(() => {
      this.modalRef = void 0;
    });
    this.appear.emit();
  }
  ngOnDestroy() {
    this.modalRefService.unregister(this);
    this.toggle(false);
  }
  close() {
    if (this.busy()) return;
    if (this.isFormDirty && !this.suppressUnsavedChangesWarning()) {
      if (this.isConfirmationOpen) return;
      this.isConfirmationOpen = true;
      this.confirmationService.warn("AbpUi::AreYouSureYouWantToCancelEditingWarningMessage", "AbpUi::AreYouSure", {
        dismissible: false
      }).subscribe((status) => {
        this.isConfirmationOpen = false;
        if (status === Confirmation.Status.confirm) {
          this.visible.set(false);
        }
      });
    } else {
      this.visible.set(false);
    }
  }
  listen() {
    if (this.modalWindowRef) {
      fromEvent(this.modalWindowRef, "keyup").pipe(takeUntilDestroyed(this.destroyRef), debounceTime(150), filter((key) => key && key.key === "Escape" && this.options().keyboard)).subscribe(() => this.close());
    }
    fromEvent(window, "beforeunload").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (this.isFormDirty && !this.suppressUnsavedChangesWarning()) {
        event.preventDefault();
      }
    });
    this.init.emit();
  }
  static {
    this.ɵfac = function ModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModalComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ModalComponent,
      selectors: [["abp-modal"]],
      contentQueries: function ModalComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.abpHeader, _c6, 5)(dirIndex, ctx.abpBody, _c7, 5)(dirIndex, ctx.abpFooter, _c8, 5)(dirIndex, ctx.abpSubmit, ButtonComponent, 5, ButtonComponent);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(4);
        }
      },
      viewQuery: function ModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.modalContent, _c9, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      inputs: {
        visible: [1, "visible"],
        busy: [1, "busy"],
        options: [1, "options"],
        suppressUnsavedChangesWarning: [1, "suppressUnsavedChangesWarning"]
      },
      outputs: {
        visible: "visibleChange",
        init: "init",
        appear: "appear",
        disappear: "disappear"
      },
      features: [ɵɵProvidersFeature([SubscriptionService])],
      ngContentSelectors: _c2,
      decls: 3,
      vars: 0,
      consts: [["modalContent", ""], ["id", "abp-modal-header", 1, "modal-header", "abp-modal-header", "pb-0"], ["id", "abp-modal-body", 1, "modal-body"], ["id", "abp-modal-footer", 1, "modal-footer"], [4, "ngTemplateOutlet"], ["id", "abp-modal-close-button", "type", "button", "aria-label", "Close", 1, "btn-sm", "btn-close", 3, "click"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, ModalComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: [".modal.show[_ngcontent-%COMP%]{display:block!important}.modal-backdrop[_ngcontent-%COMP%]{opacity:.8}.modal[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px}.modal[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#ddd}.modal[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#8a8686}.modal-dialog[_ngcontent-%COMP%]{z-index:1050}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-modal",
      providers: [SubscriptionService],
      imports: [NgTemplateOutlet],
      template: '<ng-content></ng-content>\r\n\r\n<ng-template #modalContent let-modal>\r\n  @if (abpHeader()) {\r\n    <div id="abp-modal-header" class="modal-header abp-modal-header pb-0">\r\n      <ng-container *ngTemplateOutlet="abpHeader()"></ng-container>\r\n      ​\r\n      <button\r\n        id="abp-modal-close-button"\r\n        type="button"\r\n        class="btn-sm btn-close"\r\n        aria-label="Close"\r\n        (click)="modal.dismiss()"\r\n      ></button>\r\n    </div>\r\n  }\r\n  @if (abpBody()) {\r\n    <div id="abp-modal-body" class="modal-body">\r\n      <ng-container *ngTemplateOutlet="abpBody()"></ng-container>\r\n    </div>\r\n  }\r\n  @if (abpFooter()) {\r\n    <div id="abp-modal-footer" class="modal-footer">\r\n      <ng-container *ngTemplateOutlet="abpFooter()"></ng-container>\r\n    </div>\r\n  }\r\n</ng-template>\r\n',
      styles: [".modal.show{display:block!important}.modal-backdrop{opacity:.8}.modal::-webkit-scrollbar{width:7px}.modal::-webkit-scrollbar-track{background:#ddd}.modal::-webkit-scrollbar-thumb{background:#8a8686}.modal-dialog{z-index:1050}\n"]
    }]
  }], () => [], {
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
    }],
    busy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "busy",
        required: false
      }]
    }],
    options: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "options",
        required: false
      }]
    }],
    suppressUnsavedChangesWarning: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "suppressUnsavedChangesWarning",
        required: false
      }]
    }],
    modalContent: [{
      type: ViewChild,
      args: ["modalContent", {
        isSignal: true
      }]
    }],
    abpHeader: [{
      type: ContentChild,
      args: ["abpHeader", {
        isSignal: true
      }]
    }],
    abpBody: [{
      type: ContentChild,
      args: ["abpBody", {
        isSignal: true
      }]
    }],
    abpFooter: [{
      type: ContentChild,
      args: ["abpFooter", {
        isSignal: true
      }]
    }],
    abpSubmit: [{
      type: ContentChild,
      args: [forwardRef(() => ButtonComponent), __spreadProps(__spreadValues({}, {
        read: ButtonComponent
      }), {
        isSignal: true
      })]
    }],
    init: [{
      type: Output,
      args: ["init"]
    }],
    appear: [{
      type: Output,
      args: ["appear"]
    }],
    disappear: [{
      type: Output,
      args: ["disappear"]
    }]
  });
})();
var ModalCloseDirective = class _ModalCloseDirective {
  constructor() {
    this.modal = inject(ModalComponent, {
      optional: true
    });
    const modal = this.modal;
    if (!modal) {
      console.error("Please use abpClose within an abp-modal");
    }
  }
  onClick() {
    this.modal?.close();
  }
  static {
    this.ɵfac = function ModalCloseDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModalCloseDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ModalCloseDirective,
      selectors: [["", "abpClose", ""]],
      hostBindings: function ModalCloseDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function ModalCloseDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[abpClose]"
    }]
  }], () => [], {
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var PasswordComponent = class _PasswordComponent extends AbstractNgModelComponent {
  constructor() {
    super(...arguments);
    this.inputId = input.required(
      ...ngDevMode ? [{
        debugName: "inputId"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.formControlName = input.required(
      ...ngDevMode ? [{
        debugName: "formControlName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵPasswordComponent_BaseFactory;
      return function PasswordComponent_Factory(__ngFactoryType__) {
        return (ɵPasswordComponent_BaseFactory || (ɵPasswordComponent_BaseFactory = ɵɵgetInheritedFactory(_PasswordComponent)))(__ngFactoryType__ || _PasswordComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PasswordComponent,
      selectors: [["abp-password"]],
      inputs: {
        inputId: [1, "inputId"],
        formControlName: [1, "formControlName"]
      },
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _PasswordComponent),
        multi: true
      }]), ɵɵInheritDefinitionFeature],
      decls: 4,
      vars: 8,
      consts: [["validationTarget", "", 1, "input-group"], [1, "form-control", 3, "ngModelChange", "type", "id", "ngModel"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["aria-hidden", "true", 1, "fa"]],
      template: function PasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "input", 1);
          ɵɵtwoWayListener("ngModelChange", function PasswordComponent_Template_input_ngModelChange_1_listener($event) {
            ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵcontrolCreate();
          ɵɵelementStart(2, "button", 2);
          ɵɵlistener("click", function PasswordComponent_Template_button_click_2_listener() {
            return ctx.toggleFieldTextType();
          });
          ɵɵelement(3, "i", 3);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("type", ctx.fieldTextType ? "text" : "password")("id", ctx.inputId());
          ɵɵtwoWayProperty("ngModel", ctx.value);
          ɵɵcontrol();
          ɵɵadvance(2);
          ɵɵclassMap(ɵɵpureFunction2(5, _c10, !ctx.fieldTextType, ctx.fieldTextType));
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgxValidateCoreModule, ValidationTargetDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-password",
      imports: [FormsModule, NgxValidateCoreModule],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => PasswordComponent),
        multi: true
      }],
      template: `<div class="input-group" validationTarget>\r
  <input\r
    [type]="fieldTextType ? 'text' : 'password'"\r
    class="form-control"\r
    [id]="inputId()"\r
    [(ngModel)]="value"\r
  />\r
\r
  <button class="btn btn-secondary" type="button" (click)="toggleFieldTextType()">\r
    <i\r
      class="fa"\r
      aria-hidden="true"\r
      [class]="{\r
        'fa-eye-slash': !fieldTextType,\r
        'fa-eye': fieldTextType\r
      }"\r
    ></i>\r
  </button>\r
</div>\r
`
    }]
  }], null, {
    inputId: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inputId",
        required: true
      }]
    }],
    formControlName: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "formControlName",
        required: true
      }]
    }]
  });
})();
var CardBodyComponent = class _CardBodyComponent {
  constructor() {
    this.componentClass = "card-body";
    this.cardBodyClass = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "cardBodyClass"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cardBodyStyle = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "cardBodyStyle"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.ɵfac = function CardBodyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardBodyComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CardBodyComponent,
      selectors: [["abp-card-body"]],
      hostVars: 2,
      hostBindings: function CardBodyComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.componentClass);
        }
      },
      inputs: {
        cardBodyClass: [1, "cardBodyClass"],
        cardBodyStyle: [1, "cardBodyStyle"]
      },
      ngContentSelectors: _c2,
      decls: 2,
      vars: 4,
      template: function CardBodyComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElementStart(0, "div");
          ɵɵprojection(1);
          ɵɵdomElementEnd();
        }
        if (rf & 2) {
          ɵɵstyleMap(ctx.cardBodyStyle());
          ɵɵclassMap(ctx.cardBodyClass());
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardBodyComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-card-body",
      template: ` <div [class]="cardBodyClass()" [style]="cardBodyStyle()">
    <ng-content></ng-content>
  </div>`
    }]
  }], null, {
    componentClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    cardBodyClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cardBodyClass",
        required: false
      }]
    }],
    cardBodyStyle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cardBodyStyle",
        required: false
      }]
    }]
  });
})();
var CardComponent = class _CardComponent {
  constructor() {
    this.cardClass = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "cardClass"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cardStyle = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "cardStyle"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.ɵfac = function CardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CardComponent,
      selectors: [["abp-card"]],
      inputs: {
        cardClass: [1, "cardClass"],
        cardStyle: [1, "cardStyle"]
      },
      ngContentSelectors: _c2,
      decls: 2,
      vars: 4,
      consts: [[1, "card"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElementStart(0, "div", 0);
          ɵɵprojection(1);
          ɵɵdomElementEnd();
        }
        if (rf & 2) {
          ɵɵstyleMap(ctx.cardStyle());
          ɵɵclassMap(ctx.cardClass());
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-card",
      template: ` <div class="card" [class]="cardClass()" [style]="cardStyle()">
    <ng-content></ng-content>
  </div>`,
      imports: []
    }]
  }], null, {
    cardClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cardClass",
        required: false
      }]
    }],
    cardStyle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cardStyle",
        required: false
      }]
    }]
  });
})();
var CardHeaderComponent = class _CardHeaderComponent {
  constructor() {
    this.componentClass = "card-header";
    this.cardHeaderClass = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "cardHeaderClass"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cardHeaderStyle = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "cardHeaderStyle"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.ɵfac = function CardHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CardHeaderComponent,
      selectors: [["abp-card-header"]],
      hostVars: 2,
      hostBindings: function CardHeaderComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.componentClass);
        }
      },
      inputs: {
        cardHeaderClass: [1, "cardHeaderClass"],
        cardHeaderStyle: [1, "cardHeaderStyle"]
      },
      ngContentSelectors: _c2,
      decls: 2,
      vars: 4,
      template: function CardHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElementStart(0, "div");
          ɵɵprojection(1);
          ɵɵdomElementEnd();
        }
        if (rf & 2) {
          ɵɵstyleMap(ctx.cardHeaderStyle());
          ɵɵclassMap(ctx.cardHeaderClass());
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardHeaderComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-card-header",
      template: `
    <div [class]="cardHeaderClass()" [style]="cardHeaderStyle()">
      <ng-content></ng-content>
    </div>
  `,
      imports: []
    }]
  }], null, {
    componentClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    cardHeaderClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cardHeaderClass",
        required: false
      }]
    }],
    cardHeaderStyle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cardHeaderStyle",
        required: false
      }]
    }]
  });
})();
var CardFooterComponent = class _CardFooterComponent {
  constructor() {
    this.componentClass = "card-footer";
    this.cardFooterStyle = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "cardFooterStyle"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cardFooterClass = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "cardFooterClass"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.ɵfac = function CardFooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardFooterComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CardFooterComponent,
      selectors: [["abp-card-footer"]],
      hostVars: 2,
      hostBindings: function CardFooterComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.componentClass);
        }
      },
      inputs: {
        cardFooterStyle: [1, "cardFooterStyle"],
        cardFooterClass: [1, "cardFooterClass"]
      },
      ngContentSelectors: _c2,
      decls: 2,
      vars: 4,
      template: function CardFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElementStart(0, "div");
          ɵɵprojection(1);
          ɵɵdomElementEnd();
        }
        if (rf & 2) {
          ɵɵstyleMap(ctx.cardFooterStyle());
          ɵɵclassMap(ctx.cardFooterClass());
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardFooterComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-card-footer",
      template: `
    <div [style]="cardFooterStyle()" [class]="cardFooterClass()">
      <ng-content></ng-content>
    </div>
  `,
      imports: []
    }]
  }], null, {
    componentClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    cardFooterStyle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cardFooterStyle",
        required: false
      }]
    }],
    cardFooterClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "cardFooterClass",
        required: false
      }]
    }]
  });
})();
var CardTitleDirective = class _CardTitleDirective {
  constructor() {
    this.directiveClass = "card-title";
  }
  static {
    this.ɵfac = function CardTitleDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardTitleDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CardTitleDirective,
      selectors: [["abp-card-title"], ["", "abp-card-title", ""], ["", "abpCardTitle", ""]],
      hostVars: 2,
      hostBindings: function CardTitleDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.directiveClass);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardTitleDirective, [{
    type: Directive,
    args: [{
      selector: `abp-card-title, [abp-card-title], [abpCardTitle]`
    }]
  }], null, {
    directiveClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var CardSubtitleDirective = class _CardSubtitleDirective {
  constructor() {
    this.directiveClass = "card-subtitle";
  }
  static {
    this.ɵfac = function CardSubtitleDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardSubtitleDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CardSubtitleDirective,
      selectors: [["abp-card-subtitle"], ["", "abp-card-subtitle", ""], ["", "abpCardSubtitle", ""]],
      hostVars: 2,
      hostBindings: function CardSubtitleDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.directiveClass);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardSubtitleDirective, [{
    type: Directive,
    args: [{
      selector: `abp-card-subtitle, [abp-card-subtitle], [abpCardSubtitle]`
    }]
  }], null, {
    directiveClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var CardImgTopDirective = class _CardImgTopDirective {
  constructor() {
    this.directiveClass = "card-img-top";
  }
  static {
    this.ɵfac = function CardImgTopDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardImgTopDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CardImgTopDirective,
      selectors: [["abp-card-img-top"], ["", "abp-card-img-top", ""], ["", "abpCardImgTop", ""]],
      hostVars: 2,
      hostBindings: function CardImgTopDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.directiveClass);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardImgTopDirective, [{
    type: Directive,
    args: [{
      selector: `abp-card-img-top, [abp-card-img-top], [abpCardImgTop]`
    }]
  }], null, {
    directiveClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var CardHeaderDirective = class _CardHeaderDirective {
  constructor() {
    this.directiveClass = "card-header";
  }
  static {
    this.ɵfac = function CardHeaderDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardHeaderDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CardHeaderDirective,
      selectors: [["abp-card-header"], ["", "abp-card-header", ""], ["", "abpCardHeader", ""]],
      hostVars: 2,
      hostBindings: function CardHeaderDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.directiveClass);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardHeaderDirective, [{
    type: Directive,
    args: [{
      selector: `abp-card-header, [abp-card-header], [abpCardHeader]`
    }]
  }], null, {
    directiveClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var CARD_DIRECTIVES = [CardTitleDirective, CardSubtitleDirective, CardImgTopDirective, CardHeaderDirective];
var CARD_COMPONENTS = [CardComponent, CardBodyComponent, CardHeaderComponent, CardFooterComponent];
var CardModule = class _CardModule {
  static {
    this.ɵfac = function CardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CardModule,
      imports: [CardComponent, CardBodyComponent, CardHeaderComponent, CardFooterComponent, CardTitleDirective, CardSubtitleDirective, CardImgTopDirective, CardHeaderDirective],
      exports: [CardComponent, CardBodyComponent, CardHeaderComponent, CardFooterComponent, CardTitleDirective, CardSubtitleDirective, CardImgTopDirective, CardHeaderDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [...CARD_COMPONENTS, ...CARD_DIRECTIVES],
      exports: [...CARD_COMPONENTS, ...CARD_DIRECTIVES]
    }]
  }], null, null);
})();
var FormCheckboxComponent = class _FormCheckboxComponent extends AbstractNgModelComponent {
  constructor() {
    super(...arguments);
    this.label = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "label"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.labelClass = input(
      "form-check-label",
      ...ngDevMode ? [{
        debugName: "labelClass"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.checkboxId = input.required(
      ...ngDevMode ? [{
        debugName: "checkboxId"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.checkboxStyle = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "checkboxStyle"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.checkboxClass = input(
      "form-check-input",
      ...ngDevMode ? [{
        debugName: "checkboxClass"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.checkboxReadonly = input(
      false,
      ...ngDevMode ? [{
        debugName: "checkboxReadonly"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.checkboxBlur = output();
    this.checkboxFocus = output();
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵFormCheckboxComponent_BaseFactory;
      return function FormCheckboxComponent_Factory(__ngFactoryType__) {
        return (ɵFormCheckboxComponent_BaseFactory || (ɵFormCheckboxComponent_BaseFactory = ɵɵgetInheritedFactory(_FormCheckboxComponent)))(__ngFactoryType__ || _FormCheckboxComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormCheckboxComponent,
      selectors: [["abp-checkbox"]],
      inputs: {
        label: [1, "label"],
        labelClass: [1, "labelClass"],
        checkboxId: [1, "checkboxId"],
        checkboxStyle: [1, "checkboxStyle"],
        checkboxClass: [1, "checkboxClass"],
        checkboxReadonly: [1, "checkboxReadonly"]
      },
      outputs: {
        checkboxBlur: "checkboxBlur",
        checkboxFocus: "checkboxFocus"
      },
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _FormCheckboxComponent),
        multi: true
      }]), ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 8,
      consts: [[1, "mb-3"], ["type", "checkbox", 3, "ngModelChange", "blur", "focus", "ngModel", "id", "readonly"], [3, "class", "for"], [3, "for"]],
      template: function FormCheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "input", 1);
          ɵɵtwoWayListener("ngModelChange", function FormCheckboxComponent_Template_input_ngModelChange_1_listener($event) {
            ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
            return $event;
          });
          ɵɵlistener("blur", function FormCheckboxComponent_Template_input_blur_1_listener() {
            return ctx.checkboxBlur.emit();
          })("focus", function FormCheckboxComponent_Template_input_focus_1_listener() {
            return ctx.checkboxFocus.emit();
          });
          ɵɵelementEnd();
          ɵɵcontrolCreate();
          ɵɵconditionalCreate(2, FormCheckboxComponent_Conditional_2_Template, 3, 6, "label", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵstyleMap(ctx.checkboxStyle());
          ɵɵclassMap(ctx.checkboxClass());
          ɵɵtwoWayProperty("ngModel", ctx.value);
          ɵɵproperty("id", ctx.checkboxId())("readonly", ctx.checkboxReadonly());
          ɵɵcontrol();
          ɵɵadvance();
          ɵɵconditional(ctx.label() ? 2 : -1);
        }
      },
      dependencies: [FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCheckboxComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-checkbox",
      template: `
    <div class="mb-3">
      <input
        type="checkbox"
        [(ngModel)]="value"
        [id]="checkboxId()"
        [readonly]="checkboxReadonly()"
        [class]="checkboxClass()"
        [style]="checkboxStyle()"
        (blur)="checkboxBlur.emit()"
        (focus)="checkboxFocus.emit()"
      />
      @if (label()) {
        <label [class]="labelClass()" [for]="checkboxId()">
          {{ label() | abpLocalization }}
        </label>
      }
    </div>
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FormCheckboxComponent),
        multi: true
      }],
      imports: [FormsModule, LocalizationPipe]
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
    labelClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "labelClass",
        required: false
      }]
    }],
    checkboxId: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "checkboxId",
        required: true
      }]
    }],
    checkboxStyle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "checkboxStyle",
        required: false
      }]
    }],
    checkboxClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "checkboxClass",
        required: false
      }]
    }],
    checkboxReadonly: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "checkboxReadonly",
        required: false
      }]
    }],
    checkboxBlur: [{
      type: Output,
      args: ["checkboxBlur"]
    }],
    checkboxFocus: [{
      type: Output,
      args: ["checkboxFocus"]
    }]
  });
})();
var FormInputComponent = class _FormInputComponent extends AbstractNgModelComponent {
  constructor() {
    super(...arguments);
    this.inputId = input(
      ...ngDevMode ? [void 0, {
        debugName: "inputId"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.inputReadonly = input(
      false,
      ...ngDevMode ? [{
        debugName: "inputReadonly"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.label = input(
      "",
      ...ngDevMode ? [{
        debugName: "label"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.labelClass = input(
      "form-label",
      ...ngDevMode ? [{
        debugName: "labelClass"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.inputPlaceholder = input(
      "",
      ...ngDevMode ? [{
        debugName: "inputPlaceholder"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.inputStyle = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "inputStyle"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.inputClass = input(
      "form-control",
      ...ngDevMode ? [{
        debugName: "inputClass"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.formBlur = output();
    this.formFocus = output();
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵFormInputComponent_BaseFactory;
      return function FormInputComponent_Factory(__ngFactoryType__) {
        return (ɵFormInputComponent_BaseFactory || (ɵFormInputComponent_BaseFactory = ɵɵgetInheritedFactory(_FormInputComponent)))(__ngFactoryType__ || _FormInputComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormInputComponent,
      selectors: [["abp-form-input"]],
      inputs: {
        inputId: [1, "inputId"],
        inputReadonly: [1, "inputReadonly"],
        label: [1, "label"],
        labelClass: [1, "labelClass"],
        inputPlaceholder: [1, "inputPlaceholder"],
        inputStyle: [1, "inputStyle"],
        inputClass: [1, "inputClass"]
      },
      outputs: {
        formBlur: "formBlur",
        formFocus: "formFocus"
      },
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _FormInputComponent),
        multi: true
      }]), ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 9,
      consts: [[1, "mb-3"], [3, "class", "for"], ["type", "text", 3, "blur", "focus", "ngModelChange", "id", "placeholder", "readonly", "ngModel"], [3, "for"]],
      template: function FormInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵconditionalCreate(1, FormInputComponent_Conditional_1_Template, 3, 6, "label", 1);
          ɵɵelementStart(2, "input", 2);
          ɵɵlistener("blur", function FormInputComponent_Template_input_blur_2_listener() {
            return ctx.formBlur.emit();
          })("focus", function FormInputComponent_Template_input_focus_2_listener() {
            return ctx.formFocus.emit();
          });
          ɵɵtwoWayListener("ngModelChange", function FormInputComponent_Template_input_ngModelChange_2_listener($event) {
            ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵcontrolCreate();
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.label() ? 1 : -1);
          ɵɵadvance();
          ɵɵstyleMap(ctx.inputStyle());
          ɵɵclassMap(ctx.inputClass());
          ɵɵproperty("id", ctx.inputId())("placeholder", ctx.inputPlaceholder())("readonly", ctx.inputReadonly());
          ɵɵtwoWayProperty("ngModel", ctx.value);
          ɵɵcontrol();
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormInputComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-form-input",
      template: `
    <div class="mb-3">
      @if (label()) {
        <label [class]="labelClass()" [for]="inputId()">
          {{ label() | abpLocalization }}
        </label>
      }
      <input
        type="text"
        [id]="inputId()"
        [placeholder]="inputPlaceholder()"
        [readonly]="inputReadonly()"
        [class]="inputClass()"
        [style]="inputStyle()"
        (blur)="formBlur.emit()"
        (focus)="formFocus.emit()"
        [(ngModel)]="value"
      />
    </div>
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FormInputComponent),
        multi: true
      }],
      imports: [LocalizationPipe, FormsModule]
    }]
  }], null, {
    inputId: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inputId",
        required: false
      }]
    }],
    inputReadonly: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inputReadonly",
        required: false
      }]
    }],
    label: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "label",
        required: false
      }]
    }],
    labelClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "labelClass",
        required: false
      }]
    }],
    inputPlaceholder: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inputPlaceholder",
        required: false
      }]
    }],
    inputStyle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inputStyle",
        required: false
      }]
    }],
    inputClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inputClass",
        required: false
      }]
    }],
    formBlur: [{
      type: Output,
      args: ["formBlur"]
    }],
    formFocus: [{
      type: Output,
      args: ["formFocus"]
    }]
  });
})();
var InternetConnectionStatusComponent = class _InternetConnectionStatusComponent {
  constructor() {
    this.internetConnectionService = inject(InternetConnectionService);
    this.isOnline = this.internetConnectionService.networkStatus;
  }
  static {
    this.ɵfac = function InternetConnectionStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InternetConnectionStatusComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _InternetConnectionStatusComponent,
      selectors: [["abp-internet-status"]],
      decls: 1,
      vars: 1,
      consts: [[1, "status-icon"], ["container", "body", "placement", "left-top", 1, "fa", "fa-wifi", "text-blinking", "blink", 3, "ngbTooltip"]],
      template: function InternetConnectionStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, InternetConnectionStatusComponent_Conditional_0_Template, 3, 4, "div", 0);
        }
        if (rf & 2) {
          ɵɵconditional(!ctx.isOnline() ? 0 : -1);
        }
      },
      dependencies: [NgbTooltip, LocalizationPipe],
      styles: [".blink[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blinker .9s cubic-bezier(.5,0,1,1) infinite alternate}@keyframes _ngcontent-%COMP%_blinker{0%{color:#c1c1c1}70%{color:#fa2379}to{color:#fa2379}}.text-blinking[_ngcontent-%COMP%]{font-size:30px}.status-icon[_ngcontent-%COMP%]{position:fixed;z-index:999999;top:50%;left:50%;width:30px;text-align:center;margin-left:-15px;margin-top:-15px;translate:transform(-50%,-50%)}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternetConnectionStatusComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-internet-status",
      imports: [LocalizationPipe, NgbTooltip],
      template: `
    @if (!isOnline()) {
      <div class="status-icon">
        <i
          ngbTooltip="{{ 'AbpUi::InternetConnectionInfo' | abpLocalization }}"
          container="body"
          placement="left-top"
          class="fa fa-wifi text-blinking blink"
        >
        </i>
      </div>
    }
  `,
      styles: [".blink{animation:blinker .9s cubic-bezier(.5,0,1,1) infinite alternate}@keyframes blinker{0%{color:#c1c1c1}70%{color:#fa2379}to{color:#fa2379}}.text-blinking{font-size:30px}.status-icon{position:fixed;z-index:999999;top:50%;left:50%;width:30px;text-align:center;margin-left:-15px;margin-top:-15px;translate:transform(-50%,-50%)}\n"]
    }]
  }], null, null);
})();
var SpinnerComponent = class _SpinnerComponent {
  static {
    this.ɵfac = function SpinnerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpinnerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SpinnerComponent,
      selectors: [["abp-spinner"]],
      decls: 4,
      vars: 0,
      consts: [[1, "d-flex", "justify-content-center", "align-items-center", "border-top", 2, "height", "62px"], ["role", "status", "id", "loading", 1, "spinner-border"], [1, "visually-hidden"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
          ɵɵtext(3, "Loading...");
          ɵɵdomElementEnd()()();
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-spinner",
      template: `
    <div class="d-flex justify-content-center align-items-center border-top" style="height: 62px">
      <div class="spinner-border" role="status" id="loading">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `
    }]
  }], null, null);
})();
var EllipsisDirective = class _EllipsisDirective {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.elRef = inject(ElementRef);
    this.width = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "width"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "abpEllipsis"
    }));
    this.title = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "title"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.enabled = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "enabled"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "abpEllipsisEnabled"
    }));
    this.autoTitle = signal(
      void 0,
      ...ngDevMode ? [{
        debugName: "autoTitle"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.effectiveTitle = computed(
      () => this.title() || this.autoTitle(),
      ...ngDevMode ? [{
        debugName: "effectiveTitle"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.inlineClass = computed(
      () => this.enabled() && !!this.width(),
      ...ngDevMode ? [{
        debugName: "inlineClass"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ellipsisClass = computed(
      () => this.enabled() && !this.width(),
      ...ngDevMode ? [{
        debugName: "ellipsisClass"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.maxWidth = computed(
      () => {
        const width = this.width();
        return this.enabled() && width ? width || "170px" : void 0;
      },
      ...ngDevMode ? [{
        debugName: "maxWidth"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngAfterViewInit() {
    if (!this.title()) {
      this.autoTitle.set(this.elRef.nativeElement.innerText);
      this.cdRef.detectChanges();
    }
  }
  static {
    this.ɵfac = function EllipsisDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EllipsisDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _EllipsisDirective,
      selectors: [["", "abpEllipsis", ""]],
      hostVars: 7,
      hostBindings: function EllipsisDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("title", ctx.effectiveTitle());
          ɵɵstyleProp("max-width", ctx.maxWidth());
          ɵɵclassProp("abp-ellipsis-inline", ctx.inlineClass())("abp-ellipsis", ctx.ellipsisClass());
        }
      },
      inputs: {
        width: [1, "abpEllipsis", "width"],
        title: [1, "title"],
        enabled: [1, "abpEllipsisEnabled", "enabled"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EllipsisDirective, [{
    type: Directive,
    args: [{
      selector: "[abpEllipsis]",
      host: {
        "[title]": "effectiveTitle()",
        "[class.abp-ellipsis-inline]": "inlineClass()",
        "[class.abp-ellipsis]": "ellipsisClass()",
        "[style.max-width]": "maxWidth()"
      }
    }]
  }], null, {
    width: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpEllipsis",
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
    enabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpEllipsisEnabled",
        required: false
      }]
    }]
  });
})();
var LoadingDirective = class _LoadingDirective {
  constructor() {
    this.elRef = inject(ElementRef);
    this.injector = inject(Injector);
    this.renderer = inject(Renderer2);
    this.viewContainerRef = inject(ViewContainerRef);
    this.loading = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "loading"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "abpLoading"
    }));
    this.targetElementInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "targetElementInput"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "abpLoadingTargetElement"
    }));
    this.delay = input(0, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "delay"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "abpLoadingDelay"
    }));
    this.componentRef = null;
    this.rootNode = null;
    this.timerSubscription = null;
    effect(() => {
      const newValue = this.loading();
      this.handleLoadingChange(newValue);
    });
  }
  handleLoadingChange(newValue) {
    setTimeout(() => {
      if (!newValue) {
        this.clearLoading();
        return;
      }
      if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
      this.timerSubscription = timer(this.delay()).pipe(take(1)).subscribe(() => {
        if (!this.loading()) {
          return;
        }
        if (!this.componentRef) {
          this.componentRef = this.viewContainerRef.createComponent(LoadingComponent, {
            injector: this.injector
          });
        }
        if (!this.rootNode) {
          this.rootNode = this.componentRef.hostView.rootNodes[0];
          this.targetElement?.appendChild(this.rootNode);
        }
        this.timerSubscription = null;
      });
    }, 0);
  }
  clearLoading() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
    if (this.rootNode?.parentElement) {
      this.renderer.removeChild(this.rootNode.parentElement, this.rootNode);
      this.rootNode = null;
    }
  }
  ngOnInit() {
    this.targetElement = this.targetElementInput();
    if (!this.targetElement) {
      const {
        offsetHeight,
        offsetWidth
      } = this.elRef.nativeElement;
      if (!offsetHeight && !offsetWidth && this.elRef.nativeElement.children?.length) {
        this.targetElement = this.elRef.nativeElement.children[0];
      } else {
        this.targetElement = this.elRef.nativeElement;
      }
    }
  }
  ngOnDestroy() {
    this.clearLoading();
  }
  static {
    this.ɵfac = function LoadingDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _LoadingDirective,
      selectors: [["", "abpLoading", ""]],
      hostVars: 2,
      hostBindings: function LoadingDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("position", "relative");
        }
      },
      inputs: {
        loading: [1, "abpLoading", "loading"],
        targetElementInput: [1, "abpLoadingTargetElement", "targetElementInput"],
        delay: [1, "abpLoadingDelay", "delay"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingDirective, [{
    type: Directive,
    args: [{
      selector: "[abpLoading]",
      host: {
        "[style.position]": '"relative"'
      }
    }]
  }], () => [], {
    loading: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpLoading",
        required: false
      }]
    }],
    targetElementInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpLoadingTargetElement",
        required: false
      }]
    }],
    delay: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpLoadingDelay",
        required: false
      }]
    }]
  });
})();
var NgxDatatableDefaultDirective = class _NgxDatatableDefaultDirective {
  get classes() {
    return `ngx-datatable ${this.class()}`;
  }
  constructor() {
    this.table = inject(DatatableComponent);
    this.document = inject(DOCUMENT);
    this.platformId = inject(PLATFORM_ID);
    this.subscription = new Subscription();
    this.resizeDiff = 0;
    this.class = input(
      "material bordered",
      ...ngDevMode ? [{
        debugName: "class"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table.columnMode = ColumnMode.force;
    this.table.footerHeight = 50;
    this.table.headerHeight = 50;
    this.table.rowHeight = "auto";
    this.table.scrollbarH = true;
    this.table.virtualization = false;
  }
  fixHorizontalGap(scroller) {
    const {
      body,
      documentElement
    } = this.document;
    if (isPlatformBrowser(this.platformId)) {
      if (documentElement.scrollHeight !== documentElement.clientHeight) {
        if (this.resizeDiff === 0) {
          this.resizeDiff = window.innerWidth - body.offsetWidth;
          scroller.scrollWidth -= this.resizeDiff;
        }
      } else {
        scroller.scrollWidth += this.resizeDiff;
        this.resizeDiff = 0;
      }
    }
  }
  fixStyleOnWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      const subscription = fromEvent(window, "resize").pipe(debounceTime(500)).subscribe(() => {
        const {
          scroller
        } = this.table.bodyComponent;
        if (!scroller) return;
        this.fixHorizontalGap(scroller);
      });
      this.subscription.add(subscription);
    }
  }
  ngAfterViewInit() {
    this.fixStyleOnWindowResize();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function NgxDatatableDefaultDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxDatatableDefaultDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgxDatatableDefaultDirective,
      selectors: [["ngx-datatable", "default", ""]],
      hostVars: 2,
      hostBindings: function NgxDatatableDefaultDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.classes);
        }
      },
      inputs: {
        class: [1, "class"]
      },
      exportAs: ["ngxDatatableDefault"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDatatableDefaultDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "ngx-datatable[default]",
      exportAs: "ngxDatatableDefault"
    }]
  }], () => [], {
    class: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "class",
        required: false
      }]
    }],
    classes: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var NgxDatatableListDirective = class _NgxDatatableListDirective {
  constructor() {
    this.table = inject(DatatableComponent);
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.localizationService = inject(LocalizationService);
    this.ngxDatatableMessages = inject(NGX_DATATABLE_MESSAGES, {
      optional: true
    });
    this.viewContainerRef = inject(ViewContainerRef);
    this.renderer = inject(Renderer2);
    this.list = input.required(
      ...ngDevMode ? [{
        debugName: "list"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setInitialValues();
  }
  ngDoCheck() {
    this.refreshPageIfDataExist();
  }
  ngOnInit() {
    this.subscribeToPage();
    this.subscribeToSort();
    this.subscribeToRequestStatus();
  }
  ngOnChanges({
    list
  }) {
    this.subscribeToQuery();
    if (!list.firstChange) return;
    const {
      maxResultCount,
      page
    } = list.currentValue;
    this.table.limit = maxResultCount;
    this.table.offset = page;
  }
  subscribeToRequestStatus() {
    const requestStatus$ = this.list().requestStatus$.pipe(distinctUntilChanged());
    const {
      emptyMessage,
      errorMessage
    } = this.ngxDatatableMessages || defaultNgxDatatableMessages;
    requestStatus$.subscribe((status) => {
      this.table.loadingIndicator = false;
      if (status === "idle") {
        return;
      }
      if (status === "loading") {
        this.table.messages.emptyMessage = void 0;
        this.table.loadingIndicator = true;
        this.cdRef.detectChanges();
        this.updateLoadingIndicator();
        return;
      }
      if (status === "error") {
        this.table.messages.emptyMessage = this.localizationService.instant(errorMessage);
        this.viewContainerRef.clear();
        this.cdRef.markForCheck();
      }
      if (status === "success") {
        this.table.messages.emptyMessage = this.localizationService.instant(emptyMessage);
        this.viewContainerRef.clear();
      }
    });
  }
  updateLoadingIndicator() {
    const body = this.table.element.querySelector("datatable-body");
    const progress = this.table.element.querySelector("datatable-progress");
    if (!body) {
      return;
    }
    if (progress) {
      this.replaceLoadingIndicator(body, progress);
    }
  }
  replaceLoadingIndicator(parent, placeholder) {
    this.viewContainerRef.clear();
    const spinnerRef = this.viewContainerRef.createComponent(SpinnerComponent);
    const spinnerElement = spinnerRef.location.nativeElement;
    this.renderer.insertBefore(parent, spinnerElement, parent.firstChild);
    const placeholderParent = placeholder?.parentNode;
    if (placeholderParent) {
      this.renderer.removeChild(placeholderParent, placeholder);
    }
  }
  setInitialValues() {
    this.table.externalPaging = true;
    this.table.externalSorting = true;
    const {
      selectedMessage,
      totalMessage
    } = this.ngxDatatableMessages || defaultNgxDatatableMessages;
    this.table.messages = {
      totalMessage: this.localizationService.instant(totalMessage),
      selectedMessage: this.localizationService.instant(selectedMessage)
    };
  }
  subscribeToSort() {
    this.table.sort.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({
      sorts: [{
        prop,
        dir
      }]
    }) => {
      const list = this.list();
      if (prop === list.sortKey && list.sortOrder === "desc") {
        list.sortKey = "";
        list.sortOrder = "";
        this.table.sorts = [];
        this.cdRef.detectChanges();
      } else {
        list.sortKey = prop;
        list.sortOrder = dir;
      }
    });
  }
  subscribeToPage() {
    this.table.page.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({
      offset
    }) => {
      this.setTablePage(offset);
    });
  }
  subscribeToQuery() {
    this.list().query$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      const offset = this.list().page;
      if (this.table.offset !== offset) this.table.offset = offset;
    });
  }
  setTablePage(pageNum) {
    this.list().page = pageNum;
    this.table.offset = pageNum;
  }
  refreshPageIfDataExist() {
    if (this.table.rows?.length < 1 && this.table.count > 0) {
      let maxPage = Math.floor(Number(this.table.count / this.list().maxResultCount));
      if (this.table.count < this.list().maxResultCount) {
        this.setTablePage(0);
        return;
      }
      if (this.table.count % this.list().maxResultCount === 0) {
        maxPage -= 1;
      }
      if (this.list().page < maxPage) {
        this.setTablePage(this.list().page);
        return;
      }
      this.setTablePage(maxPage);
    }
  }
  static {
    this.ɵfac = function NgxDatatableListDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxDatatableListDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgxDatatableListDirective,
      selectors: [["ngx-datatable", "list", ""]],
      inputs: {
        list: [1, "list"]
      },
      exportAs: ["ngxDatatableList"],
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDatatableListDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "ngx-datatable[list]",
      exportAs: "ngxDatatableList"
    }]
  }], () => [], {
    list: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "list",
        required: true
      }]
    }]
  });
})();
var AbpVisibleDirective = class _AbpVisibleDirective {
  constructor() {
    this.viewContainerRef = inject(ViewContainerRef);
    this.templateRef = inject(TemplateRef);
    this.condition$ = of(false);
    this.abpVisible = input(
      ...ngDevMode ? [void 0, {
        debugName: "abpVisible"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const value = this.abpVisible();
      if (value === this.lastInput) return;
      this.lastInput = value;
      this.condition$ = checkType(value);
      this.subscribeToCondition();
    });
  }
  ngOnDestroy() {
    this.conditionSubscription?.unsubscribe();
  }
  subscribeToCondition() {
    this.conditionSubscription?.unsubscribe();
    this.conditionSubscription = this.condition$.subscribe((value) => {
      this.isVisible = value;
      this.updateVisibility();
    });
  }
  updateVisibility() {
    this.viewContainerRef.clear();
    if (this.isVisible === false) {
      return;
    }
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
  static {
    this.ɵfac = function AbpVisibleDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbpVisibleDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbpVisibleDirective,
      selectors: [["", "abpVisible", ""]],
      inputs: {
        abpVisible: [1, "abpVisible"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpVisibleDirective, [{
    type: Directive,
    args: [{
      selector: "[abpVisible]"
    }]
  }], () => [], {
    abpVisible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpVisible",
        required: false
      }]
    }]
  });
})();
function checkType(value) {
  if (value instanceof Promise) {
    return from(value);
  } else if (value instanceof Observable) {
    return value;
  } else if (typeof value === "boolean") {
    return of(value);
  } else if (value === void 0 || value === null) {
    return of(true);
  } else {
    return EMPTY;
  }
}
var DisabledDirective = class _DisabledDirective {
  constructor() {
    this.ngControl = inject(NgControl, {
      host: true
    });
    this.abpDisabled = input(
      false,
      ...ngDevMode ? [{
        debugName: "abpDisabled"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabledEffect = effect(
      () => {
        const disabled = this.abpDisabled();
        if (this.ngControl.control) {
          this.ngControl.control[disabled ? "disable" : "enable"]();
        }
      },
      ...ngDevMode ? [{
        debugName: "disabledEffect"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.ɵfac = function DisabledDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisabledDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DisabledDirective,
      selectors: [["", "abpDisabled", ""]],
      inputs: {
        abpDisabled: [1, "abpDisabled"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisabledDirective, [{
    type: Directive,
    args: [{
      selector: "[abpDisabled]"
    }]
  }], null, {
    abpDisabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpDisabled",
        required: false
      }]
    }]
  });
})();
var eFormComponets;
(function(eFormComponets2) {
  eFormComponets2["FormInputComponent"] = "FormInputComponent";
  eFormComponets2["FormCheckboxComponent"] = "FormCheckboxComponent";
})(eFormComponets || (eFormComponets = {}));
var DocumentDirHandlerService = class _DocumentDirHandlerService {
  constructor() {
    this.injector = inject(Injector);
    this.dir = new BehaviorSubject("ltr");
    this.dir$ = this.dir.asObservable();
    this.listenToLanguageChanges();
  }
  listenToLanguageChanges() {
    const l10n = this.injector.get(LocalizationService);
    l10n.currentLang$.pipe(map((locale) => getLocaleDirection(locale))).subscribe((dir) => {
      this.dir.next(dir);
      this.setBodyDir(dir);
    });
  }
  setBodyDir(dir) {
    this.injector.get(DOCUMENT).body.dir = dir;
    this.injector.get(DOCUMENT).dir = dir;
  }
  static {
    this.ɵfac = function DocumentDirHandlerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentDirHandlerService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DocumentDirHandlerService,
      factory: _DocumentDirHandlerService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentDirHandlerService, [{
    type: Injectable
  }], () => [], null);
})();
var ErrorHandler = class _ErrorHandler {
  constructor() {
    this.injector = inject(Injector);
    this.httpErrorReporter = inject(HttpErrorReporterService);
    this.confirmationService = inject(ConfirmationService);
    this.routerErrorHandlerService = inject(RouterErrorHandlerService);
    this.httpErrorConfig = inject(HTTP_ERROR_CONFIG);
    this.customErrorHandlers = inject(CUSTOM_ERROR_HANDLERS);
    this.httpErrorHandler = inject(HTTP_ERROR_HANDLER, {
      optional: true
    });
    this.executeErrorHandler = (error) => {
      if (this.httpErrorHandler) {
        return this.httpErrorHandler(this.injector, error);
      }
      return of(error);
    };
    this.filterRestErrors = ({
      status
    }) => {
      if (typeof status !== "number") return false;
      if (!this.httpErrorConfig?.skipHandledErrorCodes) {
        return true;
      }
      return this.httpErrorConfig.skipHandledErrorCodes?.findIndex((code) => code === status) < 0;
    };
    this.listenToRestError();
    this.listenToRouterError();
  }
  listenToRouterError() {
    this.routerErrorHandlerService.listen();
  }
  listenToRestError() {
    this.httpErrorReporter.reporter$.pipe(filter(this.filterRestErrors), switchMap(this.executeErrorHandler)).subscribe((err) => this.handleError(err));
  }
  sortHttpErrorHandlers(a, b) {
    return (b.priority || 0) - (a.priority || 0);
  }
  handleError(err) {
    if (this.customErrorHandlers && this.customErrorHandlers.length) {
      const errorHandlerService = this.customErrorHandlers.sort(this.sortHttpErrorHandlers).find((service) => service.canHandle(err));
      if (errorHandlerService) {
        errorHandlerService.execute();
        return;
      }
    }
    this.showError().subscribe();
  }
  showError() {
    const title = {
      key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title
    };
    const message = {
      key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.details,
      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.details
    };
    return this.confirmationService.error(message, title, {
      hideCancelBtn: true,
      yesText: "AbpAccount::Close"
    });
  }
  static {
    this.ɵfac = function ErrorHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ErrorHandler)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ErrorHandler,
      factory: _ErrorHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NG_BOOTSTRAP_CONFIG_PROVIDERS = [{
  provide: NgbDatepickerI18n,
  useClass: DatepickerI18nAdapter
}, {
  provide: NgbTimepickerI18n,
  useClass: TimepickerI18nAdapter
}, provideAppInitializer(() => {
  configureNgBootstrap();
})];
function configureNgBootstrap() {
  const datepicker = inject(NgbInputDatepickerConfig);
  const typeahead = inject(NgbTypeaheadConfig);
  datepicker.container = "body";
  typeahead.container = "body";
}
var THEME_SHARED_ROUTE_PROVIDERS = [provideAppInitializer(() => {
  configureRoutes();
})];
function configureRoutes() {
  const routesService = inject(RoutesService);
  routesService.add([{
    path: void 0,
    name: "AbpUiNavigation::Menu:Administration",
    iconClass: "fa fa-wrench",
    order: 100
  }]);
}
var tenantNotFoundProvider = {
  provide: TENANT_NOT_FOUND_BY_NAME,
  useFactory: function() {
    const confirm = inject(ConfirmationService);
    const document = inject(DOCUMENT);
    return (response) => {
      const {
        error
      } = response.error;
      const appRoot = document.querySelector("app-root div.donut");
      if (appRoot) {
        appRoot.remove();
      }
      confirm.error(error.details, error.message, {
        hideCancelBtn: true,
        hideYesBtn: true
      });
    };
  }
};
var DEFAULT_HANDLERS_PROVIDERS = [{
  provide: CUSTOM_ERROR_HANDLERS,
  multi: true,
  useExisting: TenantResolveErrorHandlerService
}, {
  provide: CUSTOM_ERROR_HANDLERS,
  multi: true,
  useExisting: AbpFormatErrorHandlerService
}, {
  provide: CUSTOM_ERROR_HANDLERS,
  multi: true,
  useExisting: StatusCodeErrorHandlerService
}, {
  provide: CUSTOM_ERROR_HANDLERS,
  multi: true,
  useExisting: UnknownStatusCodeErrorHandlerService
}, {
  provide: CUSTOM_ERROR_HANDLERS,
  multi: true,
  useExisting: AbpAuthenticationErrorHandler
}];
var DEFAULT_VALIDATION_BLUEPRINTS = {
  creditCard: "AbpValidation::ThisFieldIsNotAValidCreditCardNumber.",
  email: "AbpValidation::ThisFieldIsNotAValidEmailAddress.",
  invalid: "AbpValidation::ThisFieldIsNotValid.",
  max: "AbpValidation::ThisFieldMustBeLessOrEqual{0}[{{ max }}]",
  maxlength: "AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]",
  min: "AbpValidation::ThisFieldMustBeGreaterThanOrEqual{0}[{{ min }}]",
  minlength: "AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]",
  ngbDate: "AbpValidation::ThisFieldIsNotValid.",
  passwordMismatch: "AbpIdentity::Volo.Abp.Identity:PasswordConfirmationFailed",
  range: "AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]",
  required: "AbpValidation::ThisFieldIsRequired.",
  url: "AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl",
  passwordRequiresLower: "AbpIdentity::Volo.Abp.Identity:PasswordRequiresLower",
  passwordRequiresUpper: "AbpIdentity::Volo.Abp.Identity:PasswordRequiresUpper",
  passwordRequiresDigit: "AbpIdentity::Volo.Abp.Identity:PasswordRequiresDigit",
  passwordRequiresNonAlphanumeric: "AbpIdentity::Volo.Abp.Identity:PasswordRequiresNonAlphanumeric",
  usernamePattern: "AbpIdentity::Volo.Abp.Identity:InvalidUserName[{{ actualValue }}]",
  customMessage: "{{ customMessage }}"
};
function isNumber(value) {
  return !isNaN(toInteger(value));
}
function toInteger(value) {
  return parseInt(`${value}`, 10);
}
var DateParserFormatter = class _DateParserFormatter extends NgbDateParserFormatter {
  constructor() {
    super();
    this.configState = inject(ConfigStateService);
    this.locale = inject(LOCALE_ID);
  }
  parse(value) {
    if (value) {
      const dateParts = value.trim().split("-");
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return {
          year: toInteger(dateParts[0]),
          month: -1,
          day: -1
        };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: -1
        };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: toInteger(dateParts[2])
        };
      }
    }
    return null;
  }
  format(date) {
    if (!date) return "";
    const localization = this.configState.getOne("localization");
    const dateFormat = localization.currentCulture?.dateTimeFormat?.shortDatePattern || "yyyy-MM-dd";
    return formatDate(new Date(date.year, date.month - 1, date.day), dateFormat, this.locale);
  }
  static {
    this.ɵfac = function DateParserFormatter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateParserFormatter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DateParserFormatter,
      factory: _DateParserFormatter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateParserFormatter, [{
    type: Injectable
  }], () => [], null);
})();
var {
  minLength,
  maxLength
} = Validators;
function getPasswordValidators(injector) {
  const getRule = getRuleFn(injector);
  const passwordRulesArr = [];
  let requiredLength = 1;
  if (getRule("RequireDigit") === "true") {
    passwordRulesArr.push("number");
  }
  if (getRule("RequireLowercase") === "true") {
    passwordRulesArr.push("small");
  }
  if (getRule("RequireUppercase") === "true") {
    passwordRulesArr.push("capital");
  }
  if (getRule("RequireNonAlphanumeric") === "true") {
    passwordRulesArr.push("special");
  }
  if (Number.isInteger(+getRule("RequiredLength"))) {
    requiredLength = +getRule("RequiredLength");
  }
  const passwordValidators = passwordRulesArr.map((rule) => validatePassword(rule));
  return [...passwordValidators, minLength(requiredLength), maxLength(128)];
}
function getRuleFn(injector) {
  const configState = injector.get(ConfigStateService);
  return (key) => {
    const passwordRules = configState.getSettings("Identity.Password");
    return (passwordRules[`Abp.Identity.Password.${key}`] || "").toLowerCase();
  };
}
var errorMessageMap = {
  small: "passwordRequiresLower",
  capital: "passwordRequiresUpper",
  number: "passwordRequiresDigit",
  special: "passwordRequiresNonAlphanumeric"
};
function validatePassword(shouldContain) {
  return (control) => {
    if (!control.value) return null;
    const value = normalizeDiacritics(control.value);
    const regexMap = {
      small: /.*[a-z].*/,
      capital: /.*[A-Z].*/,
      number: /.*[0-9].*/,
      special: /.*[^0-9a-zA-Z].*/
    };
    const regex = regexMap[shouldContain];
    const isValid = regex.test(value);
    if (isValid) {
      return null;
    }
    const error = errorMessageMap[shouldContain];
    return {
      [error]: true
    };
  };
}
var ThemeSharedFeatureKind;
(function(ThemeSharedFeatureKind2) {
  ThemeSharedFeatureKind2[ThemeSharedFeatureKind2["HttpErrorConfig"] = 0] = "HttpErrorConfig";
  ThemeSharedFeatureKind2[ThemeSharedFeatureKind2["ValidationBluePrint"] = 1] = "ValidationBluePrint";
  ThemeSharedFeatureKind2[ThemeSharedFeatureKind2["ValidationErrorsFn"] = 2] = "ValidationErrorsFn";
  ThemeSharedFeatureKind2[ThemeSharedFeatureKind2["ValidateOnSubmit"] = 3] = "ValidateOnSubmit";
  ThemeSharedFeatureKind2[ThemeSharedFeatureKind2["Validation"] = 4] = "Validation";
  ThemeSharedFeatureKind2[ThemeSharedFeatureKind2["ConfirmationIcons"] = 5] = "ConfirmationIcons";
})(ThemeSharedFeatureKind || (ThemeSharedFeatureKind = {}));
function makeThemeSharedFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
function withHttpErrorConfig(httpErrorConfig) {
  return makeThemeSharedFeature(ThemeSharedFeatureKind.HttpErrorConfig, [{
    provide: HTTP_ERROR_CONFIG,
    useValue: httpErrorConfig
  }]);
}
function withValidationBluePrint(bluePrints) {
  return makeThemeSharedFeature(ThemeSharedFeatureKind.ValidationBluePrint, [{
    provide: VALIDATION_BLUEPRINTS,
    useValue: __spreadValues(__spreadValues({}, DEFAULT_VALIDATION_BLUEPRINTS), bluePrints || {})
  }]);
}
function withValidationMapErrorsFn(mapErrorsFn) {
  return makeThemeSharedFeature(ThemeSharedFeatureKind.ValidationErrorsFn, [{
    provide: VALIDATION_MAP_ERRORS_FN,
    useValue: mapErrorsFn || defaultMapErrorsFn
  }]);
}
function withValidateOnSubmit(validateOnSubmit) {
  return makeThemeSharedFeature(ThemeSharedFeatureKind.ValidateOnSubmit, [{
    provide: VALIDATION_VALIDATE_ON_SUBMIT,
    useValue: validateOnSubmit
  }]);
}
function withConfirmationIcon(confirmationIcons) {
  return makeThemeSharedFeature(ThemeSharedFeatureKind.HttpErrorConfig, [{
    provide: CONFIRMATION_ICONS,
    useValue: __spreadValues(__spreadValues({}, DEFAULT_CONFIRMATION_ICONS), confirmationIcons || {})
  }]);
}
function provideAbpThemeShared(...features) {
  const providers = [provideAppInitializer(() => {
    inject(ErrorHandler);
    inject(THEME_SHARED_APPEND_CONTENT);
    inject(DocumentDirHandlerService);
  }), THEME_SHARED_ROUTE_PROVIDERS, {
    provide: HTTP_ERROR_CONFIG,
    useValue: void 0
  }, {
    provide: NgbDateParserFormatter,
    useClass: DateParserFormatter
  }, NG_BOOTSTRAP_CONFIG_PROVIDERS, {
    provide: VALIDATION_BLUEPRINTS,
    useValue: __spreadValues({}, DEFAULT_VALIDATION_BLUEPRINTS)
  }, {
    provide: VALIDATION_MAP_ERRORS_FN,
    useValue: defaultMapErrorsFn
  }, {
    provide: VALIDATION_VALIDATE_ON_SUBMIT,
    useValue: void 0
  }, DocumentDirHandlerService, {
    provide: CONFIRMATION_ICONS,
    useValue: __spreadValues({}, DEFAULT_CONFIRMATION_ICONS)
  }, tenantNotFoundProvider, DEFAULT_HANDLERS_PROVIDERS];
  for (const feature of features) {
    providers.push(...feature.ɵproviders);
  }
  return makeEnvironmentProviders(providers);
}
var LogoFeatureKind;
(function(LogoFeatureKind2) {
  LogoFeatureKind2[LogoFeatureKind2["Options"] = 0] = "Options";
})(LogoFeatureKind || (LogoFeatureKind = {}));
function makeLogoFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
function withEnvironmentOptions(options = {}) {
  const {
    name,
    logoUrl
  } = options.application || {};
  return makeLogoFeature(LogoFeatureKind.Options, [{
    provide: LOGO_URL_TOKEN,
    useValue: logoUrl || ""
  }, {
    provide: LOGO_APP_NAME_TOKEN,
    useValue: name || "ProjectName"
  }]);
}
function provideLogo(...features) {
  const providers = [];
  features.forEach(({
    ɵproviders
  }) => providers.push(...ɵproviders));
  return makeEnvironmentProviders(providers);
}
var THEME_SHARED_EXPORTS = [BreadcrumbComponent, BreadcrumbItemsComponent, ButtonComponent, ConfirmationComponent, LoaderBarComponent, LoadingComponent, ModalComponent, ToastComponent, ToastContainerComponent, LoadingDirective, ModalCloseDirective, FormInputComponent, FormCheckboxComponent, HttpErrorWrapperComponent, NgxDatatableModule, NgxValidateCoreModule, CardModule, DisabledDirective, AbpVisibleDirective, NgxDatatableListDirective, NgxDatatableDefaultDirective, PasswordComponent];
var BaseThemeSharedModule = class _BaseThemeSharedModule {
  static {
    this.ɵfac = function BaseThemeSharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseThemeSharedModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BaseThemeSharedModule,
      imports: [BreadcrumbComponent, BreadcrumbItemsComponent, ButtonComponent, ConfirmationComponent, LoaderBarComponent, LoadingComponent, ModalComponent, ToastComponent, ToastContainerComponent, LoadingDirective, ModalCloseDirective, FormInputComponent, FormCheckboxComponent, HttpErrorWrapperComponent, NgxDatatableModule, NgxValidateCoreModule, CardModule, DisabledDirective, AbpVisibleDirective, NgxDatatableListDirective, NgxDatatableDefaultDirective, PasswordComponent],
      exports: [BreadcrumbComponent, BreadcrumbItemsComponent, ButtonComponent, ConfirmationComponent, LoaderBarComponent, LoadingComponent, ModalComponent, ToastComponent, ToastContainerComponent, LoadingDirective, ModalCloseDirective, FormInputComponent, FormCheckboxComponent, HttpErrorWrapperComponent, NgxDatatableModule, NgxValidateCoreModule, CardModule, DisabledDirective, AbpVisibleDirective, NgxDatatableListDirective, NgxDatatableDefaultDirective, PasswordComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [FormInputComponent, FormCheckboxComponent, NgxDatatableModule, NgxValidateCoreModule, CardModule, PasswordComponent, NgxDatatableModule, NgxValidateCoreModule, CardModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseThemeSharedModule, [{
    type: NgModule,
    args: [{
      imports: [...THEME_SHARED_EXPORTS],
      declarations: [],
      exports: [...THEME_SHARED_EXPORTS]
    }]
  }], null, null);
})();
var ThemeSharedModule = class _ThemeSharedModule {
  /**
   * @deprecated forRoot method is deprecated, use `provideAbpThemeShared` *function* for config settings.
   */
  static forRoot({
    httpErrorConfig,
    validation = {},
    confirmationIcons = {}
  } = {}) {
    return {
      ngModule: _ThemeSharedModule,
      providers: [provideAbpThemeShared(withHttpErrorConfig(httpErrorConfig), withValidationBluePrint(validation.blueprints), withValidationMapErrorsFn(validation.mapErrorsFn), withValidateOnSubmit(validation.validateOnSubmit), withConfirmationIcon(confirmationIcons))]
    };
  }
  static {
    this.ɵfac = function ThemeSharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeSharedModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ThemeSharedModule,
      imports: [BaseThemeSharedModule],
      exports: [BaseThemeSharedModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [BaseThemeSharedModule, BaseThemeSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeSharedModule, [{
    type: NgModule,
    args: [{
      imports: [BaseThemeSharedModule],
      exports: [BaseThemeSharedModule]
    }]
  }], null, null);
})();

export {
  DateTimeAdapter,
  DateAdapter,
  DatepickerI18nAdapter,
  TimeAdapter,
  TimepickerI18nAdapter,
  bounceIn,
  collapseY,
  collapseYWithMargin,
  collapseX,
  expandY,
  expandYWithMargin,
  expandX,
  collapse,
  collapseWithMargin,
  collapseLinearWithMargin,
  fadeIn,
  fadeOut,
  fadeInDown,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeOutDown,
  fadeOutUp,
  fadeOutLeft,
  fadeOutRight,
  fadeAnimation,
  dialogAnimation,
  slideFromBottom,
  toastInOut,
  BreadcrumbItemsComponent,
  BreadcrumbComponent,
  ButtonComponent,
  Confirmation,
  CONFIRMATION_ICONS,
  DEFAULT_CONFIRMATION_ICONS,
  ConfirmationComponent,
  HttpErrorWrapperComponent,
  LoaderBarComponent,
  LoadingComponent,
  NavItem,
  UserMenu,
  ConfirmationService,
  NavItemsService,
  PageAlertService,
  ToastComponent,
  ToastContainerComponent,
  ToasterService,
  UserMenuService,
  HTTP_ERROR_CONFIG,
  HTTP_ERROR_HANDLER,
  CUSTOM_ERROR_HANDLERS,
  CreateErrorComponentService,
  DEFAULT_ERROR_MESSAGES,
  DEFAULT_ERROR_LOCALIZATIONS,
  CUSTOM_HTTP_ERROR_HANDLER_PRIORITY,
  HTTP_ERROR_STATUS,
  HTTP_ERROR_DETAIL,
  getErrorFromRequestBody,
  AbpFormatErrorHandlerService,
  TenantResolveErrorHandlerService,
  StatusCodeErrorHandlerService,
  UnknownStatusCodeErrorHandlerService,
  THEME_SHARED_APPEND_CONTENT,
  defaultNgxDatatableMessages,
  NGX_DATATABLE_MESSAGES,
  SUPPRESS_UNSAVED_CHANGES_WARNING,
  LOGO_URL_TOKEN,
  LOGO_APP_NAME_TOKEN,
  THEME_CHANGE_TOKEN,
  RouterErrorHandlerService,
  AbpAuthenticationErrorHandler,
  ModalRefService,
  ModalComponent,
  ModalCloseDirective,
  PasswordComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardFooterComponent,
  CardTitleDirective,
  CardSubtitleDirective,
  CardImgTopDirective,
  CardHeaderDirective,
  CARD_DIRECTIVES,
  CARD_COMPONENTS,
  CardModule,
  FormCheckboxComponent,
  FormInputComponent,
  InternetConnectionStatusComponent,
  SpinnerComponent,
  EllipsisDirective,
  LoadingDirective,
  NgxDatatableDefaultDirective,
  NgxDatatableListDirective,
  AbpVisibleDirective,
  DisabledDirective,
  eFormComponets,
  DocumentDirHandlerService,
  ErrorHandler,
  NG_BOOTSTRAP_CONFIG_PROVIDERS,
  configureNgBootstrap,
  THEME_SHARED_ROUTE_PROVIDERS,
  configureRoutes,
  tenantNotFoundProvider,
  DEFAULT_HANDLERS_PROVIDERS,
  DEFAULT_VALIDATION_BLUEPRINTS,
  DateParserFormatter,
  getPasswordValidators,
  validatePassword,
  ThemeSharedFeatureKind,
  withHttpErrorConfig,
  withValidationBluePrint,
  withValidationMapErrorsFn,
  withValidateOnSubmit,
  withConfirmationIcon,
  provideAbpThemeShared,
  LogoFeatureKind,
  withEnvironmentOptions,
  provideLogo,
  THEME_SHARED_EXPORTS,
  BaseThemeSharedModule,
  ThemeSharedModule
};
//# sourceMappingURL=chunk-6MBLSBLR.js.map
