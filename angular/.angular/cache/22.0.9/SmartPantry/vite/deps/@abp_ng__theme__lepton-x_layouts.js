import {
  BrandLogoComponent,
  BreadcrumbComponent,
  BreadcrumbPanelDirective,
  ContentPanelDirective,
  CurrentUserImagePanelDirective,
  FooterComponent,
  FooterPanelDirective,
  IconComponent,
  IfReplaceableTemplateExistsDirective,
  LPX_LAYOUT_STYLE_FINAL,
  LanguageSelectionComponent,
  LanguageSelectionModule,
  LanguageService,
  LayoutService,
  LeptonXAbpCoreModule,
  LogoPanelDirective,
  LpxAvatarModule,
  LpxBrandLogoModule,
  LpxBreadcrumbModule,
  LpxFooterModule,
  LpxIconModule,
  LpxNavbarModule,
  LpxResponsiveModule,
  LpxTranslateModule,
  LpxVisibleDirective,
  MobileNavbarPanelDirective,
  NavbarComponent,
  NavbarPanelDirective,
  NavbarRoutesComponent,
  NavbarRoutesDirective,
  NavbarService,
  NavitemPanelDirective,
  PageAlertContainerComponent,
  PanelsModule,
  ResponsiveDirective,
  ToolbarService,
  UserProfileComponent,
  UserProfileModule,
  UserProfileService,
  createStyleFactory
} from "./chunk-GFX665YR.js";
import {
  OAuthService
} from "./chunk-YULIF5VP.js";
import "./chunk-XT7XLCLR.js";
import "./chunk-ZVIHN2OM.js";
import {
  AbpVisibleDirective,
  NavItemsService
} from "./chunk-6MBLSBLR.js";
import "./chunk-ORSPOGRK.js";
import "./chunk-5FWCSE5I.js";
import "./chunk-T2QD5I46.js";
import {
  AuthService,
  CoreModule,
  LocalizationPipe,
  PermissionDirective,
  ReplaceableComponentsService,
  ReplaceableTemplateDirective
} from "./chunk-NI4ZFAY4.js";
import {
  RouterLink,
  RouterModule,
  RouterOutlet
} from "./chunk-VHKPOJBK.js";
import "./chunk-LMDSVWKI.js";
import "./chunk-KEK2ONVT.js";
import "./chunk-T5EWVHFZ.js";
import {
  AsyncPipe,
  CommonModule,
  NgComponentOutlet,
  NgTemplateOutlet
} from "./chunk-IMWYUKDZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  Input,
  NgModule,
  TemplateRef,
  ViewEncapsulation,
  provideAppInitializer,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EZ2ZVKYO.js";
