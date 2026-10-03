import {
  ButtonComponent,
  ModalCloseDirective,
  ModalComponent,
  ToasterService
} from "./chunk-6MBLSBLR.js";
import {
  AbstractNavTreeService,
  ConfigStateService,
  LocalizationPipe,
  LocalizationService,
  NgxValidateCoreModule,
  PermissionDirective,
  RestService,
  RoutesService,
  ValidationDirective,
  ValidationGroupDirective,
  featuresFactory
} from "./chunk-NI4ZFAY4.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-T5EWVHFZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  NgModule,
  provideAppInitializer,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
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
  InjectionToken,
  Injector,
  combineLatest,
  debounceTime,
  finalize,
  inject,
  makeEnvironmentProviders,
  map,
  signal,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-TVT7XMKI.js";
import {
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/@abp/ng.setting-management/fesm2022/abp-ng.setting-management-proxy.mjs
var index$1 = Object.freeze({
  __proto__: null
});
var index = Object.freeze({
  __proto__: null,
  Abp: index$1
});
var EmailSettingsService = class _EmailSettingsService {
  constructor() {
    this.restService = inject(RestService);
    this.apiName = "SettingManagement";
    this.get = (config) => this.restService.request({
      method: "GET",
      url: "/api/setting-management/emailing"
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.sendTestEmail = (input, config) => this.restService.request({
      method: "POST",
      url: "/api/setting-management/emailing/send-test-email",
      body: input
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.update = (input, config) => this.restService.request({
      method: "POST",
      url: "/api/setting-management/emailing",
      body: input
    }, __spreadValues({
      apiName: this.apiName
    }, config));
  }
  static {
    this.ɵfac = function EmailSettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailSettingsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _EmailSettingsService,
      factory: _EmailSettingsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailSettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TimeZoneSettingsService = class _TimeZoneSettingsService {
  constructor() {
    this.restService = inject(RestService);
    this.apiName = "SettingManagement";
    this.get = (config) => this.restService.request({
      method: "GET",
      responseType: "text",
      url: "/api/setting-management/timezone"
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.getTimezones = (config) => this.restService.request({
      method: "GET",
      url: "/api/setting-management/timezone/timezones"
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.update = (timezone, config) => this.restService.request({
      method: "POST",
      url: "/api/setting-management/timezone",
      params: {
        timezone
      }
    }, __spreadValues({
      apiName: this.apiName
    }, config));
  }
  static {
    this.ɵfac = function TimeZoneSettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeZoneSettingsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TimeZoneSettingsService,
      factory: _TimeZoneSettingsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeZoneSettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@abp/ng.setting-management/fesm2022/abp-ng.setting-management-config.mjs
function EmailSettingGroupComponent_Conditional_0_button_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 26);
    ɵɵlistener("click", function EmailSettingGroupComponent_Conditional_0_button_58_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.openSendEmailModal());
    });
    ɵɵelement(1, "i", 27);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "AbpSettingManagement::SendTestEmail"), " ");
  }
}
function EmailSettingGroupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 5);
    ɵɵlistener("ngSubmit", function EmailSettingGroupComponent_Conditional_0_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.submit());
    });
    ɵɵelementStart(1, "div", 6)(2, "label", 7);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementStart(5, "span", 8);
    ɵɵtext(6, "*");
    ɵɵelementEnd()();
    ɵɵelement(7, "input", 9);
    ɵɵcontrolCreate();
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 6)(9, "label", 7);
    ɵɵtext(10);
    ɵɵpipe(11, "abpLocalization");
    ɵɵelementStart(12, "span", 8);
    ɵɵtext(13, "*");
    ɵɵelementEnd()();
    ɵɵelement(14, "input", 10);
    ɵɵcontrolCreate();
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 6)(16, "label", 7);
    ɵɵtext(17);
    ɵɵpipe(18, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(19, "input", 11);
    ɵɵcontrolCreate();
    ɵɵelementEnd();
    ɵɵelementStart(20, "div", 6)(21, "label", 7);
    ɵɵtext(22);
    ɵɵpipe(23, "abpLocalization");
    ɵɵelementStart(24, "span", 8);
    ɵɵtext(25, "*");
    ɵɵelementEnd()();
    ɵɵelement(26, "input", 12);
    ɵɵcontrolCreate();
    ɵɵelementEnd();
    ɵɵelementStart(27, "div", 13);
    ɵɵelement(28, "input", 14);
    ɵɵcontrolCreate();
    ɵɵelementStart(29, "label", 15);
    ɵɵtext(30);
    ɵɵpipe(31, "abpLocalization");
    ɵɵelementEnd()();
    ɵɵelementStart(32, "div", 13);
    ɵɵelement(33, "input", 16);
    ɵɵcontrolCreate();
    ɵɵelementStart(34, "label", 17);
    ɵɵtext(35);
    ɵɵpipe(36, "abpLocalization");
    ɵɵelementEnd()();
    ɵɵelementStart(37, "div", 18)(38, "div", 19)(39, "div", 6)(40, "label", 7);
    ɵɵtext(41);
    ɵɵpipe(42, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(43, "input", 20);
    ɵɵcontrolCreate();
    ɵɵelementEnd();
    ɵɵelementStart(44, "div", 6)(45, "label", 7);
    ɵɵtext(46);
    ɵɵpipe(47, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(48, "input", 21);
    ɵɵcontrolCreate();
    ɵɵelementEnd();
    ɵɵelementStart(49, "div", 22)(50, "label", 7);
    ɵɵtext(51);
    ɵɵpipe(52, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(53, "input", 23);
    ɵɵcontrolCreate();
    ɵɵelementEnd()()();
    ɵɵelement(54, "hr");
    ɵɵelementStart(55, "abp-button", 24);
    ɵɵtext(56);
    ɵɵpipe(57, "abpLocalization");
    ɵɵelementEnd();
    ɵɵtemplate(58, EmailSettingGroupComponent_Conditional_0_button_58_Template, 4, 3, "button", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const emailForm_r4 = ctx;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", emailForm_r4)("validateOnSubmit", true);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 15, "AbpSettingManagement::DefaultFromDisplayName"));
    ɵɵadvance(4);
    ɵɵcontrol();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 17, "AbpSettingManagement::DefaultFromAddress"));
    ɵɵadvance(4);
    ɵɵcontrol();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(18, 19, "AbpSettingManagement::SmtpHost"));
    ɵɵadvance(2);
    ɵɵcontrol();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(23, 21, "AbpSettingManagement::SmtpPort"));
    ɵɵadvance(4);
    ɵɵcontrol();
    ɵɵadvance(2);
    ɵɵcontrol();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(31, 23, "AbpSettingManagement::SmtpEnableSsl"));
    ɵɵadvance(3);
    ɵɵcontrol();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(36, 25, "AbpSettingManagement::SmtpUseDefaultCredentials"));
    ɵɵadvance(2);
    ɵɵclassProp("abp-collapse-y-collapsed", emailForm_r4.get("smtpUseDefaultCredentials")?.value);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(42, 27, "AbpSettingManagement::SmtpDomain"));
    ɵɵadvance(2);
    ɵɵcontrol();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(47, 29, "AbpSettingManagement::SmtpUserName"));
    ɵɵadvance(2);
    ɵɵcontrol();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(52, 31, "AbpSettingManagement::SmtpPassword"));
    ɵɵadvance(2);
    ɵɵcontrol();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(57, 33, "AbpSettingManagement::Save"), " ");
    ɵɵadvance(2);
    ɵɵproperty("abpPermission", ctx_r1.emailingPolicy);
  }
}
function EmailSettingGroupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "AbpSettingManagement::SendTestEmail"));
  }
}
function EmailSettingGroupComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 28);
    ɵɵlistener("ngSubmit", function EmailSettingGroupComponent_ng_template_4_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.emailTestFormSubmit());
    });
    ɵɵelementStart(1, "div", 6)(2, "label", 7);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(5, "input", 29);
    ɵɵcontrolCreate();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 6)(7, "label", 7);
    ɵɵtext(8);
    ɵɵpipe(9, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(10, "input", 30);
    ɵɵcontrolCreate();
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 6)(12, "label", 7);
    ɵɵtext(13);
    ɵɵpipe(14, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(15, "input", 31);
    ɵɵcontrolCreate();
    ɵɵelementEnd();
    ɵɵelementStart(16, "div", 6)(17, "label", 7);
    ɵɵtext(18);
    ɵɵpipe(19, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(20, "textarea", 32);
    ɵɵcontrolCreate();
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.emailTestForm);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 5, "AbpSettingManagement::SenderEmailAddress"));
    ɵɵadvance(2);
    ɵɵcontrol();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(9, 7, "AbpSettingManagement::TargetEmailAddress"));
    ɵɵadvance(2);
    ɵɵcontrol();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(14, 9, "AbpSettingManagement::Subject"));
    ɵɵadvance(2);
    ɵɵcontrol();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(19, 11, "AbpSettingManagement::Body"));
    ɵɵadvance(2);
    ɵɵcontrol();
  }
}
function EmailSettingGroupComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "abp-button", 33)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd()();
    ɵɵelementStart(4, "button", 34);
    ɵɵtext(5);
    ɵɵpipe(6, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r1.emailTestForm.invalid && ctx_r1.emailTestForm.dirty);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 3, "AbpSettingManagement::Send"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 5, "AbpUi::Close"), " ");
  }
}
var {
  required,
  email
} = Validators;
var EmailSettingGroupComponent = class _EmailSettingGroupComponent {
  constructor() {
    this.emailSettingsService = inject(EmailSettingsService);
    this.fb = inject(UntypedFormBuilder);
    this.toasterService = inject(ToasterService);
    this.localizationService = inject(LocalizationService);
    this.configStateSevice = inject(ConfigStateService);
    this.currentUserEmail = toSignal(this.configStateSevice.getDeep$(["currentUser", "email"]));
    this.form = signal(
      void 0,
      ...ngDevMode ? [{
        debugName: "form"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      true,
      ...ngDevMode ? [{
        debugName: "loading"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.saving = signal(
      false,
      ...ngDevMode ? [{
        debugName: "saving"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isEmailTestModalOpen = signal(
      false,
      ...ngDevMode ? [{
        debugName: "isEmailTestModalOpen"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.emailingPolicy = "SettingManagement.Emailing";
    this.modalSize = {
      size: "lg"
    };
  }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.loading.set(true);
    this.emailSettingsService.get().subscribe({
      next: (res) => {
        this.form.set(this.buildForm(res));
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  buildForm(emailSettings) {
    return this.fb.group({
      defaultFromDisplayName: [emailSettings.defaultFromDisplayName, [Validators.required]],
      defaultFromAddress: [emailSettings.defaultFromAddress, [Validators.required]],
      smtpHost: [emailSettings.smtpHost],
      smtpPort: [emailSettings.smtpPort, [Validators.required]],
      smtpEnableSsl: [emailSettings.smtpEnableSsl],
      smtpUseDefaultCredentials: [emailSettings.smtpUseDefaultCredentials],
      smtpDomain: [emailSettings.smtpDomain],
      smtpUserName: [emailSettings.smtpUserName],
      smtpPassword: [emailSettings.smtpPassword]
    });
  }
  submit() {
    const form = this.form();
    if (!form || this.saving() || form.invalid) return;
    this.saving.set(true);
    this.emailSettingsService.update(form.value).pipe(finalize(() => this.saving.set(false))).subscribe(() => {
      this.toasterService.success("AbpSettingManagement::SavedSuccessfully");
      this.getData();
    });
  }
  openSendEmailModal() {
    this.buildEmailTestForm();
    this.isEmailTestModalOpen.set(true);
  }
  buildEmailTestForm() {
    const {
      defaultFromAddress
    } = this.form()?.value || {};
    const defaultSubject = this.localizationService.instant("AbpSettingManagement::TestEmailSubject", ...[Math.floor(Math.random() * 9999).toString()]);
    const defaultBody = this.localizationService.instant("AbpSettingManagement::TestEmailBody");
    this.emailTestForm = this.fb.group({
      senderEmailAddress: [defaultFromAddress || "", [required, email]],
      targetEmailAddress: [this.currentUserEmail(), [required, email]],
      subject: [defaultSubject, [required]],
      body: [defaultBody]
    });
  }
  emailTestFormSubmit() {
    if (this.emailTestForm.invalid) {
      return;
    }
    this.emailSettingsService.sendTestEmail(this.emailTestForm.value).subscribe(() => {
      this.toasterService.success("AbpSettingManagement::SentSuccessfully");
      this.isEmailTestModalOpen.set(false);
    });
  }
  static {
    this.ɵfac = function EmailSettingGroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailSettingGroupComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _EmailSettingGroupComponent,
      selectors: [["abp-email-setting-group"]],
      decls: 8,
      vars: 3,
      consts: [["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], [1, "py-2", "abp-md-form", 3, "formGroup", "validateOnSubmit"], [3, "visibleChange", "visible", "options"], [1, "py-2", "abp-md-form", 3, "ngSubmit", "formGroup", "validateOnSubmit"], [1, "mb-3", "form-group"], [1, "form-label"], [1, "ms-1"], ["type", "text", "formControlName", "defaultFromDisplayName", 1, "form-control"], ["type", "text", "formControlName", "defaultFromAddress", 1, "form-control"], ["type", "text", "formControlName", "smtpHost", 1, "form-control"], ["type", "number", "formControlName", "smtpPort", 1, "form-control"], [1, "form-check", "mb-2"], ["type", "checkbox", "id", "smtp-enable-ssl", "formControlName", "smtpEnableSsl", 1, "form-check-input"], ["for", "smtp-enable-ssl", 1, "form-check-label"], ["type", "checkbox", "id", "smtp-use-default-credentials", "formControlName", "smtpUseDefaultCredentials", 1, "form-check-input"], ["for", "smtp-use-default-credentials", 1, "form-check-label"], [1, "abp-collapse-y"], [1, "abp-collapse-y-inner"], ["type", "text", "formControlName", "smtpDomain", 1, "form-control"], ["type", "text", "formControlName", "smtpUserName", 1, "form-control"], [1, "form-group"], ["type", "password", "formControlName", "smtpPassword", 1, "form-control"], ["buttonType", "submit", "iconClass", "fa fa-save"], ["type", "button", "class", "btn btn-primary mx-2", 3, "click", 4, "abpPermission"], ["type", "button", 1, "btn", "btn-primary", "mx-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "f-send"], ["id", "emailTestForm", 3, "ngSubmit", "formGroup"], ["formControlName", "senderEmailAddress", 1, "form-control"], ["formControlName", "targetEmailAddress", 1, "form-control"], ["formControlName", "subject", 1, "form-control"], ["formControlName", "body", 1, "form-control"], ["buttonType", "submit", "iconClass", "fa fa-send", "formName", "emailTestForm", 3, "disabled"], ["type", "button", "abpClose", "", 1, "btn", "btn-secondary"]],
      template: function EmailSettingGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, EmailSettingGroupComponent_Conditional_0_Template, 59, 35, "form", 3);
          ɵɵelementStart(1, "abp-modal", 4);
          ɵɵlistener("visibleChange", function EmailSettingGroupComponent_Template_abp_modal_visibleChange_1_listener($event) {
            return ctx.isEmailTestModalOpen.set($event);
          });
          ɵɵtemplate(2, EmailSettingGroupComponent_ng_template_2_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, EmailSettingGroupComponent_ng_template_4_Template, 21, 13, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, EmailSettingGroupComponent_ng_template_6_Template, 7, 7, "ng-template", null, 2, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_3_0;
          ɵɵconditional((tmp_3_0 = ctx.form()) ? 0 : -1, tmp_3_0);
          ɵɵadvance();
          ɵɵproperty("visible", ctx.isEmailTestModalOpen())("options", ctx.modalSize);
        }
      },
      dependencies: [ReactiveFormsModule, ɵNgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ButtonComponent, ModalComponent, ModalCloseDirective, NgxValidateCoreModule, ValidationGroupDirective, ValidationDirective, PermissionDirective, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailSettingGroupComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-email-setting-group",
      imports: [ReactiveFormsModule, LocalizationPipe, ButtonComponent, ModalComponent, ModalCloseDirective, NgxValidateCoreModule, PermissionDirective],
      template: `@if (form(); as emailForm) {\r
  <form\r
    [formGroup]="emailForm"\r
    class="py-2 abp-md-form"\r
    (ngSubmit)="submit()"\r
    [validateOnSubmit]="true"\r
  >\r
    <div class="mb-3 form-group">\r
      <label class="form-label"\r
        >{{ 'AbpSettingManagement::DefaultFromDisplayName' | abpLocalization\r
        }}<span class="ms-1">*</span></label\r
      >\r
      <input type="text" class="form-control" formControlName="defaultFromDisplayName" />\r
    </div>\r
    <div class="mb-3 form-group">\r
      <label class="form-label"\r
        >{{ 'AbpSettingManagement::DefaultFromAddress' | abpLocalization\r
        }}<span class="ms-1">*</span></label\r
      >\r
      <input type="text" class="form-control" formControlName="defaultFromAddress" />\r
    </div>\r
    <div class="mb-3 form-group">\r
      <label class="form-label">{{ 'AbpSettingManagement::SmtpHost' | abpLocalization }}</label>\r
      <input type="text" class="form-control" formControlName="smtpHost" />\r
    </div>\r
    <div class="mb-3 form-group">\r
      <label class="form-label"\r
        >{{ 'AbpSettingManagement::SmtpPort' | abpLocalization }}<span class="ms-1">*</span></label\r
      >\r
      <input type="number" class="form-control" formControlName="smtpPort" />\r
    </div>\r
\r
    <div class="form-check mb-2">\r
      <input\r
        type="checkbox"\r
        id="smtp-enable-ssl"\r
        class="form-check-input"\r
        formControlName="smtpEnableSsl"\r
      />\r
      <label class="form-check-label" for="smtp-enable-ssl">{{\r
        'AbpSettingManagement::SmtpEnableSsl' | abpLocalization\r
      }}</label>\r
    </div>\r
    <div class="form-check mb-2">\r
      <input\r
        type="checkbox"\r
        id="smtp-use-default-credentials"\r
        class="form-check-input"\r
        formControlName="smtpUseDefaultCredentials"\r
      />\r
      <label class="form-check-label" for="smtp-use-default-credentials">{{\r
        'AbpSettingManagement::SmtpUseDefaultCredentials' | abpLocalization\r
      }}</label>\r
    </div>\r
\r
    <div\r
      class="abp-collapse-y"\r
      [class.abp-collapse-y-collapsed]="emailForm.get('smtpUseDefaultCredentials')?.value"\r
    >\r
      <div class="abp-collapse-y-inner">\r
        <div class="mb-3 form-group">\r
          <label class="form-label">{{\r
            'AbpSettingManagement::SmtpDomain' | abpLocalization\r
          }}</label>\r
          <input type="text" class="form-control" formControlName="smtpDomain" />\r
        </div>\r
\r
        <div class="mb-3 form-group">\r
          <label class="form-label">{{\r
            'AbpSettingManagement::SmtpUserName' | abpLocalization\r
          }}</label>\r
          <input type="text" class="form-control" formControlName="smtpUserName" />\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="form-label">{{\r
            'AbpSettingManagement::SmtpPassword' | abpLocalization\r
          }}</label>\r
          <input type="password" class="form-control" formControlName="smtpPassword" />\r
        </div>\r
      </div>\r
    </div>\r
\r
    <hr />\r
\r
    <abp-button buttonType="submit" iconClass="fa fa-save">\r
      {{ 'AbpSettingManagement::Save' | abpLocalization }}\r
    </abp-button>\r
    <button\r
      *abpPermission="emailingPolicy"\r
      type="button"\r
      (click)="openSendEmailModal()"\r
      class="btn btn-primary mx-2"\r
    >\r
      <i class="fa f-send" aria-hidden="true"></i>\r
      {{ 'AbpSettingManagement::SendTestEmail' | abpLocalization }}\r
    </button>\r
  </form>\r
}\r
\r
<abp-modal\r
  [visible]="isEmailTestModalOpen()"\r
  (visibleChange)="isEmailTestModalOpen.set($event)"\r
  [options]="modalSize"\r
>\r
  <ng-template #abpHeader>\r
    <h3>{{ 'AbpSettingManagement::SendTestEmail' | abpLocalization }}</h3>\r
  </ng-template>\r
\r
  <ng-template #abpBody>\r
    <form [formGroup]="emailTestForm" id="emailTestForm" (ngSubmit)="emailTestFormSubmit()">\r
      <div class="mb-3 form-group">\r
        <label class="form-label">{{\r
          'AbpSettingManagement::SenderEmailAddress' | abpLocalization\r
        }}</label>\r
        <input class="form-control" formControlName="senderEmailAddress" />\r
      </div>\r
\r
      <div class="mb-3 form-group">\r
        <label class="form-label">{{\r
          'AbpSettingManagement::TargetEmailAddress' | abpLocalization\r
        }}</label>\r
        <input class="form-control" formControlName="targetEmailAddress" />\r
      </div>\r
\r
      <div class="mb-3 form-group">\r
        <label class="form-label">{{ 'AbpSettingManagement::Subject' | abpLocalization }}</label>\r
        <input class="form-control" formControlName="subject" />\r
      </div>\r
\r
      <div class="mb-3 form-group">\r
        <label class="form-label">{{ 'AbpSettingManagement::Body' | abpLocalization }}</label>\r
        <textarea class="form-control" formControlName="body"></textarea>\r
      </div>\r
    </form>\r
  </ng-template>\r
\r
  <ng-template #abpFooter>\r
    <abp-button\r
      buttonType="submit"\r
      iconClass="fa fa-send"\r
      formName="emailTestForm"\r
      [disabled]="emailTestForm.invalid && emailTestForm.dirty"\r
    >\r
      <span>{{ 'AbpSettingManagement::Send' | abpLocalization }}</span>\r
    </abp-button>\r
\r
    <button type="button" class="btn btn-secondary" abpClose>\r
      {{ 'AbpUi::Close' | abpLocalization }}\r
    </button>\r
  </ng-template>\r
</abp-modal>\r
`
    }]
  }], null, null);
})();
var SettingTabsService = class _SettingTabsService extends AbstractNavTreeService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵSettingTabsService_BaseFactory;
      return function SettingTabsService_Factory(__ngFactoryType__) {
        return (ɵSettingTabsService_BaseFactory || (ɵSettingTabsService_BaseFactory = ɵɵgetInheritedFactory(_SettingTabsService)))(__ngFactoryType__ || _SettingTabsService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SettingTabsService,
      factory: _SettingTabsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingTabsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function configureRoutes() {
  const routesService = inject(RoutesService);
  routesService.add([{
    name: "AbpSettingManagement::Settings",
    path: "/setting-management",
    parentName: "AbpUiNavigation::Menu:Administration",
    layout: "application",
    order: 100,
    iconClass: "fa fa-cog"
  }]);
}
var SETTING_MANAGEMENT_HAS_SETTING = new InjectionToken("SETTING_MANAGEMENT_HAS_SETTING", {
  factory: () => {
    const settingTabsService = inject(SettingTabsService);
    return settingTabsService.visible$.pipe(debounceTime(0), map((nodes) => !!nodes.length));
  }
});
var SETTING_MANAGEMENT_ROUTE_PROVIDERS = [provideAppInitializer(() => {
  configureRoutes();
  inject(SETTING_MANAGEMENT_HAS_SETTING);
})];
var SETTING_MANAGEMENT_SETTING_TAB_PROVIDERS = [provideAppInitializer(() => {
  configureSettingTabs();
})];
function configureSettingTabs() {
  const settingTabs = inject(SettingTabsService);
  settingTabs.add([{
    name: "AbpSettingManagement::Menu:Emailing",
    order: 100,
    requiredPolicy: "SettingManagement.Emailing",
    component: EmailSettingGroupComponent
  }]);
}
var SETTING_MANAGEMENT_FEATURES = new InjectionToken("SETTING_MANAGEMENT_FEATURES", {
  providedIn: "root",
  factory: () => {
    const configState = inject(ConfigStateService);
    const featureKey = "SettingManagement.Enable";
    const mapFn = (features) => ({
      enable: features[featureKey].toLowerCase() !== "false"
    });
    return featuresFactory(configState, [featureKey], mapFn);
  }
});
var SETTING_MANAGEMENT_ROUTE_VISIBILITY = new InjectionToken("SETTING_MANAGEMENT_ROUTE_VISIBILITY", {
  providedIn: "root",
  factory: () => {
    const stream = inject(SETTING_MANAGEMENT_FEATURES);
    return stream.pipe(map((features) => features.enable));
  }
});
var SETTING_MANAGEMENT_FEATURES_PROVIDERS = [provideAppInitializer(() => {
  inject(SETTING_MANAGEMENT_ROUTE_VISIBILITY);
})];
var SETTING_MANAGEMENT_VISIBLE_PROVIDERS = [provideAppInitializer(() => {
  setSettingManagementVisibility();
})];
function setSettingManagementVisibility() {
  const injector = inject(Injector);
  const settingManagementHasSetting$ = injector.get(SETTING_MANAGEMENT_HAS_SETTING);
  const isSettingManagementFeatureEnable$ = injector.get(SETTING_MANAGEMENT_ROUTE_VISIBILITY);
  const routes = injector.get(RoutesService);
  combineLatest([settingManagementHasSetting$, isSettingManagementFeatureEnable$]).subscribe(([settingManagementHasSetting, isSettingManagementFeatureEnable]) => {
    routes.patch("AbpSettingManagement::Settings", {
      invisible: !(settingManagementHasSetting && isSettingManagementFeatureEnable)
    });
  });
}
function provideSettingManagementConfig() {
  return makeEnvironmentProviders([SETTING_MANAGEMENT_ROUTE_PROVIDERS, SETTING_MANAGEMENT_SETTING_TAB_PROVIDERS, SETTING_MANAGEMENT_FEATURES_PROVIDERS, SETTING_MANAGEMENT_VISIBLE_PROVIDERS]);
}
var EmailSettingsService2 = class _EmailSettingsService {
  constructor() {
    this.restService = inject(RestService);
    this.apiName = "SettingManagement";
    this.get = () => this.restService.request({
      method: "GET",
      url: "/api/setting-management/emailing"
    }, {
      apiName: this.apiName
    });
    this.sendTestEmail = (input) => this.restService.request({
      method: "POST",
      url: "/api/setting-management/emailing/send-test-email",
      body: input
    }, {
      apiName: this.apiName
    });
    this.update = (input) => this.restService.request({
      method: "POST",
      url: "/api/setting-management/emailing",
      body: input
    }, {
      apiName: this.apiName
    });
  }
  static {
    this.ɵfac = function EmailSettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailSettingsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _EmailSettingsService,
      factory: _EmailSettingsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailSettingsService2, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SettingManagementConfigModule = class _SettingManagementConfigModule {
  /**
   * @deprecated forRoot method is deprecated, use `provideSettingManagementConfig` *function* for config settings.
   */
  static forRoot() {
    return {
      ngModule: _SettingManagementConfigModule,
      providers: [provideSettingManagementConfig()]
    };
  }
  static {
    this.ɵfac = function SettingManagementConfigModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingManagementConfigModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SettingManagementConfigModule,
      imports: [EmailSettingGroupComponent],
      exports: [EmailSettingGroupComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [EmailSettingGroupComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingManagementConfigModule, [{
    type: NgModule,
    args: [{
      imports: [EmailSettingGroupComponent],
      declarations: [],
      exports: [EmailSettingGroupComponent]
    }]
  }], null, null);
})();

export {
  EmailSettingGroupComponent,
  SettingTabsService,
  configureRoutes,
  SETTING_MANAGEMENT_HAS_SETTING,
  SETTING_MANAGEMENT_ROUTE_PROVIDERS,
  SETTING_MANAGEMENT_SETTING_TAB_PROVIDERS,
  configureSettingTabs,
  SETTING_MANAGEMENT_FEATURES,
  SETTING_MANAGEMENT_ROUTE_VISIBILITY,
  SETTING_MANAGEMENT_FEATURES_PROVIDERS,
  SETTING_MANAGEMENT_VISIBLE_PROVIDERS,
  setSettingManagementVisibility,
  provideSettingManagementConfig,
  EmailSettingsService2 as EmailSettingsService,
  SettingManagementConfigModule
};
//# sourceMappingURL=chunk-FTPM2NMA.js.map
