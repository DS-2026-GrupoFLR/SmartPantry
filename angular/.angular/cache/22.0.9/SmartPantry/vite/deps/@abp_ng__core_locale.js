import {
  differentLocales
} from "./chunk-NI4ZFAY4.js";
import "./chunk-VHKPOJBK.js";
import "./chunk-LMDSVWKI.js";
import "./chunk-KEK2ONVT.js";
import "./chunk-T5EWVHFZ.js";
import {
  isPlatformBrowser
} from "./chunk-IMWYUKDZ.js";
import {
  isDevMode
} from "./chunk-EZ2ZVKYO.js";
import "./chunk-HM3VFUK5.js";
import {
  PLATFORM_ID,
  inject
} from "./chunk-TVT7XMKI.js";
import {
  __async,
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/@abp/ng.core/fesm2022/abp-ng.core-locale.mjs
var localeMap = {};
var localeLoaders = {
  ar: () => import("./ar-EUHIZGLO.js"),
  cs: () => import("./cs-DITUALNX.js"),
  en: () => import("./en-HHAYLN7E.js"),
  "en-GB": () => import("./en-GB-JPFZ3SBR.js"),
  es: () => import("./es-4ZX7CS6V.js"),
  de: () => import("./de-7PAETX3L.js"),
  fi: () => import("./fi-UOUXZH7A.js"),
  fr: () => import("./fr-OBIWJVRG.js"),
  hi: () => import("./hi-CTXYHOW3.js"),
  hu: () => import("./hu-3NL675DI.js"),
  is: () => import("./is-WGHM5RWD.js"),
  it: () => import("./it-ZZ5R26DO.js"),
  ja: () => import("./ja-F5XCV2R5.js"),
  ko: () => import("./ko-XMRGH3GF.js"),
  pt: () => import("./pt-H76IPMYA.js"),
  ro: () => import("./ro-OOTNX5FD.js"),
  ru: () => import("./ru-PFWDEG3U.js"),
  sk: () => import("./sk-XTL4WQEQ.js"),
  sl: () => import("./sl-KIGL56TT.js"),
  th: () => import("./th-6RDMZ5FF.js"),
  tr: () => import("./tr-7NH72T4U.js"),
  vi: () => import("./vi-LPOMOPSA.js"),
  "zh-Hans": () => import("./zh-Hans-EYVED3EG.js"),
  "zh-Hant": () => import("./zh-Hant-NPIM7FOL.js")
};
var localeSupportList = Object.keys(localeLoaders);
function loadLocale(locale) {
  if (localeSupportList.indexOf(locale) === -1) {
    return Promise.reject(new Error(`Cannot find the ${locale} locale file.`));
  }
  return localeLoaders[locale]();
}
function registerLocaleForEsBuild({ cultureNameLocaleFileMap = {}, errorHandlerFn = defaultLocalErrorHandlerFn } = {}) {
  return (locale) => {
    localeMap = __spreadValues(__spreadValues({}, differentLocales), cultureNameLocaleFileMap);
    const l = localeMap[locale] || locale;
    return new Promise((resolve, reject) => {
      return loadLocale(l).then((val) => {
        let module = val;
        while (module.default) {
          module = module.default;
        }
        resolve({ default: module });
      }).catch((error) => {
        errorHandlerFn({
          resolve,
          reject,
          error,
          locale
        });
      });
    });
  };
}
function registerLocale({ cultureNameLocaleFileMap = {}, errorHandlerFn = defaultLocalErrorHandlerFn } = {}) {
  return (locale) => {
    localeMap = __spreadValues(__spreadValues({}, differentLocales), cultureNameLocaleFileMap);
    const localePath = `/locales/${localeMap[locale] || locale}`;
    return new Promise((resolve, reject) => {
      return import(
        /* webpackMode: "lazy-once" */
        /* webpackChunkName: "locales"*/
        /* webpackInclude: /[/\\](ar|cs|en|en-GB|es|de|fi|fr|hi|hu|is|it|ja|ko|pt|ro|ru|sk|sl|th|tr|vi|zh-Hans|zh-Hant)\.(mjs|js)$/ */
        /* webpackExclude: /[/\\]global|extra/ */
        /* @vite-ignore */
        `@angular/common${localePath}`
      ).then((val) => {
        let module = val;
        while (module.default) {
          module = module.default;
        }
        resolve({ default: module });
      }).catch((error) => {
        errorHandlerFn({
          resolve,
          reject,
          error,
          locale
        });
      });
    });
  };
}
function safeRegisterLocale() {
  return (locale) => {
    const platformId = inject(PLATFORM_ID);
    if (!isPlatformBrowser(platformId)) {
      return Promise.resolve({ default: null });
    }
    return registerLocale()(locale);
  };
}
var extraLocales = {};
function storeLocaleData(data, localeId) {
  extraLocales[localeId] = data;
}
function defaultLocalErrorHandlerFn(_0) {
  return __async(this, arguments, function* ({ locale, resolve }) {
    if (extraLocales[locale]) {
      resolve({ default: extraLocales[localeMap[locale] || locale] });
      return;
    }
    if (isDevMode()) {
      console.error(`Cannot find the ${locale} locale file. You can check how can add new culture at https://abp.io/docs/latest/framework/ui/angular/localization#adding-a-new-culture`);
    }
    resolve();
  });
}
export {
  defaultLocalErrorHandlerFn,
  registerLocale,
  registerLocaleForEsBuild,
  safeRegisterLocale,
  storeLocaleData
};
//# sourceMappingURL=@abp_ng__core_locale.js.map