import "./chunk-HM3VFUK5.js";
import {
  InjectionToken,
  Observable,
  inject,
  makeEnvironmentProviders,
  of,
  ɵɵdefineInjector,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-TVT7XMKI.js";
import "./chunk-3RPBTBI6.js";

// node_modules/@volo/ngx-lepton-x.lite/fesm2022/volo-ngx-lepton-x.lite-layouts.mjs
var _c0 = ["*"];
function MobileNavbarComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MobileNavbarComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-brand-logo");
  }
}
function MnUserProfileComponent_Conditional_0_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ctx + "\\", " ");
  }
}
function MnUserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 8);
    ɵɵlistener("click", function MnUserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Template_a_click_0_listener() {
      const action_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.onActionClick(action_r4));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r4 = ctx.$implicit;
    ɵɵproperty("routerLink", action_r4.link);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, action_r4?.text || ""), " ");
  }
}
function MnUserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
  }
}
function MnUserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, MnUserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Template, 3, 4, "a", 6, ɵɵrepeaterTrackByIndex);
    ɵɵconditionalCreate(2, MnUserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_Conditional_2_Template, 1, 0, "div", 7);
  }
  if (rf & 2) {
    const actionGroup_r5 = ctx.$implicit;
    const ɵ$index_16_r6 = ctx.$index;
    const ɵ$count_16_r7 = ctx.$count;
    ɵɵrepeater(actionGroup_r5);
    ɵɵadvance(2);
    ɵɵconditional(!(ɵ$index_16_r6 === ɵ$count_16_r7 - 1) ? 2 : -1);
  }
}
function MnUserProfileComponent_Conditional_0_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, MnUserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_Template, 3, 1, null, null, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const userProfile_r8 = ɵɵnextContext(2);
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("d-none", ctx_r1.menuHidden);
    ɵɵadvance();
    ɵɵrepeater(userProfile_r8.userActionGroups);
  }
}
function MnUserProfileComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function MnUserProfileComponent_Conditional_0_Conditional_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.toggleMenu());
    });
    ɵɵelement(1, "lpx-icon", 2);
    ɵɵelementStart(2, "span", 3);
    ɵɵconditionalCreate(3, MnUserProfileComponent_Conditional_0_Conditional_0_Conditional_3_Template, 1, 1);
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵconditionalCreate(5, MnUserProfileComponent_Conditional_0_Conditional_0_Conditional_5_Template, 3, 2, "div", 4);
  }
  if (rf & 2) {
    let tmp_3_0;
    const userProfile_r8 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵconditional((tmp_3_0 = userProfile_r8.tenant?.name) ? 3 : -1, tmp_3_0);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", userProfile_r8.fullName, " ");
    ɵɵadvance();
    ɵɵconditional(userProfile_r8.userActionGroups ? 5 : -1);
  }
}
function MnUserProfileComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 0);
    ɵɵelement(1, "lpx-icon", 9);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 1, "AbpAccount::Login"));
  }
}
function MnUserProfileComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, MnUserProfileComponent_Conditional_0_Conditional_0_Template, 6, 3)(1, MnUserProfileComponent_Conditional_0_Conditional_1_Template, 5, 3, "a", 0);
  }
  if (rf & 2) {
    ɵɵconditional(ctx.isAuthenticated ? 0 : 1);
  }
}
function MnLanguageSelectionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵlistener("click", function MnLanguageSelectionComponent_Conditional_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleMenu());
    });
    ɵɵelement(1, "lpx-icon", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx?.displayName, " ");
  }
}
function MnLanguageSelectionComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 6);
    ɵɵlistener("click", function MnLanguageSelectionComponent_Conditional_2_For_2_Template_a_click_0_listener() {
      const lang_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onLanguageSelection(lang_r4));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", lang_r4.displayName, " ");
  }
}
function MnLanguageSelectionComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵrepeaterCreate(1, MnLanguageSelectionComponent_Conditional_2_For_2_Template, 2, 1, "a", 5, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("d-none", ctx_r1.menuHidden);
    ɵɵadvance();
    ɵɵrepeater(ctx);
  }
}
function ToolbarItemComponent_Conditional_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToolbarItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function ToolbarItemComponent_Conditional_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.actionClick());
    });
    ɵɵelementStart(1, "div", 2)(2, "div", 3);
    ɵɵtemplate(3, ToolbarItemComponent_Conditional_0_ng_container_3_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngComponentOutlet", ctx_r1.component);
  }
}
function ToolbarItemComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.template);
  }
}
function ToolbarItemComponent_Conditional_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵlistener("click", function ToolbarItemComponent_Conditional_1_Conditional_1_Conditional_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.actionClick());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("innerHtml", ctx_r1.html, ɵɵsanitizeHtml);
  }
}
function ToolbarItemComponent_Conditional_1_Conditional_1_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "small", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ctx);
  }
}
function ToolbarItemComponent_Conditional_1_Conditional_1_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-icon", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("iconClass", ctx_r1.icon);
  }
}
function ToolbarItemComponent_Conditional_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 9);
    ɵɵlistener("click", function ToolbarItemComponent_Conditional_1_Conditional_1_Conditional_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.actionClick());
    });
    ɵɵelementStart(1, "span", 2);
    ɵɵconditionalCreate(2, ToolbarItemComponent_Conditional_1_Conditional_1_Conditional_1_Conditional_2_Template, 2, 1, "small", 10);
    ɵɵpipe(3, "async");
    ɵɵconditionalCreate(4, ToolbarItemComponent_Conditional_1_Conditional_1_Conditional_1_Conditional_4_Template, 1, 1, "lpx-icon", 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵconditional((tmp_3_0 = ɵɵpipeBind1(3, 2, ctx_r1.badge$)) ? 2 : -1, tmp_3_0);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.icon ? 4 : -1);
  }
}
function ToolbarItemComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ToolbarItemComponent_Conditional_1_Conditional_1_Conditional_0_Template, 1, 1, "div", 6)(1, ToolbarItemComponent_Conditional_1_Conditional_1_Conditional_1_Template, 5, 4, "a", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r1.html ? 0 : 1);
  }
}
function ToolbarItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ToolbarItemComponent_Conditional_1_Conditional_0_Template, 1, 1, "ng-container", 5)(1, ToolbarItemComponent_Conditional_1_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.template ? 0 : 1);
  }
}
function ToolbarItemsComponent_For_1_lpx_toolbar_item_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-toolbar-item", 0);
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("icon", item_r1?.icon)("badge", item_r1?.badge?.count)("html", item_r1?.html)("component", item_r1?.component)("template", item_r1?.template)("action", item_r1?.action);
  }
}
function ToolbarItemsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToolbarItemsComponent_For_1_lpx_toolbar_item_0_Template, 1, 6, "lpx-toolbar-item", 1);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵproperty("lpxVisible", !item_r1.visible || item_r1.visible(item_r1));
  }
}
var _c1 = () => [];
function SideMenuLayoutComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-mn-user-profile", 22);
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-mn-language-selection", 22);
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_Conditional_7_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_Conditional_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_Conditional_7_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.logoPanel.template);
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_Conditional_7_ng_template_1_Template, 1, 1, "ng-template", 23);
    ɵɵelementContainerEnd();
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "lpx-mobile-navbar");
    ɵɵtemplate(1, SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_ng_container_1_Template, 1, 0, "ng-container", 13)(2, SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_ng_template_2_Template, 1, 0, "ng-template", null, 9, ɵɵtemplateRefExtractor)(4, SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_ng_container_4_Template, 1, 0, "ng-container", 13)(5, SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_ng_template_5_Template, 1, 0, "ng-template", null, 10, ɵɵtemplateRefExtractor);
    ɵɵconditionalCreate(7, SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_Conditional_7_Template, 2, 0, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultMobileUserProfile_r2 = ɵɵreference(3);
    const defaultMobilLanguageSelection_r3 = ɵɵreference(6);
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.mobileUserProfilePanelDirective?.template || defaultMobileUserProfile_r2);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.mobileLanguageSelectionDirective?.template || defaultMobilLanguageSelection_r3);
    ɵɵadvance(3);
    ɵɵconditional(ctx_r0.logoPanel?.template ? 7 : -1);
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuLayoutComponent_Conditional_0_ng_template_2_lpx_mobile_navbar_0_Template, 8, 3, "lpx-mobile-navbar", 19);
  }
  if (rf & 2) {
    ɵɵproperty("lpxResponsive", "all md-none");
  }
}
function SideMenuLayoutComponent_Conditional_0_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuLayoutComponent_Conditional_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24)(1, "div", 25);
    ɵɵtemplate(2, SideMenuLayoutComponent_Conditional_0_div_4_ng_container_2_Template, 1, 0, "ng-container", 13);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const defaultNavbar_r4 = ɵɵreference(5);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.navbarPanel?.template || defaultNavbar_r4);
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SideMenuLayoutComponent_Conditional_0_ng_container_9_ng_container_1_Template, 1, 0, "ng-container", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const defaultBreadcrumb_r5 = ɵɵreference(9);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.breadcrumbPanel?.template || defaultBreadcrumb_r5);
  }
}
function SideMenuLayoutComponent_Conditional_0_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuLayoutComponent_Conditional_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵtemplate(1, SideMenuLayoutComponent_Conditional_0_div_10_ng_container_1_Template, 1, 0, "ng-container", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const defaultTopbarContent_r6 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.topbarContentPanelDirective?.template || defaultTopbarContent_r6);
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function SideMenuLayoutComponent_Conditional_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuLayoutComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtemplate(1, SideMenuLayoutComponent_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 13)(2, SideMenuLayoutComponent_Conditional_0_ng_template_2_Template, 1, 1, "ng-template", null, 7, ɵɵtemplateRefExtractor)(4, SideMenuLayoutComponent_Conditional_0_div_4_Template, 3, 1, "div", 14);
    ɵɵelementStart(5, "div", 15)(6, "div", 16)(7, "div", 17)(8, "div", 18);
    ɵɵtemplate(9, SideMenuLayoutComponent_Conditional_0_ng_container_9_Template, 2, 1, "ng-container", 19);
    ɵɵelementEnd();
    ɵɵtemplate(10, SideMenuLayoutComponent_Conditional_0_div_10_Template, 2, 1, "div", 20);
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 21);
    ɵɵtemplate(12, SideMenuLayoutComponent_Conditional_0_ng_container_12_Template, 1, 0, "ng-container", 13)(13, SideMenuLayoutComponent_Conditional_0_ng_template_13_Template, 1, 0, "ng-template", null, 8, ɵɵtemplateRefExtractor)(15, SideMenuLayoutComponent_Conditional_0_ng_container_15_Template, 1, 0, "ng-container", 13);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const defaultMobileNavbar_r7 = ɵɵreference(3);
    const defaultContent_r8 = ɵɵreference(14);
    const ctx_r0 = ɵɵnextContext();
    const defaultFooter_r9 = ɵɵreference(15);
    ɵɵclassMap(ctx);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.mobileNavbarPanel?.template || defaultMobileNavbar_r7);
    ɵɵadvance(3);
    ɵɵproperty("lpxResponsive", "md");
    ɵɵadvance(5);
    ɵɵproperty("lpxResponsive", "md");
    ɵɵadvance();
    ɵɵproperty("lpxResponsive", "md");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentPanel?.template || defaultContent_r8);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerPanelDirective?.template || defaultFooter_r9);
  }
}
function SideMenuLayoutComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-toolbar-container");
  }
}
function SideMenuLayoutComponent_ng_template_4_Conditional_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuLayoutComponent_ng_template_4_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuLayoutComponent_ng_template_4_Conditional_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.logoPanel.template);
  }
}
function SideMenuLayoutComponent_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuLayoutComponent_ng_template_4_Conditional_1_ng_template_0_Template, 1, 1, "ng-template", 23);
  }
}
function SideMenuLayoutComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "lpx-navbar");
    ɵɵconditionalCreate(1, SideMenuLayoutComponent_ng_template_4_Conditional_1_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.logoPanel?.template ? 1 : -1);
  }
}
function SideMenuLayoutComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-brand-logo");
  }
}
function SideMenuLayoutComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-breadcrumb");
  }
}
function SideMenuLayoutComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-user-profile");
  }
}
function SideMenuLayoutComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-language-selection");
  }
}
function SideMenuLayoutComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-footer");
  }
}
var MobileNavbarComponent = class _MobileNavbarComponent {
  constructor() {
    this.navService = inject(NavbarService);
    this.layoutService = inject(LayoutService);
    this.userMenuHidden = true;
    this.navItemsHidden = true;
    this.mobileMenuOpened = "mobile-menu-opened";
  }
  ngOnDestroy() {
    this.layoutService.removeClass(this.mobileMenuOpened);
  }
  toggleUserMenu() {
    this.userMenuHidden = !this.userMenuHidden;
    if (!this.userMenuHidden) {
      this.navItemsHidden = true;
      this.setLayoutClass();
    }
  }
  toggleNavbar() {
    this.navItemsHidden = !this.navItemsHidden;
    if (!this.navItemsHidden) {
      this.userMenuHidden = true;
    }
    this.setLayoutClass();
  }
  setLayoutClass() {
    if (this.navItemsHidden) {
      this.layoutService.removeClass(this.mobileMenuOpened);
    } else {
      this.layoutService.addClass(this.mobileMenuOpened);
    }
  }
  static {
    this.ɵfac = function MobileNavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MobileNavbarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MobileNavbarComponent,
      selectors: [["lpx-mobile-navbar"]],
      contentQueries: function MobileNavbarComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, LogoPanelDirective, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.logoPanel = _t.first);
        }
      },
      ngContentSelectors: _c0,
      decls: 14,
      vars: 9,
      consts: [["defaultLogo", ""], [1, "lpx-mobile-navbar-container"], [1, "lpx-mobile-navbar"], [1, "lpx-logo-container"], [4, "ngTemplateOutlet"], [1, "user-menu", "z-1"], ["iconClass", "bi bi-person", "role", "button", 3, "click"], ["iconClass", "bi bi-list", "role", "button", 3, "click"], [1, "user-menu-groups"], [1, "lpx-mobile-nav-items"], [3, "routeClick", "navbarItems", "routerItem"]],
      template: function MobileNavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1)(1, "header", 2)(2, "div", 3);
          ɵɵtemplate(3, MobileNavbarComponent_ng_container_3_Template, 1, 0, "ng-container", 4);
          ɵɵelementEnd();
          ɵɵelementStart(4, "div", 5)(5, "lpx-icon", 6);
          ɵɵlistener("click", function MobileNavbarComponent_Template_lpx_icon_click_5_listener() {
            return ctx.toggleUserMenu();
          });
          ɵɵelementEnd();
          ɵɵelementStart(6, "lpx-icon", 7);
          ɵɵlistener("click", function MobileNavbarComponent_Template_lpx_icon_click_6_listener() {
            return ctx.toggleNavbar();
          });
          ɵɵelementEnd()()();
          ɵɵelementStart(7, "div", 8);
          ɵɵprojection(8);
          ɵɵelementEnd();
          ɵɵelementStart(9, "nav", 9)(10, "lpx-navbar-routes", 10);
          ɵɵpipe(11, "async");
          ɵɵlistener("routeClick", function MobileNavbarComponent_Template_lpx_navbar_routes_routeClick_10_listener() {
            return ctx.toggleNavbar();
          });
          ɵɵelementEnd()()();
          ɵɵtemplate(12, MobileNavbarComponent_ng_template_12_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const defaultLogo_r1 = ɵɵreference(13);
          ɵɵadvance(3);
          ɵɵproperty("ngTemplateOutlet", ctx.logoPanel?.template || defaultLogo_r1);
          ɵɵadvance(4);
          ɵɵclassProp("d-none", ctx.userMenuHidden);
          ɵɵadvance(2);
          ɵɵclassProp("d-none", ctx.navItemsHidden);
          ɵɵadvance();
          ɵɵproperty("navbarItems", ɵɵpipeBind1(11, 7, ctx.navService.navbarItems$))("routerItem", true);
        }
      },
      dependencies: [NgTemplateOutlet, IconComponent, NavbarRoutesComponent, BrandLogoComponent, AsyncPipe],
      styles: [".mobile-menu-opened   [_nghost-%COMP%]{height:100vh;display:block}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileNavbarComponent, [{
    type: Component,
    args: [{
      selector: "lpx-mobile-navbar",
      imports: [NgTemplateOutlet, IconComponent, NavbarRoutesComponent, BrandLogoComponent, AsyncPipe],
      template: '<div class="lpx-mobile-navbar-container">\r\n  <header class="lpx-mobile-navbar">\r\n    <div class="lpx-logo-container">\r\n      <ng-container\r\n        *ngTemplateOutlet="logoPanel?.template || defaultLogo"\r\n      ></ng-container>\r\n    </div>\r\n    <div class="user-menu z-1">\r\n      <lpx-icon\r\n        iconClass="bi bi-person"\r\n        role="button"\r\n        (click)="toggleUserMenu()"\r\n      ></lpx-icon>\r\n      <lpx-icon\r\n        iconClass="bi bi-list"\r\n        role="button"\r\n        (click)="toggleNavbar()"\r\n      ></lpx-icon>\r\n    </div>\r\n  </header>\r\n\r\n  <div class="user-menu-groups" [class.d-none]="userMenuHidden">\r\n    <ng-content> </ng-content>\r\n  </div>\r\n\r\n  <nav class="lpx-mobile-nav-items" [class.d-none]="navItemsHidden">\r\n    <lpx-navbar-routes\r\n      [navbarItems]="navService.navbarItems$ | async"\r\n      [routerItem]="true"\r\n      (routeClick)="toggleNavbar()"\r\n    ></lpx-navbar-routes>\r\n  </nav>\r\n</div>\r\n\r\n<ng-template #defaultLogo>\r\n  <lpx-brand-logo />\r\n</ng-template>\r\n',
      styles: [".mobile-menu-opened :host{height:100vh;display:block}\n"]
    }]
  }], null, {
    logoPanel: [{
      type: ContentChild,
      args: [LogoPanelDirective]
    }]
  });
})();
var LpxMobileNavbarModule = class _LpxMobileNavbarModule {
  static {
    this.ɵfac = function LpxMobileNavbarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxMobileNavbarModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxMobileNavbarModule,
      imports: [CommonModule, LpxBrandLogoModule, LpxIconModule, LanguageSelectionModule, LpxNavbarModule, MobileNavbarComponent],
      exports: [MobileNavbarComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, LpxBrandLogoModule, LpxIconModule, LanguageSelectionModule, LpxNavbarModule, MobileNavbarComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxMobileNavbarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LpxBrandLogoModule, LpxIconModule, LanguageSelectionModule, LpxNavbarModule, MobileNavbarComponent],
      exports: [MobileNavbarComponent]
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
var MnUserProfileComponent = class _MnUserProfileComponent {
  constructor() {
    this.service = inject(UserProfileService);
    this.user$ = this.service.user$;
    this.menuHidden = true;
  }
  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
  onActionClick(item) {
    item.action?.();
  }
  static {
    this.ɵfac = function MnUserProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MnUserProfileComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MnUserProfileComponent,
      selectors: [["lpx-mn-user-profile"]],
      decls: 2,
      vars: 3,
      consts: [["role", "link", "routerLink", "/account/login", 1, "lpx-user-profile", "btn-toggle", "text-decoration-none"], ["role", "button", 1, "lpx-user-profile", "btn-toggle", 3, "click"], ["iconClass", "bi bi-person"], [1, "user-full-name"], [1, "action-group-menu", 3, "d-none"], [1, "action-group-menu"], ["role", "link", 1, "action", 3, "routerLink"], [1, "divider"], ["role", "link", 1, "action", 3, "click", "routerLink"], ["iconClass", "bi bi-box-arrow-in-right"]],
      template: function MnUserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, MnUserProfileComponent_Conditional_0_Template, 2, 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.user$)) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [IconComponent, RouterLink, AsyncPipe, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MnUserProfileComponent, [{
    type: Component,
    args: [{
      selector: "lpx-mn-user-profile",
      encapsulation: ViewEncapsulation.None,
      imports: [IconComponent, RouterLink, AsyncPipe, LocalizationPipe],
      template: `@if (user$ | async; as userProfile) {\r
  @if (userProfile.isAuthenticated) {\r
    <div\r
      class="lpx-user-profile btn-toggle"\r
      role="button"\r
      (click)="toggleMenu()"\r
    >\r
      <lpx-icon iconClass="bi bi-person" />\r
      <span class="user-full-name">\r
        @if (userProfile.tenant?.name; as tenantName) {\r
          {{ tenantName + '\\\\' }}\r
        }\r
        {{ userProfile.fullName }}\r
      </span>\r
    </div>\r
    @if (userProfile.userActionGroups) {\r
      <div class="action-group-menu" [class.d-none]="menuHidden">\r
        @for (\r
          actionGroup of userProfile.userActionGroups;\r
          track $index;\r
          let last = $last\r
        ) {\r
          @for (action of actionGroup; track $index) {\r
            <a\r
              class="action"\r
              role="link"\r
              (click)="onActionClick(action)"\r
              [routerLink]="action.link"\r
            >\r
              {{ action?.text || '' | abpLocalization }}\r
            </a>\r
          }\r
\r
          @if (!last) {\r
            <div class="divider"></div>\r
          }\r
        }\r
      </div>\r
    }\r
  } @else {\r
    <a\r
      class="lpx-user-profile btn-toggle text-decoration-none"\r
      role="link"\r
      routerLink="/account/login"\r
    >\r
      <lpx-icon iconClass="bi bi-box-arrow-in-right" />\r
      <span>{{ 'AbpAccount::Login' | abpLocalization }}</span>\r
    </a>\r
  }\r
}\r
`
    }]
  }], null, null);
})();
var MnUserProfileModule = class _MnUserProfileModule {
  static {
    this.ɵfac = function MnUserProfileModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MnUserProfileModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MnUserProfileModule,
      imports: [CommonModule, LpxAvatarModule, RouterModule, LpxTranslateModule, MnUserProfileComponent],
      exports: [MnUserProfileComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, LpxAvatarModule, RouterModule, LpxTranslateModule, MnUserProfileComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MnUserProfileModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LpxAvatarModule, RouterModule, LpxTranslateModule, MnUserProfileComponent],
      exports: [MnUserProfileComponent]
    }]
  }], null, null);
})();
var MnLanguageSelectionComponent = class _MnLanguageSelectionComponent {
  constructor() {
    this.service = inject(LanguageService);
    this.langs$ = this.service.languages$;
    this.selectedLanguage$ = this.service.selectedLanguage$;
    this.menuHidden = true;
  }
  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
  onLanguageSelection(lang) {
    this.service.setSelectedLanguage(lang);
  }
  static {
    this.ɵfac = function MnLanguageSelectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MnLanguageSelectionComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MnLanguageSelectionComponent,
      selectors: [["lpx-mn-language-selection"]],
      features: [ɵɵProvidersFeature([])],
      decls: 4,
      vars: 6,
      consts: [["role", "button", 1, "lpx-language-selection", "btn-toggle"], [1, "action-group-menu", 3, "d-none"], ["role", "button", 1, "lpx-language-selection", "btn-toggle", 3, "click"], ["iconClass", "bi bi-globe"], [1, "action-group-menu"], ["role", "button", 1, "action"], ["role", "button", 1, "action", 3, "click"]],
      template: function MnLanguageSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, MnLanguageSelectionComponent_Conditional_0_Template, 3, 1, "div", 0);
          ɵɵpipe(1, "async");
          ɵɵconditionalCreate(2, MnLanguageSelectionComponent_Conditional_2_Template, 3, 2, "div", 1);
          ɵɵpipe(3, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          let tmp_1_0;
          ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(1, 2, ctx.selectedLanguage$)) ? 0 : -1, tmp_0_0);
          ɵɵadvance(2);
          ɵɵconditional((tmp_1_0 = ɵɵpipeBind1(3, 4, ctx.langs$)) ? 2 : -1, tmp_1_0);
        }
      },
      dependencies: [IconComponent, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MnLanguageSelectionComponent, [{
    type: Component,
    args: [{
      selector: "lpx-mn-language-selection",
      encapsulation: ViewEncapsulation.None,
      providers: [],
      imports: [IconComponent, AsyncPipe],
      template: '@if (selectedLanguage$ | async; as selectedLanguage) {\r\n  <div\r\n    class="lpx-language-selection btn-toggle"\r\n    role="button"\r\n    (click)="toggleMenu()"\r\n  >\r\n    <lpx-icon iconClass="bi bi-globe"></lpx-icon>\r\n    {{ selectedLanguage?.displayName }}\r\n  </div>\r\n}\r\n\r\n@if (langs$ | async; as langs) {\r\n  <div class="action-group-menu" [class.d-none]="menuHidden">\r\n    @for (lang of langs; track $index) {\r\n      <a class="action" role="button" (click)="onLanguageSelection(lang)">\r\n        {{ lang.displayName }}\r\n      </a>\r\n    }\r\n  </div>\r\n}\r\n'
    }]
  }], null, null);
})();
var MnLanguageSelectionModule = class _MnLanguageSelectionModule {
  static {
    this.ɵfac = function MnLanguageSelectionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MnLanguageSelectionModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MnLanguageSelectionModule,
      imports: [CommonModule, LpxIconModule, MnLanguageSelectionComponent],
      exports: [MnLanguageSelectionComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, LpxIconModule, MnLanguageSelectionComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MnLanguageSelectionModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LpxIconModule, MnLanguageSelectionComponent],
      exports: [MnLanguageSelectionComponent]
    }]
  }], null, null);
})();
var ToolbarItemComponent = class _ToolbarItemComponent {
  get badge$() {
    if (this.badge instanceof Observable) {
      return this.badge;
    }
    return of(this.badge);
  }
  actionClick() {
    if (this.action) {
      this.action();
    }
  }
  static {
    this.ɵfac = function ToolbarItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToolbarItemComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ToolbarItemComponent,
      selectors: [["lpx-toolbar-item"]],
      inputs: {
        component: "component",
        template: "template",
        icon: "icon",
        badge: "badge",
        html: "html",
        action: "action"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "lpx-menu-item-link"], [1, "lpx-menu-item-link", 3, "click"], [1, "lpx-menu-item-icon"], [1, "lpx-icon"], [4, "ngComponentOutlet"], [3, "ngTemplateOutlet"], [3, "innerHtml"], [1, "lpx-menu-item-link", "active-menu-item"], [3, "click", "innerHtml"], [1, "lpx-menu-item-link", "active-menu-item", 3, "click"], [1, "menu-item-badge"], [1, "action-icon", 3, "iconClass"]],
      template: function ToolbarItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, ToolbarItemComponent_Conditional_0_Template, 4, 1, "div", 0)(1, ToolbarItemComponent_Conditional_1_Template, 2, 1);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.component ? 0 : 1);
        }
      },
      dependencies: [IconComponent, NgComponentOutlet, NgTemplateOutlet, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarItemComponent, [{
    type: Component,
    args: [{
      selector: "lpx-toolbar-item",
      imports: [IconComponent, AsyncPipe, NgComponentOutlet, NgTemplateOutlet],
      template: '@if (component) {\r\n  <div class="lpx-menu-item-link" (click)="actionClick()">\r\n    <div class="lpx-menu-item-icon">\r\n      <div class="lpx-icon">\r\n        <ng-container *ngComponentOutlet="component"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n} @else {\r\n  @if (template) {\r\n    <ng-container [ngTemplateOutlet]="template"></ng-container>\r\n  } @else {\r\n    @if (html) {\r\n      <div [innerHtml]="html" (click)="actionClick()"></div>\r\n    } @else {\r\n      <a class="lpx-menu-item-link active-menu-item" (click)="actionClick()">\r\n        <span class="lpx-menu-item-icon">\r\n          @if (badge$ | async; as badge) {\r\n            <small class="menu-item-badge">{{ badge }}</small>\r\n          }\r\n          @if (icon) {\r\n            <lpx-icon class="action-icon" [iconClass]="icon"></lpx-icon>\r\n          }\r\n        </span>\r\n      </a>\r\n    }\r\n  }\r\n}\r\n'
    }]
  }], null, {
    component: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    badge: [{
      type: Input
    }],
    html: [{
      type: Input
    }],
    action: [{
      type: Input
    }]
  });
})();
var ToolbarItemsComponent = class _ToolbarItemsComponent {
  static {
    this.ɵfac = function ToolbarItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToolbarItemsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ToolbarItemsComponent,
      selectors: [["lpx-toolbar-items"]],
      inputs: {
        items: "items"
      },
      decls: 2,
      vars: 0,
      consts: [[3, "icon", "badge", "html", "component", "template", "action"], [3, "icon", "badge", "html", "component", "template", "action", 4, "lpxVisible"]],
      template: function ToolbarItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, ToolbarItemsComponent_For_1_Template, 1, 1, "lpx-toolbar-item", 0, ɵɵrepeaterTrackByIndex);
        }
        if (rf & 2) {
          ɵɵrepeater(ctx.items);
        }
      },
      dependencies: [ToolbarItemComponent, LpxVisibleDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarItemsComponent, [{
    type: Component,
    args: [{
      selector: "lpx-toolbar-items",
      imports: [ToolbarItemComponent, LpxVisibleDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '@for (item of items; track $index) {\r\n  <lpx-toolbar-item\r\n    *lpxVisible="!item.visible || item.visible(item)"\r\n    [icon]="item?.icon"\r\n    [badge]="item?.badge?.count"\r\n    [html]="item?.html"\r\n    [component]="item?.component"\r\n    [template]="item?.template"\r\n    [action]="item?.action"\r\n  />\r\n}\r\n'
    }]
  }], null, {
    items: [{
      type: Input
    }]
  });
})();
var ToolbarComponent = class _ToolbarComponent {
  constructor() {
    this.toolbarService = inject(ToolbarService);
  }
  static {
    this.ɵfac = function ToolbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToolbarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ToolbarComponent,
      selectors: [["lpx-toolbar"]],
      decls: 2,
      vars: 4,
      consts: [[1, "lpx-topbar-content", 3, "items"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "lpx-toolbar-items", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("items", ɵɵpipeBind1(1, 1, ctx.toolbarService.items$) || ɵɵpureFunction0(3, _c1));
        }
      },
      dependencies: [ToolbarItemsComponent, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarComponent, [{
    type: Component,
    args: [{
      selector: "lpx-toolbar",
      imports: [AsyncPipe, ToolbarItemsComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<lpx-toolbar-items\r\n  class="lpx-topbar-content"\r\n  [items]="(toolbarService.items$ | async) || []"\r\n>\r\n</lpx-toolbar-items>\r\n'
    }]
  }], null, null);
})();
var ToolbarContainerComponent = class _ToolbarContainerComponent {
  static {
    this.ɵfac = function ToolbarContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToolbarContainerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ToolbarContainerComponent,
      selectors: [["lpx-toolbar-container"]],
      decls: 1,
      vars: 0,
      template: function ToolbarContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "lpx-toolbar");
        }
      },
      dependencies: [ToolbarComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarContainerComponent, [{
    type: Component,
    args: [{
      selector: "lpx-toolbar-container",
      imports: [ToolbarComponent],
      template: "<lpx-toolbar></lpx-toolbar>\r\n"
    }]
  }], null, null);
})();
var LanguageSelectionPanelDirective = class _LanguageSelectionPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function LanguageSelectionPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguageSelectionPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _LanguageSelectionPanelDirective,
      selectors: [["ng-template", "lpx-language-selection", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSelectionPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-language-selection]"
    }]
  }], null, null);
})();
var MobileLanguageSelectionDirective = class _MobileLanguageSelectionDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function MobileLanguageSelectionDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MobileLanguageSelectionDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MobileLanguageSelectionDirective,
      selectors: [["ng-template", "lpx-mn-language-selection", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileLanguageSelectionDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-mn-language-selection]"
    }]
  }], null, null);
})();
var MobileUserProfilePanelDirective = class _MobileUserProfilePanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function MobileUserProfilePanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MobileUserProfilePanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MobileUserProfilePanelDirective,
      selectors: [["ng-template", "lpx-mn-user-profile-panel", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileUserProfilePanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-mn-user-profile-panel]"
    }]
  }], null, null);
})();
var TopbarContentPanelDirective = class _TopbarContentPanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function TopbarContentPanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TopbarContentPanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TopbarContentPanelDirective,
      selectors: [["ng-template", "lpx-topbar-content", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarContentPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-topbar-content]"
    }]
  }], null, null);
})();
var UserProfilePanelDirective = class _UserProfilePanelDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function UserProfilePanelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfilePanelDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _UserProfilePanelDirective,
      selectors: [["ng-template", "lpx-user-profile", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfilePanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-user-profile]"
    }]
  }], null, null);
})();
var SideMenuLayoutComponent = class _SideMenuLayoutComponent {
  constructor() {
    this.layoutService = inject(LayoutService);
  }
  static {
    this.ɵfac = function SideMenuLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SideMenuLayoutComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SideMenuLayoutComponent,
      selectors: [["lpx-layout"]],
      contentQueries: function SideMenuLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NavbarPanelDirective, 5)(dirIndex, MobileNavbarPanelDirective, 5)(dirIndex, BreadcrumbPanelDirective, 5)(dirIndex, SettingsPanelDirective, 5)(dirIndex, LanguageSelectionPanelDirective, 5)(dirIndex, TopbarContentPanelDirective, 5)(dirIndex, TopbarContentPanelDirective, 5)(dirIndex, UserProfilePanelDirective, 5)(dirIndex, FooterPanelDirective, 5)(dirIndex, NavitemPanelDirective, 5)(dirIndex, MobileUserProfilePanelDirective, 5)(dirIndex, MobileLanguageSelectionDirective, 5)(dirIndex, LogoPanelDirective, 5)(dirIndex, ContentPanelDirective, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navbarPanel = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mobileNavbarPanel = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.breadcrumbPanel = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.settingsPanel = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.languageSelectionPanelDirective = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.topbarContentPanelDirective = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navItemsPanelDirective = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.userProfilePanelDirective = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerPanelDirective = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navitemPanelDirective = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mobileUserProfilePanelDirective = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mobileLanguageSelectionDirective = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.logoPanel = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentPanel = _t.first);
        }
      },
      ngContentSelectors: _c0,
      decls: 16,
      vars: 3,
      consts: [["defaultTopbarContent", ""], ["defaultNavbar", ""], ["defaultLogo", ""], ["defaultBreadcrumb", ""], ["defaultUserProfile", ""], ["defaultLanguageSelection", ""], ["defaultFooter", ""], ["defaultMobileNavbar", ""], ["defaultContent", ""], ["defaultMobileUserProfile", ""], ["defaultMobilLanguageSelection", ""], ["id", "lpx-wrapper", 3, "class"], ["id", "lpx-wrapper"], [4, "ngTemplateOutlet"], ["class", "lpx-sidebar-container", 4, "lpxResponsive"], [1, "lpx-content-container"], [1, "lpx-topbar-container"], [1, "lpx-topbar"], [1, "lpx-breadcrumb-container"], [4, "lpxResponsive"], ["class", "lpx-topbar-content", 4, "lpxResponsive"], [1, "lpx-content"], [1, "d-block"], ["lpx-logo-panel", ""], [1, "lpx-sidebar-container"], [1, "lpx-sidebar", "lpx-scroll-container"], [1, "lpx-topbar-content"]],
      template: function SideMenuLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵconditionalCreate(0, SideMenuLayoutComponent_Conditional_0_Template, 16, 8, "div", 11);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, SideMenuLayoutComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, SideMenuLayoutComponent_ng_template_4_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, SideMenuLayoutComponent_ng_template_6_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor)(8, SideMenuLayoutComponent_ng_template_8_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor)(10, SideMenuLayoutComponent_ng_template_10_Template, 1, 0, "ng-template", null, 4, ɵɵtemplateRefExtractor)(12, SideMenuLayoutComponent_ng_template_12_Template, 1, 0, "ng-template", null, 5, ɵɵtemplateRefExtractor)(14, SideMenuLayoutComponent_ng_template_14_Template, 1, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          let tmp_7_0;
          ɵɵconditional((tmp_7_0 = ɵɵpipeBind1(1, 1, ctx.layoutService.containerClass$)) ? 0 : -1, tmp_7_0);
        }
      },
      dependencies: [NgTemplateOutlet, ResponsiveDirective, MobileNavbarComponent, MnUserProfileComponent, MnLanguageSelectionComponent, LogoPanelDirective, ToolbarContainerComponent, NavbarComponent, BrandLogoComponent, BreadcrumbComponent, UserProfileComponent, LanguageSelectionComponent, FooterComponent, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SideMenuLayoutComponent, [{
    type: Component,
    args: [{
      selector: "lpx-layout",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgTemplateOutlet, ResponsiveDirective, MobileNavbarComponent, MnUserProfileComponent, MnLanguageSelectionComponent, LogoPanelDirective, ToolbarContainerComponent, NavbarComponent, BrandLogoComponent, BreadcrumbComponent, UserProfileComponent, LanguageSelectionComponent, FooterComponent, AsyncPipe],
      template: `@if (layoutService.containerClass$ | async; as containerClass) {\r
  <div id="lpx-wrapper" [class]="containerClass">\r
    <ng-container\r
      *ngTemplateOutlet="mobileNavbarPanel?.template || defaultMobileNavbar"\r
    />\r
    <ng-template #defaultMobileNavbar>\r
      <lpx-mobile-navbar *lpxResponsive="'all md-none'">\r
        <ng-container\r
          *ngTemplateOutlet="\r
            mobileUserProfilePanelDirective?.template ||\r
            defaultMobileUserProfile\r
          "\r
        />\r
        <ng-template #defaultMobileUserProfile>\r
          <lpx-mn-user-profile class="d-block" />\r
        </ng-template>\r
\r
        <ng-container\r
          *ngTemplateOutlet="\r
            mobileLanguageSelectionDirective?.template ||\r
            defaultMobilLanguageSelection\r
          "\r
        />\r
        <ng-template #defaultMobilLanguageSelection>\r
          <lpx-mn-language-selection class="d-block" />\r
        </ng-template>\r
        @if (logoPanel?.template) {\r
          <ng-container>\r
            <ng-template lpx-logo-panel>\r
              <ng-container *ngTemplateOutlet="logoPanel!.template" />\r
            </ng-template>\r
          </ng-container>\r
        }\r
      </lpx-mobile-navbar>\r
    </ng-template>\r
\r
    <div class="lpx-sidebar-container" *lpxResponsive="'md'">\r
      <div class="lpx-sidebar lpx-scroll-container">\r
        <ng-container\r
          *ngTemplateOutlet="navbarPanel?.template || defaultNavbar"\r
        />\r
      </div>\r
    </div>\r
\r
    <div class="lpx-content-container">\r
      <div class="lpx-topbar-container">\r
        <div class="lpx-topbar">\r
          <div class="lpx-breadcrumb-container">\r
            <ng-container *lpxResponsive="'md'">\r
              <ng-container\r
                *ngTemplateOutlet="\r
                  breadcrumbPanel?.template || defaultBreadcrumb\r
                "\r
              />\r
            </ng-container>\r
          </div>\r
          <div class="lpx-topbar-content" *lpxResponsive="'md'">\r
            <ng-container\r
              *ngTemplateOutlet="\r
                topbarContentPanelDirective?.template || defaultTopbarContent\r
              "\r
            />\r
          </div>\r
        </div>\r
      </div>\r
      <div class="lpx-content">\r
        <ng-container\r
          *ngTemplateOutlet="contentPanel?.template || defaultContent"\r
        />\r
        <ng-template #defaultContent>\r
          <ng-content />\r
        </ng-template>\r
        <ng-container\r
          *ngTemplateOutlet="footerPanelDirective?.template || defaultFooter"\r
        />\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<ng-template #defaultTopbarContent>\r
  <lpx-toolbar-container />\r
</ng-template>\r
\r
<ng-template #defaultNavbar>\r
  <lpx-navbar>\r
    @if (logoPanel?.template) {\r
      <ng-template lpx-logo-panel>\r
        <ng-container *ngTemplateOutlet="logoPanel!.template" />\r
      </ng-template>\r
    }\r
  </lpx-navbar>\r
</ng-template>\r
\r
<ng-template #defaultLogo>\r
  <lpx-brand-logo />\r
</ng-template>\r
\r
<ng-template #defaultBreadcrumb>\r
  <lpx-breadcrumb />\r
</ng-template>\r
\r
<ng-template #defaultUserProfile>\r
  <lpx-user-profile />\r
</ng-template>\r
\r
<ng-template #defaultLanguageSelection>\r
  <lpx-language-selection />\r
</ng-template>\r
\r
<ng-template #defaultFooter>\r
  <lpx-footer />\r
</ng-template>\r
`
    }]
  }], () => [], {
    navbarPanel: [{
      type: ContentChild,
      args: [NavbarPanelDirective]
    }],
    mobileNavbarPanel: [{
      type: ContentChild,
      args: [MobileNavbarPanelDirective]
    }],
    breadcrumbPanel: [{
      type: ContentChild,
      args: [BreadcrumbPanelDirective]
    }],
    settingsPanel: [{
      type: ContentChild,
      args: [SettingsPanelDirective]
    }],
    languageSelectionPanelDirective: [{
      type: ContentChild,
      args: [LanguageSelectionPanelDirective]
    }],
    topbarContentPanelDirective: [{
      type: ContentChild,
      args: [TopbarContentPanelDirective]
    }],
    navItemsPanelDirective: [{
      type: ContentChild,
      args: [TopbarContentPanelDirective]
    }],
    userProfilePanelDirective: [{
      type: ContentChild,
      args: [UserProfilePanelDirective]
    }],
    footerPanelDirective: [{
      type: ContentChild,
      args: [FooterPanelDirective]
    }],
    navitemPanelDirective: [{
      type: ContentChild,
      args: [NavitemPanelDirective]
    }],
    mobileUserProfilePanelDirective: [{
      type: ContentChild,
      args: [MobileUserProfilePanelDirective]
    }],
    mobileLanguageSelectionDirective: [{
      type: ContentChild,
      args: [MobileLanguageSelectionDirective]
    }],
    logoPanel: [{
      type: ContentChild,
      args: [LogoPanelDirective]
    }],
    contentPanel: [{
      type: ContentChild,
      args: [ContentPanelDirective]
    }]
  });
})();
var LPX_SIDE_MENU_LAYOUT_STYLE_TOKEN = new InjectionToken("LPX_SIDE_MENU_LAYOUT_STYLE_TOKEN");
var layoutBundleName = "layout-bundle";
var getSideMenuLayoutStylesProvider = (styleFactory) => [{
  provide: LPX_SIDE_MENU_LAYOUT_STYLE_TOKEN,
  useFactory: () => {
    return [{
      bundleName: layoutBundleName
    }];
  }
}, provideAppInitializer(() => {
  inject(LPX_SIDE_MENU_LAYOUT_STYLE_TOKEN);
}), {
  provide: LPX_LAYOUT_STYLE_FINAL,
  deps: [LPX_SIDE_MENU_LAYOUT_STYLE_TOKEN],
  useFactory: createStyleFactory(styleFactory)
}];
var LpxSideMenuLayoutFeatureKind;
(function(LpxSideMenuLayoutFeatureKind2) {
  LpxSideMenuLayoutFeatureKind2[LpxSideMenuLayoutFeatureKind2["Options"] = 0] = "Options";
  LpxSideMenuLayoutFeatureKind2[LpxSideMenuLayoutFeatureKind2["AppendDefaults"] = 1] = "AppendDefaults";
})(LpxSideMenuLayoutFeatureKind || (LpxSideMenuLayoutFeatureKind = {}));
function makeLpxSideMenuLayoutFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
function withLpxSideMenuOptions(options = {}) {
  return makeLpxSideMenuLayoutFeature(LpxSideMenuLayoutFeatureKind.Options, [getSideMenuLayoutStylesProvider(options.styleFactory)]);
}
var APPEND_DEFAULTS = makeLpxSideMenuLayoutFeature(LpxSideMenuLayoutFeatureKind.AppendDefaults, [getSideMenuLayoutStylesProvider()]);
function provideLpxSideMenuLayout(...features) {
  const providers = [];
  features.forEach(({
    ɵproviders
  }) => providers.push(...ɵproviders));
  return makeEnvironmentProviders(providers);
}
var declarationsWithExports = [SideMenuLayoutComponent, SettingsPanelDirective, LanguageSelectionPanelDirective, TopbarContentPanelDirective, UserProfilePanelDirective, MobileUserProfilePanelDirective, MobileLanguageSelectionDirective];
var LpxSideMenuLayoutModule = class _LpxSideMenuLayoutModule {
  /**
   * @deprecated `LpxSideMenuLayoutModule.forRoot()` is deprecated. You can use `provideLpxSideMenuLayout` **function** instead.
   */
  static forRoot(options) {
    return {
      ngModule: _LpxSideMenuLayoutModule,
      providers: [provideLpxSideMenuLayout(withLpxSideMenuOptions(options))]
    };
  }
  static {
    this.ɵfac = function LpxSideMenuLayoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LpxSideMenuLayoutModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LpxSideMenuLayoutModule,
      imports: [CommonModule, LpxNavbarModule, LpxBreadcrumbModule, LpxResponsiveModule, UserProfileModule, LanguageSelectionModule, LpxMobileNavbarModule, MnUserProfileModule, MnLanguageSelectionModule, LpxFooterModule, PanelsModule, LpxBrandLogoModule, ToolbarContainerComponent, SideMenuLayoutComponent, SettingsPanelDirective, LanguageSelectionPanelDirective, TopbarContentPanelDirective, UserProfilePanelDirective, MobileUserProfilePanelDirective, MobileLanguageSelectionDirective],
      exports: [SideMenuLayoutComponent, SettingsPanelDirective, LanguageSelectionPanelDirective, TopbarContentPanelDirective, UserProfilePanelDirective, MobileUserProfilePanelDirective, MobileLanguageSelectionDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, LpxNavbarModule, LpxBreadcrumbModule, LpxResponsiveModule, UserProfileModule, LanguageSelectionModule, LpxMobileNavbarModule, MnUserProfileModule, MnLanguageSelectionModule, LpxFooterModule, PanelsModule, LpxBrandLogoModule, ToolbarContainerComponent, SideMenuLayoutComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxSideMenuLayoutModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LpxNavbarModule, LpxBreadcrumbModule, LpxResponsiveModule, UserProfileModule, LanguageSelectionModule, LpxMobileNavbarModule, MnUserProfileModule, MnLanguageSelectionModule, LpxFooterModule, PanelsModule, LpxBrandLogoModule, ToolbarContainerComponent, ...declarationsWithExports],
      exports: [...declarationsWithExports]
    }]
  }], null, null);
})();

