import {
  PageToolbarComponent
} from "./chunk-ZVIHN2OM.js";
import {
  BreadcrumbComponent
} from "./chunk-6MBLSBLR.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  Input,
  NgModule,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  contentChild,
  input,
  setClassMetadata,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-EZ2ZVKYO.js";
import {
  InjectionToken,
  Injector,
  Observable,
  effect,
  forwardRef,
  inject,
  of,
  signal,
  ɵɵdefineInjector
} from "./chunk-TVT7XMKI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/@abp/ng.components/fesm2022/abp-ng.components-page.mjs
var _c0 = ["*"];
var _c1 = ["*", [["abp-page-title-container"]], [["abp-page-breadcrumb-container"]], [["abp-page-toolbar-container"]]];
var _c2 = ["*", "abp-page-title-container", "abp-page-breadcrumb-container", "abp-page-toolbar-container"];
function PageComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
function PageComponent_Conditional_0_Conditional_2_Conditional_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "h1", 3);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.title(), " ");
  }
}
function PageComponent_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageComponent_Conditional_0_Conditional_2_Conditional_0_div_0_Template, 3, 1, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("abpPagePart", ctx_r0.pageParts.title);
  }
}
function PageComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, PageComponent_Conditional_0_Conditional_2_Conditional_0_Template, 1, 1, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.title() ? 0 : -1);
  }
}
function PageComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2);
  }
}
function PageComponent_Conditional_0_Conditional_4_Conditional_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelement(1, "abp-breadcrumb");
    ɵɵelementEnd();
  }
}
function PageComponent_Conditional_0_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageComponent_Conditional_0_Conditional_4_Conditional_0_div_0_Template, 2, 0, "div", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("abpPagePart", ctx_r0.pageParts.breadcrumb);
  }
}
function PageComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, PageComponent_Conditional_0_Conditional_4_Conditional_0_Template, 1, 1, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.breadcrumb() ? 0 : -1);
  }
}
function PageComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 3);
  }
}
function PageComponent_Conditional_0_Conditional_6_Conditional_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelement(1, "abp-page-toolbar", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("record", ctx_r0.toolbarData());
  }
}
function PageComponent_Conditional_0_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageComponent_Conditional_0_Conditional_6_Conditional_0_div_0_Template, 2, 1, "div", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("abpPagePart", ctx_r0.pageParts.toolbar)("abpPagePartContext", ctx_r0.toolbarData());
  }
}
function PageComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, PageComponent_Conditional_0_Conditional_6_Conditional_0_Template, 1, 2, "div", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.toolbarVisible() ? 0 : -1);
  }
}
function PageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵconditionalCreate(1, PageComponent_Conditional_0_Conditional_1_Template, 1, 0)(2, PageComponent_Conditional_0_Conditional_2_Template, 1, 1);
    ɵɵconditionalCreate(3, PageComponent_Conditional_0_Conditional_3_Template, 1, 0)(4, PageComponent_Conditional_0_Conditional_4_Template, 1, 1);
    ɵɵconditionalCreate(5, PageComponent_Conditional_0_Conditional_5_Template, 1, 0)(6, PageComponent_Conditional_0_Conditional_6_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.customTitle() ? 1 : 2);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.customBreadcrumb() ? 3 : 4);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.customToolbar() ? 5 : 6);
  }
}
var PAGE_RENDER_STRATEGY = new InjectionToken("PAGE_RENDER_STRATEGY");
var PagePartDirective = class _PagePartDirective {
  constructor() {
    this.templateRef = inject(TemplateRef);
    this.viewContainer = inject(ViewContainerRef);
    this.renderLogic = inject(PAGE_RENDER_STRATEGY, {
      optional: true
    });
    this.injector = inject(Injector);
    this.hasRendered = false;
    this.context = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "context"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "abpPagePartContext"
    }));
    this.abpPagePart = input(
      "",
      ...ngDevMode ? [{
        debugName: "abpPagePart"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.render = (shouldRender) => {
      if (shouldRender && !this.hasRendered) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasRendered = true;
      } else if (!shouldRender && this.hasRendered) {
        this.viewContainer.clear();
        this.hasRendered = false;
      }
    };
    effect(() => {
      const type = this.abpPagePart();
      if (type) {
        this.createRenderStream(type);
      }
    });
    effect(() => {
      const ctx = this.context();
      if (this.renderLogic?.onContextUpdate) {
        this.renderLogic.onContextUpdate(ctx);
      }
    });
  }
  ngOnInit() {
    if (this.renderLogic?.onInit) {
      this.renderLogic.onInit(this.abpPagePart(), this.injector, this.context());
    }
  }
  ngOnDestroy() {
    this.clearSubscription();
    if (this.renderLogic?.onDestroy) {
      this.renderLogic.onDestroy(this.abpPagePart(), this.injector, this.context());
    }
  }
  shouldRender(type) {
    if (this.renderLogic) {
      const willRender = this.renderLogic.shouldRender(type);
      return willRender instanceof Observable ? willRender : of(willRender);
    }
    return of(true);
  }
  createRenderStream(type) {
    this.clearSubscription();
    this.subscription = this.shouldRender(type).subscribe(this.render);
  }
  clearSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function PagePartDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PagePartDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PagePartDirective,
      selectors: [["", "abpPagePart", ""]],
      inputs: {
        context: [1, "abpPagePartContext", "context"],
        abpPagePart: [1, "abpPagePart"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagePartDirective, [{
    type: Directive,
    args: [{
      selector: "[abpPagePart]"
    }]
  }], () => [], {
    context: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpPagePartContext",
        required: false
      }]
    }],
    abpPagePart: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpPagePart",
        required: false
      }]
    }]
  });
})();
var PageParts;
(function(PageParts2) {
  PageParts2["title"] = "PageTitleContainerComponent";
  PageParts2["breadcrumb"] = "PageBreadcrumbContainerComponent";
  PageParts2["toolbar"] = "PageToolbarContainerComponent";
})(PageParts || (PageParts = {}));
var PageTitleContainerComponent = class _PageTitleContainerComponent {
  static {
    this.ɵfac = function PageTitleContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageTitleContainerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PageTitleContainerComponent,
      selectors: [["abp-page-title-container"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function PageTitleContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageTitleContainerComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-page-title-container",
      template: ` <ng-content></ng-content> `,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, null);
})();
var PageBreadcrumbContainerComponent = class _PageBreadcrumbContainerComponent {
  static {
    this.ɵfac = function PageBreadcrumbContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageBreadcrumbContainerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PageBreadcrumbContainerComponent,
      selectors: [["abp-page-breadcrumb-container"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function PageBreadcrumbContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageBreadcrumbContainerComponent, [{
    type: Component,
    args: [{
      selector: "abp-page-breadcrumb-container",
      template: ` <ng-content></ng-content> `,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, null);
})();
var PageToolbarContainerComponent = class _PageToolbarContainerComponent {
  static {
    this.ɵfac = function PageToolbarContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageToolbarContainerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PageToolbarContainerComponent,
      selectors: [["abp-page-toolbar-container"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function PageToolbarContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageToolbarContainerComponent, [{
    type: Component,
    args: [{
      selector: "abp-page-toolbar-container",
      template: ` <ng-content></ng-content> `,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, null);
})();
var PageComponent = class _PageComponent {
  constructor() {
    this.title = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "title"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toolbarInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "toolbarInput"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "toolbar"
    }));
    this.breadcrumb = input(
      true,
      ...ngDevMode ? [{
        debugName: "breadcrumb"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toolbarVisible = signal(
      false,
      ...ngDevMode ? [{
        debugName: "toolbarVisible"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toolbarData = signal(
      void 0,
      ...ngDevMode ? [{
        debugName: "toolbarData"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.pageParts = {
      title: PageParts.title,
      breadcrumb: PageParts.breadcrumb,
      toolbar: PageParts.toolbar
    };
    this.customTitle = contentChild(
      PageTitleContainerComponent,
      ...ngDevMode ? [{
        debugName: "customTitle"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.customBreadcrumb = contentChild(
      PageBreadcrumbContainerComponent,
      ...ngDevMode ? [{
        debugName: "customBreadcrumb"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.customToolbar = contentChild(
      PageToolbarContainerComponent,
      ...ngDevMode ? [{
        debugName: "customToolbar"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const toolbar = this.toolbarInput();
      if (toolbar !== void 0) {
        this.toolbarData.set(toolbar);
        this.toolbarVisible.set(true);
      }
    });
  }
  get shouldRenderRow() {
    return !!(this.title() || this.toolbarVisible() || this.breadcrumb() || this.customTitle() || this.customBreadcrumb() || this.customToolbar() || this.pageParts);
  }
  static {
    this.ɵfac = function PageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PageComponent,
      selectors: [["abp-page"]],
      contentQueries: function PageComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.customTitle, PageTitleContainerComponent, 5)(dirIndex, ctx.customBreadcrumb, PageBreadcrumbContainerComponent, 5)(dirIndex, ctx.customToolbar, PageToolbarContainerComponent, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(3);
        }
      },
      inputs: {
        title: [1, "title"],
        toolbarInput: [1, "toolbar", "toolbarInput"],
        breadcrumb: [1, "breadcrumb"]
      },
      ngContentSelectors: _c2,
      decls: 2,
      vars: 1,
      consts: [[1, "row", "entry-row"], [1, "col-auto"], ["class", "col-auto", 4, "abpPagePart"], [1, "content-header-title"], [1, "col-lg-auto", "ps-lg-0"], ["class", "col-lg-auto ps-lg-0", 4, "abpPagePart"], [1, "col"], ["class", "col", 4, "abpPagePart", "abpPagePartContext"], [3, "record"]],
      template: function PageComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c1);
          ɵɵconditionalCreate(0, PageComponent_Conditional_0_Template, 7, 3, "div", 0);
          ɵɵprojection(1);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.shouldRenderRow ? 0 : -1);
        }
      },
      dependencies: [BreadcrumbComponent, PageToolbarComponent, PagePartDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-page",
      encapsulation: ViewEncapsulation.None,
      imports: [BreadcrumbComponent, PageToolbarComponent, PagePartDirective],
      template: '@if (shouldRenderRow) {\r\n  <div class="row entry-row">\r\n    @if (customTitle()) {\r\n      <ng-content select="abp-page-title-container"></ng-content>\r\n    } @else {\r\n      @if (title()) {\r\n        <div class="col-auto" *abpPagePart="pageParts.title">\r\n          <h1 class="content-header-title">\r\n            {{ title() }}\r\n          </h1>\r\n        </div>\r\n      }\r\n    }\r\n\r\n    @if (customBreadcrumb()) {\r\n      <ng-content select="abp-page-breadcrumb-container"></ng-content>\r\n    } @else {\r\n      @if (breadcrumb()) {\r\n        <div class="col-lg-auto ps-lg-0" *abpPagePart="pageParts.breadcrumb">\r\n          <abp-breadcrumb></abp-breadcrumb>\r\n        </div>\r\n      }\r\n    }\r\n\r\n    @if (customToolbar()) {\r\n      <ng-content select="abp-page-toolbar-container"></ng-content>\r\n    } @else {\r\n      @if (toolbarVisible()) {\r\n        <div class="col" *abpPagePart="pageParts.toolbar; context: toolbarData()">\r\n          <abp-page-toolbar [record]="toolbarData()"></abp-page-toolbar>\r\n        </div>\r\n      }\r\n    }\r\n  </div>\r\n}\r\n\r\n<ng-content></ng-content>\r\n'
    }]
  }], () => [], {
    title: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "title",
        required: false
      }]
    }],
    toolbarInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "toolbar",
        required: false
      }]
    }],
    breadcrumb: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "breadcrumb",
        required: false
      }]
    }],
    customTitle: [{
      type: ContentChild,
      args: [forwardRef(() => PageTitleContainerComponent), {
        isSignal: true
      }]
    }],
    customBreadcrumb: [{
      type: ContentChild,
      args: [forwardRef(() => PageBreadcrumbContainerComponent), {
        isSignal: true
      }]
    }],
    customToolbar: [{
      type: ContentChild,
      args: [forwardRef(() => PageToolbarContainerComponent), {
        isSignal: true
      }]
    }]
  });
})();
var PAGE_EXPORTS = [PageComponent, PageTitleContainerComponent, PageBreadcrumbContainerComponent, PageToolbarContainerComponent, PagePartDirective];
var PageModule = class _PageModule {
  static {
    this.ɵfac = function PageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PageModule,
      imports: [PageComponent, PageTitleContainerComponent, PageBreadcrumbContainerComponent, PageToolbarContainerComponent, PagePartDirective],
      exports: [PageComponent, PageTitleContainerComponent, PageBreadcrumbContainerComponent, PageToolbarContainerComponent, PagePartDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [PageComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [...PAGE_EXPORTS],
      exports: [...PAGE_EXPORTS]
    }]
  }], null, null);
})();

export {
  PAGE_RENDER_STRATEGY,
  PageParts,
  PageComponent
};
//# sourceMappingURL=chunk-XT7XLCLR.js.map
