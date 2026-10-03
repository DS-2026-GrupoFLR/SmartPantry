import {
  PAGE_RENDER_STRATEGY,
  PageParts
} from "./chunk-XT7XLCLR.js";
import {
  DocumentDirHandlerService,
  LOGO_APP_NAME_TOKEN,
  LOGO_URL_TOKEN,
  NavItemsService,
  PageAlertService,
  ThemeSharedModule
} from "./chunk-6MBLSBLR.js";
import {
  animate,
  animation,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-ORSPOGRK.js";
import {
  NgbDropdown,
  NgbDropdownButtonItem,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownModule,
  NgbDropdownToggle
} from "./chunk-5FWCSE5I.js";
import {
  AbpRouteCultureUrlPipe,
  CoreModule,
  LocalizationPipe,
  LocalizationService,
  PermissionService,
  ReplaceableComponentsService,
  ReplaceableTemplateDirective,
  RouteBasedCultureUrlService,
  RoutesService
} from "./chunk-NI4ZFAY4.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-VHKPOJBK.js";
import {
  DomSanitizer
} from "./chunk-LMDSVWKI.js";
import {
  FormsModule
} from "./chunk-T5EWVHFZ.js";
import {
  AsyncPipe,
  CommonModule,
  Location,
  NgComponentOutlet,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-IMWYUKDZ.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  Pipe,
  REQUEST,
  SecurityContext,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  input,
  provideAppInitializer,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresolveDocument,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EZ2ZVKYO.js";
import {
  toSignal
} from "./chunk-HM3VFUK5.js";
import {
  BehaviorSubject,
  DOCUMENT,
  EMPTY,
  EventEmitter,
  InjectionToken,
  Injector,
  Observable,
  PLATFORM_ID,
  Subject,
  Subscription,
  TransferState,
  combineLatest,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  filter,
  from,
  fromEvent,
  inject,
  makeEnvironmentProviders,
  makeStateKey,
  map,
  of,
  signal,
  startWith,
  switchMap,
  take,
  tap,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-TVT7XMKI.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/@volo/ngx-lepton-x.core/fesm2022/volo-ngx-lepton-x.core.mjs
function AvatarComponent_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-icon", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("iconClass", ctx_r0.avatar.source);
  }
}
function AvatarComponent_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r0.avatar.source, ɵɵsanitizeUrl);
  }
}
function AvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵconditionalCreate(1, AvatarComponent_Conditional_0_Case_1_Template, 1, 1, "lpx-icon", 1)(2, AvatarComponent_Conditional_0_Case_2_Template, 1, 1, "img", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional((tmp_1_0 = ctx_r0.avatar.type) === "icon" ? 1 : tmp_1_0 === "image" ? 2 : -1);
  }
}
function BrandLogoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 0);
    ɵɵelement(1, "div", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const logo_r1 = "url(" + ɵɵnextContext().logoUrl + ")";
    ɵɵadvance();
    ɵɵstyleProp("background-image", logo_r1);
  }
}
function BrandLogoComponent_Conditional_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 4);
    ɵɵelementStart(1, "div", 5);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.appName, " ");
  }
}
function BrandLogoComponent_Conditional_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.appName, " ");
  }
}
function BrandLogoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 1);
    ɵɵconditionalCreate(1, BrandLogoComponent_Conditional_1_Case_1_Template, 3, 1)(2, BrandLogoComponent_Conditional_1_Case_2_Template, 2, 1, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional((tmp_1_0 = ctx_r1.layout()) === ctx_r1.layoutOptions.sideMenu ? 1 : tmp_1_0 === ctx_r1.layoutOptions.topMenu ? 2 : -1);
  }
}
var _c0 = (a0) => ({
  $implicit: a0
});
function BreadcrumbComponent_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-icon", 5);
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("iconClass", item_r2.icon);
  }
}
function BreadcrumbComponent_For_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadcrumbComponent_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 7);
    ɵɵelement(1, "lpx-icon", 8);
    ɵɵelementEnd();
  }
}
function BreadcrumbComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 4);
    ɵɵlistener("click", function BreadcrumbComponent_For_3_Template_li_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClick(item_r2));
    })("lpxClickOutside", function BreadcrumbComponent_For_3_Template_li_lpxClickOutside_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      return ɵɵresetView(item_r2.expanded = false);
    });
    ɵɵconditionalCreate(1, BreadcrumbComponent_For_3_Conditional_1_Template, 1, 1, "lpx-icon", 5);
    ɵɵtemplate(2, BreadcrumbComponent_For_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵconditionalCreate(3, BreadcrumbComponent_For_3_Conditional_3_Template, 2, 0, "li", 7);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ɵ$index_5_r4 = ctx.$index;
    const ɵ$count_5_r5 = ctx.$count;
    ɵɵnextContext();
    const linkTemplate_r6 = ɵɵreference(6);
    const textTemplate_r7 = ɵɵreference(8);
    ɵɵclassProp("expanded", item_r2.expanded);
    ɵɵadvance();
    ɵɵconditional(item_r2.icon ? 1 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r2.children?.length ? textTemplate_r7 : linkTemplate_r6)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c0, item_r2));
    ɵɵadvance();
    ɵɵconditional(!(ɵ$index_5_r4 === ɵ$count_5_r5 - 1) ? 3 : -1);
  }
}
function BreadcrumbComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 9);
    ɵɵtext(1);
    ɵɵpipe(2, "toObservable");
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    ɵɵproperty("routerLink", item_r8.link);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, ɵɵpipeBind1(2, 2, item_r8.text)), " ");
  }
}
function BreadcrumbComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "toObservable");
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, ɵɵpipeBind1(2, 1, item_r9.text)), " ");
  }
}
function SubNavbarComponent_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SubNavbarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SubNavbarComponent_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngComponentOutlet", ctx_r0.item.component)("ngComponentOutletInjector", ctx_r0.injector);
  }
}
function SubNavbarComponent_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SubNavbarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SubNavbarComponent_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const defaultTemplate_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", defaultTemplate_r2);
  }
}
function SubNavbarComponent_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-icon", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("iconClass", ctx_r0.item.icon);
  }
}
function SubNavbarComponent_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SubNavbarComponent_ng_template_2_ng_template_4_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, ctx_r0.item.text), " ");
  }
}
function SubNavbarComponent_ng_template_2_ng_template_4_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "lpxTranslate");
    ɵɵpipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, ɵɵpipeBind1(1, 1, ctx_r0.item.text)), " ");
  }
}
function SubNavbarComponent_ng_template_2_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵconditionalCreate(1, SubNavbarComponent_ng_template_2_ng_template_4_Conditional_0_Conditional_1_Template, 2, 3)(2, SubNavbarComponent_ng_template_2_ng_template_4_Conditional_0_Conditional_2_Template, 3, 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const isToolbarItem_r4 = ɵɵnextContext(3).item.text.split("::").length > 1;
    ɵɵadvance();
    ɵɵconditional(isToolbarItem_r4 ? 1 : 2);
  }
}
function SubNavbarComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, SubNavbarComponent_ng_template_2_ng_template_4_Conditional_0_Template, 3, 1, "span", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.item.text ? 0 : -1);
  }
}
function SubNavbarComponent_ng_template_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-icon", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("iconClass", ctx_r0.item.expanded ? "chevronUp" : "chevronDown");
  }
}
function SubNavbarComponent_ng_template_2_Conditional_7_For_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 11)(1, "lpx-sub-navbar", 13);
    ɵɵlistener("routeClick", function SubNavbarComponent_ng_template_2_Conditional_7_For_2_li_0_Template_lpx_sub_navbar_routeClick_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.routeClick.emit($event));
    })("expand", function SubNavbarComponent_ng_template_2_Conditional_7_For_2_li_0_Template_lpx_sub_navbar_expand_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.onChildExpand($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const child_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("item", child_r6);
  }
}
function SubNavbarComponent_ng_template_2_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SubNavbarComponent_ng_template_2_Conditional_7_For_2_li_0_Template, 2, 1, "li", 12);
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("lpxVisible", !child_r6.visible || child_r6.visible(child_r6, ctx_r0.injector));
  }
}
function SubNavbarComponent_ng_template_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 10);
    ɵɵrepeaterCreate(1, SubNavbarComponent_ng_template_2_Conditional_7_For_2_Template, 1, 1, "li", 11, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassProp("collapsed", !ctx_r0.item.expanded);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.item.children);
  }
}
function SubNavbarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 4);
    ɵɵpipe(1, "abpRouteCultureUrl");
    ɵɵlistener("click", function SubNavbarComponent_ng_template_2_Template_a_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onItemClick(ctx_r0.item));
    });
    ɵɵconditionalCreate(2, SubNavbarComponent_ng_template_2_Conditional_2_Template, 1, 1, "lpx-icon", 5);
    ɵɵtemplate(3, SubNavbarComponent_ng_template_2_ng_container_3_Template, 1, 0, "ng-container", 6)(4, SubNavbarComponent_ng_template_2_ng_template_4_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵconditionalCreate(6, SubNavbarComponent_ng_template_2_Conditional_6_Template, 1, 1, "lpx-icon", 7);
    ɵɵelementEnd();
    ɵɵconditionalCreate(7, SubNavbarComponent_ng_template_2_Conditional_7_Template, 3, 2, "ul", 8);
  }
  if (rf & 2) {
    const textTmpl_r7 = ɵɵreference(5);
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("selected", ctx_r0.item.selected)("expanded", ctx_r0.item.children?.length && ctx_r0.item.expanded);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 10, ctx_r0.item.link));
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.item.icon ? 2 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.item.template || textTmpl_r7)("ngTemplateOutletContext", ɵɵpureFunction1(12, _c0, ctx_r0.item));
    ɵɵadvance(3);
    ɵɵconditional(ctx_r0.item.children?.length ? 6 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.item.children?.length ? 7 : -1);
  }
}
function NavbarRoutesComponent_Conditional_1_For_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarRoutesComponent_Conditional_1_For_1_For_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarRoutesComponent_Conditional_1_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarRoutesComponent_Conditional_1_For_1_For_2_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const navbarItem_r1 = ctx.$implicit;
    ɵɵnextContext(3);
    const itemTemplate_r2 = ɵɵreference(8);
    ɵɵproperty("ngTemplateOutlet", itemTemplate_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, navbarItem_r1));
  }
}
function NavbarRoutesComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarRoutesComponent_Conditional_1_For_1_ng_container_0_Template, 1, 0, "ng-container", 4);
    ɵɵrepeaterCreate(1, NavbarRoutesComponent_Conditional_1_For_1_For_2_Template, 1, 4, "ng-container", null, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵɵnextContext(2);
    const groupText_r4 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", groupText_r4)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, item_r3));
    ɵɵadvance();
    ɵɵrepeater(item_r3.items);
  }
}
function NavbarRoutesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NavbarRoutesComponent_Conditional_1_For_1_Template, 3, 4, null, null, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵrepeater(ctx_r4.groupedItems);
  }
}
function NavbarRoutesComponent_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarRoutesComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarRoutesComponent_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const defaultRoute_r6 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", defaultRoute_r6);
  }
}
function NavbarRoutesComponent_ng_template_3_For_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarRoutesComponent_ng_template_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarRoutesComponent_ng_template_3_For_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    ɵɵnextContext(2);
    const itemTemplate_r2 = ɵɵreference(8);
    ɵɵproperty("ngTemplateOutlet", itemTemplate_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, item_r7));
  }
}
function NavbarRoutesComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NavbarRoutesComponent_ng_template_3_For_1_Template, 1, 4, "ng-container", null, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵrepeater(ctx_r4.navbarItems);
  }
}
function NavbarRoutesComponent_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 6);
    ɵɵtext(1);
    ɵɵpipe(2, "lpxTranslate");
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r8 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, ɵɵpipeBind1(2, 1, item_r8.group)), " ");
  }
}
function NavbarRoutesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NavbarRoutesComponent_ng_template_5_Conditional_0_Template, 4, 5, "li", 6);
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    ɵɵconditional(item_r8.items.length ? 0 : -1);
  }
}
function NavbarRoutesComponent_ng_template_7_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8)(1, "lpx-sub-navbar", 9);
    ɵɵlistener("expand", function NavbarRoutesComponent_ng_template_7_li_0_Template_lpx_sub_navbar_expand_1_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.onSubnavbarExpand($event, ctx_r4.navbarItems));
    })("routeClick", function NavbarRoutesComponent_ng_template_7_li_0_Template_lpx_sub_navbar_routeClick_1_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.onRouteClick($event, ctx_r4.navbarItems));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("item", item_r10)("routerItem", ctx_r4.routerItem());
  }
}
function NavbarRoutesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarRoutesComponent_ng_template_7_li_0_Template, 2, 2, "li", 7);
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("lpxVisible", !item_r10.visible || item_r10.visible(item_r10, ctx_r4.injector));
  }
}
var _c1 = (a0, a1) => ({
  $implicit: a0,
  groupItems: a1
});
function NavbarComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarComponent_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarComponent_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const customContentTemplate_r2 = ɵɵreference(13);
    ɵɵproperty("ngTemplateOutlet", customContentTemplate_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r0.contentBefore));
  }
}
function NavbarComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-navbar-routes", 8);
  }
  if (rf & 2) {
    const items_r3 = ctx.$implicit;
    const groupItems_r4 = ctx.groupItems;
    ɵɵproperty("navbarItems", items_r3)("groupedItems", groupItems_r4)("routerItem", true);
  }
}
function NavbarComponent_ng_template_12_For_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarComponent_ng_template_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarComponent_ng_template_12_For_1_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const component_r5 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngComponentOutlet", component_r5)("ngComponentOutletInjector", ctx_r0.injector);
  }
}
function NavbarComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NavbarComponent_ng_template_12_For_1_Template, 1, 2, "ng-container", null, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const contents_r6 = ctx.$implicit;
    ɵɵrepeater(contents_r6);
  }
}
function NavbarComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-brand-logo");
  }
}
var _c2 = (a0) => [a0];
function FooterComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "span");
    ɵɵtext(1);
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "a", 3);
    ɵɵtext(3);
    ɵɵdomElementEnd();
    ɵɵdomElementStart(4, "span");
    ɵɵtext(5, "by");
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const footerValues_r1 = ɵɵnextContext();
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1("", ctx_r1.currentYear, "© ");
    ɵɵadvance();
    ɵɵdomProperty("href", ɵɵpureFunction1(3, _c2, footerValues_r1.brandUrl), ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", footerValues_r1.brandName, " ");
  }
}
function FooterComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "a", 3);
    ɵɵtext(1);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const footerValues_r1 = ɵɵnextContext();
    ɵɵdomProperty("href", ɵɵpureFunction1(2, _c2, footerValues_r1.authorUrl), ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", footerValues_r1.authorName);
  }
}
function FooterComponent_Conditional_0_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "a", 5);
    ɵɵtext(1);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const footerLink_r3 = ɵɵnextContext().$implicit;
    ɵɵdomProperty("href", ɵɵpureFunction1(2, _c2, footerLink_r3.link), ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵtextInterpolate(footerLink_r3.text);
  }
}
function FooterComponent_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, FooterComponent_Conditional_0_For_7_Conditional_0_Template, 2, 4, "a", 5);
  }
  if (rf & 2) {
    const footerLink_r3 = ctx.$implicit;
    ɵɵconditional(footerLink_r3 ? 0 : -1);
  }
}
function FooterComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    ɵɵconditionalCreate(3, FooterComponent_Conditional_0_Conditional_3_Template, 6, 5);
    ɵɵconditionalCreate(4, FooterComponent_Conditional_0_Conditional_4_Template, 2, 4, "a", 3);
    ɵɵdomElementEnd();
    ɵɵdomElementStart(5, "div", 4);
    ɵɵrepeaterCreate(6, FooterComponent_Conditional_0_For_7_Template, 1, 1, null, null, ɵɵrepeaterTrackByIndex);
    ɵɵdomElementEnd()()();
  }
  if (rf & 2) {
    const footerValues_r1 = ctx;
    ɵɵadvance(3);
    ɵɵconditional(footerValues_r1.brandUrl ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(footerValues_r1.authorUrl ? 4 : -1);
    ɵɵadvance(2);
    ɵɵrepeater(footerValues_r1.links);
  }
}
var LpxVisibleDirective = class _LpxVisibleDirective {
  constructor() {
    this.viewContainerRef = inject(ViewContainerRef);
    this.templateRef = inject(TemplateRef);
    this.condition$ = of(false);
  }
  set lpxVisible(value) {
    this.condition$ = checkType(value);
    this.subscribeToCondition();
  }
  ngOnInit() {
    this.updateVisibility();
  }
  ngOnDestroy() {
    this.conditionSubscription?.unsubscribe();
  }
  subscribeToCondition() {
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
    this.ɵfac = function LpxVisibleDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxVisibleDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _LpxVisibleDirective,
      selectors: [["", "lpxVisible", ""]],
      inputs: {
        lpxVisible: "lpxVisible"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxVisibleDirective, [{
    type: Directive,
    args: [{
      selector: "[lpxVisible]",
      standalone: true
    }]
  }], null, {
    lpxVisible: [{
      type: Input,
      args: ["lpxVisible"]
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
var LanguageTranslateKeys;
(function(LanguageTranslateKeys2) {
  LanguageTranslateKeys2["SettingsTitle"] = "language.settings.title";
})(LanguageTranslateKeys || (LanguageTranslateKeys = {}));
var LanguageTranslateDefaults = {
  [LanguageTranslateKeys.SettingsTitle]: "Language Options"
};
var LpxLanguageModule = class _LpxLanguageModule {
  /**
   * @deprecated `LpxLanguageModule.forRoot()` is deprecated. You can use `provideLpxCore` **function** instead.
   */
  static forRoot(options) {
    return {
      ngModule: _LpxLanguageModule,
      providers: [provideLpxCore(SKIP_DEFAULTS, withLanguage(options))]
    };
  }
  static {
    this.ɵfac = function LpxLanguageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxLanguageModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxLanguageModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxLanguageModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule]
    }]
  }], null, null);
})();
var DataStore = class {
  get state() {
    return this.state$.value;
  }
  constructor(initialState) {
    this.initialState = initialState;
    this.state$ = new BehaviorSubject(this.initialState);
    this.update$ = new Subject();
    this.sliceState = (selector, compareFn = (s1, s2) => s1 === s2) => this.state$.pipe(map(selector), distinctUntilChanged(compareFn));
    this.sliceUpdate = (selector, filterFn = (x) => x !== void 0) => this.update$.pipe(map(selector), filter(filterFn));
  }
  patch(state2) {
    let patchedState = state2;
    if (typeof state2 === "object" && !Array.isArray(state2)) {
      patchedState = __spreadValues(__spreadValues({}, this.state), state2);
    }
    this.state$.next(patchedState);
    this.update$.next(patchedState);
  }
  set(state2) {
    this.state$.next(state2);
    this.update$.next(state2);
  }
  reset() {
    this.set(this.initialState);
  }
};
var LPX_LANGUAGE = new InjectionToken("LPX_LANGUAGE");
var LanguageService = class _LanguageService {
  get selectedLanguage() {
    return this.store.state.selectedLanguage;
  }
  constructor() {
    this.languages = inject(LPX_LANGUAGE);
    this.store = new DataStore({
      languages: []
    });
    this.id = "languages";
    this.convertLanguageToNavbarItem = (languages) => {
      return languages.map((lang) => ({
        icon: "",
        text: lang.displayName,
        selected: lang.selected,
        action: () => {
          this.setSelectedLanguage(lang);
          return true;
        }
      }));
    };
    this.selectedLanguage$ = this.store.sliceState(({
      selectedLanguage
    }) => selectedLanguage);
    this.languageChange$ = this.selectedLanguage$.pipe(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      filter((lang) => lang !== void 0),
      distinctUntilChanged((a, b) => a?.cultureName === b?.cultureName)
    );
    this.languages$ = this.store.sliceState((state2) => state2.languages);
    this.languagesAsNavbarItems$ = this.languages$.pipe(map(this.convertLanguageToNavbarItem));
    this.languagesAsSettingsGroup$ = this.languagesAsNavbarItems$.pipe(map((languages) => ({
      text: LanguageTranslateKeys.SettingsTitle,
      icon: "bi bi-globe",
      id: this.id,
      children: languages
    })));
    this.init(this.languages);
  }
  setLanguages(languages) {
    this.init(languages);
  }
  init(languages) {
    this.store.patch({
      languages,
      selectedLanguage: languages.find((lang) => lang.selected)
    });
  }
  setSelectedLanguage(lang) {
    this.store.patch({
      selectedLanguage: lang
    });
  }
  static {
    this.ɵfac = function LanguageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguageService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LanguageService,
      factory: _LanguageService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var LPX_INITIAL_STYLES = new InjectionToken("LPX_INITIAL_STYLES_TOKEN");
var LPX_STYLE_FINAL = new InjectionToken("LPX_STYLE_FINAL_TOKEN");
var LPX_LAYOUT_STYLE_FINAL = new InjectionToken("LPX_LAYOUT_STYLE_FINALIZE_TOKEN");
var StyleService = class _StyleService {
  constructor() {
    this.initialStyles = inject(LPX_STYLE_FINAL);
    this.document = inject(DOCUMENT);
    this.lastInjectedStyle = null;
    this.initialized$ = new BehaviorSubject(false);
  }
  initStyles(direction) {
    return __async(this, null, function* () {
      const cssExtension = direction === "rtl" ? ".rtl" : "";
      for (const style2 of this.initialStyles) {
        const href = `${style2.bundleName}${cssExtension}.css`;
        const selector = `
        link[rel="stylesheet"][href$="${href}"],
        link[rel="stylesheet"]#${style2.bundleName}
      `;
        const isAlreadyLoaded = !!this.document.querySelector(selector);
        if (isAlreadyLoaded) {
          continue;
        }
        yield this.loadStyle(style2, direction);
      }
      this.initialized$.next(true);
    });
  }
  loadStyle(style2, direction) {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        const linkElement = this.createLinkElem(style2, direction, resolve);
        const stylesCss = this.document.querySelector('link[rel="stylesheet"][href*="styles"]');
        if (stylesCss) {
          stylesCss.insertAdjacentElement("beforebegin", linkElement);
        } else {
          this.document.head.appendChild(linkElement);
        }
        this.lastInjectedStyle = linkElement;
        resolve(linkElement);
      });
    });
  }
  replaceStyle(style2, direction) {
    return __async(this, null, function* () {
      const loaded = this.document.querySelector(`link#${style2.bundleName}`);
      if (loaded) {
        loaded.remove();
      }
      return this.loadStyle(style2, direction);
    });
  }
  reloadInitialStyles(direction) {
    return __async(this, null, function* () {
      for (const style2 of this.initialStyles) {
        yield this.replaceStyle(style2, direction);
      }
    });
  }
  createLinkElem(style2, direction, resolve) {
    const linkElem = this.document.createElement("link");
    linkElem.rel = "stylesheet";
    linkElem.id = style2.bundleName;
    linkElem.href = `${style2.bundleName}${direction === "rtl" ? ".rtl" : ""}.css`;
    linkElem.onload = () => {
      resolve(linkElem);
    };
    return linkElem;
  }
  static {
    this.ɵfac = function StyleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StyleService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StyleService,
      factory: _StyleService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function createStyleFactory(handler) {
  return handler || ((defaultValue) => defaultValue);
}
function createDirectionProvider(listenDirection) {
  return provideAppInitializer(() => {
    if (listenDirection) {
      listenDirectionChange();
    }
  });
}
function listenDirectionChange() {
  const languageService = inject(LanguageService);
  const styleService = inject(StyleService);
  const doc = inject(DOCUMENT);
  const platformId = inject(PLATFORM_ID);
  if (!isPlatformBrowser(platformId)) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    styleService.initialized$.pipe(filter(Boolean), take(1), switchMap(() => languageService.languageChange$), distinctUntilKeyChanged("isRTL")).subscribe((lang) => __async(null, null, function* () {
      const direction = lang?.isRTL ? "rtl" : "ltr";
      const documentElement = doc?.documentElement || {};
      if (documentElement && documentElement.dir !== direction) {
        documentElement.dir = direction;
      }
      yield styleService.reloadInitialStyles(direction);
      resolve(null);
    }));
  });
}
var RESPONSIVE_BREAKPOINTS = new InjectionToken("RESPONSIVE_BREAKPOINTS");
var WINDOW = new InjectionToken("WINDOW");
var ResponsiveService = class _ResponsiveService {
  constructor() {
    this.providedBreakpoints = inject(RESPONSIVE_BREAKPOINTS);
    this.window = inject(WINDOW);
    this.platformId = inject(PLATFORM_ID);
    this.defaultBreakpoint = {
      name: "all",
      width: 0
    };
    this.breakpoints = this.buildBreakpoints(this.providedBreakpoints);
    this.getCurrentSize = () => isPlatformBrowser(this.platformId) ? {
      height: this.window.innerHeight,
      width: this.window.innerWidth
    } : {
      height: 0,
      width: 0
    };
    this.mapSizeToBreakpoint = ({
      width
    } = this.getCurrentSize()) => {
      return this.breakpoints.find((s) => width >= s.width);
    };
    this.currentSize$ = new BehaviorSubject(this.mapSizeToBreakpoint());
    this.shouldRenderWithCurrentSize = (query) => {
      return this.matchQuery(query);
    };
    this.setupListener();
  }
  setupListener() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.currentResolution$ = fromEvent(this.window, "resize").pipe(map(this.getCurrentSize)).pipe(startWith(this.getCurrentSize()));
    this.currentResolution$.pipe(map(this.mapSizeToBreakpoint), distinctUntilChanged()).subscribe((current) => {
      this.currentSize$.next(current);
    });
  }
  buildBreakpoints(breakpoints) {
    return [...Object.keys(breakpoints).map((key) => ({
      name: key,
      width: breakpoints[key]
    })).sort((a, b) => b.width - a.width), this.defaultBreakpoint];
  }
  matchQuery(query) {
    const {
      width
    } = this.getCurrentSize();
    const tokens = query.split(" ");
    const findInTokens = (size) => tokens.find((token) => token.split(
      "-"
      /* ResponsiveTokens.separator */
    )[0] === size);
    const matchedBreakpoint = this.breakpoints.find((breakpoint) => width >= breakpoint.width && findInTokens(breakpoint.name));
    if (matchedBreakpoint) {
      const token = findInTokens(matchedBreakpoint.name);
      const shouldBeBigger = !token?.includes(
        "none"
        /* ResponsiveTokens.none */
      );
      return shouldBeBigger === width >= matchedBreakpoint.width;
    }
    return false;
  }
  static {
    this.ɵfac = function ResponsiveService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResponsiveService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ResponsiveService,
      factory: _ResponsiveService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResponsiveService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var ResponsiveDirective = class _ResponsiveDirective {
  constructor() {
    this.templateRef = inject(TemplateRef);
    this.viewContainer = inject(ViewContainerRef);
    this.service = inject(ResponsiveService);
    this.parentCdr = inject(ChangeDetectorRef, {
      optional: true,
      skipSelf: true
    });
    this.hasRendered = false;
    this.sub = new Subscription();
    this.render = (shouldRender) => {
      if (shouldRender && !this.hasRendered) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasRendered = true;
      } else if (!shouldRender && this.hasRendered) {
        this.viewContainer.clear();
        this.hasRendered = false;
      }
      this.parentCdr.detectChanges();
    };
  }
  ngOnInit() {
    this.sub.add(this.service.currentSize$.pipe(map((_) => this.service.shouldRenderWithCurrentSize(this.query))).subscribe(this.render));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  static {
    this.ɵfac = function ResponsiveDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResponsiveDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ResponsiveDirective,
      selectors: [["", "lpxResponsive", ""]],
      inputs: {
        query: [0, "lpxResponsive", "query"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResponsiveDirective, [{
    type: Directive,
    args: [{
      selector: "[lpxResponsive]"
    }]
  }], null, {
    query: [{
      type: Input,
      args: ["lpxResponsive"]
    }]
  });
})();
var LpxResponsiveModule = class _LpxResponsiveModule {
  static {
    this.ɵfac = function LpxResponsiveModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxResponsiveModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxResponsiveModule,
      imports: [CommonModule, ResponsiveDirective],
      exports: [ResponsiveDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxResponsiveModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ResponsiveDirective],
      exports: [ResponsiveDirective]
    }]
  }], null, null);
})();
var LPX_RESPONSIVE_BREAKPOINTS_DEFAULTS = {
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200
};
function createResponsiveProvider(responsiveSettings) {
  return {
    provide: RESPONSIVE_BREAKPOINTS,
    useValue: responsiveSettings || LPX_RESPONSIVE_BREAKPOINTS_DEFAULTS
  };
}
var UserProfileService = class _UserProfileService {
  constructor() {
    this.store = new DataStore({});
    this.user$ = this.store.sliceState((state2) => state2);
  }
  setUser(user) {
    this.store.set(user);
  }
  patchUser(user) {
    this.store.patch(user);
  }
  static {
    this.ɵfac = function UserProfileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfileService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserProfileService,
      factory: _UserProfileService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BodyService = class _BodyService {
  constructor() {
    this.body = document.querySelector("body");
    this.classes = {
      overflowYHidden: "overflow-y-hidden"
    };
  }
  disableScrollY() {
    this.body?.classList.add(this.classes.overflowYHidden);
  }
  enableScrollY() {
    this.body?.classList.remove(this.classes.overflowYHidden);
  }
  static {
    this.ɵfac = function BodyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BodyService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BodyService,
      factory: _BodyService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BodyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LayoutService = class _LayoutService {
  constructor() {
    this.store = new DataStore({
      containerClass: [""]
    });
    this.containerClass$ = this.store.sliceState(({
      containerClass
    }) => containerClass || []);
  }
  setClass(cssClass) {
    const containerClass = Array.isArray(cssClass) ? cssClass : [cssClass];
    this.patchStore(containerClass);
  }
  addClass(cssClass) {
    const {
      containerClass
    } = this.store.state;
    this.patchStore([...containerClass, cssClass]);
  }
  removeClass(cssClass) {
    const {
      containerClass
    } = this.store.state;
    const index = containerClass.findIndex((item) => item === cssClass);
    if (index === -1) return;
    const update = [...containerClass.slice(0, index), ...containerClass.slice(index + 1)];
    this.patchStore(update);
  }
  removeClasses(classlist) {
    const {
      containerClass
    } = this.store.state;
    const filteredClasslist = containerClass.filter((clss) => !classlist.includes(clss));
    this.patchStore(filteredClasslist);
  }
  toggleClass(cssClass) {
    const {
      containerClass
    } = this.store.state;
    const index = containerClass.findIndex((item) => item === cssClass);
    if (index === -1) {
      this.addClass(cssClass);
    } else {
      this.removeClass(cssClass);
    }
  }
  patchStore(containerClass) {
    this.store.patch({
      containerClass
    });
  }
  static {
    this.ɵfac = function LayoutService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LayoutService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LayoutService,
      factory: _LayoutService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LPX_TRANSLATE_SERVICE_TOKEN = new InjectionToken("LPX_TRANSLATE_SERVICE_TOKEN");
var LPX_TRANSLATE_TOKEN = new InjectionToken("LPX_TRANSLATE_TOKEN");
function sortItems(a, b) {
  if (!a.order) {
    return 1;
  }
  if (!b.order) {
    return -1;
  }
  return a.order - b.order;
}
function flatArrayDeepToObject(arr) {
  return arr.reduce((acc, curr) => __spreadValues(__spreadValues({}, acc), Array.isArray(curr) ? flatArrayDeepToObject(curr) : curr), {});
}
function getStream$(source) {
  return source instanceof Observable ? source : source instanceof Promise ? from(source) : of(source);
}
function isArray(obj) {
  return Array.isArray(obj);
}
var LpxThemeTranslateService = class _LpxThemeTranslateService {
  constructor() {
    this.translateValues = inject(LPX_TRANSLATE_TOKEN, {
      optional: true
    });
    this.translateService = inject(LPX_TRANSLATE_SERVICE_TOKEN);
    this._content = flatArrayDeepToObject(this.translateValues);
  }
  // TODO: PROVIDE API : Implement args
  translate$(key, ...args) {
    return this.translateService.get$(key, this._content[key]);
  }
  static {
    this.ɵfac = function LpxThemeTranslateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxThemeTranslateService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LpxThemeTranslateService,
      factory: _LpxThemeTranslateService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxThemeTranslateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DefaultTranslateService = class _DefaultTranslateService {
  get$(key, defaultValue) {
    return of(defaultValue || key || "");
  }
  get(key, defaultValue) {
    return defaultValue || key || "";
  }
  static {
    this.ɵfac = function DefaultTranslateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultTranslateService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DefaultTranslateService,
      factory: _DefaultTranslateService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTranslateService, [{
    type: Injectable
  }], null, null);
})();
var LPX_TRANSLATE_SERVICE_PROVIDER = {
  provide: LPX_TRANSLATE_SERVICE_TOKEN,
  useClass: DefaultTranslateService
};
var LPX_TRANSLATE_PROVIDERS = [LPX_TRANSLATE_SERVICE_PROVIDER];
var DefaultAuthService = class _DefaultAuthService {
  constructor() {
    this.userProfileService = inject(UserProfileService);
    this.isUserExists$ = this.userProfileService.user$.pipe(map((user) => !!user && Object.keys(user).length > 0));
  }
  navigateToLogin() {
    return;
  }
  static {
    this.ɵfac = function DefaultAuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultAuthService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DefaultAuthService,
      factory: _DefaultAuthService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultAuthService, [{
    type: Injectable
  }], null, null);
})();
var LPX_AUTH_SERVICE_TOKEN = new InjectionToken("LPX_AUTH_SERVICE_TOKEN");
var LpxLocalStorageService = class _LpxLocalStorageService {
  constructor() {
    this.platformId = inject(PLATFORM_ID);
  }
  get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
  get length() {
    return this.isBrowser ? localStorage.length : 0;
  }
  clear() {
    if (this.isBrowser) localStorage.clear();
  }
  getItem(key) {
    return this.isBrowser ? localStorage.getItem(key) : null;
  }
  key(index) {
    return this.isBrowser ? localStorage.key(index) : null;
  }
  removeItem(key) {
    if (this.isBrowser) localStorage.removeItem(key);
  }
  setItem(key, value) {
    if (this.isBrowser) localStorage.setItem(key, value);
  }
  static {
    this.ɵfac = function LpxLocalStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxLocalStorageService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LpxLocalStorageService,
      factory: _LpxLocalStorageService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxLocalStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LpxCookieStorageService = class _LpxCookieStorageService {
  constructor() {
    this.platformId = inject(PLATFORM_ID);
    this.document = inject(DOCUMENT);
    this.request = inject(REQUEST);
  }
  get length() {
    return isPlatformBrowser(this.platformId) ? this.keys().length : this.getCookiesFromRequest()?.size ?? 0;
  }
  clear() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.keys().forEach((k) => this.removeItem(k));
  }
  getItem(key) {
    if (!isPlatformBrowser(this.platformId)) {
      return this.getCookiesFromRequest()?.get(key) ?? null;
    }
    const name = key + "=";
    const parts = (this.document.cookie || "").split("; ");
    for (const p of parts) {
      if (p.startsWith(name)) {
        return decodeURIComponent(p.slice(name.length));
      }
    }
    return null;
  }
  key(index) {
    if (!isPlatformBrowser(this.platformId)) return null;
    return this.keys()[index] ?? null;
  }
  removeItem(key) {
    if (!isPlatformBrowser(this.platformId)) return;
    this.setCookie(key, "", {
      "max-age": -1,
      path: "/"
    });
  }
  setItem(key, value) {
    if (!isPlatformBrowser(this.platformId)) return;
    this.setCookie(key, encodeURIComponent(value), {
      path: "/",
      sameSite: "Lax",
      secure: true
    });
  }
  setItemWithExpiry(key, value, seconds) {
    if (!isPlatformBrowser(this.platformId)) return;
    this.setCookie(key, encodeURIComponent(value), {
      path: "/",
      sameSite: "Lax",
      secure: true,
      "max-age": Math.max(0, Math.floor(seconds))
    });
  }
  keys() {
    const raw = (this.document.cookie || "").split("; ").filter(Boolean);
    return raw.map((c) => decodeURIComponent(c.split("=")[0]));
  }
  setCookie(name, value, opts) {
    let s = `${name}=${value}`;
    if (opts.path) s += `; Path=${opts.path}`;
    if (opts.domain) s += `; Domain=${opts.domain}`;
    if (opts.sameSite) s += `; SameSite=${opts.sameSite}`;
    if (opts.secure) s += `; Secure`;
    if (opts.expires) s += `; Expires=${opts.expires.toUTCString()}`;
    if (typeof opts["max-age"] === "number") s += `; Max-Age=${opts["max-age"]}`;
    this.document.cookie = s;
  }
  getCookiesFromRequest() {
    const cookies = /* @__PURE__ */ new Map();
    const cookieHeader = this.request?.headers.get("cookie") ?? "";
    for (const part of cookieHeader.split(";")) {
      const i = part.indexOf("=");
      if (i > -1) {
        const k = part.slice(0, i).trim();
        const v = decodeURIComponent(part.slice(i + 1).trim());
        cookies.set(k, v);
      }
    }
    return cookies;
  }
  static {
    this.ɵfac = function LpxCookieStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxCookieStorageService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LpxCookieStorageService,
      factory: _LpxCookieStorageService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxCookieStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RoutesService2 = class _RoutesService {
  constructor() {
    this.router = inject(Router);
    this.location = inject(Location);
    this.currentNavigation = toSignal(this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map(() => this.location.path() || "/")), {
      initialValue: this.location.path() || "/"
    });
  }
  static {
    this.ɵfac = function RoutesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoutesService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RoutesService,
      factory: _RoutesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutesService2, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LPX_STYLE_PROVIDERS = [{
  provide: LPX_INITIAL_STYLES,
  useFactory: () => []
}, provideAppInitializer(() => {
  return loadInitialStyles();
})];
function loadInitialStyles() {
  const styleService = inject(StyleService);
  const languageService = inject(LanguageService);
  return languageService.languageChange$.pipe(take(1), switchMap((lang) => from(styleService.initStyles(lang.isRTL ? "rtl" : "ltr"))));
}
function createWindowProvider(windowObj) {
  return {
    provide: WINDOW,
    useFactory: () => {
      if (windowObj) {
        return windowObj;
      } else {
        const platformId = inject(PLATFORM_ID);
        return isPlatformBrowser(platformId) ? window : void 0;
      }
    }
  };
}
var LpxLogoFeatureKind;
(function(LpxLogoFeatureKind2) {
  LpxLogoFeatureKind2[LpxLogoFeatureKind2["Options"] = 0] = "Options";
})(LpxLogoFeatureKind || (LpxLogoFeatureKind = {}));
var ICON_MAP = {
  bagFill: "bi bi-bag-fill",
  bellFill: "bi bi-bell-fill",
  calendarWeek: "bi bi-calendar2-week",
  chatDots: "bi bi-chat-dots",
  chevronDown: "bi bi-chevron-down",
  chevronUp: "bi bi-chevron-up",
  gearConnected: "bi bi-gear-wide-connected",
  filter: "bi bi-filter",
  filterFill: "bi bi-filter-circle-fill",
  layoutThreeColumns: "bi bi-layout-three-columns",
  moon: "bi bi-moon",
  square: "bi bi-square",
  sunset: "bi bi-brightness-alt-high-fill",
  sunup: "bi bi-brightness-high-fill",
  star: "bi bi-star",
  x: "bi bi-x",
  xCircleFill: "bi bi-x-circle-fill"
};
var LEPTON_X_ICON_SET = new InjectionToken("LEPTON_X_ICON_SET");
var IconComponent = class _IconComponent {
  constructor() {
    this.iconSet = inject(LEPTON_X_ICON_SET);
  }
  get styleClass() {
    return this.iconSet[this.iconClass] || this.iconClass;
  }
  static {
    this.ɵfac = function IconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IconComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _IconComponent,
      selectors: [["lpx-icon"]],
      inputs: {
        iconClass: "iconClass"
      },
      decls: 1,
      vars: 2,
      consts: [["aria-hidden", "true", 1, "lpx-icon"]],
      template: function IconComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElement(0, "i", 0);
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.styleClass);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      selector: "lpx-icon",
      template: `
    <i class="lpx-icon" [class]="styleClass" aria-hidden="true"></i>
  `,
      encapsulation: ViewEncapsulation.None,
      imports: []
    }]
  }], null, {
    iconClass: [{
      type: Input
    }]
  });
})();
var AvatarComponent = class _AvatarComponent {
  static {
    this.ɵfac = function AvatarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AvatarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AvatarComponent,
      selectors: [["lpx-avatar"]],
      inputs: {
        avatar: "avatar"
      },
      decls: 1,
      vars: 1,
      consts: [[1, "lpx-avatar"], [1, "lpx-avatar-icon", 3, "iconClass"], [1, "lpx-avatar-img", 3, "src"]],
      template: function AvatarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, AvatarComponent_Conditional_0_Template, 3, 1, "div", 0);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.avatar && ctx.avatar.source ? 0 : -1);
        }
      },
      dependencies: [IconComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarComponent, [{
    type: Component,
    args: [{
      selector: "lpx-avatar",
      encapsulation: ViewEncapsulation.None,
      imports: [IconComponent],
      template: `@if (avatar && avatar.source) {\r
  <div class="lpx-avatar">\r
    @switch (avatar.type) {\r
      @case ('icon') {\r
        <lpx-icon\r
          class="lpx-avatar-icon"\r
          [iconClass]="avatar.source"\r
        ></lpx-icon>\r
      }\r
      @case ('image') {\r
        <img class="lpx-avatar-img" [src]="avatar.source" />\r
      }\r
    }\r
  </div>\r
}\r
`
    }]
  }], null, {
    avatar: [{
      type: Input
    }]
  });
})();
var LpxIconModule = class _LpxIconModule {
  /**
   * @deprecated `LpxIconModule.forRoot()` is deprecated. You can use `provideLpxCore` **function** instead.
   */
  static forRoot(options) {
    return {
      ngModule: _LpxIconModule,
      providers: [provideLpxCore(SKIP_DEFAULTS, withIcon(options))]
    };
  }
  static {
    this.ɵfac = function LpxIconModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxIconModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxIconModule,
      imports: [CommonModule, IconComponent],
      exports: [IconComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxIconModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, IconComponent],
      exports: [IconComponent]
    }]
  }], null, null);
})();
var LpxAvatarModule = class _LpxAvatarModule {
  static {
    this.ɵfac = function LpxAvatarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxAvatarModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxAvatarModule,
      imports: [CommonModule, LpxIconModule, AvatarComponent],
      exports: [AvatarComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, LpxIconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxAvatarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LpxIconModule, AvatarComponent],
      exports: [AvatarComponent]
    }]
  }], null, null);
})();
var Layouts;
(function(Layouts2) {
  Layouts2["sideMenu"] = "side-menu";
  Layouts2["topMenu"] = "top-menu";
})(Layouts || (Layouts = {}));
var BrandLogoComponent = class _BrandLogoComponent {
  constructor() {
    this.layout = input(Layouts.sideMenu, ...ngDevMode ? [{
      debugName: "layout"
    }] : (
      /* istanbul ignore next */
      []
    ));
    this.layoutOptions = Layouts;
    this.logoUrl = inject(LOGO_URL_TOKEN, {
      optional: true
    });
    this.appName = inject(LOGO_APP_NAME_TOKEN, {
      optional: true
    }) ?? "ProjectName";
  }
  static {
    this.ɵfac = function BrandLogoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrandLogoComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BrandLogoComponent,
      selectors: [["lpx-brand-logo"]],
      inputs: {
        layout: [1, "layout"]
      },
      decls: 2,
      vars: 1,
      consts: [["routerLink", "/"], ["routerLink", "/", 1, "text-decoration-none"], ["role", "img", "aria-label", "App Logo", 1, "lpx-brand-logo"], [1, "lpx-brand-name", 2, "position", "inherit"], [1, "lpx-brand-logo"], [1, "lpx-brand-name", 2, "left", "58px !important"]],
      template: function BrandLogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, BrandLogoComponent_Conditional_0_Template, 2, 2, "a", 0)(1, BrandLogoComponent_Conditional_1_Template, 3, 1, "a", 1);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.logoUrl ? 0 : 1);
        }
      },
      dependencies: [RouterLink],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrandLogoComponent, [{
    type: Component,
    args: [{
      selector: "lpx-brand-logo",
      encapsulation: ViewEncapsulation.None,
      imports: [RouterLink],
      template: `@if (logoUrl) {\r
  @let logo = 'url(' + logoUrl + ')';\r
  <a routerLink="/">\r
    <div\r
      class="lpx-brand-logo"\r
      [style.background-image]="logo"\r
      role="img"\r
      aria-label="App Logo"\r
    ></div>\r
  </a>\r
} @else {\r
  <a routerLink="/" class="text-decoration-none">\r
    @switch (layout()) {\r
      @case (layoutOptions.sideMenu) {\r
        <div class="lpx-brand-logo"></div>\r
        <div class="lpx-brand-name" style="left: 58px !important">\r
          {{ appName }}\r
        </div>\r
      }\r
\r
      @case (layoutOptions.topMenu) {\r
        <div class="lpx-brand-name" style="position: inherit">\r
          {{ appName }}\r
        </div>\r
      }\r
    }\r
  </a>\r
}\r
`
    }]
  }], null, {
    layout: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "layout",
        required: false
      }]
    }]
  });
})();
var LpxBrandLogoModule = class _LpxBrandLogoModule {
  static {
    this.ɵfac = function LpxBrandLogoModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxBrandLogoModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxBrandLogoModule,
      imports: [RouterModule, BrandLogoComponent],
      exports: [BrandLogoComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [RouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxBrandLogoModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, BrandLogoComponent],
      exports: [BrandLogoComponent]
    }]
  }], null, null);
})();
var ClickOutsideDirective = class _ClickOutsideDirective {
  constructor() {
    this.elementRef = inject(ElementRef);
    this.lpxClickOutside = new EventEmitter();
    this.exceptedRefs = [];
  }
  onDocumentClick(event) {
    if (!(this.elementRef.nativeElement.contains(event.target) || this.exceptedRefs.some((ref) => ref.nativeElement.contains(event.target)))) {
      this.lpxClickOutside.emit();
    }
  }
  static {
    this.ɵfac = function ClickOutsideDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClickOutsideDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ClickOutsideDirective,
      selectors: [["", "lpxClickOutside", ""]],
      hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, ɵɵresolveDocument);
        }
      },
      inputs: {
        exceptedRefs: "exceptedRefs"
      },
      outputs: {
        lpxClickOutside: "lpxClickOutside"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClickOutsideDirective, [{
    type: Directive,
    args: [{
      selector: "[lpxClickOutside]"
    }]
  }], null, {
    lpxClickOutside: [{
      type: Output
    }],
    exceptedRefs: [{
      type: Input
    }],
    onDocumentClick: [{
      type: HostListener,
      args: ["document:click", ["$event"]]
    }]
  });
})();
var ToObservablePipe = class _ToObservablePipe {
  transform(value) {
    return value ? getStream$(value) : of("");
  }
  static {
    this.ɵfac = function ToObservablePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToObservablePipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "toObservable",
      type: _ToObservablePipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToObservablePipe, [{
    type: Pipe,
    args: [{
      name: "toObservable"
    }]
  }], null, null);
})();
var BreadcrumbService = class _BreadcrumbService {
  constructor() {
    this.store = new DataStore([]);
    this.items$ = this.store.sliceState((state2) => state2);
  }
  // TODO: generate id per item
  add(item) {
    const items = Array.isArray(item) ? item : [item];
    this.store.set([...this.store.state, ...items]);
  }
  // TODO: generate id per item
  insert(item, index) {
    const state2 = this.store.state;
    const items = Array.isArray(item) ? item : [item];
    this.store.set([...state2.slice(0, index), ...items, ...state2.slice(index)]);
  }
  // TODO: generate id per item
  setItems(items) {
    this.store.set(items);
  }
  static {
    this.ɵfac = function BreadcrumbService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BreadcrumbService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BreadcrumbService,
      factory: _BreadcrumbService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BreadcrumbComponent = class _BreadcrumbComponent {
  constructor() {
    this.service = inject(BreadcrumbService);
    this.icon = ICON_MAP;
  }
  onClick(item) {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }
  static {
    this.ɵfac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BreadcrumbComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BreadcrumbComponent,
      selectors: [["lpx-breadcrumb"]],
      decls: 9,
      vars: 2,
      consts: [["linkTemplate", ""], ["textTemplate", ""], ["aria-label", "breadcrumb"], [1, "lpx-breadcrumb"], [1, "lpx-breadcrumb-item", 3, "click", "lpxClickOutside"], [1, "lpx-breadcrumb-item-icon", 3, "iconClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "lpx-breadcrumb-separator"], ["iconClass", "bi bi-chevron-right"], [3, "routerLink"], [1, "lpx-breadcrumb-item-text"]],
      template: function BreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "nav", 2)(1, "ol", 3);
          ɵɵrepeaterCreate(2, BreadcrumbComponent_For_3_Template, 4, 8, null, null, ɵɵrepeaterTrackByIndex);
          ɵɵpipe(4, "async");
          ɵɵelementEnd()();
          ɵɵtemplate(5, BreadcrumbComponent_ng_template_5_Template, 4, 6, "ng-template", null, 0, ɵɵtemplateRefExtractor)(7, BreadcrumbComponent_ng_template_7_Template, 4, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵrepeater(ɵɵpipeBind1(4, 0, ctx.service.items$));
        }
      },
      dependencies: [ClickOutsideDirective, IconComponent, NgTemplateOutlet, RouterLink, AsyncPipe, ToObservablePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbComponent, [{
    type: Component,
    args: [{
      selector: "lpx-breadcrumb",
      encapsulation: ViewEncapsulation.None,
      imports: [ClickOutsideDirective, IconComponent, NgTemplateOutlet, RouterLink, AsyncPipe, ToObservablePipe],
      template: '<nav aria-label="breadcrumb">\r\n  <ol class="lpx-breadcrumb">\r\n    @for (item of service.items$ | async; track $index; let last = $last) {\r\n      <li\r\n        class="lpx-breadcrumb-item"\r\n        (click)="onClick(item)"\r\n        [class.expanded]="item.expanded"\r\n        (lpxClickOutside)="item.expanded = false"\r\n      >\r\n        @if (item.icon) {\r\n          <lpx-icon\r\n            class="lpx-breadcrumb-item-icon"\r\n            [iconClass]="item.icon"\r\n          ></lpx-icon>\r\n        }\r\n        <ng-container\r\n          *ngTemplateOutlet="\r\n            item.children?.length ? textTemplate : linkTemplate;\r\n            context: { $implicit: item }\r\n          "\r\n        ></ng-container>\r\n      </li>\r\n      @if (!last) {\r\n        <li class="lpx-breadcrumb-separator">\r\n          <lpx-icon iconClass="bi bi-chevron-right"></lpx-icon>\r\n        </li>\r\n      }\r\n    }\r\n  </ol>\r\n</nav>\r\n\r\n<ng-template #linkTemplate let-item>\r\n  <a [routerLink]="item.link"> {{ item.text | toObservable | async }} </a>\r\n</ng-template>\r\n<ng-template #textTemplate let-item>\r\n  <span class="lpx-breadcrumb-item-text">\r\n    {{ item.text | toObservable | async }}\r\n  </span>\r\n</ng-template>\r\n'
    }]
  }], null, null);
})();
var ToObservableModule = class _ToObservableModule {
  static {
    this.ɵfac = function ToObservableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToObservableModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ToObservableModule,
      imports: [CommonModule, ToObservablePipe],
      exports: [ToObservablePipe]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToObservableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ToObservablePipe],
      exports: [ToObservablePipe]
    }]
  }], null, null);
})();
var LpxClickOutsideModule = class _LpxClickOutsideModule {
  static {
    this.ɵfac = function LpxClickOutsideModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxClickOutsideModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxClickOutsideModule,
      imports: [CommonModule, ClickOutsideDirective],
      exports: [ClickOutsideDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxClickOutsideModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ClickOutsideDirective],
      exports: [ClickOutsideDirective]
    }]
  }], null, null);
})();
var exportedDeclarations$1 = [BreadcrumbComponent];
var LpxBreadcrumbModule = class _LpxBreadcrumbModule {
  static forRoot() {
    return {
      ngModule: _LpxBreadcrumbModule,
      providers: [provideLpxBreadcrumb()]
    };
  }
  static {
    this.ɵfac = function LpxBreadcrumbModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxBreadcrumbModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxBreadcrumbModule,
      imports: [CommonModule, LpxIconModule, ToObservableModule, RouterModule, LpxClickOutsideModule, BreadcrumbComponent],
      exports: [BreadcrumbComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, LpxIconModule, ToObservableModule, RouterModule, LpxClickOutsideModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxBreadcrumbModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LpxIconModule, ToObservableModule, RouterModule, LpxClickOutsideModule, ...exportedDeclarations$1],
      exports: [...exportedDeclarations$1]
    }]
  }], null, null);
})();
var CONTENT_BEFORE_ROUTES = new InjectionToken("CONTENT_BEFORE_ROUTES");
var CONTENT_AFTER_ROUTES = new InjectionToken("CONTENT_AFTER_ROUTES");
var LPX_MENU_ITEMS = new InjectionToken("LPX_MENU_ITEMS");
function createGroupMap(list, othersGroupKey, skipGroupCheck = false) {
  if (!skipGroupCheck && (!isArray(list) || !list.some((node) => Boolean(node.group)))) return void 0;
  const mapGroup = /* @__PURE__ */ new Map();
  for (const node of list) {
    const group = node?.group || othersGroupKey;
    if (typeof group !== "string") {
      throw new Error(`Invalid group: ${group}`);
    }
    const items = mapGroup.get(group) || [];
    items.push(node);
    mapGroup.set(group, items);
  }
  return mapGroup;
}
function getItemsFromGroup(list, pred) {
  return list?.reduce((acc, {
    items
  }) => [...acc, ...pred ? items.filter(pred) : items], []);
}
var OTHERS_GROUP_KEY = "AbpUi::OthersGroup";
var NavbarService = class _NavbarService {
  constructor() {
    this.router = inject(Router);
    this.menuItems = inject(LPX_MENU_ITEMS);
    this.routeCultureUrl = inject(RouteBasedCultureUrlService);
    this.store = new DataStore(this.addContainerLinks(this.menuItems));
    this.expandedLocationKey = null;
    this.navbarItems$ = this.store.sliceState((state2) => state2);
    this.sourceNavbarItems$ = this.navbarItems$;
    this.groupedNavbarItems$ = this.store.sliceState((state2) => state2).pipe(map((items) => {
      if (!items.some((f) => !!f.group)) {
        return;
      }
      const map2 = createGroupMap(items, OTHERS_GROUP_KEY) || [];
      return Array.from(map2, ([group, items2]) => ({
        group,
        items: items2
      }));
    }));
    this.expandItemByLink$().subscribe();
  }
  addNavbarItems(...menuItems) {
    this.expandedLocationKey = null;
    this.store.set([...this.store.state, ...this.addContainerLinks(menuItems)]);
  }
  setNavbarItems(...menuItems) {
    this.expandedLocationKey = null;
    this.store.set([...this.addContainerLinks(menuItems)]);
    this.expandItems();
  }
  addChildren(id, ...menuItems) {
    const {
      location
    } = this.findById(id, this.store.state);
    if (!location.length) {
      return;
    }
    const updated = this.addChildrenByLocation(this.store.state, [...location], "", menuItems);
    this.expandedLocationKey = null;
    this.store.patch(updated);
  }
  findByLink(link, items) {
    return this.findByProp("link", link, items);
  }
  expandItemByLink$() {
    return this.router.events.pipe(filter((e) => e instanceof NavigationEnd), tap(() => this.expandItems()));
  }
  expandItems() {
    if (!this.store.state.length) {
      return;
    }
    const route = this.getRouteItem();
    if (!route?.item) {
      this.expandedLocationKey = null;
      return;
    }
    const locationKey = route.location.join(".");
    if (locationKey === this.expandedLocationKey) {
      return;
    }
    const expanded = this.calculateExpandState(this.store.state, [...route.location]);
    this.store.patch(expanded);
    this.expandedLocationKey = locationKey;
  }
  getRouteItem() {
    const path = this.router.url.split(/[?#]/)[0];
    const normalized = this.routeCultureUrl.normalizeForMenuMatch(path);
    return this.findByLink(normalized);
  }
  calculateExpandState(items, indexes) {
    const matchIndex = indexes.shift();
    if (matchIndex === void 0) {
      return items;
    }
    return items.reduce((acc, item, index) => {
      if (index === matchIndex) {
        return [...acc, __spreadProps(__spreadValues({}, item), {
          expanded: true,
          selected: true,
          children: this.calculateExpandState(item.children || [], indexes)
        })];
      }
      const newItem = __spreadValues(__spreadValues({}, item), item.children ? {
        children: this.collapseChildren(item.children)
      } : {});
      return [...acc, __spreadProps(__spreadValues({}, newItem), {
        expanded: false,
        selected: false
      })];
    }, []);
  }
  collapseChildren(children) {
    return [...children.map((child) => __spreadProps(__spreadValues({}, child), {
      expanded: false,
      selected: false,
      children: child.children ? this.collapseChildren(child.children) : []
    }))];
  }
  addChildrenByLocation(items, location, linkPrefix, menuItems) {
    const [currentIndex, ...restLocation] = location;
    return items.map((item, index) => {
      if (index !== currentIndex) {
        return item;
      }
      const currentLink = `${linkPrefix}/${item.containerLink}`;
      if (!restLocation.length) {
        const existingChildren = item.children || [];
        const newChildren = this.addContainerLinks(menuItems, currentLink);
        return __spreadProps(__spreadValues({}, item), {
          children: [...existingChildren, ...newChildren]
        });
      }
      return __spreadProps(__spreadValues({}, item), {
        children: this.addChildrenByLocation(item.children || [], restLocation, currentLink, menuItems)
      });
    });
  }
  findById(id, items) {
    return this.findByProp("id", id, items);
  }
  findByProp(prop, value, items) {
    const navbarItems = items || this.store.state;
    const cleanValue = this.normalizeLink(value);
    let bestMatch;
    let bestMatchLocation = [];
    let bestMatchLength = 0;
    const isValidSegmentPrefix = (candidate) => {
      if (!candidate || !cleanValue.startsWith(candidate)) {
        return false;
      }
      const isExactMatch = cleanValue.length === candidate.length;
      const hasPathSeparator = cleanValue[candidate.length] === "/";
      return isExactMatch || hasPathSeparator;
    };
    const searchTree = (nodes, currentPath = []) => {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const nodePath = [...currentPath, i];
        const nodeValue = prop === "link" ? this.normalizeLink(node[prop]) : node[prop];
        if (!nodeValue) {
          if (node.children?.length) {
            const childResult = searchTree(node.children, nodePath);
            if (childResult.item) return childResult;
          }
          continue;
        }
        if (prop !== "link") {
          if (nodeValue === cleanValue) {
            return {
              item: node,
              location: nodePath
            };
          }
        }
        if (prop === "link") {
          if (nodeValue === cleanValue) {
            return {
              item: node,
              location: nodePath
            };
          }
          const isLongerMatch = nodeValue.length > bestMatchLength;
          if (isValidSegmentPrefix(nodeValue) && isLongerMatch) {
            bestMatch = node;
            bestMatchLocation = nodePath;
            bestMatchLength = nodeValue.length;
          }
        }
        if (node.children?.length) {
          const childResult = searchTree(node.children, nodePath);
          if (childResult.item) {
            return childResult;
          }
        }
      }
      return {
        item: bestMatch,
        location: bestMatchLocation
      };
    };
    return searchTree(navbarItems);
  }
  normalizeLink(value) {
    const clean = (value || "").split(/[?#]/)[0];
    if (!clean) {
      return "/";
    }
    return clean.startsWith("/") ? clean : `/${clean}`;
  }
  addContainerLinks(items, link = "") {
    return items.map((item) => __spreadProps(__spreadValues(__spreadValues({}, item), item.link && link ? {
      link: `${link}/${item.link}`
    } : {}), {
      children: this.addContainerLinks(item.children || [], `${link ? link + "/" : ""}${item.containerLink || ""}`)
    }));
  }
  static {
    this.ɵfac = function NavbarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NavbarService,
      factory: _NavbarService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var BreadcrumbRouteListenerService = class _BreadcrumbRouteListenerService {
  constructor() {
    this.navbarService = inject(NavbarService);
    this.router = inject(Router);
    this.routes = inject(RoutesService);
    this.breadcrumbService = inject(BreadcrumbService);
    this.localizationService = inject(LocalizationService);
    this.routeCultureUrl = inject(RouteBasedCultureUrlService);
  }
  subscribeRoute() {
    combineLatest([this.router.events.pipe(filter((event) => event instanceof NavigationEnd)), this.navbarService.navbarItems$.pipe(filter((items) => !!items.length))]).subscribe(([_navigationEvent, items]) => {
      const currentPath = this.routeCultureUrl.normalizeForMenuMatch(this.router.url.split(/[?#]/)[0]);
      let activeItem = this.navbarService.findByLink(currentPath);
      let breadcrumbItems;
      if (!activeItem.item) {
        const item = this.findItemByTreeNode(currentPath);
        if (item) {
          breadcrumbItems = this.createBreadcrumbTrail(item);
          this.breadcrumbService.setItems(breadcrumbItems);
          return;
        }
        activeItem = this.navbarService.findByLink("/");
      }
      breadcrumbItems = activeItem.location.reduce((acc, itemIndex) => {
        const parent = acc[acc.length - 1]?.children || items;
        const item = parent[itemIndex];
        return [...acc, __spreadProps(__spreadValues({}, item), {
          siblings: parent
        })];
      }, []);
      this.breadcrumbService.setItems(this.mapNavbarItemToBreadcrumbItem(breadcrumbItems));
    });
  }
  mapNavbarItemToBreadcrumbItem(items) {
    return items.map(({
      breadcrumbText,
      text,
      link,
      icon,
      siblings
    }) => ({
      text: breadcrumbText || text || "",
      link,
      icon,
      children: this.mapNavbarItemToBreadcrumbItem(siblings || [])
    }));
  }
  findItemByTreeNode(path) {
    const {
      tree,
      search: boundSearch
    } = {
      tree: this.routes.tree,
      search: this.routes.search.bind(this.routes)
    };
    const treeNode = boundSearch({
      path
    }, tree);
    return treeNode;
  }
  createBreadcrumbTrail(item) {
    const trail = [];
    let current = item;
    while (current && (current.breadcrumbText || current.name)) {
      trail.push({
        text: this.localizationService.instant(current.breadcrumbText || current.name),
        icon: current.iconClass
      });
      current = current.parent;
    }
    return trail.reverse();
  }
  static {
    this.ɵfac = function BreadcrumbRouteListenerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BreadcrumbRouteListenerService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BreadcrumbRouteListenerService,
      factory: _BreadcrumbRouteListenerService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbRouteListenerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LogoPanelDirective = class _LogoPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function LogoPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LogoPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _LogoPanelDirective,
      selectors: [["ng-template", "lpx-logo-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogoPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-logo-panel]"
    }]
  }], null, null);
})();
var TranslatePipe = class _TranslatePipe {
  constructor() {
    this.lpxThemeTranslateService = inject(LpxThemeTranslateService);
  }
  transform(value, ...args) {
    return this.lpxThemeTranslateService.translate$(value, args);
  }
  static {
    this.ɵfac = function TranslatePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TranslatePipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "lpxTranslate",
      type: _TranslatePipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Pipe,
    args: [{
      name: "lpxTranslate"
    }]
  }], null, null);
})();
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
var SubNavbarComponent = class _SubNavbarComponent {
  constructor() {
    this.injector = inject(Injector);
    this.routerItem = input(...ngDevMode ? [void 0, {
      debugName: "routerItem"
    }] : (
      /* istanbul ignore next */
      []
    ));
    this.routeClick = new EventEmitter();
    this.expand = new EventEmitter();
  }
  onItemClick(menuItem) {
    let action$ = of(true);
    if (menuItem.action) {
      const result = menuItem.action();
      action$ = getStream$(result);
    }
    action$.pipe(take(1)).subscribe((result) => {
      if (result) {
        this.processItemClick(menuItem);
      }
    });
  }
  onChildExpand(child) {
    if (child.expanded) {
      this.item?.children?.filter((otherChild) => otherChild !== child).forEach((otherChild) => {
        otherChild.expanded = false;
        otherChild.selected = false;
      });
    }
  }
  processItemClick(menuItem) {
    if (menuItem.children?.length) {
      menuItem.expanded = !menuItem.expanded;
      this.expand.emit(menuItem);
      return;
    }
    this.routeClick.emit(menuItem);
    if (!this.routerItem()) {
      menuItem.selected = true;
    }
  }
  static {
    this.ɵfac = function SubNavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubNavbarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SubNavbarComponent,
      selectors: [["lpx-sub-navbar"]],
      inputs: {
        item: "item",
        routerItem: [1, "routerItem"]
      },
      outputs: {
        routeClick: "routeClick",
        expand: "expand"
      },
      decls: 4,
      vars: 1,
      consts: [["defaultTemplate", ""], ["textTmpl", ""], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [4, "ngTemplateOutlet"], [1, "lpx-menu-item-link", 3, "click", "routerLink"], [1, "lpx-menu-item-icon", 3, "iconClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "dd-icon", "hidden-in-hover-trigger", 3, "iconClass"], [1, "lpx-inner-menu", "hidden-in-hover-trigger", 3, "collapsed"], [1, "lpx-menu-item-text", "hidden-in-hover-trigger"], [1, "lpx-inner-menu", "hidden-in-hover-trigger"], [1, "lpx-inner-menu-item"], ["class", "lpx-inner-menu-item", 4, "lpxVisible"], [3, "routeClick", "expand", "item"]],
      template: function SubNavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, SubNavbarComponent_Conditional_0_Template, 1, 2, "ng-container")(1, SubNavbarComponent_Conditional_1_Template, 1, 1, "ng-container");
          ɵɵtemplate(2, SubNavbarComponent_ng_template_2_Template, 8, 14, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.item.component ? 0 : 1);
        }
      },
      dependencies: [_SubNavbarComponent, NgComponentOutlet, NgTemplateOutlet, RouterLink, IconComponent, LpxVisibleDirective, AsyncPipe, TranslatePipe, LocalizationPipe, AbpRouteCultureUrlPipe],
      encapsulation: 2,
      data: {
        animation: [collapse]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubNavbarComponent, [{
    type: Component,
    args: [{
      selector: "lpx-sub-navbar",
      encapsulation: ViewEncapsulation.None,
      animations: [collapse],
      imports: [NgComponentOutlet, NgTemplateOutlet, RouterLink, IconComponent, LpxVisibleDirective, AsyncPipe, TranslatePipe, LocalizationPipe, AbpRouteCultureUrlPipe],
      template: `@if (item.component) {\r
  <ng-container *ngComponentOutlet="item.component; injector: injector" />\r
} @else {\r
  <ng-container *ngTemplateOutlet="defaultTemplate" />\r
}\r
\r
<ng-template #defaultTemplate>\r
  <a\r
    class="lpx-menu-item-link"\r
    [routerLink]="item.link | abpRouteCultureUrl"\r
    [class.selected]="item.selected"\r
    [class.expanded]="item.children?.length && item.expanded"\r
    (click)="onItemClick(item)"\r
  >\r
    @if (item.icon) {\r
      <lpx-icon class="lpx-menu-item-icon" [iconClass]="item.icon" />\r
    }\r
\r
    <ng-container\r
      *ngTemplateOutlet="\r
        item.template || textTmpl;\r
        context: { $implicit: item }\r
      "\r
    />\r
\r
    <ng-template #textTmpl>\r
      @if (item.text) {\r
        @let isToolbarItem = item.text.split('::').length > 1;\r
        <span class="lpx-menu-item-text hidden-in-hover-trigger">\r
          @if (isToolbarItem) {\r
            {{ item.text | abpLocalization }}\r
          } @else {\r
            {{ item.text | lpxTranslate | async }}\r
          }\r
        </span>\r
      }\r
    </ng-template>\r
\r
    @if (item.children?.length) {\r
      <lpx-icon\r
        [iconClass]="item.expanded ? 'chevronUp' : 'chevronDown'"\r
        class="dd-icon hidden-in-hover-trigger"\r
      />\r
    }\r
  </a>\r
\r
  @if (item.children?.length) {\r
    <ul\r
      class="lpx-inner-menu hidden-in-hover-trigger"\r
      [class.collapsed]="!item.expanded"\r
    >\r
      @for (child of item.children; track $index) {\r
        <li\r
          class="lpx-inner-menu-item"\r
          *lpxVisible="!child.visible || child.visible(child, injector)"\r
        >\r
          <lpx-sub-navbar\r
            [item]="child"\r
            (routeClick)="this.routeClick.emit($event)"\r
            (expand)="onChildExpand($event)"\r
          />\r
        </li>\r
      }\r
    </ul>\r
  }\r
</ng-template>\r
`
    }]
  }], null, {
    item: [{
      type: Input
    }],
    routerItem: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "routerItem",
        required: false
      }]
    }],
    routeClick: [{
      type: Output
    }],
    expand: [{
      type: Output
    }]
  });
})();
var NavbarRoutesComponent = class _NavbarRoutesComponent {
  constructor() {
    this.injector = inject(Injector);
    this._sourceItems = signal([], ...ngDevMode ? [{
      debugName: "_sourceItems"
    }] : (
      /* istanbul ignore next */
      []
    ));
    this.routerItem = input(...ngDevMode ? [void 0, {
      debugName: "routerItem"
    }] : (
      /* istanbul ignore next */
      []
    ));
    this.routeClick = new EventEmitter();
    this.isExpandedOrSelected = (item) => !!(item.expanded || item.selected);
  }
  set navbarItems(value) {
    this._sourceItems.set(value);
  }
  get navbarItems() {
    return this._sourceItems();
  }
  get itemsFromGroup() {
    if (!this.groupedItems) {
      return void 0;
    }
    return getItemsFromGroup(this.groupedItems);
  }
  onSubnavbarExpand(menuItem, menuItems) {
    if (menuItem.expanded) {
      const items = this.itemsFromGroup || menuItems;
      if (!items) {
        return;
      }
      items.filter((item) => item !== menuItem).forEach((item) => item.expanded = false);
    }
  }
  onRouteClick(menuItem, menuItems) {
    const expandedItems = menuItems?.filter(this.isExpandedOrSelected);
    const expandedGroupItems = this.itemsFromGroup?.filter(this.isExpandedOrSelected);
    const items = expandedGroupItems || expandedItems;
    if (items) {
      items.filter((item) => item !== menuItem).reduce((acc, item) => {
        return [...acc, item, ...this.flatChildren(item.children || [])];
      }, [])?.filter((item) => !this.checkChildrenIncludesItem(item, menuItem) && item !== menuItem).forEach((item) => {
        item.selected = false;
        item.expanded = false;
      });
    }
    this.routeClick.emit(menuItem);
  }
  checkChildrenIncludesItem(item, menuItem) {
    return item.children?.reduce((acc, child) => acc || child === menuItem || this.checkChildrenIncludesItem(child, menuItem), false) || false;
  }
  flatChildren(menuItems) {
    return menuItems?.reduce((acc, item) => {
      return [...acc, item, ...this.flatChildren(item.children || [])];
    }, []) || [];
  }
  static {
    this.ɵfac = function NavbarRoutesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarRoutesComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NavbarRoutesComponent,
      selectors: [["lpx-navbar-routes"]],
      inputs: {
        navbarItems: "navbarItems",
        groupedItems: "groupedItems",
        routerItem: [1, "routerItem"]
      },
      outputs: {
        routeClick: "routeClick"
      },
      decls: 9,
      vars: 1,
      consts: [["defaultRoute", ""], ["groupText", ""], ["itemTemplate", ""], [1, "lpx-nav-menu"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [1, "group-menu-item", "hidden-in-hover-trigger"], ["class", "outer-menu-item", 4, "lpxVisible"], [1, "outer-menu-item"], [3, "expand", "routeClick", "item", "routerItem"]],
      template: function NavbarRoutesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "ul", 3);
          ɵɵconditionalCreate(1, NavbarRoutesComponent_Conditional_1_Template, 2, 0)(2, NavbarRoutesComponent_Conditional_2_Template, 1, 1, "ng-container");
          ɵɵelementEnd();
          ɵɵtemplate(3, NavbarRoutesComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, NavbarRoutesComponent_ng_template_5_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(7, NavbarRoutesComponent_ng_template_7_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.groupedItems && ctx.groupedItems.length ? 1 : 2);
        }
      },
      dependencies: [NgTemplateOutlet, LpxVisibleDirective, SubNavbarComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarRoutesComponent, [{
    type: Component,
    args: [{
      selector: "lpx-navbar-routes",
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet, LpxVisibleDirective, SubNavbarComponent, AsyncPipe, TranslatePipe],
      template: '<ul class="lpx-nav-menu">\r\n  @if (groupedItems && groupedItems.length) {\r\n    @for (item of groupedItems; track $index) {\r\n      <ng-container\r\n        *ngTemplateOutlet="groupText; context: { $implicit: item }"\r\n      />\r\n\r\n      @for (navbarItem of item.items; track $index) {\r\n        <ng-container\r\n          *ngTemplateOutlet="itemTemplate; context: { $implicit: navbarItem }"\r\n        />\r\n      }\r\n    }\r\n  } @else {\r\n    <ng-container *ngTemplateOutlet="defaultRoute" />\r\n  }\r\n</ul>\r\n\r\n<ng-template #defaultRoute>\r\n  @for (item of navbarItems; track $index) {\r\n    <ng-container\r\n      *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"\r\n    />\r\n  }\r\n</ng-template>\r\n\r\n<ng-template #groupText let-item>\r\n  @if (item.items.length) {\r\n    <li class="group-menu-item hidden-in-hover-trigger">\r\n      {{ item.group | lpxTranslate | async }}\r\n    </li>\r\n  }\r\n</ng-template>\r\n\r\n<ng-template #itemTemplate let-item>\r\n  <li\r\n    class="outer-menu-item"\r\n    *lpxVisible="!item.visible || item.visible(item, injector)"\r\n  >\r\n    <lpx-sub-navbar\r\n      [item]="item"\r\n      (expand)="onSubnavbarExpand($event, navbarItems)"\r\n      (routeClick)="onRouteClick($event, navbarItems)"\r\n      [routerItem]="routerItem()"\r\n    />\r\n  </li>\r\n</ng-template>\r\n'
    }]
  }], null, {
    navbarItems: [{
      type: Input
    }],
    groupedItems: [{
      type: Input
    }],
    routerItem: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "routerItem",
        required: false
      }]
    }],
    routeClick: [{
      type: Output
    }]
  });
})();
var NavbarRoutesDirective = class _NavbarRoutesDirective {
  static {
    this.ɵfac = function NavbarRoutesDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarRoutesDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NavbarRoutesDirective,
      selectors: [["", "lpx-navbar-routes", ""], ["", "lpxNavbarRoutes", ""]],
      exportAs: ["lpxNavbarRoutes"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarRoutesDirective, [{
    type: Directive,
    args: [{
      selector: "[lpx-navbar-routes],[lpxNavbarRoutes]",
      exportAs: "lpxNavbarRoutes"
    }]
  }], null, null);
})();
var NavbarComponent = class _NavbarComponent {
  constructor() {
    this.layoutService = inject(LayoutService);
    this.platformId = inject(PLATFORM_ID);
    this.service = inject(NavbarService);
    this.injector = inject(Injector);
    this.didResized = false;
    this.initialHover = false;
    this.showFilterMenu$ = this.service.sourceNavbarItems$.pipe(map((items) => !!items.length));
    this.contentBefore = this.flatContents(CONTENT_BEFORE_ROUTES);
    this.contentAfter = this.flatContents(CONTENT_AFTER_ROUTES);
  }
  toggleSidebarHover() {
    this.didResized = true;
    this.layoutService.toggleClass("hover-trigger");
    this.initialHover = !this.initialHover;
    if (this.initialHover) {
      this.layoutService.addClass("initial-hover");
    } else {
      this.layoutService.removeClass("initial-hover");
    }
  }
  handleInitialHover() {
    if (this.initialHover) {
      this.layoutService.removeClass("initial-hover");
    }
  }
  ngAfterViewChecked() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (this.didResized) {
      this.didResized = false;
      window.dispatchEvent(new Event("resize"));
    }
  }
  flatContents(token) {
    const contents = this.injector.get(token, []);
    return contents.reduce((acc, val) => acc.concat(val), []);
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NavbarComponent,
      selectors: [["lpx-navbar"]],
      contentQueries: function NavbarComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NavbarRoutesDirective, 5, TemplateRef)(dirIndex, LogoPanelDirective, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.routesTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.logoPanel = _t.first);
        }
      },
      decls: 16,
      vars: 17,
      consts: [["defaultRouteTemplate", ""], ["customContentTemplate", ""], ["defaultLogo", ""], [1, "lpx-nav", 3, "mouseenter"], [1, "lpx-logo-container"], [4, "ngTemplateOutlet"], ["iconClass", "bi bi-filter-left", 1, "menu-collapse-icon", "hidden-in-hover-trigger", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "navbarItems", "groupedItems", "routerItem"], [4, "ngComponentOutlet", "ngComponentOutletInjector"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "nav", 3);
          ɵɵlistener("mouseenter", function NavbarComponent_Template_nav_mouseenter_0_listener() {
            return ctx.handleInitialHover();
          });
          ɵɵelementStart(1, "div", 4);
          ɵɵtemplate(2, NavbarComponent_ng_container_2_Template, 1, 0, "ng-container", 5);
          ɵɵelementStart(3, "lpx-icon", 6);
          ɵɵlistener("click", function NavbarComponent_Template_lpx_icon_click_3_listener() {
            return ctx.toggleSidebarHover();
          });
          ɵɵelementEnd()();
          ɵɵconditionalCreate(4, NavbarComponent_Conditional_4_Template, 1, 4, "ng-container");
          ɵɵpipe(5, "async");
          ɵɵtemplate(6, NavbarComponent_ng_container_6_Template, 1, 0, "ng-container", 7);
          ɵɵpipe(7, "async");
          ɵɵpipe(8, "async");
          ɵɵtemplate(9, NavbarComponent_ng_container_9_Template, 1, 0, "ng-container", 7);
          ɵɵelementEnd();
          ɵɵtemplate(10, NavbarComponent_ng_template_10_Template, 1, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(12, NavbarComponent_ng_template_12_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(14, NavbarComponent_ng_template_14_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const defaultRouteTemplate_r7 = ɵɵreference(11);
          const customContentTemplate_r2 = ɵɵreference(13);
          const defaultLogo_r8 = ɵɵreference(15);
          ɵɵadvance(2);
          ɵɵproperty("ngTemplateOutlet", ctx.logoPanel?.template || defaultLogo_r8);
          ɵɵadvance(2);
          ɵɵconditional(ɵɵpipeBind1(5, 6, ctx.showFilterMenu$) ? 4 : -1);
          ɵɵadvance(2);
          ɵɵproperty("ngTemplateOutlet", ctx.routesTemplate || defaultRouteTemplate_r7)("ngTemplateOutletContext", ɵɵpureFunction2(12, _c1, ɵɵpipeBind1(7, 8, ctx.service.navbarItems$), ɵɵpipeBind1(8, 10, ctx.service.groupedNavbarItems$)));
          ɵɵadvance(3);
          ɵɵproperty("ngTemplateOutlet", customContentTemplate_r2)("ngTemplateOutletContext", ɵɵpureFunction1(15, _c0, ctx.contentAfter));
        }
      },
      dependencies: [NgTemplateOutlet, IconComponent, NavbarRoutesComponent, NgComponentOutlet, BrandLogoComponent, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{
      selector: "lpx-navbar",
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet, IconComponent, NavbarRoutesComponent, NgComponentOutlet, BrandLogoComponent, AsyncPipe],
      template: '<nav class="lpx-nav" (mouseenter)="handleInitialHover()">\r\n  <div class="lpx-logo-container">\r\n    <ng-container\r\n      *ngTemplateOutlet="logoPanel?.template || defaultLogo"\r\n    ></ng-container>\r\n    <lpx-icon\r\n      class="menu-collapse-icon hidden-in-hover-trigger"\r\n      iconClass="bi bi-filter-left"\r\n      (click)="toggleSidebarHover()"\r\n    ></lpx-icon>\r\n  </div>\r\n\r\n  @if (showFilterMenu$ | async) {\r\n    <ng-container\r\n      *ngTemplateOutlet="\r\n        customContentTemplate;\r\n        context: { $implicit: contentBefore }\r\n      "\r\n    ></ng-container>\r\n  }\r\n\r\n  <ng-container\r\n    *ngTemplateOutlet="\r\n      routesTemplate || defaultRouteTemplate;\r\n      context: {\r\n        $implicit: service.navbarItems$ | async,\r\n        groupItems: service.groupedNavbarItems$ | async,\r\n      }\r\n    "\r\n  ></ng-container>\r\n\r\n  <ng-container\r\n    *ngTemplateOutlet="\r\n      customContentTemplate;\r\n      context: { $implicit: contentAfter }\r\n    "\r\n  ></ng-container>\r\n</nav>\r\n\r\n<ng-template #defaultRouteTemplate let-items let-groupItems="groupItems">\r\n  <lpx-navbar-routes\r\n    [navbarItems]="items"\r\n    [groupedItems]="groupItems"\r\n    [routerItem]="true"\r\n  ></lpx-navbar-routes>\r\n</ng-template>\r\n\r\n<ng-template #customContentTemplate let-contents>\r\n  @for (component of contents; track $index) {\r\n    <ng-container\r\n      *ngComponentOutlet="component; injector: injector"\r\n    ></ng-container>\r\n  }\r\n</ng-template>\r\n\r\n<ng-template #defaultLogo>\r\n  <lpx-brand-logo />\r\n</ng-template>\r\n'
    }]
  }], () => [], {
    routesTemplate: [{
      type: ContentChild,
      args: [NavbarRoutesDirective, {
        read: TemplateRef
      }]
    }],
    logoPanel: [{
      type: ContentChild,
      args: [LogoPanelDirective]
    }]
  });
})();
var SafeHtmlPipe = class _SafeHtmlPipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  transform(value) {
    if (!value || typeof value !== "string") return "";
    return this.sanitizer.sanitize(SecurityContext.HTML, value) || "";
  }
  static {
    this.ɵfac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SafeHtmlPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "lpxSafeHtml",
      type: _SafeHtmlPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "lpxSafeHtml",
      standalone: true
    }]
  }], null, null);
})();
var LpxTranslateModule = class _LpxTranslateModule {
  static {
    this.ɵfac = function LpxTranslateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxTranslateModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxTranslateModule,
      imports: [CommonModule, TranslatePipe],
      exports: [TranslatePipe]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxTranslateModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TranslatePipe],
      exports: [TranslatePipe]
    }]
  }], null, null);
})();
var exportedDeclarations = [NavbarComponent, SubNavbarComponent, NavbarRoutesComponent, NavbarRoutesDirective];
var LpxNavbarModule = class _LpxNavbarModule {
  /**
   * @deprecated `LpxNavbarModule.forRoot()` is deprecated. You can use `provideLpxCore` **function** instead.
   */
  static forRoot(options = {}) {
    return {
      ngModule: _LpxNavbarModule,
      providers: [provideLpxCore(SKIP_DEFAULTS, withNavbar(options))]
    };
  }
  /**
   * @deprecated `LpxNavbarModule.forChild()` is deprecated. You can use `provideLpxCore` **function** instead.
   */
  static forChild(options = {}) {
    return {
      ngModule: _LpxNavbarModule,
      providers: [provideLpxCore(SKIP_DEFAULTS, withNavbarChild(options))]
    };
  }
  static {
    this.ɵfac = function LpxNavbarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxNavbarModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxNavbarModule,
      imports: [CommonModule, FormsModule, RouterModule, LpxBrandLogoModule, LpxIconModule, ToObservableModule, LpxTranslateModule, LpxVisibleDirective, NavbarComponent, SubNavbarComponent, NavbarRoutesComponent, NavbarRoutesDirective],
      exports: [NavbarComponent, SubNavbarComponent, NavbarRoutesComponent, NavbarRoutesDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, RouterModule, LpxBrandLogoModule, LpxIconModule, ToObservableModule, LpxTranslateModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxNavbarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, LpxBrandLogoModule, LpxIconModule, ToObservableModule, LpxTranslateModule, LpxVisibleDirective, ...exportedDeclarations],
      exports: [...exportedDeclarations]
    }]
  }], null, null);
})();
var DEFAULT_FOOTER_DATA = {
  brandName: "Lepton Theme",
  brandUrl: "https://leptontheme.com/",
  authorName: "Volosoft",
  authorUrl: "https://volosoft.com/",
  links: [{
    text: "About",
    link: ""
  }, {
    text: "Privacy",
    link: ""
  }, {
    text: "Contact",
    link: ""
  }]
};
var FooterLinksService = class _FooterLinksService {
  constructor() {
    this.store = new DataStore(DEFAULT_FOOTER_DATA);
    this.footerInfo$ = this.store.sliceState((state2) => state2);
  }
  setFooterInfo(links) {
    this.store.set(links);
  }
  static {
    this.ɵfac = function FooterLinksService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterLinksService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FooterLinksService,
      factory: _FooterLinksService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterLinksService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FooterComponent = class _FooterComponent {
  constructor() {
    this.service = inject(FooterLinksService);
    this.footerValues$ = this.service.footerInfo$;
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  }
  static {
    this.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FooterComponent,
      selectors: [["lpx-footer"]],
      decls: 2,
      vars: 3,
      consts: [[1, "lpx-footbar-container", "end-0"], [1, "lpx-footbar"], [1, "lpx-footbar-copyright"], ["target", "_blank", 3, "href"], [1, "lpx-footbar-solo-links"], [3, "href"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, FooterComponent_Conditional_0_Template, 8, 2, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.footerValues$)) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{
      selector: "lpx-footer",
      imports: [AsyncPipe],
      template: '@if (footerValues$ | async; as footerValues) {\r\n<div class="lpx-footbar-container end-0">\r\n  <div class="lpx-footbar">\r\n    <div class="lpx-footbar-copyright">\r\n      @if (footerValues.brandUrl) {\r\n      <span>{{ currentYear }}© </span>\r\n      <a [href]="[footerValues.brandUrl]" target="_blank"> {{ footerValues.brandName }} </a>\r\n      <span>by</span>\r\n      }\r\n      @if (footerValues.authorUrl) {\r\n        <a [href]="[footerValues.authorUrl]" target="_blank"> {{ footerValues.authorName }}</a>\r\n      }\r\n      </div>\r\n      <div class="lpx-footbar-solo-links">\r\n        @for (footerLink of footerValues.links; track $index) {\r\n          @if (footerLink) {\r\n            <a [href]="[footerLink.link]" >{{ footerLink.text }}</a>\r\n          }\r\n        }\r\n      </div>\r\n  </div>\r\n</div>\r\n}\r\n'
    }]
  }], null, null);
})();
var LpxFooterModule = class _LpxFooterModule {
  static forRoot() {
    return {
      ngModule: _LpxFooterModule,
      providers: []
    };
  }
  static {
    this.ɵfac = function LpxFooterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxFooterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxFooterModule,
      imports: [CommonModule, RouterModule, FooterComponent],
      exports: [FooterComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxFooterModule, [{
    type: NgModule,
    args: [{
      exports: [FooterComponent],
      imports: [CommonModule, RouterModule, FooterComponent]
    }]
  }], null, null);
})();
var LpxCoreFeatureKind;
(function(LpxCoreFeatureKind2) {
  LpxCoreFeatureKind2[LpxCoreFeatureKind2["Options"] = 0] = "Options";
  LpxCoreFeatureKind2[LpxCoreFeatureKind2["Icon"] = 1] = "Icon";
  LpxCoreFeatureKind2[LpxCoreFeatureKind2["Language"] = 2] = "Language";
  LpxCoreFeatureKind2[LpxCoreFeatureKind2["Navbar"] = 3] = "Navbar";
  LpxCoreFeatureKind2[LpxCoreFeatureKind2["NavbarChild"] = 4] = "NavbarChild";
  LpxCoreFeatureKind2[LpxCoreFeatureKind2["SkipDefaults"] = 5] = "SkipDefaults";
})(LpxCoreFeatureKind || (LpxCoreFeatureKind = {}));
function makeLpxCoreFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
var SKIP_DEFAULTS = makeLpxCoreFeature(LpxCoreFeatureKind.SkipDefaults, []);
function withIcon(iconSettings = {}) {
  return makeLpxCoreFeature(LpxCoreFeatureKind.Icon, [{
    provide: LEPTON_X_ICON_SET,
    useValue: iconSettings.iconSet || ICON_MAP
  }]);
}
function withLanguage(languageOptions = {}) {
  return makeLpxCoreFeature(LpxCoreFeatureKind.Language, [{
    provide: LPX_LANGUAGE,
    useValue: languageOptions.languages || []
  }, {
    provide: LPX_TRANSLATE_TOKEN,
    useValue: [LanguageTranslateDefaults],
    multi: true
  }, LanguageService]);
}
function withNavbar(navbarOptions = {}) {
  const {
    menuItems,
    contentBeforeRoutes,
    contentAfterRoutes
  } = navbarOptions;
  return makeLpxCoreFeature(LpxCoreFeatureKind.Navbar, [{
    provide: LPX_MENU_ITEMS,
    useValue: menuItems || []
  }, {
    provide: CONTENT_AFTER_ROUTES,
    useValue: contentAfterRoutes || [],
    multi: true
  }, {
    provide: CONTENT_BEFORE_ROUTES,
    useValue: contentBeforeRoutes || [],
    multi: true
  }]);
}
function withNavbarChild(navbarChildOptions = {}) {
  return makeLpxCoreFeature(LpxCoreFeatureKind.NavbarChild, [{
    provide: CONTENT_AFTER_ROUTES,
    useValue: navbarChildOptions.contentAfterRoutes || [],
    multi: true
  }, {
    provide: CONTENT_BEFORE_ROUTES,
    useValue: navbarChildOptions.contentBeforeRoutes || [],
    multi: true
  }]);
}
function withLpxCoreOptions(options = {}) {
  const {
    responsiveSettings,
    window: window2,
    iconSettings,
    languageSettings,
    navbarSettings,
    listenDirectionChanges
  } = options;
  const iconOptions = withIcon(iconSettings);
  const languageOptions = withLanguage(languageSettings);
  const navbarOptions = withNavbar(navbarSettings);
  return [iconOptions, languageOptions, navbarOptions, makeLpxCoreFeature(LpxCoreFeatureKind.Options, [createDirectionProvider(listenDirectionChanges || true), createResponsiveProvider(responsiveSettings), createWindowProvider(window2)])];
}
function provideLpxBreadcrumb() {
  return provideAppInitializer(() => {
    const breadcrumb = inject(BreadcrumbRouteListenerService);
    breadcrumb.subscribeRoute();
  });
}
function provideLpxCore(...features) {
  const providers = [];
  const skipDefaults = features.some((feature) => feature.ɵkind === LpxCoreFeatureKind.SkipDefaults);
  if (!skipDefaults) {
    providers.push(provideLpxBreadcrumb(), ...LPX_STYLE_PROVIDERS, ...LPX_TRANSLATE_PROVIDERS);
  }
  features.forEach(({
    ɵproviders
  }) => providers.push(...ɵproviders));
  return makeEnvironmentProviders(providers);
}
var LpxCoreModule = class _LpxCoreModule {
  /**
   * @deprecated `LpxCoreModule.forRoot()` is deprecated. You can use `provideLpxCore` **function** instead.
   */
  static forRoot(options) {
    return {
      ngModule: _LpxCoreModule,
      providers: [provideLpxCore(...withLpxCoreOptions(options))]
    };
  }
  static {
    this.ɵfac = function LpxCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxCoreModule,
      imports: [CommonModule, LpxVisibleDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxCoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LpxVisibleDirective]
    }]
  }], null, null);
})();
var LPX_SSR_FLAG = makeStateKey("SSR_FLAG");
var LPX_APP_STARTED_WITH_SSR = new InjectionToken("LPX_APP_STARTED_WITH_SSR", {
  providedIn: "root",
  factory: () => {
    const platformId = inject(PLATFORM_ID);
    const cookieService = inject(LpxCookieStorageService);
    if (!isPlatformBrowser(platformId)) return true;
    const ts = inject(TransferState);
    const ssrEnabled = cookieService.getItem("ssr-init");
    cookieService.removeItem("ssr-init");
    return ts.get(LPX_SSR_FLAG, false) || ssrEnabled === "true";
  }
});
var BreadcrumbPanelDirective = class _BreadcrumbPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function BreadcrumbPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BreadcrumbPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _BreadcrumbPanelDirective,
      selectors: [["ng-template", "lpx-breadcrumb-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-breadcrumb-panel]"
    }]
  }], null, null);
})();
var ContentPanelDirective = class _ContentPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function ContentPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContentPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ContentPanelDirective,
      selectors: [["ng-template", "lpx-content", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-content]"
    }]
  }], null, null);
})();
var CurrentUserImagePanelDirective = class _CurrentUserImagePanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function CurrentUserImagePanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentUserImagePanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CurrentUserImagePanelDirective,
      selectors: [["ng-template", "lpx-current-user-image-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentUserImagePanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-current-user-image-panel]"
    }]
  }], null, null);
})();
var CurrentUserPanelDirective = class _CurrentUserPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function CurrentUserPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentUserPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CurrentUserPanelDirective,
      selectors: [["ng-template", "lpx-current-user-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentUserPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-current-user-panel]"
    }]
  }], null, null);
})();
var FooterPanelDirective = class _FooterPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function FooterPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FooterPanelDirective,
      selectors: [["ng-template", "lpx-footer-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-footer-panel]"
    }]
  }], null, null);
})();
var LanguagePanelDirective = class _LanguagePanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function LanguagePanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguagePanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _LanguagePanelDirective,
      selectors: [["ng-template", "lpx-language-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguagePanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-language-panel]"
    }]
  }], null, null);
})();
var MobileNavbarPanelDirective = class _MobileNavbarPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function MobileNavbarPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MobileNavbarPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MobileNavbarPanelDirective,
      selectors: [["ng-template", "lpx-mobile-navbar-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileNavbarPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-mobile-navbar-panel]"
    }]
  }], null, null);
})();
var MobileNavbarSettingsPanelDirective = class _MobileNavbarSettingsPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function MobileNavbarSettingsPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MobileNavbarSettingsPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MobileNavbarSettingsPanelDirective,
      selectors: [["ng-template", "lpx-mobile-navbar-settings-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileNavbarSettingsPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-mobile-navbar-settings-panel]"
    }]
  }], null, null);
})();
var MobileNavbarProfilePanelDirective = class _MobileNavbarProfilePanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function MobileNavbarProfilePanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MobileNavbarProfilePanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MobileNavbarProfilePanelDirective,
      selectors: [["ng-template", "lpx-mobile-navbar-profile-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileNavbarProfilePanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-mobile-navbar-profile-panel]"
    }]
  }], null, null);
})();
var NavbarPanelDirective = class _NavbarPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NavbarPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NavbarPanelDirective,
      selectors: [["ng-template", "lpx-navbar-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-navbar-panel]"
    }]
  }], null, null);
})();
var NavitemPanelDirective = class _NavitemPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NavitemPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavitemPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NavitemPanelDirective,
      selectors: [["ng-template", "lpx-navitem-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavitemPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-navitem-panel]"
    }]
  }], null, null);
})();
var ToolbarPanelDirective = class _ToolbarPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function ToolbarPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToolbarPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ToolbarPanelDirective,
      selectors: [["ng-template", "lpx-toolbar-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-toolbar-panel]"
    }]
  }], null, null);
})();
var TopNavbarPanelDirective = class _TopNavbarPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function TopNavbarPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TopNavbarPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TopNavbarPanelDirective,
      selectors: [["ng-template", "lpx-top-navbar-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopNavbarPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-top-navbar-panel]"
    }]
  }], null, null);
})();
var SettingsPanelDirective = class _SettingsPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function SettingsPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _SettingsPanelDirective,
      selectors: [["ng-template", "lpx-settings-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-settings-panel]"
    }]
  }], null, null);
})();
var declarationsAndExports = [BreadcrumbPanelDirective, ContentPanelDirective, CurrentUserImagePanelDirective, CurrentUserPanelDirective, FooterPanelDirective, LanguagePanelDirective, LogoPanelDirective, MobileNavbarPanelDirective, MobileNavbarSettingsPanelDirective, MobileNavbarProfilePanelDirective, NavbarPanelDirective, NavitemPanelDirective, SettingsPanelDirective, TopNavbarPanelDirective, ToolbarPanelDirective];
var PanelsModule = class _PanelsModule {
  static {
    this.ɵfac = function PanelsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PanelsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PanelsModule,
      imports: [CommonModule, BreadcrumbPanelDirective, ContentPanelDirective, CurrentUserImagePanelDirective, CurrentUserPanelDirective, FooterPanelDirective, LanguagePanelDirective, LogoPanelDirective, MobileNavbarPanelDirective, MobileNavbarSettingsPanelDirective, MobileNavbarProfilePanelDirective, NavbarPanelDirective, NavitemPanelDirective, SettingsPanelDirective, TopNavbarPanelDirective, ToolbarPanelDirective],
      exports: [BreadcrumbPanelDirective, ContentPanelDirective, CurrentUserImagePanelDirective, CurrentUserPanelDirective, FooterPanelDirective, LanguagePanelDirective, LogoPanelDirective, MobileNavbarPanelDirective, MobileNavbarSettingsPanelDirective, MobileNavbarProfilePanelDirective, NavbarPanelDirective, NavitemPanelDirective, SettingsPanelDirective, TopNavbarPanelDirective, ToolbarPanelDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ...declarationsAndExports],
      exports: [...declarationsAndExports]
    }]
  }], null, null);
})();
var ToolbarService = class _ToolbarService {
  constructor() {
    this.store = new DataStore({
      items: []
    });
    this.items$ = this.store.sliceState(({
      items
    }) => items);
  }
  setItems(items) {
    this.store.patch({
      items: items.sort(sortItems)
    });
  }
  addItem(item) {
    this.setItems([...this.store.state.items, item]);
  }
  patchItem(itemId, item) {
    const {
      items
    } = this.store.state;
    const index = items.findIndex(({
      id
    }) => id === itemId);
    if (index === -1) {
      return;
    }
    const updateItems = [...items];
    updateItems[index] = __spreadValues({
      id: itemId
    }, item);
    this.setItems(updateItems);
  }
  removeItem(id) {
    const {
      items
    } = this.store.state;
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) {
      return;
    }
    const updateItems = [...items.slice(0, index), ...items.slice(index + 1)];
    this.store.patch({
      items: updateItems
    });
  }
  static {
    this.ɵfac = function ToolbarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToolbarService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ToolbarService,
      factory: _ToolbarService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@volo/ngx-lepton-x.lite/fesm2022/volo-ngx-lepton-x.lite.mjs
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ctx + "\\", " ");
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_For_1_Conditional_0_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_For_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_For_1_Conditional_0_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const action_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngComponentOutlet", action_r1.component)("ngComponentOutletInjector", ctx_r1.injector);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_For_1_Conditional_0_Conditional_0_Template, 1, 2, "ng-container");
  }
  if (rf & 2) {
    const action_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵconditional(ctx_r1.isActionVisible(action_r1) ? 0 : -1);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_For_1_Conditional_1_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 9);
    ɵɵlistener("click", function UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_For_1_Conditional_1_a_0_Template_a_click_0_listener() {
      ɵɵrestoreView(_r3);
      const action_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.onActionClick(action_r1));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("routerLink", action_r1.link);
    ɵɵadvance();
    ɵɵtextInterpolate1("", ɵɵpipeBind1(2, 2, action_r1.text || ""), " ");
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_For_1_Conditional_1_a_0_Template, 3, 4, "a", 8);
  }
  if (rf & 2) {
    const action_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("lpxVisible", ctx_r1.isActionVisible(action_r1));
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_For_1_Conditional_0_Template, 1, 1)(1, UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_For_1_Conditional_1_Template, 1, 1, "a", 6);
  }
  if (rf & 2) {
    const action_r1 = ctx.$implicit;
    ɵɵconditional(action_r1.component ? 0 : !action_r1.component ? 1 : -1);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_For_1_Template, 2, 1, null, null, ɵɵrepeaterTrackByIndex);
    ɵɵconditionalCreate(2, UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_Conditional_2_Template, 1, 0, "div", 5);
  }
  if (rf & 2) {
    const actionGroup_r4 = ctx.$implicit;
    const ɵ$index_18_r5 = ctx.$index;
    const ɵ$count_18_r6 = ctx.$count;
    ɵɵrepeater(actionGroup_r4);
    ɵɵadvance(2);
    ɵɵconditional(!(ɵ$index_18_r5 === ɵ$count_18_r6 - 1) ? 2 : -1);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵrepeaterCreate(1, UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_For_2_Template, 3, 1, null, null, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const userProfile_r7 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(userProfile_r7.userActionGroups);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0)(1, "div", 1);
    ɵɵelement(2, "lpx-avatar", 2);
    ɵɵelementStart(3, "span", 3);
    ɵɵconditionalCreate(4, UserProfileComponent_Conditional_0_Conditional_0_Conditional_4_Template, 1, 1);
    ɵɵtext(5);
    ɵɵelementEnd()();
    ɵɵconditionalCreate(6, UserProfileComponent_Conditional_0_Conditional_0_Conditional_6_Template, 3, 0, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const userProfile_r7 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("avatar", userProfile_r7.avatar);
    ɵɵadvance(2);
    ɵɵconditional((tmp_4_0 = userProfile_r7.tenant?.name) ? 4 : -1, tmp_4_0);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", userProfile_r7.fullName, " ");
    ɵɵadvance();
    ɵɵconditional(userProfile_r7.userActionGroups ? 6 : -1);
  }
}
function UserProfileComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, UserProfileComponent_Conditional_0_Conditional_0_Template, 7, 4, "div", 0);
  }
  if (rf & 2) {
    ɵɵconditional(ctx.userName ? 0 : -1);
  }
}
function LanguageSelectionComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const val_r1 = ctx;
    ɵɵclassProp("text-uppercase", !!val_r1.twoLetterISOLanguageName);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", val_r1.twoLetterISOLanguageName || val_r1.displayName, " ");
  }
}
function LanguageSelectionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelement(1, "lpx-icon", 3);
    ɵɵconditionalCreate(2, LanguageSelectionComponent_Conditional_1_Conditional_2_Template, 2, 3, "span", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    ɵɵadvance(2);
    ɵɵconditional((tmp_2_0 = ctx) ? 2 : -1, tmp_2_0);
  }
}
function LanguageSelectionComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function LanguageSelectionComponent_Conditional_3_For_2_Template_button_click_0_listener() {
      const lang_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onLanguageSelection(lang_r3));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", lang_r3.displayName, " ");
  }
}
function LanguageSelectionComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵrepeaterCreate(1, LanguageSelectionComponent_Conditional_3_For_2_Template, 2, 1, "button", 5, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵrepeater(ctx);
  }
}
var LPX_LITE_STYLE_TOKEN = new InjectionToken("LPX_LITE_STYLE_TOKEN");
var getLpxLiteStyleProviders = (styleFactory) => [provideAppInitializer(() => {
  inject(LPX_LITE_STYLE_TOKEN);
}), {
  provide: LPX_LITE_STYLE_TOKEN,
  deps: [LPX_INITIAL_STYLES, LPX_LAYOUT_STYLE_FINAL],
  useFactory: mergeStyles
}, {
  provide: LPX_STYLE_FINAL,
  deps: [LPX_LITE_STYLE_TOKEN],
  useFactory: createStyleFactory(styleFactory)
}];
function mergeStyles(styleList, layoutStyles) {
  styleList.push({
    bundleName: "bootstrap-dim"
  });
  styleList.push({
    bundleName: "ng-bundle"
  });
  styleList.push({
    bundleName: "font-bundle"
  });
  return [...styleList, ...layoutStyles];
}
var LpxLiteFeatureKind;
(function(LpxLiteFeatureKind2) {
  LpxLiteFeatureKind2[LpxLiteFeatureKind2["Options"] = 0] = "Options";
})(LpxLiteFeatureKind || (LpxLiteFeatureKind = {}));
function makeLpxLiteFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
function withLiteOptions(options = {}) {
  return makeLpxLiteFeature(LpxLiteFeatureKind.Options, [getLpxLiteStyleProviders(options.styleFactory), provideLpxCore(...withLpxCoreOptions(options))]);
}
function provideLpxLite(...features) {
  const providers = [];
  if (!features.length) {
    const defaultStyleFactory = (styles) => {
      styles.push({
        bundleName: "abp-bundle"
      });
      return styles;
    };
    providers.push(getLpxLiteStyleProviders(defaultStyleFactory), provideLpxCore(...withLpxCoreOptions()));
  }
  features.forEach(({
    ɵproviders
  }) => providers.push(...ɵproviders));
  return makeEnvironmentProviders(providers);
}
var LpxModule = class _LpxModule {
  /**
   * @deprecated `LpxModule.forRoot()` is deprecated. You can use `provideLpxLite` **function** instead.
   */
  static forRoot(options) {
    return {
      ngModule: _LpxModule,
      providers: [provideLpxLite(withLiteOptions(options))]
    };
  }
  static {
    this.ɵfac = function LpxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxModule,
      imports: [LpxCoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [LpxCoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxModule, [{
    type: NgModule,
    args: [{
      imports: [LpxCoreModule]
    }]
  }], null, null);
})();
var UserProfileComponent = class _UserProfileComponent {
  constructor() {
    this.service = inject(UserProfileService);
    this.injector = inject(Injector);
    this.user$ = this.service.user$;
  }
  onActionClick(item) {
    item.action?.();
  }
  isActionVisible(action) {
    if (!action.visible) {
      return true;
    }
    return action.visible(action, this.injector);
  }
  static {
    this.ɵfac = function UserProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfileComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserProfileComponent,
      selectors: [["lpx-user-profile"]],
      decls: 2,
      vars: 3,
      consts: [["ngbDropdown", ""], ["ngbDropdownToggle", "", "role", "button", 1, "lpx-user-profile"], [3, "avatar"], [1, "user-full-name"], ["ngbDropdownMenu", ""], [1, "dropdown-divider"], ["ngbDropdownItem", "", "role", "button", 3, "routerLink"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], ["ngbDropdownItem", "", "role", "button", 3, "routerLink", "click", 4, "lpxVisible"], ["ngbDropdownItem", "", "role", "button", 3, "click", "routerLink"]],
      template: function UserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, UserProfileComponent_Conditional_0_Template, 1, 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.user$)) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [NgbDropdown, NgbDropdownToggle, AvatarComponent, NgbDropdownMenu, NgComponentOutlet, NgbDropdownItem, LpxVisibleDirective, RouterLink, AsyncPipe, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileComponent, [{
    type: Component,
    args: [{
      selector: "lpx-user-profile",
      encapsulation: ViewEncapsulation.None,
      imports: [NgbDropdown, NgbDropdownToggle, AvatarComponent, NgbDropdownMenu, NgComponentOutlet, NgbDropdownItem, LpxVisibleDirective, RouterLink, AsyncPipe, LocalizationPipe],
      template: `@if (user$ | async; as userProfile) {\r
  @if (userProfile.userName) {\r
    <div ngbDropdown>\r
      <div class="lpx-user-profile" ngbDropdownToggle role="button">\r
        <lpx-avatar [avatar]="userProfile.avatar" />\r
        <span class="user-full-name">\r
          @if (userProfile.tenant?.name; as tenantName) {\r
            {{ tenantName + '\\\\' }}\r
          }\r
          {{ userProfile.fullName }}\r
        </span>\r
      </div>\r
      @if (userProfile.userActionGroups) {\r
        <div ngbDropdownMenu>\r
          @for (\r
            actionGroup of userProfile.userActionGroups;\r
            track $index;\r
            let last = $last\r
          ) {\r
            @for (action of actionGroup; track $index) {\r
              @if (action.component) {\r
                @if (isActionVisible(action)) {\r
                  <ng-container\r
                    *ngComponentOutlet="action.component; injector: injector"\r
                  />\r
                }\r
              } @else if (!action.component) {\r
                <a\r
                  *lpxVisible="isActionVisible(action)"\r
                  ngbDropdownItem\r
                  (click)="onActionClick(action)"\r
                  [routerLink]="action.link"\r
                  role="button"\r
                  >{{ action.text || '' | abpLocalization }}\r
                </a>\r
              }\r
            }\r
            @if (!last) {\r
              <div class="dropdown-divider"></div>\r
            }\r
          }\r
        </div>\r
      }\r
    </div>\r
  }\r
}\r
`
    }]
  }], null, null);
})();
var UserProfileModule = class _UserProfileModule {
  static {
    this.ɵfac = function UserProfileModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfileModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserProfileModule,
      imports: [CommonModule, LpxAvatarModule, NgbDropdownModule, RouterModule, LpxTranslateModule, UserProfileComponent],
      exports: [UserProfileComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, LpxAvatarModule, NgbDropdownModule, RouterModule, LpxTranslateModule, UserProfileComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LpxAvatarModule, NgbDropdownModule, RouterModule, LpxTranslateModule, UserProfileComponent],
      exports: [UserProfileComponent]
    }]
  }], null, null);
})();
var LanguageSelectionComponent = class _LanguageSelectionComponent {
  constructor() {
    this.service = inject(LanguageService);
    this.langs$ = this.service.languages$;
    this.selectedLanguage$ = this.service.selectedLanguage$;
  }
  onLanguageSelection(lang) {
    this.service.setSelectedLanguage(lang);
  }
  static {
    this.ɵfac = function LanguageSelectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguageSelectionComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LanguageSelectionComponent,
      selectors: [["lpx-language-selection"]],
      decls: 5,
      vars: 6,
      consts: [["ngbDropdown", "", 1, "lpx-language-selection"], ["ngbDropdownToggle", "", "role", "button"], ["ngbDropdownMenu", "", 2, "max-height", "50vh", "overflow-y", "auto"], ["iconClass", "bi bi-globe"], [3, "text-uppercase"], ["ngbDropdownItem", ""], ["ngbDropdownItem", "", 3, "click"]],
      template: function LanguageSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵconditionalCreate(1, LanguageSelectionComponent_Conditional_1_Template, 3, 1, "div", 1);
          ɵɵpipe(2, "async");
          ɵɵconditionalCreate(3, LanguageSelectionComponent_Conditional_3_Template, 3, 0, "div", 2);
          ɵɵpipe(4, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_0_0;
          let tmp_1_0;
          ɵɵadvance();
          ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(2, 2, ctx.selectedLanguage$)) ? 1 : -1, tmp_0_0);
          ɵɵadvance(2);
          ɵɵconditional((tmp_1_0 = ɵɵpipeBind1(4, 4, ctx.langs$)) ? 3 : -1, tmp_1_0);
        }
      },
      dependencies: [NgbDropdownModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem, IconComponent, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSelectionComponent, [{
    type: Component,
    args: [{
      selector: "lpx-language-selection",
      imports: [NgbDropdownModule, IconComponent, AsyncPipe],
      encapsulation: ViewEncapsulation.None,
      template: '<div ngbDropdown class="lpx-language-selection">\r\n  @if (selectedLanguage$ | async; as selectedLanguage) {\r\n    <div ngbDropdownToggle role="button">\r\n      <lpx-icon iconClass="bi bi-globe"></lpx-icon>\r\n      @if (selectedLanguage; as val) {\r\n        <span [class.text-uppercase]="!!val.twoLetterISOLanguageName">\r\n          {{ val.twoLetterISOLanguageName || val.displayName }}\r\n        </span>\r\n      }\r\n    </div>\r\n  }\r\n  @if (langs$ | async; as langs) {\r\n    <div ngbDropdownMenu style="max-height: 50vh; overflow-y: auto">\r\n      @for (lang of langs; track $index) {\r\n        <button ngbDropdownItem (click)="onLanguageSelection(lang)">\r\n          {{ lang.displayName }}\r\n        </button>\r\n      }\r\n    </div>\r\n  }\r\n</div>\r\n'
    }]
  }], null, null);
})();
var LanguageSelectionModule = class _LanguageSelectionModule {
  static {
    this.ɵfac = function LanguageSelectionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguageSelectionModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LanguageSelectionModule,
      imports: [LanguageSelectionComponent],
      exports: [LanguageSelectionComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [LanguageSelectionComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSelectionModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [LanguageSelectionComponent],
      exports: [LanguageSelectionComponent]
    }]
  }], null, null);
})();

