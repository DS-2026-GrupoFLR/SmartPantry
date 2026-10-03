import {
  OAuthErrorEvent,
  OAuthInfoEvent,
  OAuthModule,
  OAuthService,
  OAuthStorage
} from "./chunk-YULIF5VP.js";
import {
  APP_STARTED_WITH_SSR,
  AbpCookieStorageService,
  AbpLocalStorageService,
  AbpWindowService,
  AbstractAuthErrorFilter,
  ApiInterceptor,
  AuthErrorFilterService,
  AuthGuard,
  AuthService,
  CHECK_AUTHENTICATION_STATE_FN_KEY,
  CORE_OPTIONS,
  ConfigStateService,
  EnvironmentService,
  HttpErrorReporterService,
  HttpWaitService,
  IS_EXTERNAL_REQUEST,
  NAVIGATE_TO_MANAGE_PROFILE,
  PIPE_TO_LOGIN_FN_KEY,
  SessionStateService,
  TENANT_KEY,
  asyncAuthGuard,
  authGuard,
  collectionCompare,
  noop
} from "./chunk-NI4ZFAY4.js";
import {
  Router
} from "./chunk-VHKPOJBK.js";
import {
  HTTP_INTERCEPTORS,
  HttpHeaders
} from "./chunk-LMDSVWKI.js";
import "./chunk-KEK2ONVT.js";
import "./chunk-T5EWVHFZ.js";
import {
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-IMWYUKDZ.js";
import {
  Inject,
  Injectable,
  NgModule,
  Optional,
  REQUEST,
  RESPONSE_INIT,
  provideAppInitializer,
  setClassMetadata,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory
} from "./chunk-EZ2ZVKYO.js";
import {
  takeUntilDestroyed
} from "./chunk-HM3VFUK5.js";
import {
  DOCUMENT,
  DestroyRef,
  EMPTY,
  InjectionToken,
  Injector,
  PLATFORM_ID,
  catchError,
  filter,
  finalize,
  firstValueFrom,
  from,
  fromEvent,
  inject,
  lastValueFrom,
  makeEnvironmentProviders,
  map,
  of,
  pipe,
  signal,
  switchMap,
  take,
  tap,
  timeout,
  timer,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵinject
} from "./chunk-TVT7XMKI.js";
import {
  __async,
  __spreadValues,
  __superGet
} from "./chunk-3RPBTBI6.js";

// node_modules/@abp/ng.oauth/fesm2022/abp-ng.oauth.mjs
var NavigateToManageProfileProvider = {
  provide: NAVIGATE_TO_MANAGE_PROFILE,
  useFactory: () => {
    const environment = inject(EnvironmentService);
    return () => {
      const env = environment.getEnvironment();
      if (!env.oAuthConfig) {
        console.warn("The oAuthConfig env is missing on environment.ts");
        return;
      }
      const {
        issuer
      } = env.oAuthConfig;
      const path = issuer.endsWith("/") ? issuer : `${issuer}/`;
      window.open(`${path}Account/Manage?returnUrl=${window.location.href}`, "_self");
    };
  }
};
var AbpOAuthGuard = class _AbpOAuthGuard {
  constructor() {
    this.oAuthService = inject(OAuthService);
    this.authService = inject(AuthService);
  }
  canActivate(route, state) {
    const hasValidAccessToken = this.oAuthService.hasValidAccessToken();
    if (hasValidAccessToken) {
      return true;
    }
    const params = {
      returnUrl: state.url
    };
    this.authService.navigateToLogin(params);
    return false;
  }
  static {
    this.ɵfac = function AbpOAuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbpOAuthGuard)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AbpOAuthGuard,
      factory: _AbpOAuthGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpOAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var abpOAuthGuard = (route, state) => {
  const oAuthService = inject(OAuthService);
  const authService = inject(AuthService);
  const platformId = inject(PLATFORM_ID);
  const resInit = inject(RESPONSE_INIT);
  const environmentService = inject(EnvironmentService);
  const hasValidAccessToken = oAuthService.hasValidAccessToken();
  if (hasValidAccessToken) {
    return true;
  }
  const params = {
    returnUrl: state.url
  };
  if (isPlatformServer(platformId) && resInit) {
    const ssrAuthorizationUrl = environmentService.getEnvironment().oAuthConfig.ssrAuthorizationUrl;
    const url = buildLoginUrl(ssrAuthorizationUrl, params);
    const headers = new Headers(resInit.headers);
    headers.set("Location", url);
    resInit.status = 302;
    resInit.statusText = "Found";
    resInit.headers = headers;
    return;
  }
  authService.navigateToLogin(params);
  return false;
};
var buildLoginUrl = (path, params) => {
  if (!params || Object.keys(params).length === 0) return path;
  const usp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v == null) continue;
    Array.isArray(v) ? v.forEach((x) => usp.append(k, String(x))) : usp.set(k, String(v));
  }
  return `${path}?${usp.toString()}`;
};
var asyncAbpOAuthGuard = (route, state) => {
  const oAuthService = inject(OAuthService);
  const authService = inject(AuthService);
  const environmentService = inject(EnvironmentService);
  const platformId = inject(PLATFORM_ID);
  const resInit = inject(RESPONSE_INIT);
  const {
    oAuthConfig
  } = environmentService.getEnvironment();
  if (oAuthConfig?.responseType === "code") {
    return firstValueFrom(timer(0, 100).pipe(map(() => oAuthService.hasValidAccessToken()), filter(Boolean), take(1), timeout(3e3), catchError(() => {
      if (isPlatformServer(platformId) && resInit) {
        const ssrAuthorizationUrl = environmentService.getEnvironment().oAuthConfig.ssrAuthorizationUrl;
        const url = buildLoginUrl(ssrAuthorizationUrl, {
          returnUrl: state.url
        });
        const headers = new Headers(resInit.headers);
        headers.set("Location", url);
        resInit.status = 302;
        resInit.statusText = "Found";
        resInit.headers = headers;
        return;
      }
      authService.navigateToLogin({
        returnUrl: state.url
      });
      return of(false);
    })));
  }
  if (oAuthService.hasValidAccessToken()) {
    return true;
  }
  authService.navigateToLogin({
    returnUrl: state.url
  });
  return false;
};
var OAuthConfigurationHandler = class _OAuthConfigurationHandler {
  constructor() {
    this.oAuthService = inject(OAuthService);
    this.environmentService = inject(EnvironmentService);
    this.options = inject(CORE_OPTIONS);
    this.listenToSetEnvironment();
  }
  listenToSetEnvironment() {
    this.environmentService.createOnUpdateStream((state) => state).pipe(map((environment) => environment.oAuthConfig), filter((config) => !collectionCompare(config, this.options.environment.oAuthConfig))).subscribe((config) => {
      this.oAuthService.configure(config);
    });
  }
  static {
    this.ɵfac = function OAuthConfigurationHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OAuthConfigurationHandler)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OAuthConfigurationHandler,
      factory: _OAuthConfigurationHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OAuthConfigurationHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var OAuthApiInterceptor = class _OAuthApiInterceptor {
  constructor() {
    this.oAuthService = inject(OAuthService);
    this.sessionState = inject(SessionStateService);
    this.httpWaitService = inject(HttpWaitService);
    this.tenantKey = inject(TENANT_KEY);
  }
  intercept(request, next) {
    this.httpWaitService.addRequest(request);
    const isExternalRequest = request.context?.get(IS_EXTERNAL_REQUEST);
    const newRequest = isExternalRequest ? request : request.clone({
      setHeaders: this.getAdditionalHeaders(request.headers)
    });
    return next.handle(newRequest).pipe(finalize(() => this.httpWaitService.deleteRequest(request)));
  }
  getAdditionalHeaders(existingHeaders) {
    const headers = {};
    const token = this.oAuthService.getAccessToken();
    if (!existingHeaders?.has("Authorization") && token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const lang = this.sessionState.getLanguage();
    if (!existingHeaders?.has("Accept-Language") && lang) {
      headers["Accept-Language"] = lang;
    }
    const tenant = this.sessionState.getTenant();
    if (!existingHeaders?.has(this.tenantKey) && tenant?.id) {
      headers[this.tenantKey] = tenant.id;
    }
    headers["X-Requested-With"] = "XMLHttpRequest";
    return headers;
  }
  static {
    this.ɵfac = function OAuthApiInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OAuthApiInterceptor)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OAuthApiInterceptor,
      factory: _OAuthApiInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OAuthApiInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function clearOAuthStorage(injector) {
  const storage = injector.get(OAuthStorage);
  const keys = ["access_token", "id_token", "refresh_token", "nonce", "PKCE_verifier", "expires_at", "id_token_claims_obj", "id_token_expires_at", "id_token_stored_at", "access_token_stored_at", "granted_scopes", "session_state"];
  keys.forEach((key) => storage.removeItem(key));
}
var COOKIES = new InjectionToken("COOKIES");
var ServerTokenStorageService = class _ServerTokenStorageService {
  constructor(req) {
    this.req = req;
    this.cookies = /* @__PURE__ */ new Map();
    this.cookiesStr = inject(COOKIES, {
      optional: true
    });
    const cookieHeader = this.req?.headers.get("cookie") ?? this.cookiesStr ?? "";
    for (const part of cookieHeader.split(";")) {
      const i = part.indexOf("=");
      if (i > -1) {
        const k = part.slice(0, i).trim();
        const v = decodeURIComponent(part.slice(i + 1).trim());
        this.cookies.set(k, v);
      }
    }
  }
  getItem(key) {
    const fromCookie = this.cookies.get(key);
    if (fromCookie) {
      return fromCookie;
    }
    return "";
  }
  setItem(_k, _v) {
  }
  removeItem(_k) {
  }
  static {
    this.ɵfac = function ServerTokenStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServerTokenStorageService)(ɵɵinject(REQUEST, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ServerTokenStorageService,
      factory: _ServerTokenStorageService.ɵfac,
      providedIn: null
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServerTokenStorageService, [{
    type: Injectable,
    args: [{
      providedIn: null
    }]
  }], () => [{
    type: Request,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [REQUEST]
    }]
  }], null);
})();
var MockStorage = class {
  constructor() {
    this.data = /* @__PURE__ */ new Map();
  }
  get length() {
    return this.data.size;
  }
  clear() {
    this.data.clear();
  }
  getItem(key) {
    return this.data.get(key) || null;
  }
  key(index) {
    return Array.from(this.data.keys())[index] || null;
  }
  removeItem(key) {
    this.data.delete(key);
  }
  setItem(key, value) {
    this.data.set(key, value);
  }
};
function oAuthStorageFactory() {
  const platformId = inject(PLATFORM_ID);
  const appStartedWithSSR = inject(APP_STARTED_WITH_SSR);
  if (appStartedWithSSR) {
    return isPlatformBrowser(platformId) ? inject(BrowserTokenStorageService) : inject(ServerTokenStorageService);
  }
  return inject(MemoryTokenStorageService);
}
var RememberMeService = class _RememberMeService {
  constructor() {
    this.#rememberMe = "remember_me";
    this.localStorageService = inject(AbpLocalStorageService);
    this.cookieStorageService = inject(AbpCookieStorageService);
    this.appStartedWithSsr = inject(APP_STARTED_WITH_SSR, {
      optional: true
    });
  }
  #rememberMe;
  set(remember) {
    if (this.appStartedWithSsr) {
      this.cookieStorageService.setItem(this.#rememberMe, JSON.stringify(remember));
      return;
    }
    this.localStorageService.setItem(this.#rememberMe, JSON.stringify(remember));
  }
  remove() {
    if (this.appStartedWithSsr) {
      this.cookieStorageService.removeItem(this.#rememberMe);
      return;
    }
    this.localStorageService.removeItem(this.#rememberMe);
  }
  get() {
    if (this.appStartedWithSsr) {
      return Boolean(JSON.parse(this.cookieStorageService.getItem(this.#rememberMe) || "false"));
    }
    return Boolean(JSON.parse(this.localStorageService.getItem(this.#rememberMe) || "false"));
  }
  getFromToken(accessToken) {
    let tokenBody = accessToken.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    while (tokenBody.length % 4 !== 0) {
      tokenBody += "=";
    }
    try {
      const parsedToken = JSON.parse(atob(tokenBody));
      return Boolean(parsedToken[this.#rememberMe]);
    } catch (e) {
      return false;
    }
  }
  static {
    this.ɵfac = function RememberMeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RememberMeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RememberMeService,
      factory: _RememberMeService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RememberMeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var pipeToLogin = function(params, injector) {
  const configState = injector.get(ConfigStateService);
  const router = injector.get(Router);
  const rememberMeService = injector.get(RememberMeService);
  const authService = injector.get(AuthService);
  return pipe(switchMap(() => configState.refreshAppState()), tap(() => {
    rememberMeService.set(params.rememberMe || rememberMeService.get() || rememberMeService.getFromToken(authService.getAccessToken()));
    if (params.redirectUrl) router.navigate([params.redirectUrl]);
  }));
};
function isTokenExpired(expireDate) {
  const currentDate = (/* @__PURE__ */ new Date()).getTime();
  return expireDate < currentDate;
}
var checkAccessToken = function(injector) {
  const configState = injector.get(ConfigStateService);
  const oAuth = injector.get(OAuthService);
  if (oAuth.hasValidAccessToken() && !configState.getDeep("currentUser.id")) {
    clearOAuthStorage(injector);
  }
};
var AuthFlowStrategy = class {
  constructor(injector) {
    this.injector = injector;
    this.catchError = (err) => {
      this.httpErrorReporter.reportError(err);
      return of(null);
    };
    this.httpErrorReporter = injector.get(HttpErrorReporterService);
    this.environment = injector.get(EnvironmentService);
    this.configState = injector.get(ConfigStateService);
    this.oAuthService = injector.get(OAuthService);
    this.sessionState = injector.get(SessionStateService);
    this.localStorageService = injector.get(AbpLocalStorageService);
    this.oAuthConfig = this.environment.getEnvironment().oAuthConfig || {};
    this.tenantKey = injector.get(TENANT_KEY);
    this.router = injector.get(Router);
    this.oAuthErrorFilterService = injector.get(OAuthErrorFilterService);
    this.rememberMeService = injector.get(RememberMeService);
    this.windowService = injector.get(AbpWindowService);
    this.listenToOauthErrors();
  }
  init() {
    return __async(this, null, function* () {
      if (this.oAuthConfig.clientId) {
        const shouldClear = shouldStorageClear(this.oAuthConfig.clientId, this.injector);
        if (shouldClear) clearOAuthStorage(this.injector);
      }
      this.oAuthService.configure(this.oAuthConfig);
      this.oAuthService.events.pipe(filter((event) => event.type === "token_refresh_error")).subscribe(() => this.navigateToLogin());
      this.navigateToPreviousUrl();
      return this.oAuthService.loadDiscoveryDocument().then(() => {
        const isTokenExpire = isTokenExpired(this.oAuthService.getAccessTokenExpiration());
        if (isTokenExpire && this.oAuthService.getRefreshToken()) {
          return this.refreshToken();
        }
        return Promise.resolve();
      }).catch(this.catchError);
    });
  }
  navigateToPreviousUrl() {
    const {
      responseType
    } = this.oAuthConfig;
    if (responseType === "code") {
      this.oAuthService.events.pipe(filter((event) => event.type === "token_received" && !!this.oAuthService.state), take(1), map(() => {
        const redirectUri = decodeURIComponent(this.oAuthService.state);
        if (redirectUri && redirectUri !== "/") {
          return redirectUri;
        }
        return "/";
      }), switchMap((redirectUri) => this.configState.getOne$("currentUser").pipe(filter((user) => !!user?.isAuthenticated), tap(() => this.router.navigateByUrl(redirectUri))))).subscribe();
    }
  }
  refreshToken() {
    return this.oAuthService.refreshToken().catch(() => clearOAuthStorage(this.injector));
  }
  listenToOauthErrors() {
    this.oAuthService.events.pipe(filter((event) => event instanceof OAuthErrorEvent), tap((err) => {
      const shouldSkip = this.oAuthErrorFilterService.run(err);
      if (!shouldSkip) {
        clearOAuthStorage(this.injector);
      }
    }), switchMap(() => this.configState.refreshAppState())).subscribe();
  }
};
function shouldStorageClear(clientId, injector) {
  const storage = injector.get(OAuthStorage);
  const key = "abpOAuthClientId";
  if (!storage.getItem(key)) {
    storage.setItem(key, clientId);
    return false;
  }
  const shouldClear = storage.getItem(key) !== clientId;
  if (shouldClear) storage.setItem(key, clientId);
  return shouldClear;
}
var AuthCodeFlowStrategy = class _AuthCodeFlowStrategy extends AuthFlowStrategy {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.isInternalAuth = false;
    this.platformId = injector.get(PLATFORM_ID);
    this.appStartedWithSSR = injector.get(APP_STARTED_WITH_SSR);
    this.document = injector.get(DOCUMENT);
  }
  init() {
    return __async(this, null, function* () {
      this.checkRememberMeOption();
      this.listenToTokenReceived();
      if (!this.appStartedWithSSR && isPlatformBrowser(this.platformId)) {
        return __superGet(_AuthCodeFlowStrategy.prototype, this, "init").call(this).then(() => this.oAuthService.tryLogin().catch(noop)).then(() => {
          this.oAuthService.setupAutomaticSilentRefresh();
        });
      }
    });
  }
  checkRememberMeOption() {
    const accessToken = this.oAuthService.getAccessToken();
    const isTokenExpire = isTokenExpired(this.oAuthService.getAccessTokenExpiration());
    let rememberMe = this.rememberMeService.get();
    if (accessToken && !rememberMe) {
      const rememberMeValue = this.rememberMeService.getFromToken(accessToken);
      this.rememberMeService.set(!!rememberMeValue);
    }
    rememberMe = this.rememberMeService.get();
    if (accessToken && isTokenExpire && !rememberMe) {
      this.rememberMeService.remove();
      this.oAuthService.logOut();
    }
  }
  getCultureParams(queryParams) {
    const lang = this.sessionState.getLanguage();
    const culture = {
      culture: lang,
      "ui-culture": lang
    };
    return __spreadValues(__spreadValues({}, lang && culture), queryParams);
  }
  setUICulture() {
    if (isPlatformBrowser(this.platformId)) {
      const urlParams = new URLSearchParams(window.location.search);
      this.configState.uiCultureFromAuthCodeFlow = urlParams.get("ui-culture");
    }
  }
  replaceURLParams() {
    if (isPlatformBrowser(this.platformId)) {
      const location = this.windowService.window.location;
      const history = this.windowService.window.history;
      const query = location.search.replace(/([?&])iss=[^&]*&?/, "$1").replace(/([?&])culture=[^&]*&?/, "$1").replace(/([?&])ui-culture=[^&]*&?/, "$1").replace(/[?&]+$/, "");
      const href = location.origin + location.pathname + query + location.hash;
      history.replaceState(null, "", href);
    }
  }
  listenToTokenReceived() {
    if (isPlatformBrowser(this.platformId) && !this.appStartedWithSSR) {
      this.oAuthService.events.pipe(filter((event) => event.type === "token_received"), tap(() => {
        this.setUICulture();
        this.replaceURLParams();
      }), take(1)).subscribe();
    }
  }
  navigateToLogin(queryParams) {
    if (isPlatformBrowser(this.platformId)) {
      if (this.appStartedWithSSR) {
        if (this.document.defaultView) {
          this.document.defaultView.location.replace("/authorize");
        }
      } else {
        let additionalState = "";
        if (queryParams?.returnUrl) {
          additionalState = queryParams.returnUrl;
        }
        const cultureParams = this.getCultureParams(queryParams);
        this.oAuthService.initCodeFlow(additionalState, cultureParams);
      }
    }
  }
  checkIfInternalAuth(queryParams) {
    if (isPlatformBrowser(this.platformId)) {
      this.oAuthService.initCodeFlow("", this.getCultureParams(queryParams));
      return false;
    }
  }
  logout(queryParams) {
    this.rememberMeService.remove();
    if (this.appStartedWithSSR) {
      if (this.document.defaultView) {
        this.document.defaultView.location.replace("/logout");
      }
    } else {
      if (queryParams?.noRedirectToLogoutUrl) {
        this.router.navigate(["/"]);
        return from(this.oAuthService.revokeTokenAndLogout(true));
      }
      return from(this.oAuthService.revokeTokenAndLogout(this.getCultureParams(queryParams)));
    }
  }
  login(queryParams) {
    if (isPlatformBrowser(this.platformId)) {
      this.oAuthService.initCodeFlow("", this.getCultureParams(queryParams));
      return of(null);
    }
  }
};
var AuthPasswordFlowStrategy = class _AuthPasswordFlowStrategy extends AuthFlowStrategy {
  constructor() {
    super(...arguments);
    this.isInternalAuth = true;
  }
  listenToTokenExpiration() {
    this.oAuthService.events.pipe(filter((event) => event instanceof OAuthInfoEvent && event.type === "token_expires" && event.info === "access_token")).subscribe(() => {
      if (this.oAuthService.getRefreshToken()) {
        this.refreshToken();
      } else {
        this.oAuthService.logOut();
        this.rememberMeService.remove();
        this.configState.refreshAppState().subscribe();
      }
    });
  }
  init() {
    return __async(this, null, function* () {
      this.checkRememberMeOption();
      return __superGet(_AuthPasswordFlowStrategy.prototype, this, "init").call(this).then(() => this.listenToTokenExpiration());
    });
  }
  checkRememberMeOption() {
    const accessToken = this.oAuthService.getAccessToken();
    const isTokenExpire = isTokenExpired(this.oAuthService.getAccessTokenExpiration());
    const rememberMe = this.rememberMeService.get();
    if (accessToken && isTokenExpire && !rememberMe) {
      this.rememberMeService.remove();
      this.oAuthService.logOut();
    }
  }
  navigateToLogin(queryParams) {
    const router = this.injector.get(Router);
    return router.navigate(["/account/login"], {
      queryParams
    });
  }
  checkIfInternalAuth() {
    return true;
  }
  login(params) {
    const tenant = this.sessionState.getTenant();
    return from(this.oAuthService.fetchTokenUsingPasswordFlow(params.username, params.password, new HttpHeaders(__spreadValues({}, tenant && tenant.id && {
      [this.tenantKey]: tenant.id
    })))).pipe(pipeToLogin(params, this.injector));
  }
  logout() {
    const router = this.injector.get(Router);
    const noRedirectToLogoutUrl = true;
    return from(this.oAuthService.revokeTokenAndLogout(noRedirectToLogoutUrl)).pipe(switchMap(() => this.configState.refreshAppState()), tap(() => {
      this.rememberMeService.remove();
      router.navigateByUrl("/");
    }));
  }
  refreshToken() {
    return this.oAuthService.refreshToken().catch(() => {
      clearOAuthStorage(this.injector);
      this.rememberMeService.remove();
    });
  }
};
var AUTH_FLOW_STRATEGY = {
  Code(injector) {
    return new AuthCodeFlowStrategy(injector);
  },
  Password(injector) {
    return new AuthPasswordFlowStrategy(injector);
  }
};
var AbpOAuthService = class _AbpOAuthService {
  get oidc() {
    return this.oAuthService.oidc;
  }
  set oidc(value) {
    this.oAuthService.oidc = value;
  }
  get isInternalAuth() {
    return this.strategy.isInternalAuth;
  }
  constructor() {
    this.injector = inject(Injector);
    this.appStartedWithSsr = this.injector.get(APP_STARTED_WITH_SSR);
    this.platformId = this.injector.get(PLATFORM_ID);
    this.document = this.injector.get(DOCUMENT);
    this.oAuthService = this.injector.get(OAuthService);
  }
  init() {
    return __async(this, null, function* () {
      const environmentService = this.injector.get(EnvironmentService);
      const result$ = environmentService.getEnvironment$().pipe(map((env) => env?.oAuthConfig), filter(Boolean), tap((oAuthConfig) => {
        this.strategy = oAuthConfig.responseType === "code" ? AUTH_FLOW_STRATEGY.Code(this.injector) : AUTH_FLOW_STRATEGY.Password(this.injector);
      }), switchMap(() => from(this.strategy.init())), take(1));
      return yield lastValueFrom(result$);
    });
  }
  logout(queryParams) {
    if (!this.strategy) {
      return EMPTY;
    }
    return this.strategy.logout(queryParams);
  }
  navigateToLogin(queryParams) {
    this.strategy.navigateToLogin(queryParams);
  }
  login(params) {
    return this.strategy.login(params);
  }
  get isAuthenticated() {
    return this.oAuthService.hasValidAccessToken();
  }
  loginUsingGrant(grantType, parameters, headers) {
    const {
      clientId: client_id,
      dummyClientSecret: client_secret
    } = this.oAuthService;
    const access_token = this.oAuthService.getAccessToken();
    const p = __spreadValues({
      access_token,
      grant_type: grantType,
      client_id
    }, parameters);
    if (client_secret) {
      p["client_secret"] = client_secret;
    }
    return this.oAuthService.fetchTokenUsingGrant(grantType, p, headers);
  }
  getRefreshToken() {
    return this.oAuthService.getRefreshToken();
  }
  getAccessToken() {
    return this.oAuthService.getAccessToken();
  }
  refreshToken() {
    if (isPlatformBrowser(this.platformId) && this.appStartedWithSsr) {
      this.document.defaultView?.location.replace("/authorize");
      return Promise.resolve();
    }
    try {
      return this.oAuthService.refreshToken();
    } catch (error) {
      console.log("Error while refreshing token: ", error);
      return Promise.reject();
    }
  }
  getAccessTokenExpiration() {
    return this.oAuthService.getAccessTokenExpiration();
  }
  static {
    this.ɵfac = function AbpOAuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbpOAuthService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AbpOAuthService,
      factory: _AbpOAuthService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpOAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var OAuthErrorFilterService = class _OAuthErrorFilterService extends AbstractAuthErrorFilter {
  constructor() {
    super(...arguments);
    this._filters = signal(
      [],
      ...ngDevMode ? [{
        debugName: "_filters"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filters = this._filters.asReadonly();
  }
  get(id) {
    return this._filters().find(({
      id: _id
    }) => _id === id);
  }
  add(filter2) {
    this._filters.update((items) => [...items, filter2]);
  }
  patch(item) {
    const _item = this.filters().find(({
      id
    }) => id === item.id);
    if (!_item) {
      return;
    }
    Object.assign(_item, item);
  }
  remove(id) {
    const item = this.filters().find(({
      id: _id
    }) => _id === id);
    if (!item) {
      return;
    }
    this._filters.update((items) => items.filter(({
      id: _id
    }) => _id !== id));
  }
  run(event) {
    return this.filters().filter(({
      executable
    }) => !!executable).map(({
      execute
    }) => execute(event)).some((item) => item);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOAuthErrorFilterService_BaseFactory;
      return function OAuthErrorFilterService_Factory(__ngFactoryType__) {
        return (ɵOAuthErrorFilterService_BaseFactory || (ɵOAuthErrorFilterService_BaseFactory = ɵɵgetInheritedFactory(_OAuthErrorFilterService)))(__ngFactoryType__ || _OAuthErrorFilterService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OAuthErrorFilterService,
      factory: _OAuthErrorFilterService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OAuthErrorFilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BrowserTokenStorageService = class _BrowserTokenStorageService {
  getItem(key) {
    return this.readCookie(key);
  }
  removeItem(key) {
    this.removeCookie(key);
  }
  setItem(key, data) {
    this.writeCookie(key, data);
  }
  readCookie(name) {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
  }
  writeCookie(name, value, days = 7) {
    if (typeof document === "undefined") return;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; Secure; SameSite=Lax`;
  }
  removeCookie(name) {
    if (typeof document === "undefined") return;
    document.cookie = `${name}=; Max-Age=0; path=/;`;
  }
  static {
    this.ɵfac = function BrowserTokenStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrowserTokenStorageService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BrowserTokenStorageService,
      factory: _BrowserTokenStorageService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserTokenStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MemoryTokenStorageService = class _MemoryTokenStorageService {
  static {
    this.workerUrl = null;
  }
  constructor() {
    this.keysShouldStoreInMemory = ["access_token", "id_token", "expires_at", "id_token_claims_obj", "id_token_expires_at", "id_token_stored_at", "access_token_stored_at", "abpOAuthClientId", "granted_scopes"];
    this.keysShouldStoreInSession = ["nonce", "PKCE_verifier", "session_state"];
    this.cache = /* @__PURE__ */ new Map();
    this.localStorageService = inject(AbpLocalStorageService);
    this._document = inject(DOCUMENT);
    this.destroyRef = inject(DestroyRef);
    this.useSharedWorker = false;
    this.checkAuthStateChanges = (key) => {
      if (key === "access_token" && !this.cache.get("access_token")) {
        this.refreshDocument();
      }
    };
    this.initializeStorage();
    this.setupCleanup();
  }
  initializeStorage() {
    if (typeof SharedWorker !== "undefined") {
      try {
        if (!_MemoryTokenStorageService.workerUrl) {
          _MemoryTokenStorageService.workerUrl = this.createWorkerDataUrl();
        }
        this.worker = new SharedWorker(_MemoryTokenStorageService.workerUrl, {
          name: "oauth-token-storage"
        });
        this.port = this.worker.port;
        this.port.start();
        this.useSharedWorker = true;
        this.port.onmessage = (event) => {
          const {
            action,
            key,
            value
          } = event.data;
          switch (action) {
            case "set":
              this.checkAuthStateChanges(key);
              this.cache.set(key, value);
              break;
            case "remove":
              this.cache.delete(key);
              this.refreshDocument();
              break;
            case "clear":
              this.cache.clear();
              this.refreshDocument();
              break;
            case "get":
              if (value !== null) {
                this.cache.set(key, value);
              }
              break;
          }
        };
        this.keysShouldStoreInMemory.forEach((key) => {
          this.port?.postMessage({
            action: "get",
            key
          });
        });
      } catch (error) {
        this.useSharedWorker = false;
      }
    } else {
      this.useSharedWorker = false;
    }
  }
  getItem(key) {
    if (this.keysShouldStoreInMemory.includes(key)) {
      return this.cache.get(key) || null;
    }
    if (this.keysShouldStoreInSession.includes(key)) {
      return this.getSessionItem(key);
    }
    return this.localStorageService.getItem(key);
  }
  setItem(key, value) {
    if (this.keysShouldStoreInMemory.includes(key)) {
      if (this.useSharedWorker && this.port) {
        this.cache.set(key, value);
        this.port.postMessage({
          action: "set",
          key,
          value
        });
      } else {
        this.cache.set(key, value);
      }
      return;
    }
    if (this.keysShouldStoreInSession.includes(key)) {
      this.setSessionItem(key, value);
      return;
    }
    this.localStorageService.setItem(key, value);
  }
  removeItem(key) {
    if (this.keysShouldStoreInMemory.includes(key)) {
      if (this.useSharedWorker && this.port) {
        this.cache.delete(key);
        this.port.postMessage({
          action: "remove",
          key
        });
      } else {
        this.cache.delete(key);
      }
      return;
    }
    if (this.keysShouldStoreInSession.includes(key)) {
      this.removeSessionItem(key);
      return;
    }
    this.localStorageService.removeItem(key);
  }
  clear() {
    if (this.useSharedWorker && this.port) {
      this.port.postMessage({
        action: "clear"
      });
    }
    this.cache.clear();
  }
  cleanupPort() {
    if (this.useSharedWorker && this.port) {
      try {
        this.port.postMessage({
          action: "disconnect"
        });
      } catch (error) {
      }
    }
  }
  setupCleanup() {
    if (this._document.defaultView) {
      fromEvent(this._document.defaultView, "beforeunload").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.cleanupPort());
      fromEvent(this._document.defaultView, "pagehide").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.cleanupPort());
    }
  }
  refreshDocument() {
    this.cleanupPort();
    setTimeout(() => {
      this._document.defaultView?.location.reload();
    }, 100);
  }
  getSessionStorage() {
    try {
      return this._document.defaultView?.sessionStorage ?? null;
    } catch (e) {
      return null;
    }
  }
  getSessionItem(key) {
    const storage = this.getSessionStorage();
    return storage ? storage.getItem(key) : this.localStorageService.getItem(key);
  }
  setSessionItem(key, value) {
    const storage = this.getSessionStorage();
    if (storage) {
      storage.setItem(key, value);
    } else {
      this.localStorageService.setItem(key, value);
    }
  }
  removeSessionItem(key) {
    const storage = this.getSessionStorage();
    if (storage) {
      storage.removeItem(key);
    } else {
      this.localStorageService.removeItem(key);
    }
  }
  createWorkerDataUrl() {
    const workerScript = `const tokenStore = new Map();
const ports = new Set();

function broadcastToOtherPorts(senderPort, message) {
  const deadPorts = [];
  ports.forEach(p => {
    if (p !== senderPort) {
      try {
        p.postMessage(message);
      } catch (error) {
        deadPorts.push(p);
      }
    }
  });
  deadPorts.forEach(p => ports.delete(p));
}

function removePort(port) {
  if (ports.has(port)) {
    ports.delete(port);
  }
}

self.onconnect = (event) => {
  const port = event.ports[0];
  ports.add(port);

  port.addEventListener('messageerror', () => {
    removePort(port);
  });

  port.onmessage = (e) => {
    const { action, key, value } = e.data;

    switch (action) {
      case 'set':
        if (key && value !== undefined) {
          tokenStore.set(key, value);
          broadcastToOtherPorts(port, { action: 'set', key, value });
        }
        break;

      case 'remove':
        if (key) {
          tokenStore.delete(key);
          broadcastToOtherPorts(port, { action: 'remove', key });
        }
        break;

      case 'clear':
        tokenStore.clear();
        broadcastToOtherPorts(port, { action: 'clear' });
        break;

      case 'get':
        if (key) {
          const value = tokenStore.get(key) ?? null;
          port.postMessage({ action: 'get', key, value });
        }
        break;

      case 'disconnect':
        removePort(port);
        break;

      default:
        //
    }
  };

  port.start();
};`;
    return "data:application/javascript;base64," + btoa(workerScript);
  }
  static {
    this.ɵfac = function MemoryTokenStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MemoryTokenStorageService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MemoryTokenStorageService,
      factory: _MemoryTokenStorageService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MemoryTokenStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function provideAbpOAuth() {
  const providers = [{
    provide: AuthService,
    useClass: AbpOAuthService
  }, {
    provide: AuthGuard,
    useClass: AbpOAuthGuard
  }, {
    provide: authGuard,
    useValue: abpOAuthGuard
  }, {
    provide: asyncAuthGuard,
    useValue: asyncAbpOAuthGuard
  }, {
    provide: ApiInterceptor,
    useClass: OAuthApiInterceptor
  }, {
    provide: PIPE_TO_LOGIN_FN_KEY,
    useValue: pipeToLogin
  }, {
    provide: CHECK_AUTHENTICATION_STATE_FN_KEY,
    useValue: checkAccessToken
  }, {
    provide: HTTP_INTERCEPTORS,
    useExisting: ApiInterceptor,
    multi: true
  }, NavigateToManageProfileProvider, provideAppInitializer(() => {
    inject(OAuthConfigurationHandler);
  }), OAuthModule.forRoot().providers, ServerTokenStorageService, BrowserTokenStorageService, {
    provide: OAuthStorage,
    useFactory: oAuthStorageFactory
  }, {
    provide: AuthErrorFilterService,
    useExisting: OAuthErrorFilterService
  }];
  return makeEnvironmentProviders(providers);
}
var AbpOAuthModule = class _AbpOAuthModule {
  static forRoot() {
    return {
      ngModule: _AbpOAuthModule,
      providers: [provideAbpOAuth()]
    };
  }
  static {
    this.ɵfac = function AbpOAuthModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbpOAuthModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AbpOAuthModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpOAuthModule, [{
    type: NgModule
  }], null, null);
})();
export {
  AUTH_FLOW_STRATEGY,
  AbpOAuthGuard,
  AbpOAuthModule,
  AbpOAuthService,
  AuthCodeFlowStrategy,
  AuthFlowStrategy,
  AuthPasswordFlowStrategy,
  BrowserTokenStorageService,
  COOKIES,
  MemoryTokenStorageService,
  MockStorage,
  NavigateToManageProfileProvider,
  OAuthApiInterceptor,
  OAuthConfigurationHandler,
  OAuthErrorFilterService,
  RememberMeService,
  ServerTokenStorageService,
  abpOAuthGuard,
  asyncAbpOAuthGuard,
  buildLoginUrl,
  checkAccessToken,
  clearOAuthStorage,
  isTokenExpired,
  oAuthStorageFactory,
  pipeToLogin,
  provideAbpOAuth
};
//# sourceMappingURL=@abp_ng__oauth.js.map