// node_modules/@abp/ng.theme.lepton-x/fesm2022/abp-ng.theme.lepton-x-layouts.mjs
var _c02 = (a0) => ({
  componentKey: a0
});
function LanguageSelectionComponent_lpx_language_selection_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-language-selection");
  }
}
function NavItemsComponent_For_1_ng_container_0_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngComponentOutlet", item_r1.component);
  }
}
function NavItemsComponent_For_1_ng_container_0_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("click", function NavItemsComponent_For_1_ng_container_0_ng_container_1_Conditional_2_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      const item_r1 = ɵɵnextContext(3).$implicit;
      return ɵɵresetView(item_r1.action ? item_r1.action() : null);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("innerHTML", item_r1.html, ɵɵsanitizeHtml);
  }
}
function NavItemsComponent_For_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵconditionalCreate(1, NavItemsComponent_For_1_ng_container_0_ng_container_1_Conditional_1_Template, 1, 1, "ng-container", 2)(2, NavItemsComponent_For_1_ng_container_0_ng_container_1_Conditional_2_Template, 1, 1, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵconditional(item_r1.component ? 1 : 2);
  }
}
function NavItemsComponent_For_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NavItemsComponent_For_1_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("abpPermission", item_r1.requiredPolicy);
  }
}
function NavItemsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavItemsComponent_For_1_ng_container_0_Template, 2, 1, "ng-container", 0);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵproperty("abpVisible", !item_r1.visible || item_r1.visible(item_r1));
  }
}
function UserProfileComponent_lpx_user_profile_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-user-profile");
  }
}
var _c12 = (a0) => ({
  navbarItems: a0
});
var _c2 = (a0, a1) => ({
  componentKey: a0,
  inputs: a1
});
function SideMenuApplicationLayoutComponent_ng_template_2_lpx_navbar_0_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuApplicationLayoutComponent_ng_template_2_lpx_navbar_0_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_template_2_lpx_navbar_0_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx_r0.logoKey));
  }
}
function SideMenuApplicationLayoutComponent_ng_template_2_lpx_navbar_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SideMenuApplicationLayoutComponent_ng_template_2_lpx_navbar_0_ng_container_1_ng_template_1_Template, 1, 3, "ng-template", 6);
    ɵɵelementContainerEnd();
  }
}
function SideMenuApplicationLayoutComponent_ng_template_2_lpx_navbar_0_ng_template_2_lpx_navbar_routes_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-navbar-routes", 8);
  }
  if (rf & 2) {
    const items_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("navbarItems", items_r2);
  }
}
function SideMenuApplicationLayoutComponent_ng_template_2_lpx_navbar_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_template_2_lpx_navbar_0_ng_template_2_lpx_navbar_routes_0_Template, 1, 1, "lpx-navbar-routes", 7);
  }
  if (rf & 2) {
    const items_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction2(3, _c2, ctx_r0.routesKey, ɵɵpureFunction1(1, _c12, items_r2)));
  }
}
function SideMenuApplicationLayoutComponent_ng_template_2_lpx_navbar_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "lpx-navbar");
    ɵɵtemplate(1, SideMenuApplicationLayoutComponent_ng_template_2_lpx_navbar_0_ng_container_1_Template, 2, 0, "ng-container", 2)(2, SideMenuApplicationLayoutComponent_ng_template_2_lpx_navbar_0_ng_template_2_Template, 1, 6, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("abpIfReplaceableTemplateExists", ctx_r0.logoKey);
  }
}
function SideMenuApplicationLayoutComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_template_2_lpx_navbar_0_Template, 3, 1, "lpx-navbar", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx_r0.navbarKey));
  }
}
function SideMenuApplicationLayoutComponent_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuApplicationLayoutComponent_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx_r0.navItemsKey));
  }
}
function SideMenuApplicationLayoutComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SideMenuApplicationLayoutComponent_ng_container_3_ng_template_1_Template, 1, 3, "ng-template", 9);
    ɵɵelementContainerEnd();
  }
}
function SideMenuApplicationLayoutComponent_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuApplicationLayoutComponent_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx_r0.logoKey));
  }
}
function SideMenuApplicationLayoutComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SideMenuApplicationLayoutComponent_ng_container_4_ng_template_1_Template, 1, 3, "ng-template", 6);
    ɵɵelementContainerEnd();
  }
}
function SideMenuApplicationLayoutComponent_ng_container_5_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuApplicationLayoutComponent_ng_container_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_container_5_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx_r0.currentUserKey));
  }
}
function SideMenuApplicationLayoutComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SideMenuApplicationLayoutComponent_ng_container_5_ng_template_1_Template, 1, 3, "ng-template", 10);
    ɵɵelementContainerEnd();
  }
}
function SideMenuApplicationLayoutComponent_ng_container_6_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuApplicationLayoutComponent_ng_container_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_container_6_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx_r0.currentUserImageKey));
  }
}
function SideMenuApplicationLayoutComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SideMenuApplicationLayoutComponent_ng_container_6_ng_template_1_Template, 1, 3, "ng-template", 11);
    ɵɵelementContainerEnd();
  }
}
function SideMenuApplicationLayoutComponent_ng_container_7_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuApplicationLayoutComponent_ng_container_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_container_7_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx_r0.languageKey));
  }
}
function SideMenuApplicationLayoutComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SideMenuApplicationLayoutComponent_ng_container_7_ng_template_1_Template, 1, 3, "ng-template", 12);
    ɵɵelementContainerEnd();
  }
}
function SideMenuApplicationLayoutComponent_ng_container_8_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuApplicationLayoutComponent_ng_container_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_container_8_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx_r0.breadcrumbKey));
  }
}
function SideMenuApplicationLayoutComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SideMenuApplicationLayoutComponent_ng_container_8_ng_template_1_Template, 1, 3, "ng-template", 13);
    ɵɵelementContainerEnd();
  }
}
function SideMenuApplicationLayoutComponent_ng_container_9_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuApplicationLayoutComponent_ng_container_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_container_9_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx_r0.mobileNavbarKey));
  }
}
function SideMenuApplicationLayoutComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SideMenuApplicationLayoutComponent_ng_container_9_ng_template_1_Template, 1, 3, "ng-template", 14);
    ɵɵelementContainerEnd();
  }
}
function SideMenuApplicationLayoutComponent_ng_container_10_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuApplicationLayoutComponent_ng_container_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_container_10_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx_r0.mobileUserProfile));
  }
}
function SideMenuApplicationLayoutComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SideMenuApplicationLayoutComponent_ng_container_10_ng_template_1_Template, 1, 3, "ng-template", 15);
    ɵɵelementContainerEnd();
  }
}
function SideMenuApplicationLayoutComponent_ng_container_11_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuApplicationLayoutComponent_ng_container_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_container_11_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx_r0.footerKey));
  }
}
function SideMenuApplicationLayoutComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SideMenuApplicationLayoutComponent_ng_container_11_ng_template_1_Template, 1, 3, "ng-template", 16);
    ɵɵelementContainerEnd();
  }
}
function SideMenuApplicationLayoutComponent_ng_container_12_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SideMenuApplicationLayoutComponent_ng_container_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_container_12_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx_r0.mobileLanguageSelection));
  }
}
function SideMenuApplicationLayoutComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SideMenuApplicationLayoutComponent_ng_container_12_ng_template_1_Template, 1, 3, "ng-template", 17);
    ɵɵelementContainerEnd();
  }
}
function SideMenuApplicationLayoutComponent_ng_template_13_abp_page_alert_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-page-alert-container");
  }
}
function SideMenuApplicationLayoutComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SideMenuApplicationLayoutComponent_ng_template_13_abp_page_alert_container_0_Template, 1, 0, "abp-page-alert-container", 4);
    ɵɵelement(1, "router-outlet");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx_r0.pageAlertContainerKey));
  }
}
var EmptyLayoutComponent = class _EmptyLayoutComponent {
  static {
    this.type = "empty";
  }
  static {
    this.ɵfac = function EmptyLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmptyLayoutComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _EmptyLayoutComponent,
      selectors: [["abp-layout-empty"]],
      decls: 1,
      vars: 0,
      template: function EmptyLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "router-outlet");
        }
      },
      dependencies: [RouterModule, RouterOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmptyLayoutComponent, [{
    type: Component,
    args: [{
      selector: "abp-layout-empty",
      imports: [RouterModule],
      template: ` <router-outlet></router-outlet> `
    }]
  }], null, null);
})();
var LanguageSelectionComponent2 = class _LanguageSelectionComponent {
  constructor() {
    this.languageSelectionKey = "Theme.LanguagesComponent";
  }
  static {
    this.ɵfac = function LanguageSelectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguageSelectionComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LanguageSelectionComponent,
      selectors: [["abp-language-selection"]],
      decls: 1,
      vars: 3,
      consts: [[4, "abpReplaceableTemplate"]],
      template: function LanguageSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, LanguageSelectionComponent_lpx_language_selection_0_Template, 1, 0, "lpx-language-selection", 0);
        }
        if (rf & 2) {
          ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx.languageSelectionKey));
        }
      },
      dependencies: [ReplaceableTemplateDirective, LanguageSelectionComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSelectionComponent2, [{
    type: Component,
    args: [{
      selector: "abp-language-selection",
      imports: [ReplaceableTemplateDirective, LanguageSelectionComponent],
      template: '<lpx-language-selection *abpReplaceableTemplate="{\r\n        componentKey: languageSelectionKey\r\n      }">\r\n</lpx-language-selection>\r\n'
    }]
  }], null, null);
})();
var NavItemsComponent = class _NavItemsComponent {
  constructor() {
    this.navItems = inject(NavItemsService);
    this.trackByFn = (_, element) => element.id;
  }
  static {
    this.ɵfac = function NavItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavItemsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NavItemsComponent,
      selectors: [["abp-nav-items"]],
      decls: 3,
      vars: 2,
      consts: [[4, "abpVisible"], [4, "abpPermission"], [3, "ngComponentOutlet"], [3, "innerHTML"], [3, "click", "innerHTML"]],
      template: function NavItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, NavItemsComponent_For_1_Template, 1, 1, "ng-container", null, ɵɵrepeaterTrackByIndex);
          ɵɵpipe(2, "async");
        }
        if (rf & 2) {
          ɵɵrepeater(ɵɵpipeBind1(2, 0, ctx.navItems.items$));
        }
      },
      dependencies: [PermissionDirective, AbpVisibleDirective, NgComponentOutlet, AsyncPipe],
      styles: ["[_nghost-%COMP%]{all:inherit}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavItemsComponent, [{
    type: Component,
    args: [{
      selector: "abp-nav-items",
      imports: [PermissionDirective, AbpVisibleDirective, NgComponentOutlet, AsyncPipe],
      template: '@for (item of navItems.items$ | async; track $index) {\r\n  <!-- TODO: muhammaed: use pipe or etc instead of func exec -->\r\n  <ng-container *abpVisible="!item.visible || item.visible(item)">\r\n    <ng-container *abpPermission="item.requiredPolicy!">\r\n      @if (item.component) {\r\n        <ng-container [ngComponentOutlet]="item.component"></ng-container>\r\n      } @else {\r\n        <div\r\n          [innerHTML]="item.html"\r\n          (click)="item.action ? item.action() : null"\r\n        ></div>\r\n      }\r\n    </ng-container>\r\n  </ng-container>\r\n}\r\n',
      styles: [":host{all:inherit}\n"]
    }]
  }], null, null);
})();
var UserProfileComponent2 = class _UserProfileComponent {
  constructor() {
    this.key = "Theme.CurrentUserComponent";
  }
  static {
    this.ɵfac = function UserProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfileComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserProfileComponent,
      selectors: [["abp-user-profile"]],
      decls: 1,
      vars: 3,
      consts: [[4, "abpReplaceableTemplate"]],
      template: function UserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UserProfileComponent_lpx_user_profile_0_Template, 1, 0, "lpx-user-profile", 0);
        }
        if (rf & 2) {
          ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(1, _c02, ctx.key));
        }
      },
      dependencies: [ReplaceableTemplateDirective, UserProfileComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileComponent2, [{
    type: Component,
    args: [{
      selector: "abp-user-profile",
      imports: [ReplaceableTemplateDirective, UserProfileComponent],
      template: '<lpx-user-profile *abpReplaceableTemplate="{componentKey:key}"></lpx-user-profile>\r\n'
    }]
  }], null, null);
})();
var NavigateToLoginComponent = class _NavigateToLoginComponent {
  constructor() {
    this.authService = inject(AuthService);
  }
  navigateToLogin(event) {
    event.preventDefault();
    this.authService.navigateToLogin();
  }
  static {
    this.ɵfac = function NavigateToLoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavigateToLoginComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NavigateToLoginComponent,
      selectors: [["abp-navigate-to-login"]],
      decls: 4,
      vars: 3,
      consts: [["href", "#", 1, "nav-link", 3, "click"]],
      template: function NavigateToLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "a", 0);
          ɵɵdomListener("click", function NavigateToLoginComponent_Template_a_click_0_listener($event) {
            return ctx.navigateToLogin($event);
          });
          ɵɵdomElementStart(1, "span");
          ɵɵtext(2);
          ɵɵpipe(3, "abpLocalization");
          ɵɵdomElementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(3, 1, "AbpUi::Login"));
        }
      },
      dependencies: [LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigateToLoginComponent, [{
    type: Component,
    args: [{
      selector: "abp-navigate-to-login",
      template: `
    <a href="#" class="nav-link" (click)="navigateToLogin($event)">
      <span>{{ 'AbpUi::Login' | abpLocalization }}</span>
    </a>
  `,
      imports: [LocalizationPipe]
    }]
  }], null, null);
})();
var SideMenuApplicationLayoutComponent = class _SideMenuApplicationLayoutComponent {
  constructor() {
    this.toolbarKey = "Theme.ToolbarComponent";
    this.navbarKey = "Theme.NavbarComponent";
    this.routesKey = "Theme.RoutesComponent";
    this.navItemsKey = "Theme.NavItemsComponent";
    this.breadcrumbKey = "Theme.BreadcrumbComponent";
    this.footerKey = "Theme.FooterComponent";
    this.mobileNavbarKey = "Theme.MobileNavbarComponent";
    this.pageAlertContainerKey = "Theme.PageAlertContainerComponent";
    this.logoKey = "Theme.LogoComponent";
    this.currentUserKey = "Theme.CurrentUserComponent";
    this.currentUserImageKey = "Theme.CurrentUserImageComponent";
    this.languageKey = "Theme.LanguagesComponent";
    this.mobileUserProfile = "Theme.MobileUserProfileComponent";
    this.mobileLanguageSelection = "Theme.MobileLanguageSelectionComponent";
  }
  static {
    this.ɵfac = function SideMenuApplicationLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SideMenuApplicationLayoutComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SideMenuApplicationLayoutComponent,
      selectors: [["abp-application-layout"]],
      decls: 14,
      vars: 10,
      consts: [["layout", ""], ["lpx-navbar-panel", ""], [4, "abpIfReplaceableTemplateExists"], ["lpx-content", ""], [4, "abpReplaceableTemplate"], ["lpx-navbar-routes", ""], ["lpx-logo-panel", ""], [3, "navbarItems", 4, "abpReplaceableTemplate"], [3, "navbarItems"], ["lpx-topbar-content", ""], ["lpx-user-profile", ""], ["lpx-current-user-image-panel", ""], ["lpx-language-selection", ""], ["lpx-breadcrumb-panel", ""], ["lpx-mobile-navbar-panel", ""], ["lpx-mn-user-profile-panel", ""], ["lpx-footer-panel", ""], ["lpx-mn-language-selection", ""]],
      template: function SideMenuApplicationLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "lpx-layout", null, 0);
          ɵɵtemplate(2, SideMenuApplicationLayoutComponent_ng_template_2_Template, 1, 3, "ng-template", 1)(3, SideMenuApplicationLayoutComponent_ng_container_3_Template, 2, 0, "ng-container", 2)(4, SideMenuApplicationLayoutComponent_ng_container_4_Template, 2, 0, "ng-container", 2)(5, SideMenuApplicationLayoutComponent_ng_container_5_Template, 2, 0, "ng-container", 2)(6, SideMenuApplicationLayoutComponent_ng_container_6_Template, 2, 0, "ng-container", 2)(7, SideMenuApplicationLayoutComponent_ng_container_7_Template, 2, 0, "ng-container", 2)(8, SideMenuApplicationLayoutComponent_ng_container_8_Template, 2, 0, "ng-container", 2)(9, SideMenuApplicationLayoutComponent_ng_container_9_Template, 2, 0, "ng-container", 2)(10, SideMenuApplicationLayoutComponent_ng_container_10_Template, 2, 0, "ng-container", 2)(11, SideMenuApplicationLayoutComponent_ng_container_11_Template, 2, 0, "ng-container", 2)(12, SideMenuApplicationLayoutComponent_ng_container_12_Template, 2, 0, "ng-container", 2)(13, SideMenuApplicationLayoutComponent_ng_template_13_Template, 2, 3, "ng-template", 3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵproperty("abpIfReplaceableTemplateExists", ctx.navItemsKey);
          ɵɵadvance();
          ɵɵproperty("abpIfReplaceableTemplateExists", ctx.logoKey);
          ɵɵadvance();
          ɵɵproperty("abpIfReplaceableTemplateExists", ctx.currentUserKey);
          ɵɵadvance();
          ɵɵproperty("abpIfReplaceableTemplateExists", ctx.currentUserImageKey);
          ɵɵadvance();
          ɵɵproperty("abpIfReplaceableTemplateExists", ctx.languageKey);
          ɵɵadvance();
          ɵɵproperty("abpIfReplaceableTemplateExists", ctx.breadcrumbKey);
          ɵɵadvance();
          ɵɵproperty("abpIfReplaceableTemplateExists", ctx.mobileNavbarKey);
          ɵɵadvance();
          ɵɵproperty("abpIfReplaceableTemplateExists", ctx.mobileUserProfile);
          ɵɵadvance();
          ɵɵproperty("abpIfReplaceableTemplateExists", ctx.footerKey);
          ɵɵadvance();
          ɵɵproperty("abpIfReplaceableTemplateExists", ctx.mobileLanguageSelection);
        }
      },
      dependencies: [IfReplaceableTemplateExistsDirective, NavbarPanelDirective, LogoPanelDirective, ReplaceableTemplateDirective, NavbarRoutesDirective, TopbarContentPanelDirective, UserProfilePanelDirective, CurrentUserImagePanelDirective, LanguageSelectionPanelDirective, BreadcrumbPanelDirective, MobileNavbarPanelDirective, MobileUserProfilePanelDirective, FooterPanelDirective, MobileLanguageSelectionDirective, ContentPanelDirective, PageAlertContainerComponent, SideMenuLayoutComponent, NavbarComponent, NavbarRoutesComponent, RouterOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SideMenuApplicationLayoutComponent, [{
    type: Component,
    args: [{
      selector: "abp-application-layout",
      imports: [IfReplaceableTemplateExistsDirective, NavbarPanelDirective, LogoPanelDirective, ReplaceableTemplateDirective, NavbarRoutesDirective, TopbarContentPanelDirective, UserProfilePanelDirective, CurrentUserImagePanelDirective, LanguageSelectionPanelDirective, BreadcrumbPanelDirective, MobileNavbarPanelDirective, MobileUserProfilePanelDirective, FooterPanelDirective, MobileLanguageSelectionDirective, ContentPanelDirective, PageAlertContainerComponent, SideMenuLayoutComponent, NavbarComponent, NavbarRoutesComponent, RouterOutlet],
      template: '<lpx-layout #layout>\r\n  <ng-template lpx-navbar-panel>\r\n    <lpx-navbar\r\n      *abpReplaceableTemplate="{\r\n        componentKey: navbarKey\r\n      }"\r\n    >\r\n      <ng-container *abpIfReplaceableTemplateExists="logoKey">\r\n        <ng-template lpx-logo-panel>\r\n          <ng-container *abpReplaceableTemplate="{ componentKey: logoKey }">\r\n          </ng-container>\r\n        </ng-template>\r\n      </ng-container>\r\n\r\n      <ng-template lpx-navbar-routes let-items>\r\n        <lpx-navbar-routes\r\n          *abpReplaceableTemplate="{\r\n            componentKey: routesKey,\r\n            inputs: {\r\n              navbarItems: items\r\n            }\r\n          }"\r\n          [navbarItems]="items"\r\n        >\r\n        </lpx-navbar-routes>\r\n      </ng-template>\r\n    </lpx-navbar>\r\n  </ng-template>\r\n\r\n  <ng-container *abpIfReplaceableTemplateExists="navItemsKey">\r\n    <ng-template lpx-topbar-content>\r\n      <ng-container *abpReplaceableTemplate="{ componentKey: navItemsKey }">\r\n      </ng-container>\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n  <ng-container *abpIfReplaceableTemplateExists="logoKey">\r\n    <ng-template lpx-logo-panel>\r\n      <ng-container *abpReplaceableTemplate="{ componentKey: logoKey }">\r\n      </ng-container>\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n  <ng-container *abpIfReplaceableTemplateExists="currentUserKey">\r\n    <ng-template lpx-user-profile>\r\n      <ng-container *abpReplaceableTemplate="{ componentKey: currentUserKey }">\r\n      </ng-container>\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n  <ng-container *abpIfReplaceableTemplateExists="currentUserImageKey">\r\n    <ng-template lpx-current-user-image-panel>\r\n      <ng-container\r\n        *abpReplaceableTemplate="{ componentKey: currentUserImageKey }"\r\n      >\r\n      </ng-container>\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n  <ng-container *abpIfReplaceableTemplateExists="languageKey">\r\n    <ng-template lpx-language-selection>\r\n      <ng-container *abpReplaceableTemplate="{ componentKey: languageKey }">\r\n      </ng-container>\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n  <ng-container *abpIfReplaceableTemplateExists="breadcrumbKey">\r\n    <ng-template lpx-breadcrumb-panel>\r\n      <ng-container\r\n        *abpReplaceableTemplate="{\r\n          componentKey: breadcrumbKey\r\n        }"\r\n      >\r\n      </ng-container>\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n  <ng-container *abpIfReplaceableTemplateExists="mobileNavbarKey">\r\n    <ng-template lpx-mobile-navbar-panel>\r\n      <ng-container *abpReplaceableTemplate="{ componentKey: mobileNavbarKey }">\r\n      </ng-container>\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n  <ng-container *abpIfReplaceableTemplateExists="mobileUserProfile">\r\n    <ng-template lpx-mn-user-profile-panel>\r\n      <ng-container\r\n        *abpReplaceableTemplate="{ componentKey: mobileUserProfile }"\r\n      >\r\n      </ng-container>\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n  <ng-container *abpIfReplaceableTemplateExists="footerKey">\r\n    <ng-template lpx-footer-panel>\r\n      <ng-container *abpReplaceableTemplate="{ componentKey: footerKey }">\r\n      </ng-container>\r\n    </ng-template>\r\n  </ng-container>\r\n\r\n  <ng-container *abpIfReplaceableTemplateExists="mobileLanguageSelection">\r\n    <ng-template lpx-mn-language-selection>\r\n      <ng-container\r\n        *abpReplaceableTemplate="{ componentKey: mobileLanguageSelection }"\r\n      >\r\n      </ng-container>\r\n    </ng-template>\r\n  </ng-container>\r\n  <ng-template lpx-content>\r\n    <abp-page-alert-container\r\n      *abpReplaceableTemplate="{ componentKey: pageAlertContainerKey }"\r\n    ></abp-page-alert-container>\r\n\r\n    <router-outlet></router-outlet>\r\n  </ng-template>\r\n</lpx-layout>\r\n'
    }]
  }], null, null);
})();
var LPX_LAYOUT_PROVIDER = provideAppInitializer(() => {
  initLayouts();
});
function initLayouts() {
  const replaceableComponents = inject(ReplaceableComponentsService);
  replaceableComponents.add({
    key: "Theme.ApplicationLayoutComponent",
    component: SideMenuApplicationLayoutComponent
  });
  replaceableComponents.add({
    key: "Theme.EmptyLayoutComponent",
    component: EmptyLayoutComponent
  });
}
var NAV_ITEM_PROVIDER = provideAppInitializer(() => {
  addNavItems();
});
function addNavItems() {
  const navItems = inject(NavItemsService);
  const oAuthService = inject(OAuthService);
  const languageService = inject(LanguageService);
  navItems.addItems([{
    id: "Theme.LoginComponent",
    order: 100,
    visible: () => !oAuthService.hasValidAccessToken(),
    component: NavigateToLoginComponent
  }, {
    id: "Theme.LanguagesComponent",
    order: 100,
    visible: () => {
      const {
        languages
      } = languageService.store.state || {};
      return Array.isArray(languages) && languages.length > 1;
    },
    component: LanguageSelectionComponent2
  }, {
    id: "Theme.CurrentUserComponent",
    order: 100,
    component: UserProfileComponent2
  }]);
}
function provideSideMenuLayout() {
  const providers = [LPX_LAYOUT_PROVIDER, NAV_ITEM_PROVIDER, provideLpxSideMenuLayout(APPEND_DEFAULTS)];
  return makeEnvironmentProviders(providers);
}
var SideMenuLayoutModule = class _SideMenuLayoutModule {
  /**
   * @deprecated `SideMenuLayoutModule.forRoot()` is deprecated. You can use `provideSideMenuLayout` **function** instead.
   */
  static forRoot() {
    return {
      ngModule: _SideMenuLayoutModule,
      providers: [provideSideMenuLayout()]
    };
  }
  static {
    this.ɵfac = function SideMenuLayoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SideMenuLayoutModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SideMenuLayoutModule,
      imports: [CommonModule, LpxSideMenuLayoutModule, RouterModule, LpxNavbarModule, CoreModule, LeptonXAbpCoreModule, PanelsModule, UserProfileModule, LanguageSelectionModule, LpxTranslateModule, LpxFooterModule, SideMenuApplicationLayoutComponent, NavItemsComponent, LanguageSelectionComponent2, UserProfileComponent2, NavigateToLoginComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, LpxSideMenuLayoutModule, RouterModule, LpxNavbarModule, CoreModule, LeptonXAbpCoreModule, PanelsModule, UserProfileModule, LanguageSelectionModule, LpxTranslateModule, LpxFooterModule, SideMenuApplicationLayoutComponent, LanguageSelectionComponent2, UserProfileComponent2]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SideMenuLayoutModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LpxSideMenuLayoutModule, RouterModule, LpxNavbarModule, CoreModule, LeptonXAbpCoreModule, PanelsModule, UserProfileModule, LanguageSelectionModule, LpxTranslateModule, LpxFooterModule, SideMenuApplicationLayoutComponent, NavItemsComponent, LanguageSelectionComponent2, UserProfileComponent2, NavigateToLoginComponent]
    }]
  }], null, null);
})();
export {
  EmptyLayoutComponent,
  LPX_LAYOUT_PROVIDER,
  LanguageSelectionComponent2 as LanguageSelectionComponent,
  NAV_ITEM_PROVIDER,
  NavItemsComponent,
  NavigateToLoginComponent,
  SideMenuApplicationLayoutComponent,
  SideMenuLayoutModule,
  UserProfileComponent2 as UserProfileComponent,
  addNavItems,
  initLayouts,
  provideSideMenuLayout
};
//# sourceMappingURL=@abp_ng__theme__lepton-x_layouts.js.map