// node_modules/@volo/abp.ng.lepton-x.core/fesm2022/volo-abp.ng.lepton-x.core.mjs
function PageAlertContainerComponent_ng_container_0_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "h4", 3);
    ɵɵpipe(1, "lpxSafeHtml");
    ɵɵpipe(2, "abpLocalization");
  }
  if (rf & 2) {
    const alert_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerHTML", ɵɵpipeBind2(2, 3, ɵɵpipeBind1(1, 1, alert_r1.title), alert_r1.titleLocalizationParams), ɵɵsanitizeHtml);
  }
}
function PageAlertContainerComponent_ng_container_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function PageAlertContainerComponent_ng_container_0_For_2_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ɵ$index_5_r3 = ɵɵnextContext().$index;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.service.remove(ɵ$index_5_r3));
    });
    ɵɵelementEnd();
  }
}
function PageAlertContainerComponent_ng_container_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵconditionalCreate(1, PageAlertContainerComponent_ng_container_0_For_2_Conditional_1_Template, 3, 6, "h4", 3);
    ɵɵelement(2, "span", 4);
    ɵɵpipe(3, "lpxSafeHtml");
    ɵɵpipe(4, "abpLocalization");
    ɵɵconditionalCreate(5, PageAlertContainerComponent_ng_container_0_For_2_Conditional_5_Template, 1, 0, "button", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    ɵɵclassMap(ɵɵinterpolate1("alert alert-", alert_r1.type, " fade show"));
    ɵɵclassProp("alert-dismissible", alert_r1.dismissible);
    ɵɵadvance();
    ɵɵconditional(alert_r1.title ? 1 : -1);
    ɵɵadvance();
    ɵɵproperty("innerHTML", ɵɵpipeBind2(4, 10, ɵɵpipeBind1(3, 8, alert_r1.message), alert_r1.messageLocalizationParams), ɵɵsanitizeHtml);
    ɵɵadvance(3);
    ɵɵconditional(alert_r1.dismissible ? 5 : -1);
  }
}
function PageAlertContainerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵrepeaterCreate(1, PageAlertContainerComponent_ng_container_0_For_2_Template, 6, 13, "div", 1, ɵɵrepeaterTrackByIndex);
    ɵɵpipe(3, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 0, ctx_r3.service.alerts$));
  }
}
var IfReplaceableTemplateExistsDirective = class _IfReplaceableTemplateExistsDirective {
  constructor() {
    this.view = inject(ViewContainerRef);
    this.template = inject(TemplateRef);
    this.replaceableComponentsService = inject(ReplaceableComponentsService);
    this.abpIfReplaceableTemplateExists = input("", ...ngDevMode ? [{
      debugName: "abpIfReplaceableTemplateExists"
    }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngAfterViewInit() {
    const replaceableComponentInstance = this.replaceableComponentsService.get(this.abpIfReplaceableTemplateExists());
    const isReplaceableComponentInstanceNotExits = !replaceableComponentInstance;
    if (isReplaceableComponentInstanceNotExits) {
      return;
    }
    this.view.createEmbeddedView(this.template);
  }
  static {
    this.ɵfac = function IfReplaceableTemplateExistsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IfReplaceableTemplateExistsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _IfReplaceableTemplateExistsDirective,
      selectors: [["", "abpIfReplaceableTemplateExists", ""]],
      inputs: {
        abpIfReplaceableTemplateExists: [1, "abpIfReplaceableTemplateExists"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IfReplaceableTemplateExistsDirective, [{
    type: Directive,
    args: [{
      selector: "[abpIfReplaceableTemplateExists]"
    }]
  }], null, {
    abpIfReplaceableTemplateExists: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpIfReplaceableTemplateExists",
        required: false
      }]
    }]
  });
})();
var PageAlertContainerComponent = class _PageAlertContainerComponent {
  constructor() {
    this.service = inject(PageAlertService);
    this.replaceableTemplateKey = {
      componentKey: "Theme.PageAlertContainerComponent"
    };
  }
  static {
    this.ɵfac = function PageAlertContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageAlertContainerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PageAlertContainerComponent,
      selectors: [["abp-page-alert-container"]],
      decls: 1,
      vars: 1,
      consts: [[4, "abpReplaceableTemplate"], ["role", "alert", 3, "class", "alert-dismissible"], ["role", "alert"], [1, "alert-heading", 3, "innerHTML"], [3, "innerHTML"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "btn-close", 3, "click"]],
      template: function PageAlertContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, PageAlertContainerComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("abpReplaceableTemplate", ctx.replaceableTemplateKey);
        }
      },
      dependencies: [ReplaceableTemplateDirective, LocalizationPipe, AsyncPipe, SafeHtmlPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageAlertContainerComponent, [{
    type: Component,
    args: [{
      selector: "abp-page-alert-container",
      imports: [LocalizationPipe, ReplaceableTemplateDirective, AsyncPipe, SafeHtmlPipe],
      template: '<ng-container *abpReplaceableTemplate="replaceableTemplateKey">\r\n  @for (alert of service.alerts$ | async; track $index; let i = $index) {\r\n    <div\r\n      class="alert alert-{{ alert.type }} fade show"\r\n      [class.alert-dismissible]="alert.dismissible"\r\n      role="alert"\r\n    >\r\n      @if (alert.title) {\r\n        <h4\r\n          class="alert-heading"\r\n          [innerHTML]="\r\n            alert.title\r\n              | lpxSafeHtml\r\n              | abpLocalization: alert.titleLocalizationParams\r\n          "\r\n        ></h4>\r\n      }\r\n      <span\r\n        [innerHTML]="\r\n          alert.message\r\n            | lpxSafeHtml\r\n            | abpLocalization: alert.messageLocalizationParams\r\n        "\r\n      ></span>\r\n      @if (alert.dismissible) {\r\n        <button\r\n          type="button"\r\n          class="btn-close"\r\n          data-dismiss="alert"\r\n          aria-label="Close"\r\n          (click)="service.remove(i)"\r\n        ></button>\r\n      }\r\n    </div>\r\n  }\r\n</ng-container>\r\n'
    }]
  }], null, null);
})();
var PageAlertContainerModule = class _PageAlertContainerModule {
  static {
    this.ɵfac = function PageAlertContainerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageAlertContainerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PageAlertContainerModule,
      imports: [CoreModule, ThemeSharedModule, SafeHtmlPipe, PageAlertContainerComponent],
      exports: [PageAlertContainerComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CoreModule, ThemeSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageAlertContainerModule, [{
    type: NgModule,
    args: [{
      imports: [CoreModule, ThemeSharedModule, SafeHtmlPipe, PageAlertContainerComponent],
      exports: [PageAlertContainerComponent]
    }]
  }], null, null);
})();
var DocumentDirService = class _DocumentDirService {
  constructor() {
    this.documentDirHandler = inject(DocumentDirHandlerService);
    this.document = inject(DOCUMENT);
  }
  listenDir() {
    this.documentDirHandler.dir$.subscribe((dir) => {
      this.document.documentElement.dir = dir;
    });
  }
  static {
    this.ɵfac = function DocumentDirService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentDirService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DocumentDirService,
      factory: _DocumentDirService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentDirService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DOCUMENT_DIR_PROVIDER = provideAppInitializer(() => {
  listenDirectionChangeFromAbp();
});
function listenDirectionChangeFromAbp() {
  const documentDirService = inject(DocumentDirService);
  documentDirService.listenDir();
}
var MOBILE_NAVBAR_ITEMS_FILTER_TOKEN = new InjectionToken("MOBILE_NAVBAR_ITEMS_FILTER_TOKEN");
var MOBILE_NAVBAR_ITEMS_FILTER_PROVIDER = {
  provide: MOBILE_NAVBAR_ITEMS_FILTER_TOKEN,
  deps: [],
  useFactory: mobileMenuItemFilterFnFactory
};
function mobileMenuItemFilterFnFactory() {
  return (route, index) => {
    return index === 0 || index === 1;
  };
}
var LeptonXPageRenderService = class _LeptonXPageRenderService {
  shouldRender(type) {
    return type !== PageParts.breadcrumb;
  }
  static {
    this.ɵfac = function LeptonXPageRenderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LeptonXPageRenderService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LeptonXPageRenderService,
      factory: _LeptonXPageRenderService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeptonXPageRenderService, [{
    type: Injectable
  }], null, null);
})();
var PAGE_RENDER_PROVIDER = {
  provide: PAGE_RENDER_STRATEGY,
  useClass: LeptonXPageRenderService
};
function provideLeptonXAbpCore() {
  return makeEnvironmentProviders([DOCUMENT_DIR_PROVIDER, MOBILE_NAVBAR_ITEMS_FILTER_PROVIDER, PAGE_RENDER_PROVIDER]);
}
var LeptonXAbpCoreModule = class _LeptonXAbpCoreModule {
  /**
   * @deprecated `LeptonXAbpCoreModule.forRoot()` is deprecated. You can use `provideLeptonXAbpCore` **function** instead.
   */
  static forRoot() {
    return {
      ngModule: _LeptonXAbpCoreModule,
      providers: [provideLeptonXAbpCore()]
    };
  }
  static {
    this.ɵfac = function LeptonXAbpCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LeptonXAbpCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LeptonXAbpCoreModule,
      imports: [CommonModule, PageAlertContainerModule, IfReplaceableTemplateExistsDirective],
      exports: [IfReplaceableTemplateExistsDirective, PageAlertContainerModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, PageAlertContainerModule, PageAlertContainerModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeptonXAbpCoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PageAlertContainerModule, IfReplaceableTemplateExistsDirective],
      exports: [IfReplaceableTemplateExistsDirective, PageAlertContainerModule]
    }]
  }], null, null);
})();
var AbpNavbarService = class _AbpNavbarService {
  constructor() {
    this.routes = inject(RoutesService);
    this.navbarService = inject(NavbarService);
    this.localizationService = inject(LocalizationService);
    this.mobileMenuItemFilterFn = inject(MOBILE_NAVBAR_ITEMS_FILTER_TOKEN);
    this.mapRouteToNavItem = (route, index) => {
      const navbarItem = {
        text: this.localizationService.instant(route.name),
        link: route.children && route.children.length ? void 0 : route.path,
        icon: route.iconClass,
        children: this.getRouteChildrenAsNavItems(route.children || []),
        showOnMobileNavbar: this.mobileMenuItemFilterFn(route, index),
        group: route.group
      };
      if (route.breadcrumbText) {
        navbarItem.breadcrumbText = this.localizationService.instant(route.breadcrumbText);
      }
      return navbarItem;
    };
  }
  initRoutes() {
    this.routes.visible$.pipe(map((routes) => routes.filter((route) => route.path || route.children.length))).subscribe((routes) => {
      this.navbarService.setNavbarItems(...routes.map(this.mapRouteToNavItem));
    });
  }
  getRouteChildrenAsNavItems(children) {
    return children.map(this.mapRouteToNavItem);
  }
  static {
    this.ɵfac = function AbpNavbarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbpNavbarService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AbpNavbarService,
      factory: _AbpNavbarService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpNavbarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var AbpToolbarService = class _AbpToolbarService {
  constructor() {
    this.toolbar = inject(ToolbarService);
    this.navItems = inject(NavItemsService);
    this.permissionService = inject(PermissionService);
  }
  listenNavItems() {
    this.navItems.items$.pipe(switchMap((items) => this.permissionService.filterItemsByPolicy$(items))).subscribe((items) => this.toolbar.setItems(items));
  }
  static {
    this.ɵfac = function AbpToolbarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbpToolbarService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AbpToolbarService,
      factory: _AbpToolbarService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpToolbarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  LpxVisibleDirective,
  LanguageService,
  LPX_LAYOUT_STYLE_FINAL,
  createStyleFactory,
  ResponsiveDirective,
  LpxResponsiveModule,
  UserProfileService,
  LayoutService,
  LPX_TRANSLATE_SERVICE_TOKEN,
  IconComponent,
  LpxIconModule,
  LpxAvatarModule,
  BrandLogoComponent,
  LpxBrandLogoModule,
  BreadcrumbComponent,
  LpxBreadcrumbModule,
  NavbarService,
  LogoPanelDirective,
  NavbarRoutesComponent,
  NavbarRoutesDirective,
  NavbarComponent,
  LpxTranslateModule,
  LpxNavbarModule,
  FooterComponent,
  LpxFooterModule,
  BreadcrumbPanelDirective,
  ContentPanelDirective,
  CurrentUserImagePanelDirective,
  FooterPanelDirective,
  MobileNavbarPanelDirective,
  NavbarPanelDirective,
  NavitemPanelDirective,
  PanelsModule,
  ToolbarService,
  withLiteOptions,
  provideLpxLite,
  LpxModule,
  UserProfileComponent,
  UserProfileModule,
  LanguageSelectionComponent,
  LanguageSelectionModule,
  IfReplaceableTemplateExistsDirective,
  PageAlertContainerComponent,
  provideLeptonXAbpCore,
  LeptonXAbpCoreModule,
  AbpNavbarService,
  AbpToolbarService
};
//# sourceMappingURL=chunk-GFX665YR.js.map
