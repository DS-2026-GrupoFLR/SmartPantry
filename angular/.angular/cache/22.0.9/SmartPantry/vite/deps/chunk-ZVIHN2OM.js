import {
  AbpVisibleDirective,
  DateAdapter,
  DateTimeAdapter,
  DisabledDirective,
  EllipsisDirective,
  NgxDatatableDefaultDirective,
  NgxDatatableListDirective,
  ThemeSharedModule,
  TimeAdapter
} from "./chunk-6MBLSBLR.js";
import {
  NgbDateAdapter,
  NgbDatepickerModule,
  NgbDropdown,
  NgbDropdownButtonItem,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownModule,
  NgbDropdownToggle,
  NgbInputDatepicker,
  NgbTimeAdapter,
  NgbTimepicker,
  NgbTimepickerModule,
  NgbTooltip,
  NgbTooltipModule,
  NgbTypeahead,
  NgbTypeaheadModule
} from "./chunk-5FWCSE5I.js";
import {
  DataTableColumnCellDirective,
  DataTableColumnDirective,
  DataTableColumnHeaderDirective,
  DatatableComponent,
  DatatableRowDetailDirective,
  DatatableRowDetailTemplateDirective,
  NgxDatatableModule,
  SelectionType
} from "./chunk-T2QD5I46.js";
import {
  AbpValidators,
  ConfigStateService,
  CoreModule,
  LocalizationPipe,
  LocalizationService,
  NgxValidateCoreModule,
  PermissionDirective,
  PermissionService,
  RestService,
  ShowPasswordDirective,
  TimezoneService,
  TrackByService,
  UtcToLocalPipe,
  ValidationDirective,
  ValidationStyleDirective,
  ValidationTargetDirective,
  collectionCompare,
  createLocalizationPipeKeyGenerator,
  escapeHtmlChars
} from "./chunk-NI4ZFAY4.js";
import {
  CheckboxControlValueAccessor,
  ControlContainer,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgSelectMultipleOption
} from "./chunk-T5EWVHFZ.js";
import {
  AsyncPipe,
  NgComponentOutlet,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-IMWYUKDZ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  Injectable,
  Input,
  LOCALE_ID,
  NgModule,
  Optional,
  Output,
  Pipe,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  afterNextRender,
  contentChild,
  input,
  output,
  setClassMetadata,
  viewChild,
  viewChildren,
  ɵɵInheritDefinitionFeature,
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
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
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
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeHtml,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-EZ2ZVKYO.js";
import {
  takeUntilDestroyed
} from "./chunk-HM3VFUK5.js";
import {
  DestroyRef,
  InjectionToken,
  Injector,
  PLATFORM_ID,
  Subject,
  computed,
  debounceTime,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  inject,
  isSignal,
  map,
  merge,
  of,
  pipe,
  signal,
  switchMap,
  take,
  zip,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-TVT7XMKI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3RPBTBI6.js";

// node_modules/@abp/utils/dist/fesm2015/abp-utils.js
var ListNode = class {
  constructor(value) {
    this.value = value;
  }
};
var LinkedList = class _LinkedList {
  constructor() {
    this.size = 0;
  }
  get head() {
    return this.first;
  }
  get tail() {
    return this.last;
  }
  get length() {
    return this.size;
  }
  attach(value, previousNode, nextNode) {
    if (!previousNode)
      return this.addHead(value);
    if (!nextNode)
      return this.addTail(value);
    const node = new ListNode(value);
    node.previous = previousNode;
    previousNode.next = node;
    node.next = nextNode;
    nextNode.previous = node;
    this.size++;
    return node;
  }
  attachMany(values, previousNode, nextNode) {
    if (!values.length)
      return [];
    if (!previousNode)
      return this.addManyHead(values);
    if (!nextNode)
      return this.addManyTail(values);
    const list = new _LinkedList();
    list.addManyTail(values);
    list.first.previous = previousNode;
    previousNode.next = list.first;
    list.last.next = nextNode;
    nextNode.previous = list.last;
    this.size += values.length;
    return list.toNodeArray();
  }
  detach(node) {
    if (!node.previous)
      return this.dropHead();
    if (!node.next)
      return this.dropTail();
    node.previous.next = node.next;
    node.next.previous = node.previous;
    this.size--;
    return node;
  }
  add(value) {
    return {
      after: (...params) => this.addAfter.call(this, value, ...params),
      before: (...params) => this.addBefore.call(this, value, ...params),
      byIndex: (position) => this.addByIndex(value, position),
      head: () => this.addHead(value),
      tail: () => this.addTail(value)
    };
  }
  addMany(values) {
    return {
      after: (...params) => this.addManyAfter.call(this, values, ...params),
      before: (...params) => this.addManyBefore.call(this, values, ...params),
      byIndex: (position) => this.addManyByIndex(values, position),
      head: () => this.addManyHead(values),
      tail: () => this.addManyTail(values)
    };
  }
  addAfter(value, previousValue, compareFn = collectionCompare) {
    const previous = this.find((node) => compareFn(node.value, previousValue));
    return previous ? this.attach(value, previous, previous.next) : this.addTail(value);
  }
  addBefore(value, nextValue, compareFn = collectionCompare) {
    const next = this.find((node) => compareFn(node.value, nextValue));
    return next ? this.attach(value, next.previous, next) : this.addHead(value);
  }
  addByIndex(value, position) {
    if (position < 0)
      position += this.size;
    else if (position >= this.size)
      return this.addTail(value);
    if (position <= 0)
      return this.addHead(value);
    const next = this.get(position);
    return this.attach(value, next.previous, next);
  }
  addHead(value) {
    const node = new ListNode(value);
    node.next = this.first;
    if (this.first)
      this.first.previous = node;
    else
      this.last = node;
    this.first = node;
    this.size++;
    return node;
  }
  addTail(value) {
    const node = new ListNode(value);
    if (this.first) {
      node.previous = this.last;
      this.last.next = node;
      this.last = node;
    } else {
      this.first = node;
      this.last = node;
    }
    this.size++;
    return node;
  }
  addManyAfter(values, previousValue, compareFn = collectionCompare) {
    const previous = this.find((node) => compareFn(node.value, previousValue));
    return previous ? this.attachMany(values, previous, previous.next) : this.addManyTail(values);
  }
  addManyBefore(values, nextValue, compareFn = collectionCompare) {
    const next = this.find((node) => compareFn(node.value, nextValue));
    return next ? this.attachMany(values, next.previous, next) : this.addManyHead(values);
  }
  addManyByIndex(values, position) {
    if (position < 0)
      position += this.size;
    if (position <= 0)
      return this.addManyHead(values);
    if (position >= this.size)
      return this.addManyTail(values);
    const next = this.get(position);
    return this.attachMany(values, next.previous, next);
  }
  addManyHead(values) {
    return values.reduceRight((nodes, value) => {
      nodes.unshift(this.addHead(value));
      return nodes;
    }, []);
  }
  addManyTail(values) {
    return values.map((value) => this.addTail(value));
  }
  drop() {
    return {
      byIndex: (position) => this.dropByIndex(position),
      byValue: (...params) => this.dropByValue.apply(this, params),
      byValueAll: (...params) => this.dropByValueAll.apply(this, params),
      head: () => this.dropHead(),
      tail: () => this.dropTail()
    };
  }
  dropMany(count) {
    return {
      byIndex: (position) => this.dropManyByIndex(count, position),
      head: () => this.dropManyHead(count),
      tail: () => this.dropManyTail(count)
    };
  }
  dropByIndex(position) {
    if (position < 0)
      position += this.size;
    const current = this.get(position);
    return current ? this.detach(current) : void 0;
  }
  dropByValue(value, compareFn = collectionCompare) {
    const position = this.findIndex((node) => compareFn(node.value, value));
    return position < 0 ? void 0 : this.dropByIndex(position);
  }
  dropByValueAll(value, compareFn = collectionCompare) {
    const dropped = [];
    for (let current = this.first, position = 0; current; position++, current = current.next) {
      if (compareFn(current.value, value)) {
        dropped.push(this.dropByIndex(position - dropped.length));
      }
    }
    return dropped;
  }
  dropHead() {
    const head = this.first;
    if (head) {
      this.first = head.next;
      if (this.first)
        this.first.previous = void 0;
      else
        this.last = void 0;
      this.size--;
      return head;
    }
    return void 0;
  }
  dropTail() {
    const tail = this.last;
    if (tail) {
      this.last = tail.previous;
      if (this.last)
        this.last.next = void 0;
      else
        this.first = void 0;
      this.size--;
      return tail;
    }
    return void 0;
  }
  dropManyByIndex(count, position) {
    if (count <= 0)
      return [];
    if (position < 0)
      position = Math.max(position + this.size, 0);
    else if (position >= this.size)
      return [];
    count = Math.min(count, this.size - position);
    const dropped = [];
    while (count--) {
      const current = this.get(position);
      dropped.push(this.detach(current));
    }
    return dropped;
  }
  dropManyHead(count) {
    if (count <= 0)
      return [];
    count = Math.min(count, this.size);
    const dropped = [];
    while (count--)
      dropped.unshift(this.dropHead());
    return dropped;
  }
  dropManyTail(count) {
    if (count <= 0)
      return [];
    count = Math.min(count, this.size);
    const dropped = [];
    while (count--)
      dropped.push(this.dropTail());
    return dropped;
  }
  find(predicate) {
    for (let current = this.first, position = 0; current; position++, current = current.next) {
      if (predicate(current, position, this))
        return current;
    }
    return void 0;
  }
  findIndex(predicate) {
    for (let current = this.first, position = 0; current; position++, current = current.next) {
      if (predicate(current, position, this))
        return position;
    }
    return -1;
  }
  forEach(iteratorFn) {
    for (let node = this.first, position = 0; node; position++, node = node.next) {
      iteratorFn(node, position, this);
    }
  }
  get(position) {
    return this.find((_, index) => position === index);
  }
  indexOf(value, compareFn = collectionCompare) {
    return this.findIndex((node) => compareFn(node.value, value));
  }
  toArray() {
    const array = new Array(this.size);
    this.forEach((node, index) => array[index] = node.value);
    return array;
  }
  toNodeArray() {
    const array = new Array(this.size);
    this.forEach((node, index) => array[index] = node);
    return array;
  }
  toString(mapperFn = JSON.stringify) {
    return this.toArray().map((value) => mapperFn(value)).join(" <-> ");
  }
  // Cannot use Generator type because of ng-packagr
  *[Symbol.iterator]() {
    for (let node = this.first, position = 0; node; position++, node = node.next) {
      yield node.value;
    }
  }
};

// node_modules/@abp/ng.components/fesm2022/abp-ng.components-extensible.mjs
var _forTrack0 = ($index, $item) => $item.value;
function ExtensibleFormMultiselectComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const option_r2 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "::" + option_r2.key), " ");
  }
}
function ExtensibleFormMultiselectComponent_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const option_r2 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", option_r2.key, " ");
  }
}
function ExtensibleFormMultiselectComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "input", 2);
    ɵɵlistener("change", function ExtensibleFormMultiselectComponent_For_2_Template_input_change_1_listener($event) {
      const option_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onCheckboxChange(option_r2.value, $event.target.checked));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "label", 3);
    ɵɵconditionalCreate(3, ExtensibleFormMultiselectComponent_For_2_Conditional_3_Template, 2, 3)(4, ExtensibleFormMultiselectComponent_For_2_Conditional_4_Template, 1, 1);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("id", "checkbox_" + option_r2.value)("disabled", ctx_r2.disabled)("checked", ctx_r2.isChecked(option_r2.value));
    ɵɵadvance();
    ɵɵproperty("for", "checkbox_" + option_r2.value);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.prop().isExtra ? 3 : 4);
  }
}
var _c0 = ["field"];
var _c1 = () => ({
  $implicit: "form-check-label"
});
var _c2 = () => ({
  standalone: true
});
var _c3 = (a0, a1) => ({
  "fa-eye-slash": a0,
  "fa-eye": a1
});
function ExtensibleFormPropComponent_ng_container_0_Case_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_1_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngComponentOutlet", ctx_r0.prop().template)("ngComponentOutletInjector", ctx_r0.injectorForCustomComponent());
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_3_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_3_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelement(1, "input", 11, 1);
    ɵɵcontrolCreate();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.prop().id)("formControlName", ctx_r0.prop().name)("autocomplete", ctx_r0.prop().autocomplete)("type", ctx_r0.getType(ctx_r0.prop()))("abpDisabled", ctx_r0.disabled())("readonly", ctx_r0.isReadonly());
    ɵɵcontrol();
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 6);
    ɵɵcontrolCreate();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("formControlName", ctx_r0.prop().name);
    ɵɵcontrol();
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_5_ng_template_3_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "input", 12, 1);
    ɵɵcontrolCreate();
    ɵɵtemplate(3, ExtensibleFormPropComponent_ng_container_0_Case_5_ng_template_3_Template, 0, 0, "ng-template", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.prop().id)("formControlName", ctx_r0.prop().name)("abpDisabled", ctx_r0.disabled());
    ɵɵcontrol();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", label_r2)("ngTemplateOutletContext", ɵɵpureFunction0(5, _c1));
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_6_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_6_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const option_r3 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "::" + option_r3.key), " ");
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_6_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const option_r3 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", option_r3.key, " ");
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 15);
    ɵɵconditionalCreate(1, ExtensibleFormPropComponent_ng_container_0_Case_6_For_4_Conditional_1_Template, 2, 3)(2, ExtensibleFormPropComponent_ng_container_0_Case_6_For_4_Conditional_2_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngValue", option_r3.value);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.prop().isExtra ? 1 : 2);
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_6_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelementStart(1, "select", 14, 1);
    ɵɵrepeaterCreate(3, ExtensibleFormPropComponent_ng_container_0_Case_6_For_4_Template, 3, 2, "option", 15, _forTrack0);
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
    ɵɵcontrolCreate();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.prop().id)("formControlName", ctx_r0.prop().name)("abpDisabled", ctx_r0.disabled());
    ɵɵcontrol();
    ɵɵadvance(2);
    ɵɵrepeater(ɵɵpipeBind1(5, 4, ctx_r0.options$()));
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_7_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_7_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelement(1, "abp-extensible-form-multi-select", 16);
    ɵɵpipe(2, "async");
    ɵɵcontrolCreate();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("prop", ctx_r0.prop())("options", ɵɵpipeBind1(2, 5, ctx_r0.options$()))("formControlName", ctx_r0.prop().name)("abpDisabled", ctx_r0.disabled());
    ɵɵcontrol();
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_8_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_8_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelementStart(1, "div", 17, 2)(3, "input", 18, 1);
    ɵɵlistener("ngModelChange", function ExtensibleFormPropComponent_ng_container_0_Case_8_Template_input_ngModelChange_3_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.typeaheadModel.set($event));
    })("selectItem", function ExtensibleFormPropComponent_ng_container_0_Case_8_Template_input_selectItem_3_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.setTypeaheadValue($event.item));
    })("blur", function ExtensibleFormPropComponent_ng_container_0_Case_8_Template_input_blur_3_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.setTypeaheadValue(ctx_r0.typeaheadModel()));
    });
    ɵɵelementEnd();
    ɵɵcontrolCreate();
    ɵɵelement(5, "input", 6);
    ɵɵcontrolCreate();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const typeahead_r5 = ɵɵreference(2);
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance(3);
    ɵɵclassProp("is-invalid", typeahead_r5.classList.contains("is-invalid"));
    ɵɵproperty("id", ctx_r0.prop().id)("autocomplete", ctx_r0.prop().autocomplete)("abpDisabled", ctx_r0.disabled())("ngbTypeahead", ctx_r0.search)("editable", false)("inputFormatter", ctx_r0.typeaheadFormatter)("resultFormatter", ctx_r0.typeaheadFormatter)("ngModelOptions", ɵɵpureFunction0(13, _c2))("ngModel", ctx_r0.typeaheadModel());
    ɵɵcontrol();
    ɵɵadvance(2);
    ɵɵproperty("formControlName", ctx_r0.prop().name);
    ɵɵcontrol();
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_9_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_9_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelementStart(1, "input", 19, 3);
    ɵɵlistener("click", function ExtensibleFormPropComponent_ng_container_0_Case_9_Template_input_click_1_listener() {
      ɵɵrestoreView(_r6);
      const datepicker_r7 = ɵɵreference(2);
      return ɵɵresetView(datepicker_r7.open());
    })("keyup.space", function ExtensibleFormPropComponent_ng_container_0_Case_9_Template_input_keyup_space_1_listener() {
      ɵɵrestoreView(_r6);
      const datepicker_r7 = ɵɵreference(2);
      return ɵɵresetView(datepicker_r7.open());
    });
    ɵɵelementEnd();
    ɵɵcontrolCreate();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.prop().id)("formControlName", ctx_r0.prop().name);
    ɵɵcontrol();
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_10_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_10_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelement(1, "ngb-timepicker", 20);
    ɵɵcontrolCreate();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("formControlName", ctx_r0.prop().name);
    ɵɵcontrol();
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_11_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_11_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelement(1, "abp-extensible-date-time-picker", 21);
    ɵɵpipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("prop", ctx_r0.prop())("meridian", ɵɵpipeBind1(2, 3, ctx_r0.meridian$));
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_12_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_12_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelement(1, "textarea", 22, 1);
    ɵɵcontrolCreate();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.prop().id)("formControlName", ctx_r0.prop().name)("abpDisabled", ctx_r0.disabled())("readonly", ctx_r0.isReadonly());
    ɵɵcontrol();
  }
}
function ExtensibleFormPropComponent_ng_container_0_Case_13_ng_template_0_Template(rf, ctx) {
}
function ExtensibleFormPropComponent_ng_container_0_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Case_13_ng_template_0_Template, 0, 0, "ng-template", 10);
    ɵɵelementStart(1, "div", 23);
    ɵɵelement(2, "input", 24);
    ɵɵcontrolCreate();
    ɵɵelementStart(3, "button", 25);
    ɵɵlistener("click", function ExtensibleFormPropComponent_ng_container_0_Case_13_Template_button_click_3_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.showPassword.update((value) => !value));
    });
    ɵɵelement(4, "i", 26);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const label_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", label_r2);
    ɵɵadvance(2);
    ɵɵproperty("id", ctx_r0.prop().id)("formControlName", ctx_r0.prop().name)("abpShowPassword", ctx_r0.showPassword());
    ɵɵcontrol();
    ɵɵadvance(2);
    ɵɵclassMap(ɵɵpureFunction2(6, _c3, !ctx_r0.showPassword(), ctx_r0.showPassword()));
  }
}
function ExtensibleFormPropComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "small", 8);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, ctx_r0.prop().formText));
  }
}
function ExtensibleFormPropComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵconditionalCreate(1, ExtensibleFormPropComponent_ng_container_0_Case_1_Template, 1, 2, "ng-container");
    ɵɵelementStart(2, "div", 5);
    ɵɵconditionalCreate(3, ExtensibleFormPropComponent_ng_container_0_Case_3_Template, 3, 7)(4, ExtensibleFormPropComponent_ng_container_0_Case_4_Template, 1, 1, "input", 6)(5, ExtensibleFormPropComponent_ng_container_0_Case_5_Template, 4, 6, "div", 7)(6, ExtensibleFormPropComponent_ng_container_0_Case_6_Template, 6, 6)(7, ExtensibleFormPropComponent_ng_container_0_Case_7_Template, 3, 7)(8, ExtensibleFormPropComponent_ng_container_0_Case_8_Template, 6, 14)(9, ExtensibleFormPropComponent_ng_container_0_Case_9_Template, 3, 3)(10, ExtensibleFormPropComponent_ng_container_0_Case_10_Template, 2, 2)(11, ExtensibleFormPropComponent_ng_container_0_Case_11_Template, 3, 5)(12, ExtensibleFormPropComponent_ng_container_0_Case_12_Template, 3, 5)(13, ExtensibleFormPropComponent_ng_container_0_Case_13_Template, 5, 9);
    ɵɵconditionalCreate(14, ExtensibleFormPropComponent_ng_container_0_Conditional_14_Template, 3, 3, "small", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional((tmp_2_0 = ctx_r0.getComponent(ctx_r0.prop())) === "template" ? 1 : -1);
    ɵɵadvance();
    ɵɵclassMap(ctx_r0.containerClassName());
    ɵɵadvance();
    ɵɵconditional((tmp_4_0 = ctx_r0.getComponent(ctx_r0.prop())) === "input" ? 3 : tmp_4_0 === "hidden" ? 4 : tmp_4_0 === "checkbox" ? 5 : tmp_4_0 === "select" ? 6 : tmp_4_0 === "multiselect" ? 7 : tmp_4_0 === "typeahead" ? 8 : tmp_4_0 === "date" ? 9 : tmp_4_0 === "time" ? 10 : tmp_4_0 === "dateTime" ? 11 : tmp_4_0 === "textarea" ? 12 : tmp_4_0 === "passwordinputgroup" ? 13 : -1);
    ɵɵadvance(11);
    ɵɵconditional(ctx_r0.prop().formText ? 14 : -1);
  }
}
function ExtensibleFormPropComponent_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, ctx_r0.prop().displayTextResolver(ctx_r0.data())), " ");
  }
}
function ExtensibleFormPropComponent_ng_template_1_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "::" + ctx_r0.prop().displayName), " ");
  }
}
function ExtensibleFormPropComponent_ng_template_1_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, ctx_r0.prop().displayName), " ");
  }
}
function ExtensibleFormPropComponent_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleFormPropComponent_ng_template_1_Conditional_3_Conditional_0_Template, 2, 3)(1, ExtensibleFormPropComponent_ng_template_1_Conditional_3_Conditional_1_Template, 2, 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.prop().isExtra ? 0 : 1);
  }
}
function ExtensibleFormPropComponent_ng_template_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 29);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngbTooltip", ɵɵpipeBind1(1, 2, ctx_r0.prop().tooltip.text))("placement", ctx_r0.prop().tooltip.placement || "auto");
  }
}
function ExtensibleFormPropComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 27)(1, "span", 28);
    ɵɵconditionalCreate(2, ExtensibleFormPropComponent_ng_template_1_Conditional_2_Template, 2, 3)(3, ExtensibleFormPropComponent_ng_template_1_Conditional_3_Template, 2, 1);
    ɵɵtext(4);
    ɵɵconditionalCreate(5, ExtensibleFormPropComponent_ng_template_1_Conditional_5_Template, 2, 4, "i", 29);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const classes_r9 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(classes_r9 || "form-label d-inline-block");
    ɵɵproperty("htmlFor", ctx_r0.prop().id);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.prop().displayTextResolver ? 2 : 3);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.asterisk(), " ");
    ɵɵadvance();
    ɵɵconditional(ctx_r0.prop().tooltip ? 5 : -1);
  }
}
var _c4 = (a0, a1, a2) => ({
  groupedProp: a0,
  data: a1,
  isFirstGroup: a2
});
var _forTrack1 = ($index, $item) => $item.name;
function ExtensibleFormComponent_Conditional_0_For_1_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementContainer(1, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const data_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    const groupedProp_r3 = ctx_r1.$implicit;
    const ɵ$index_2_r4 = ctx_r1.$index;
    ɵɵnextContext(2);
    const propListTemplate_r5 = ɵɵreference(2);
    ɵɵclassMap(groupedProp_r3.group?.className);
    ɵɵattribute("data-name", groupedProp_r3.group?.name || groupedProp_r3.group?.className);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", propListTemplate_r5)("ngTemplateOutletContext", ɵɵpureFunction3(5, _c4, groupedProp_r3, data_r1, ɵ$index_2_r4 === 0));
  }
}
function ExtensibleFormComponent_Conditional_0_For_1_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
  }
  if (rf & 2) {
    const data_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    const groupedProp_r3 = ctx_r1.$implicit;
    const ɵ$index_2_r4 = ctx_r1.$index;
    ɵɵnextContext(2);
    const propListTemplate_r5 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", propListTemplate_r5)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c4, groupedProp_r3, data_r1, ɵ$index_2_r4 === 0));
  }
}
function ExtensibleFormComponent_Conditional_0_For_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵconditionalCreate(1, ExtensibleFormComponent_Conditional_0_For_1_ng_container_0_Conditional_1_Template, 2, 9, "div", 2)(2, ExtensibleFormComponent_Conditional_0_For_1_ng_container_0_Conditional_2_Template, 1, 6, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    const groupedProp_r3 = ctx_r1.$implicit;
    const ɵ$index_2_r4 = ctx_r1.$index;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r5.isAnyGroupMemberVisible(ɵ$index_2_r4, data_r1) && groupedProp_r3.group?.className ? 1 : 2);
  }
}
function ExtensibleFormComponent_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleFormComponent_Conditional_0_For_1_ng_container_0_Template, 3, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const groupedProp_r3 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("abpPropDataFromList", groupedProp_r3.formPropList)("abpPropDataWithRecord", ctx_r5.record());
  }
}
function ExtensibleFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, ExtensibleFormComponent_Conditional_0_For_1_Template, 1, 2, "ng-container", null, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵrepeater(ctx_r5.groupedPropList()?.items);
  }
}
function ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 4);
    ɵɵelement(1, "abp-extensible-form-prop", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const prop_r7 = ɵɵnextContext(2).$implicit;
    const data_r8 = ɵɵnextContext().data;
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("formGroupName", ctx_r5.extraPropertiesKey);
    ɵɵadvance();
    ɵɵclassMap(prop_r7.className);
    ɵɵproperty("prop", prop_r7)("data", data_r8);
  }
}
function ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-extensible-form-prop", 7);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    const prop_r7 = ctx_r8.$implicit;
    const ɵ$index_17_r10 = ctx_r8.$index;
    const ctx_r10 = ɵɵnextContext();
    const data_r8 = ctx_r10.data;
    const isFirstGroup_r12 = ctx_r10.isFirstGroup;
    ɵɵclassMap(prop_r7.className);
    ɵɵproperty("prop", prop_r7)("data", data_r8)("first", ɵ$index_17_r10 === 0)("isFirstGroup", isFirstGroup_r12);
  }
}
function ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Conditional_1_Conditional_0_Template, 1, 6, "abp-extensible-form-prop", 6);
  }
  if (rf & 2) {
    const prop_r7 = ɵɵnextContext(2).$implicit;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r5.form.get(prop_r7.name) ? 0 : -1);
  }
}
function ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Conditional_0_Template, 2, 5, "ng-container", 4)(1, ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const prop_r7 = ɵɵnextContext().$implicit;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r5.extraProperties.controls[prop_r7.name] ? 0 : 1);
  }
}
function ExtensibleFormComponent_ng_template_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleFormComponent_ng_template_1_For_1_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    const prop_r7 = ctx.$implicit;
    const data_r8 = ɵɵnextContext().data;
    ɵɵconditional(prop_r7.visible(data_r8) ? 0 : -1);
  }
}
function ExtensibleFormComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, ExtensibleFormComponent_ng_template_1_For_1_Template, 1, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const groupedProp_r13 = ctx.groupedProp;
    ɵɵrepeater(groupedProp_r13.formPropList);
  }
}
var _c5 = (a0) => ({
  $implicit: a0
});
function GridActionsComponent_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    const action_r1 = ctx.$implicit;
    ɵɵnextContext(2);
    const dropDownBtnItemTmp_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", dropDownBtnItemTmp_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c5, action_r1));
  }
}
function GridActionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "button", 5);
    ɵɵelement(2, "i");
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 6);
    ɵɵrepeaterCreate(6, GridActionsComponent_Conditional_0_For_7_Template, 1, 4, "ng-container", 4, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r2.icon());
    ɵɵclassProp("me-1", ctx_r2.icon());
    ɵɵadvance();
    ɵɵtextInterpolate1("", ɵɵpipeBind1(4, 5, ctx_r2.text()), " ");
    ɵɵadvance(3);
    ɵɵrepeater(ctx_r2.actionList);
  }
}
function GridActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const btnTmp_r4 = ɵɵreference(7);
    ɵɵproperty("ngTemplateOutlet", btnTmp_r4)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c5, ctx_r2.actionList.get(0).value));
  }
}
function GridActionsComponent_ng_template_2_Conditional_0_button_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GridActionsComponent_ng_template_2_Conditional_0_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function GridActionsComponent_ng_template_2_Conditional_0_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const action_r6 = ɵɵnextContext(2).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(action_r6.action(ctx_r2.data));
    });
    ɵɵtemplate(1, GridActionsComponent_ng_template_2_Conditional_0_button_0_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r6 = ɵɵnextContext(2).$implicit;
    ɵɵnextContext();
    const buttonContentTmp_r7 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", buttonContentTmp_r7)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c5, action_r6));
  }
}
function GridActionsComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GridActionsComponent_ng_template_2_Conditional_0_button_0_Template, 2, 4, "button", 8);
  }
  if (rf & 2) {
    const action_r6 = ɵɵnextContext().$implicit;
    ɵɵproperty("abpPermission", action_r6.permission)("abpPermissionRunChangeDetection", false);
  }
}
function GridActionsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, GridActionsComponent_ng_template_2_Conditional_0_Template, 1, 2, "button", 7);
  }
  if (rf & 2) {
    const action_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(action_r6.visible(ctx_r2.data) ? 0 : -1);
  }
}
function GridActionsComponent_ng_template_4_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r8 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, action_r8.text));
  }
}
function GridActionsComponent_ng_template_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r8 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, action_r8.text));
  }
}
function GridActionsComponent_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, GridActionsComponent_ng_template_4_Conditional_1_Conditional_0_Template, 3, 3, "span")(1, GridActionsComponent_ng_template_4_Conditional_1_Conditional_1_Template, 3, 3, "div", 11);
  }
  if (rf & 2) {
    const action_r8 = ɵɵnextContext().$implicit;
    ɵɵconditional(action_r8.icon ? 0 : 1);
  }
}
function GridActionsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
    ɵɵconditionalCreate(1, GridActionsComponent_ng_template_4_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const action_r8 = ctx.$implicit;
    ɵɵclassMap(action_r8.icon);
    ɵɵclassProp("me-1", action_r8.icon && !action_r8.showOnlyIcon);
    ɵɵadvance();
    ɵɵconditional(!action_r8.showOnlyIcon ? 1 : -1);
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_button_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵpipe(1, "abpLocalization");
    ɵɵlistener("click", function GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r9);
      const action_r10 = ɵɵnextContext(3).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(action_r10.action(ctx_r2.data));
    });
    ɵɵtemplate(2, GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_button_0_ng_container_2_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r10 = ɵɵnextContext(3).$implicit;
    ɵɵnextContext();
    const buttonContentTmp_r7 = ɵɵreference(5);
    ɵɵstyleMap(action_r10.btnStyle);
    ɵɵclassMap(action_r10.btnClass);
    ɵɵproperty("ngbTooltip", ɵɵpipeBind1(1, 8, action_r10.tooltip.text))("placement", action_r10.tooltip.placement || "auto");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", buttonContentTmp_r7)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c5, action_r10));
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_button_0_Template, 3, 12, "button", 14);
  }
  if (rf & 2) {
    const action_r10 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("abpPermission", action_r10.permission)("abpPermissionRunChangeDetection", false);
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_button_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r11);
      const action_r10 = ɵɵnextContext(3).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(action_r10.action(ctx_r2.data));
    });
    ɵɵtemplate(1, GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_button_0_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r10 = ɵɵnextContext(3).$implicit;
    ɵɵnextContext();
    const buttonContentTmp_r7 = ɵɵreference(5);
    ɵɵstyleMap(action_r10.btnStyle);
    ɵɵclassMap(action_r10.btnClass);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", buttonContentTmp_r7)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c5, action_r10));
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_button_0_Template, 2, 8, "button", 16);
  }
  if (rf & 2) {
    const action_r10 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("abpPermission", action_r10.permission)("abpPermissionRunChangeDetection", false);
  }
}
function GridActionsComponent_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, GridActionsComponent_ng_template_6_Conditional_0_Conditional_0_Template, 1, 2, "button", 12)(1, GridActionsComponent_ng_template_6_Conditional_0_Conditional_1_Template, 1, 2, "button", 13);
  }
  if (rf & 2) {
    const action_r10 = ɵɵnextContext().$implicit;
    ɵɵconditional(action_r10.tooltip ? 0 : 1);
  }
}
function GridActionsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, GridActionsComponent_ng_template_6_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    const action_r10 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(action_r10.visible(ctx_r2.data) ? 0 : -1);
  }
}
var _c6 = ["table"];
var _c7 = (a0, a1) => ({
  row: a0,
  expanded: a1
});
var _c8 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function ExtensibleTableComponent_Conditional_0_Conditional_2_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 10);
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    const expanded_r4 = ctx.expanded;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.effectiveRowDetailTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c7, row_r3, expanded_r4));
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ngx-datatable-row-detail", 6);
    ɵɵtemplate(1, ExtensibleTableComponent_Conditional_0_Conditional_2_Conditional_1_ng_template_1_Template, 1, 5, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const detailRowHeight_r5 = ɵɵreadContextLet(0);
    ɵɵproperty("rowHeight", detailRowHeight_r5);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_2_Conditional_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 10);
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const expanded_r7 = ctx.expanded;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.effectiveRowDetailTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c7, row_r6, expanded_r7));
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ngx-datatable-row-detail");
    ɵɵtemplate(1, ExtensibleTableComponent_Conditional_0_Conditional_2_Conditional_2_ng_template_1_Template, 1, 5, "ng-template", 9);
    ɵɵelementEnd();
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function ExtensibleTableComponent_Conditional_0_Conditional_2_ng_template_4_Template_button_click_0_listener() {
      const row_r9 = ɵɵrestoreView(_r8).row;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleExpandRow(row_r9));
    });
    ɵɵelement(1, "i", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const expanded_r10 = ctx.expanded;
    ɵɵattribute("aria-label", expanded_r10 ? "Collapse" : "Expand");
    ɵɵadvance();
    ɵɵclassProp("fa-chevron-down", !expanded_r10)("fa-chevron-up", expanded_r10);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdeclareLet(0);
    ɵɵconditionalCreate(1, ExtensibleTableComponent_Conditional_0_Conditional_2_Conditional_1_Template, 2, 1, "ngx-datatable-row-detail", 6)(2, ExtensibleTableComponent_Conditional_0_Conditional_2_Conditional_2_Template, 2, 0, "ngx-datatable-row-detail");
    ɵɵelementStart(3, "ngx-datatable-column", 7);
    ɵɵtemplate(4, ExtensibleTableComponent_Conditional_0_Conditional_2_ng_template_4_Template, 2, 5, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const detailRowHeight_r11 = ɵɵstoreLet(ɵɵnextContext(2).effectiveRowDetailRowHeight());
    ɵɵadvance();
    ɵɵconditional(detailRowHeight_r11 !== void 0 ? 1 : 2);
    ɵɵadvance(2);
    ɵɵproperty("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_3_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14)(1, "input", 15);
    ɵɵlistener("change", function ExtensibleTableComponent_Conditional_0_Conditional_3_ng_template_1_Conditional_0_Template_input_change_1_listener() {
      ɵɵrestoreView(_r12);
      const selectFn_r13 = ɵɵnextContext().selectFn;
      return ɵɵresetView(selectFn_r13());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const allRowsSelected_r14 = ɵɵnextContext().allRowsSelected;
    ɵɵadvance();
    ɵɵproperty("checked", allRowsSelected_r14);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleTableComponent_Conditional_0_Conditional_3_ng_template_1_Conditional_0_Template, 2, 1, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(ctx_r1.selectionType() !== "single" ? 0 : -1);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_3_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16)(1, "input", 17);
    ɵɵlistener("change", function ExtensibleTableComponent_Conditional_0_Conditional_3_ng_template_2_Conditional_0_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r15);
      const onCheckboxChangeFn_r16 = ɵɵnextContext().onCheckboxChangeFn;
      return ɵɵresetView(onCheckboxChangeFn_r16($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const isSelected_r17 = ɵɵnextContext().isSelected;
    ɵɵadvance();
    ɵɵproperty("checked", isSelected_r17);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_3_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16)(1, "input", 18);
    ɵɵlistener("change", function ExtensibleTableComponent_Conditional_0_Conditional_3_ng_template_2_Conditional_1_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r18);
      const onCheckboxChangeFn_r16 = ɵɵnextContext().onCheckboxChangeFn;
      return ɵɵresetView(onCheckboxChangeFn_r16($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const isSelected_r17 = ɵɵnextContext().isSelected;
    ɵɵadvance();
    ɵɵproperty("checked", isSelected_r17);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleTableComponent_Conditional_0_Conditional_3_ng_template_2_Conditional_0_Template, 2, 1, "div", 16);
    ɵɵconditionalCreate(1, ExtensibleTableComponent_Conditional_0_Conditional_3_ng_template_2_Conditional_1_Template, 2, 1, "div", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(ctx_r1.selectionType() === "single" ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.selectionType() !== "single" ? 1 : -1);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ngx-datatable-column", 3);
    ɵɵtemplate(1, ExtensibleTableComponent_Conditional_0_Conditional_3_ng_template_1_Template, 1, 1, "ng-template", 13)(2, ExtensibleTableComponent_Conditional_0_Conditional_3_ng_template_2_Template, 2, 2, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_4_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 10);
  }
  if (rf & 2) {
    const ctx_r18 = ɵɵnextContext();
    const row_r20 = ctx_r18.row;
    const i_r21 = ctx_r18.rowIndex;
    ɵɵproperty("ngTemplateOutlet", ctx)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c8, row_r20, i_r21));
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_4_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-grid-actions", 19);
  }
  if (rf & 2) {
    const ctx_r18 = ɵɵnextContext();
    const row_r20 = ctx_r18.row;
    const i_r21 = ctx_r18.rowIndex;
    ɵɵproperty("index", i_r21)("record", row_r20);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleTableComponent_Conditional_0_Conditional_4_ng_template_2_Conditional_0_Template, 1, 5, "ng-container", 10)(1, ExtensibleTableComponent_Conditional_0_Conditional_4_ng_template_2_Conditional_1_Template, 1, 2, "abp-grid-actions", 19);
  }
  if (rf & 2) {
    let tmp_6_0;
    const row_r20 = ctx.row;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional((tmp_6_0 = ctx_r1.actionsTemplate()) ? 0 : ctx_r1.isVisibleActions(row_r20) ? 1 : -1, tmp_6_0);
  }
}
function ExtensibleTableComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ngx-datatable-column", 4);
    ɵɵpipe(1, "abpLocalization");
    ɵɵtemplate(2, ExtensibleTableComponent_Conditional_0_Conditional_4_ng_template_2_Template, 2, 1, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("name", ɵɵpipeBind1(1, 5, ctx_r1.actionsText()))("maxWidth", ctx_r1._actionsColumnWidth())("width", ctx_r1._actionsColumnWidth() || 200)("canAutoResize", !ctx_r1._actionsColumnWidth())("sortable", false);
  }
}
function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 23);
    ɵɵpipe(1, "abpLocalization");
    ɵɵlistener("click", function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_2_Conditional_0_Template_span_click_0_listener() {
      ɵɵrestoreView(_r22);
      const sortFn_r23 = ɵɵnextContext().sortFn;
      const prop_r24 = ɵɵnextContext(2).$implicit;
      return ɵɵresetView(prop_r24.sortable && sortFn_r23());
    });
    ɵɵtext(2);
    ɵɵelement(3, "i", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r25 = ɵɵnextContext().column;
    const prop_r24 = ɵɵnextContext(2).$implicit;
    ɵɵclassProp("pointer", prop_r24.sortable);
    ɵɵproperty("ngbTooltip", ɵɵpipeBind1(1, 5, prop_r24.tooltip.text))("placement", prop_r24.tooltip.placement || "auto");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", column_r25.name, " ");
  }
}
function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 25);
    ɵɵlistener("click", function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_2_Conditional_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r26);
      const sortFn_r23 = ɵɵnextContext().sortFn;
      const prop_r24 = ɵɵnextContext(2).$implicit;
      return ɵɵresetView(prop_r24.sortable && sortFn_r23());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r25 = ɵɵnextContext().column;
    const prop_r24 = ɵɵnextContext(2).$implicit;
    ɵɵclassProp("pointer", prop_r24.sortable);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", column_r25.name, " ");
  }
}
function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_2_Conditional_0_Template, 4, 7, "span", 21)(1, ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_2_Conditional_1_Template, 2, 3, "span", 22);
  }
  if (rf & 2) {
    const prop_r24 = ɵɵnextContext(2).$implicit;
    ɵɵconditional(prop_r24.tooltip ? 0 : 1);
  }
}
function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 29);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "abpUtcToLocal");
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "abpUtcToLocal");
    ɵɵpipe(5, "abpLocalization");
    ɵɵlistener("click", function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Conditional_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r27);
      const ctx_r27 = ɵɵnextContext(4);
      const row_r29 = ctx_r27.row;
      const i_r30 = ctx_r27.rowIndex;
      const prop_r24 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(prop_r24.action && prop_r24.action({
        getInjected: ctx_r1.getInjected,
        record: row_r29,
        index: i_r30
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r29 = ɵɵnextContext(4).row;
    const prop_r24 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.entityPropTypeClasses[prop_r24.type]);
    ɵɵclassProp("pointer", prop_r24.action);
    ɵɵproperty("innerHTML", !prop_r24.isExtra ? ɵɵpipeBind2(2, 7, ɵɵpipeBind1(1, 5, row_r29["_" + prop_r24.name]?.value), prop_r24.type) : ɵɵpipeBind1(5, 15, "::" + ɵɵpipeBind2(4, 12, ɵɵpipeBind1(3, 10, row_r29["_" + prop_r24.name]?.value), prop_r24.type)), ɵɵsanitizeHtml);
  }
}
function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 29);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "abpLocalization");
    ɵɵlistener("click", function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Conditional_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r31);
      const ctx_r27 = ɵɵnextContext(4);
      const row_r29 = ctx_r27.row;
      const i_r30 = ctx_r27.rowIndex;
      const prop_r24 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(prop_r24.action && prop_r24.action({
        getInjected: ctx_r1.getInjected,
        record: row_r29,
        index: i_r30
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r29 = ɵɵnextContext(4).row;
    const prop_r24 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.entityPropTypeClasses[prop_r24.type]);
    ɵɵclassProp("pointer", prop_r24.action);
    ɵɵproperty("innerHTML", !prop_r24.isExtra ? ɵɵpipeBind1(1, 5, row_r29["_" + prop_r24.name]?.value) : ɵɵpipeBind1(3, 9, "::" + ɵɵpipeBind1(2, 7, row_r29["_" + prop_r24.name]?.value)), ɵɵsanitizeHtml);
  }
}
function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Conditional_0_Template, 6, 17, "div", 28)(1, ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Conditional_1_Template, 4, 11, "div", 28);
  }
  if (rf & 2) {
    const prop_r24 = ɵɵnextContext(5).$implicit;
    ɵɵconditional(prop_r24.type === "datetime" || prop_r24.type === "date" || prop_r24.type === "time" ? 0 : 1);
  }
}
function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    const row_r29 = ɵɵnextContext(3).row;
    const prop_r24 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngComponentOutlet", row_r29["_" + prop_r24.name].component)("ngComponentOutletInjector", row_r29["_" + prop_r24.name].injector);
  }
}
function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵconditionalCreate(1, ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_1_Template, 2, 1)(2, ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Conditional_2_Template, 1, 2, "ng-container");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r29 = ɵɵnextContext(2).row;
    const prop_r24 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵconditional(!row_r29["_" + prop_r24.name].component ? 1 : 2);
  }
}
function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r29 = ɵɵnextContext().row;
    const prop_r24 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("abpVisible", row_r29["_" + prop_r24.name]?.visible);
  }
}
function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_ng_container_0_Template, 2, 1, "ng-container", 26);
  }
  if (rf & 2) {
    const prop_r24 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("abpPermission", prop_r24.permission)("abpPermissionRunChangeDetection", false);
  }
}
function ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ngx-datatable-column", 5);
    ɵɵpipe(1, "abpLocalization");
    ɵɵtemplate(2, ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_2_Template, 2, 1, "ng-template", 13)(3, ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_ng_template_3_Template, 1, 2, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r31 = ɵɵnextContext();
    const prop_r24 = ctx_r31.$implicit;
    const ɵ$index_62_r33 = ctx_r31.$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("width", ctx_r1.columnWidths()[ɵ$index_62_r33] || 200)("canAutoResize", !ctx_r1.columnWidths()[ɵ$index_62_r33])("name", ɵɵpipeBind1(1, 5, prop_r24.isExtra ? "::" + prop_r24.displayName : prop_r24.displayName))("prop", prop_r24.name)("sortable", prop_r24.sortable);
  }
}
function ExtensibleTableComponent_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExtensibleTableComponent_Conditional_0_For_6_ngx_datatable_column_0_Template, 4, 7, "ngx-datatable-column", 20);
  }
  if (rf & 2) {
    const prop_r24 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("abpVisible", prop_r24.columnVisible(ctx_r1.getInjected));
  }
}
function ExtensibleTableComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-datatable", 2, 0);
    ɵɵlistener("activate", function ExtensibleTableComponent_Conditional_0_Template_ngx_datatable_activate_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.tableActivate.emit($event));
    })("select", function ExtensibleTableComponent_Conditional_0_Template_ngx_datatable_select_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSelect($event));
    })("scroll", function ExtensibleTableComponent_Conditional_0_Template_ngx_datatable_scroll_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onScroll($event));
    });
    ɵɵconditionalCreate(2, ExtensibleTableComponent_Conditional_0_Conditional_2_Template, 5, 7);
    ɵɵconditionalCreate(3, ExtensibleTableComponent_Conditional_0_Conditional_3_Template, 3, 5, "ngx-datatable-column", 3);
    ɵɵconditionalCreate(4, ExtensibleTableComponent_Conditional_0_Conditional_4_Template, 3, 7, "ngx-datatable-column", 4);
    ɵɵrepeaterCreate(5, ExtensibleTableComponent_Conditional_0_For_6_Template, 1, 1, "ngx-datatable-column", 5, _forTrack1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r1.getTableHeight());
    ɵɵproperty("rows", ctx_r1.data)("count", ctx_r1.recordsTotal())("list", ctx_r1.list())("selectionType", ctx_r1.selectable() ? ctx_r1.selectionType() : void 0)("selected", ctx_r1.selected())("scrollbarV", ctx_r1.infiniteScroll())("loadingIndicator", ctx_r1.infiniteScroll() && ctx_r1.isLoading())("footerHeight", ctx_r1.infiniteScroll() ? false : 50);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.effectiveRowDetailTemplate ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.selectable() ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.actionsTemplate() || ctx_r1.actionList.length && ctx_r1.hasAtLeastOnePermittedAction ? 4 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.propList);
  }
}
var _forTrack2 = ($index, $item) => $item.component || $item.action;
function PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 4);
    ɵɵpipe(1, "createInjector");
  }
  if (rf & 2) {
    const action_r1 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngComponentOutlet", ctx)("ngComponentOutletInjector", ɵɵpipeBind3(1, 2, ctx_r1.record, action_r1, ctx_r1));
  }
}
function PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_2_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const action_r1 = ɵɵnextContext(4).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(action_r1.action(ctx_r1.data));
    });
    ɵɵelement(1, "i");
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const toolbarAction_r4 = ctx;
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵclassMap(toolbarAction_r4?.btnClass ? toolbarAction_r4?.btnClass : ctx_r1.defaultBtnClass);
    ɵɵadvance();
    ɵɵclassMap(toolbarAction_r4?.icon);
    ɵɵclassProp("me-1", toolbarAction_r4?.icon);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 7, toolbarAction_r4?.text), " ");
  }
}
function PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_2_Conditional_0_Template, 4, 9, "button", 5);
  }
  if (rf & 2) {
    let tmp_14_0;
    const action_r1 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional((tmp_14_0 = ctx_r1.asToolbarAction(action_r1).value) ? 0 : -1, tmp_14_0);
  }
}
function PageToolbarComponent_For_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵconditionalCreate(1, PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_1_Template, 2, 6, "ng-container")(2, PageToolbarComponent_For_2_Conditional_1_ng_container_0_Conditional_2_Template, 1, 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const action_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵconditional((tmp_13_0 = action_r1.component) ? 1 : 2, tmp_13_0);
  }
}
function PageToolbarComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageToolbarComponent_For_2_Conditional_1_ng_container_0_Template, 3, 1, "ng-container", 3);
  }
  if (rf & 2) {
    const action_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("abpPermission", action_r1.permission)("abpPermissionRunChangeDetection", false);
  }
}
function PageToolbarComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵconditionalCreate(1, PageToolbarComponent_For_2_Conditional_1_Template, 1, 2, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r1 = ctx.$implicit;
    const ɵ$index_3_r5 = ctx.$index;
    const ɵ$count_3_r6 = ctx.$count;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("pe-0", ɵ$index_3_r5 === ɵ$count_3_r6 - 1);
    ɵɵadvance();
    ɵɵconditional(action_r1.visible(ctx_r1.data) ? 1 : -1);
  }
}
function selfFactory(dependency) {
  return dependency;
}
var ExtensibleDateTimePickerComponent = class _ExtensibleDateTimePickerComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.prop = input(
      ...ngDevMode ? [void 0, {
        debugName: "prop"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.meridian = input(
      false,
      ...ngDevMode ? [{
        debugName: "meridian"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.placement = input(
      "bottom-left",
      ...ngDevMode ? [{
        debugName: "placement"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = viewChild.required(
      NgbInputDatepicker,
      ...ngDevMode ? [{
        debugName: "date"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time = viewChild.required(
      NgbTimepicker,
      ...ngDevMode ? [{
        debugName: "time"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  setDate(dateStr) {
    this.date().writeValue(dateStr);
  }
  setTime(dateStr) {
    this.time().writeValue(dateStr);
  }
  static {
    this.ɵfac = function ExtensibleDateTimePickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtensibleDateTimePickerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ExtensibleDateTimePickerComponent,
      selectors: [["abp-extensible-date-time-picker"]],
      viewQuery: function ExtensibleDateTimePickerComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.date, NgbInputDatepicker, 5)(ctx.time, NgbTimepicker, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      inputs: {
        prop: [1, "prop"],
        meridian: [1, "meridian"],
        placement: [1, "placement"]
      },
      exportAs: ["abpExtensibleDateTimePicker"],
      features: [ɵɵProvidersFeature([], [{
        provide: ControlContainer,
        useFactory: selfFactory,
        deps: [[new Optional(), new SkipSelf(), ControlContainer]]
      }, {
        provide: NgbDateAdapter,
        useClass: DateTimeAdapter
      }, {
        provide: NgbTimeAdapter,
        useClass: DateTimeAdapter
      }])],
      decls: 4,
      vars: 5,
      consts: [["datepicker", "ngbDatepicker"], ["timepicker", ""], ["ngbDatepicker", "", "type", "text", 1, "form-control", 3, "ngModelChange", "click", "keyup.space", "id", "formControlName", "placement"], [3, "ngModelChange", "formControlName", "meridian"]],
      template: function ExtensibleDateTimePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "input", 2, 0);
          ɵɵlistener("ngModelChange", function ExtensibleDateTimePickerComponent_Template_input_ngModelChange_0_listener($event) {
            return ctx.setTime($event);
          })("click", function ExtensibleDateTimePickerComponent_Template_input_click_0_listener() {
            ɵɵrestoreView(_r1);
            const datepicker_r2 = ɵɵreference(1);
            return ɵɵresetView(datepicker_r2.open());
          })("keyup.space", function ExtensibleDateTimePickerComponent_Template_input_keyup_space_0_listener() {
            ɵɵrestoreView(_r1);
            const datepicker_r2 = ɵɵreference(1);
            return ɵɵresetView(datepicker_r2.open());
          });
          ɵɵelementEnd();
          ɵɵcontrolCreate();
          ɵɵelementStart(2, "ngb-timepicker", 3, 1);
          ɵɵlistener("ngModelChange", function ExtensibleDateTimePickerComponent_Template_ngb_timepicker_ngModelChange_2_listener($event) {
            return ctx.setDate($event);
          });
          ɵɵelementEnd();
          ɵɵcontrolCreate();
        }
        if (rf & 2) {
          ɵɵproperty("id", ctx.prop().id)("formControlName", ctx.prop().name)("placement", ctx.placement());
          ɵɵcontrol();
          ɵɵadvance(2);
          ɵɵproperty("formControlName", ctx.prop().name)("meridian", ctx.meridian());
          ɵɵcontrol();
        }
      },
      dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlName, NgbDatepickerModule, NgbInputDatepicker, NgbTimepickerModule, NgbTimepicker, NgxValidateCoreModule, ValidationDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleDateTimePickerComponent, [{
    type: Component,
    args: [{
      exportAs: "abpExtensibleDateTimePicker",
      imports: [ReactiveFormsModule, NgbDatepickerModule, NgbTimepickerModule, NgxValidateCoreModule],
      selector: "abp-extensible-date-time-picker",
      template: `
    <input
      [id]="prop().id"
      [formControlName]="prop().name"
      (ngModelChange)="setTime($event)"
      (click)="datepicker.open()"
      (keyup.space)="datepicker.open()"
      ngbDatepicker
      #datepicker="ngbDatepicker"
      type="text"
      class="form-control"
      [placement]="placement()"
    />
    <ngb-timepicker
      #timepicker
      [formControlName]="prop().name"
      (ngModelChange)="setDate($event)"
      [meridian]="meridian()"
    />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      viewProviders: [{
        provide: ControlContainer,
        useFactory: selfFactory,
        deps: [[new Optional(), new SkipSelf(), ControlContainer]]
      }, {
        provide: NgbDateAdapter,
        useClass: DateTimeAdapter
      }, {
        provide: NgbTimeAdapter,
        useClass: DateTimeAdapter
      }]
    }]
  }], null, {
    prop: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "prop",
        required: false
      }]
    }],
    meridian: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "meridian",
        required: false
      }]
    }],
    placement: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "placement",
        required: false
      }]
    }],
    date: [{
      type: ViewChild,
      args: [forwardRef(() => NgbInputDatepicker), {
        isSignal: true
      }]
    }],
    time: [{
      type: ViewChild,
      args: [forwardRef(() => NgbTimepicker), {
        isSignal: true
      }]
    }]
  });
})();
var EXTENSIONS_IDENTIFIER = new InjectionToken("EXTENSIONS_IDENTIFIER");
var EXTENSIONS_ACTION_TYPE = new InjectionToken("EXTENSIONS_ACTION_TYPE");
var EXTENSIONS_ACTION_DATA = new InjectionToken("EXTENSIONS_ACTION_DATA");
var EXTENSIONS_ACTION_CALLBACK = new InjectionToken("EXTENSIONS_ACTION_DATA");
var PROP_DATA_STREAM = new InjectionToken("PROP_DATA_STREAM");
var ROW_RECORD = new InjectionToken("ROW_RECORD");
var ENTITY_PROP_TYPE_CLASSES = new InjectionToken("ENTITY_PROP_TYPE_CLASSES", {
  factory: () => ({})
});
var EXTENSIONS_FORM_PROP = new InjectionToken("EXTENSIONS_FORM_PROP");
var EXTENSIONS_FORM_PROP_DATA = new InjectionToken("EXTENSIONS_FORM_PROP_DATA");
var EXTRA_PROPERTIES_KEY = "extraProperties";
var TYPEAHEAD_TEXT_SUFFIX = "_Text";
var TYPEAHEAD_TEXT_SUFFIX_REGEX = /_Text$/;
function createTypeaheadOptions(lookup) {
  return (data, searchText) => searchText && data ? data.getInjected(RestService).request({
    method: "GET",
    url: lookup.url || "",
    params: {
      [lookup.filterParamName || ""]: searchText
    }
  }, {
    apiName: "Default"
  }).pipe(map((response) => {
    const list = response[lookup.resultListPropertyName || ""];
    const mapToOption = (item) => ({
      key: item[lookup.displayPropertyName || ""],
      value: item[lookup.valuePropertyName || ""]
    });
    return list.map(mapToOption);
  })) : of([]);
}
function getTypeaheadType(lookup, name) {
  if (!lookup.url) {
    return name.endsWith(TYPEAHEAD_TEXT_SUFFIX) ? "hidden" : void 0;
  } else {
    return "typeahead";
  }
}
function createTypeaheadDisplayNameGenerator(displayNameGeneratorFn, properties) {
  return (displayName, fallback) => {
    const name = removeTypeaheadTextSuffix(fallback.name || "");
    return displayNameGeneratorFn(displayName || properties[name].displayName, {
      name,
      resource: fallback.resource
    });
  };
}
function addTypeaheadTextSuffix(name) {
  return name + TYPEAHEAD_TEXT_SUFFIX;
}
function hasTypeaheadTextSuffix(name) {
  return TYPEAHEAD_TEXT_SUFFIX_REGEX.test(name);
}
function removeTypeaheadTextSuffix(name) {
  return name.replace(TYPEAHEAD_TEXT_SUFFIX_REGEX, "");
}
var ExtensibleFormPropService = class _ExtensibleFormPropService {
  constructor() {
    this.#configStateService = inject(ConfigStateService);
    this.meridian$ = this.#configStateService.getDeep$("localization.currentCulture.dateTimeFormat.shortTimePattern").pipe(map((shortTimePattern) => (shortTimePattern || "").includes("tt")));
  }
  #configStateService;
  isRequired(validator) {
    return validator === Validators.required || validator === AbpValidators.required || validator.name === "required";
  }
  getComponent(prop) {
    if (prop.template) {
      return "template";
    }
    switch (prop.type) {
      case "boolean":
        return "checkbox";
      case "date":
        return "date";
      case "datetime":
        return "dateTime";
      case "hidden":
        return "hidden";
      case "multiselect":
        return "multiselect";
      case "text":
        return "textarea";
      case "time":
        return "time";
      case "typeahead":
        return "typeahead";
      case "passwordinputgroup":
        return "passwordinputgroup";
      default:
        return prop.options ? "select" : "input";
    }
  }
  getType(prop) {
    switch (prop.type) {
      case "date":
      case "string":
        return "text";
      case "boolean":
        return "checkbox";
      case "number":
        return "number";
      case "email":
        return "email";
      case "password":
        return "password";
      case "passwordinputgroup":
        return "passwordinputgroup";
      default:
        return "hidden";
    }
  }
  calcAsterisks(validators) {
    if (!validators) return "";
    const required = validators.find((v) => this.isRequired(v));
    return required ? "*" : "";
  }
  static {
    this.ɵfac = function ExtensibleFormPropService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtensibleFormPropService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ExtensibleFormPropService,
      factory: _ExtensibleFormPropService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleFormPropService, [{
    type: Injectable
  }], null, null);
})();
var EXTENSIBLE_FORM_MULTI_SELECT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ExtensibleFormMultiselectComponent),
  multi: true
};
var ExtensibleFormMultiselectComponent = class _ExtensibleFormMultiselectComponent {
  constructor() {
    this.prop = input.required(
      ...ngDevMode ? [{
        debugName: "prop"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = input.required(
      ...ngDevMode ? [{
        debugName: "options"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectedValues = [];
    this.disabled = false;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  isChecked(value) {
    return this.selectedValues.includes(value);
  }
  onCheckboxChange(value, checked) {
    this.selectedValues = checked ? [...this.selectedValues, value] : this.selectedValues.filter((item) => item !== value);
    this.onChange(this.selectedValues);
    this.onTouched();
  }
  writeValue(value) {
    this.selectedValues = Array.isArray(value) ? [...value] : [];
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  static {
    this.ɵfac = function ExtensibleFormMultiselectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtensibleFormMultiselectComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ExtensibleFormMultiselectComponent,
      selectors: [["abp-extensible-form-multi-select"]],
      inputs: {
        prop: [1, "prop"],
        options: [1, "options"]
      },
      features: [ɵɵProvidersFeature([EXTENSIBLE_FORM_MULTI_SELECT_CONTROL_VALUE_ACCESSOR])],
      decls: 3,
      vars: 1,
      consts: [[3, "id"], ["validationTarget", "", 1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "disabled", "checked"], [3, "for"]],
      template: function ExtensibleFormMultiselectComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵrepeaterCreate(1, ExtensibleFormMultiselectComponent_For_2_Template, 5, 5, "div", 1, _forTrack0);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("id", ctx.prop().id);
          ɵɵadvance();
          ɵɵrepeater(ctx.options());
        }
      },
      dependencies: [NgxValidateCoreModule, ValidationTargetDirective, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleFormMultiselectComponent, [{
    type: Component,
    args: [{
      selector: "abp-extensible-form-multi-select",
      template: `
    <div [id]="prop().id">
      @for (option of options(); track option.value) {
        <div class="form-check" validationTarget>
          <input
            type="checkbox"
            class="form-check-input"
            [id]="'checkbox_' + option.value"
            [disabled]="disabled"
            [checked]="isChecked(option.value)"
            (change)="onCheckboxChange(option.value, $event.target.checked)"
          />
          <label [for]="'checkbox_' + option.value">
            @if (prop().isExtra) {
              {{ '::' + option.key | abpLocalization }}
            } @else {
              {{ option.key }}
            }
          </label>
        </div>
      }
    </div>
  `,
      providers: [EXTENSIBLE_FORM_MULTI_SELECT_CONTROL_VALUE_ACCESSOR],
      imports: [LocalizationPipe, NgxValidateCoreModule],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    prop: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "prop",
        required: true
      }]
    }],
    options: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "options",
        required: true
      }]
    }]
  });
})();
var ExtensibleFormPropComponent = class _ExtensibleFormPropComponent {
  #groupDirective;
  constructor() {
    this.service = inject(ExtensibleFormPropService);
    this.track = inject(TrackByService);
    this.#groupDirective = inject(FormGroupDirective);
    this.injector = inject(Injector);
    this.form = this.#groupDirective.form;
    this.data = input.required(
      ...ngDevMode ? [{
        debugName: "data"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.prop = input.required(
      ...ngDevMode ? [{
        debugName: "prop"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.first = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "first"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isFirstGroup = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "isFirstGroup"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fieldRef = viewChild.required(
      "field",
      ...ngDevMode ? [{
        debugName: "fieldRef"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.injectorForCustomComponent = signal(
      void 0,
      ...ngDevMode ? [{
        debugName: "injectorForCustomComponent"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.asterisk = signal(
      "",
      ...ngDevMode ? [{
        debugName: "asterisk"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.containerClassName = signal(
      "mb-2",
      ...ngDevMode ? [{
        debugName: "containerClassName"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.showPassword = signal(
      false,
      ...ngDevMode ? [{
        debugName: "showPassword"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options$ = signal(
      of([]),
      ...ngDevMode ? [{
        debugName: "options$"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.validators = signal(
      [],
      ...ngDevMode ? [{
        debugName: "validators"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isReadonly = signal(
      false,
      ...ngDevMode ? [{
        debugName: "isReadonly"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.typeaheadModel = signal(
      void 0,
      ...ngDevMode ? [{
        debugName: "typeaheadModel"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.passwordKey = "ThemeShared.Extensions.PasswordComponent";
    this.disabledFn = signal(
      () => false,
      ...ngDevMode ? [{
        debugName: "disabledFn"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = computed(
      () => {
        const data = this.data();
        if (!data) return false;
        return this.disabledFn()(data);
      },
      ...ngDevMode ? [{
        debugName: "disabled"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = (text$) => text$ ? text$.pipe(debounceTime(300), distinctUntilChanged(), switchMap((text) => this.prop()?.options?.(this.data(), text) || of([]))) : of([]);
    this.typeaheadFormatter = (option) => option.key;
    this.meridian$ = this.service.meridian$;
    effect(() => {
      const currentProp = this.prop();
      const data = this.data();
      if (!currentProp || !data) return;
      const {
        options,
        readonly,
        disabled,
        validators,
        className,
        template
      } = currentProp;
      if (template) {
        this.injectorForCustomComponent.set(Injector.create({
          providers: [{
            provide: EXTENSIONS_FORM_PROP,
            useValue: currentProp
          }, {
            provide: EXTENSIONS_FORM_PROP_DATA,
            useValue: data?.record
          }, {
            provide: ControlContainer,
            useExisting: FormGroupDirective
          }],
          parent: this.injector
        }));
      } else {
        this.injectorForCustomComponent.set(void 0);
      }
      if (options) this.options$.set(options(data));
      if (readonly) this.isReadonly.set(readonly(data));
      if (disabled) {
        this.disabledFn.set(disabled);
      } else {
        this.disabledFn.set(() => false);
      }
      if (validators) {
        this.validators.set(validators(data));
        this.asterisk.set(this.service.calcAsterisks(validators(data)));
      } else {
        this.validators.set([]);
        this.asterisk.set("");
      }
      if (className !== void 0) {
        this.containerClassName.set(className);
      } else {
        this.containerClassName.set("mb-2");
      }
      const [keyControl, valueControl] = this.getTypeaheadControls();
      if (keyControl && valueControl) {
        this.typeaheadModel.set({
          key: keyControl.value,
          value: valueControl.value
        });
      }
    });
  }
  setTypeaheadValue(selectedOption) {
    const model = selectedOption || {
      key: null,
      value: null
    };
    this.typeaheadModel.set(model);
    const {
      key,
      value
    } = model;
    const [keyControl, valueControl] = this.getTypeaheadControls();
    if (valueControl?.value && !value) valueControl.markAsDirty();
    keyControl?.setValue(key);
    valueControl?.setValue(value);
  }
  get isInvalid() {
    const control = this.form.get(this.prop().name);
    return control?.touched && control.invalid;
  }
  getTypeaheadControls() {
    const {
      name
    } = this.prop();
    const extraPropName = `${EXTRA_PROPERTIES_KEY}.${name}`;
    const keyControl = this.form.get(addTypeaheadTextSuffix(extraPropName)) || this.form.get(addTypeaheadTextSuffix(name));
    const valueControl = this.form.get(extraPropName) || this.form.get(name);
    return [keyControl, valueControl];
  }
  ngAfterViewInit() {
    if (this.isFirstGroup() && this.first() && this.fieldRef()) {
      requestAnimationFrame(() => {
        this.fieldRef().nativeElement.focus();
      });
    }
  }
  getComponent(prop) {
    return this.service.getComponent(prop);
  }
  getType(prop) {
    return this.service.getType(prop);
  }
  static {
    this.ɵfac = function ExtensibleFormPropComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtensibleFormPropComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ExtensibleFormPropComponent,
      selectors: [["abp-extensible-form-prop"]],
      viewQuery: function ExtensibleFormPropComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.fieldRef, _c0, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      inputs: {
        data: [1, "data"],
        prop: [1, "prop"],
        first: [1, "first"],
        isFirstGroup: [1, "isFirstGroup"]
      },
      features: [ɵɵProvidersFeature([ExtensibleFormPropService], [{
        provide: ControlContainer,
        useFactory: selfFactory,
        deps: [[new Optional(), new SkipSelf(), ControlContainer]]
      }, {
        provide: NgbDateAdapter,
        useClass: DateAdapter
      }, {
        provide: NgbTimeAdapter,
        useClass: TimeAdapter
      }])],
      decls: 3,
      vars: 2,
      consts: [["label", ""], ["field", ""], ["typeahead", ""], ["datepicker", "ngbDatepicker"], [4, "abpPermission", "abpPermissionRunChangeDetection"], [1, "mb-2"], ["type", "hidden", 3, "formControlName"], ["validationTarget", "", 1, "form-check"], [1, "text-muted", "d-block"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [3, "ngTemplateOutlet"], [1, "form-control", 3, "id", "formControlName", "autocomplete", "type", "abpDisabled", "readonly"], ["type", "checkbox", 1, "form-check-input", 3, "id", "formControlName", "abpDisabled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "form-select", "form-control", 3, "id", "formControlName", "abpDisabled"], [3, "ngValue"], [3, "prop", "options", "formControlName", "abpDisabled"], ["validationStyle", "", "validationTarget", "", 1, "position-relative"], [1, "form-control", 3, "ngModelChange", "selectItem", "blur", "id", "autocomplete", "abpDisabled", "ngbTypeahead", "editable", "inputFormatter", "resultFormatter", "ngModelOptions", "ngModel"], ["ngbDatepicker", "", "type", "text", 1, "form-control", 3, "click", "keyup.space", "id", "formControlName"], [3, "formControlName"], [3, "prop", "meridian"], [1, "form-control", 3, "id", "formControlName", "abpDisabled", "readonly"], ["validationTarget", "", 1, "input-group", "form-group"], [1, "form-control", 3, "id", "formControlName", "abpShowPassword"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["aria-hidden", "true", 1, "fa"], [3, "htmlFor"], [1, "d-inline-flex", "align-items-center", "gap-1", "text-nowrap"], ["container", "body", 1, "bi", "bi-info-circle", 3, "ngbTooltip", "placement"]],
      template: function ExtensibleFormPropComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ExtensibleFormPropComponent_ng_container_0_Template, 15, 5, "ng-container", 4)(1, ExtensibleFormPropComponent_ng_template_1_Template, 6, 6, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("abpPermission", ctx.prop().permission)("abpPermissionRunChangeDetection", false);
        }
      },
      dependencies: [ExtensibleDateTimePickerComponent, ExtensibleFormMultiselectComponent, NgbDatepickerModule, NgbInputDatepicker, NgbTimepickerModule, NgbTimepicker, ReactiveFormsModule, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, FormControlName, DisabledDirective, NgxValidateCoreModule, ValidationStyleDirective, ValidationTargetDirective, ValidationDirective, NgbTooltip, NgbTypeaheadModule, NgbTypeahead, ShowPasswordDirective, PermissionDirective, NgComponentOutlet, NgTemplateOutlet, FormsModule, NgModel, LocalizationPipe, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleFormPropComponent, [{
    type: Component,
    args: [{
      selector: "abp-extensible-form-prop",
      imports: [ExtensibleDateTimePickerComponent, ExtensibleFormMultiselectComponent, NgbDatepickerModule, NgbTimepickerModule, ReactiveFormsModule, DisabledDirective, NgxValidateCoreModule, NgbTooltip, NgbTypeaheadModule, ShowPasswordDirective, PermissionDirective, LocalizationPipe, AsyncPipe, NgComponentOutlet, NgTemplateOutlet, FormsModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ExtensibleFormPropService],
      viewProviders: [{
        provide: ControlContainer,
        useFactory: selfFactory,
        deps: [[new Optional(), new SkipSelf(), ControlContainer]]
      }, {
        provide: NgbDateAdapter,
        useClass: DateAdapter
      }, {
        provide: NgbTimeAdapter,
        useClass: TimeAdapter
      }],
      template: `<ng-container *abpPermission="prop().permission; runChangeDetection: false">\r
  @switch (getComponent(prop())) {\r
    @case ('template') {\r
      <ng-container *ngComponentOutlet="prop().template; injector: injectorForCustomComponent()" />\r
    }\r
  }\r
\r
  <div [class]="containerClassName()" class="mb-2">\r
    @switch (getComponent(prop())) {\r
      @case ('input') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <input\r
          #field\r
          [id]="prop().id"\r
          [formControlName]="prop().name"\r
          [autocomplete]="prop().autocomplete"\r
          [type]="getType(prop())"\r
          [abpDisabled]="disabled()"\r
          [readonly]="isReadonly()"\r
          class="form-control"\r
        />\r
      }\r
      @case ('hidden') {\r
        <input [formControlName]="prop().name" type="hidden" />\r
      }\r
      @case ('checkbox') {\r
        <div class="form-check" validationTarget>\r
          <input\r
            #field\r
            [id]="prop().id"\r
            [formControlName]="prop().name"\r
            [abpDisabled]="disabled()"\r
            type="checkbox"\r
            class="form-check-input"\r
          />\r
          <ng-template\r
            [ngTemplateOutlet]="label"\r
            [ngTemplateOutletContext]="{ $implicit: 'form-check-label' }"\r
          />\r
        </div>\r
      }\r
      @case ('select') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <select\r
          #field\r
          [id]="prop().id"\r
          [formControlName]="prop().name"\r
          [abpDisabled]="disabled()"\r
          class="form-select form-control"\r
        >\r
          @for (option of options$() | async; track option.value) {\r
            <option [ngValue]="option.value">\r
              @if (prop().isExtra) {\r
                {{ '::' + option.key | abpLocalization }}\r
              } @else {\r
                {{ option.key }}\r
              }\r
            </option>\r
          }\r
        </select>\r
      }\r
      @case ('multiselect') {\r
        <ng-template [ngTemplateOutlet]="label"></ng-template>\r
        <abp-extensible-form-multi-select\r
          [prop]="prop()"\r
          [options]="options$() | async"\r
          [formControlName]="prop().name"\r
          [abpDisabled]="disabled()"\r
        />\r
      }\r
      @case ('typeahead') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <div #typeahead class="position-relative" validationStyle validationTarget>\r
          <input\r
            #field\r
            [id]="prop().id"\r
            [autocomplete]="prop().autocomplete"\r
            [abpDisabled]="disabled()"\r
            [ngbTypeahead]="search"\r
            [editable]="false"\r
            [inputFormatter]="typeaheadFormatter"\r
            [resultFormatter]="typeaheadFormatter"\r
            [ngModelOptions]="{ standalone: true }"\r
            [ngModel]="typeaheadModel()"\r
            (ngModelChange)="typeaheadModel.set($event)"\r
            (selectItem)="setTypeaheadValue($event.item)"\r
            (blur)="setTypeaheadValue(typeaheadModel())"\r
            [class.is-invalid]="typeahead.classList.contains('is-invalid')"\r
            class="form-control"\r
          />\r
          <input [formControlName]="prop().name" type="hidden" />\r
        </div>\r
      }\r
      @case ('date') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <input\r
          [id]="prop().id"\r
          [formControlName]="prop().name"\r
          (click)="datepicker.open()"\r
          (keyup.space)="datepicker.open()"\r
          ngbDatepicker\r
          #datepicker="ngbDatepicker"\r
          type="text"\r
          class="form-control"\r
        />\r
      }\r
      @case ('time') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <ngb-timepicker [formControlName]="prop().name" />\r
      }\r
      @case ('dateTime') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <abp-extensible-date-time-picker [prop]="prop()" [meridian]="meridian$ | async" />\r
      }\r
      @case ('textarea') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <textarea\r
          #field\r
          [id]="prop().id"\r
          [formControlName]="prop().name"\r
          [abpDisabled]="disabled()"\r
          [readonly]="isReadonly()"\r
          class="form-control"\r
        ></textarea>\r
      }\r
      @case ('passwordinputgroup') {\r
        <ng-template [ngTemplateOutlet]="label" />\r
        <div class="input-group form-group" validationTarget>\r
          <input\r
            class="form-control"\r
            [id]="prop().id"\r
            [formControlName]="prop().name"\r
            [abpShowPassword]="showPassword()"\r
          />\r
          <button\r
            class="btn btn-secondary"\r
            type="button"\r
            (click)="showPassword.update(value => !value)"\r
          >\r
            <i\r
              class="fa"\r
              aria-hidden="true"\r
              [class]="{\r
                'fa-eye-slash': !showPassword(),\r
                'fa-eye': showPassword(),\r
              }"\r
            ></i>\r
          </button>\r
        </div>\r
      }\r
    }\r
\r
    @if (prop().formText) {\r
      <small class="text-muted d-block">{{ prop().formText | abpLocalization }}</small>\r
    }\r
  </div>\r
</ng-container>\r
\r
<ng-template #label let-classes>\r
  <label [htmlFor]="prop().id" [class]="classes || 'form-label d-inline-block'">\r
    <span class="d-inline-flex align-items-center gap-1 text-nowrap">\r
      @if (prop().displayTextResolver) {\r
        {{ prop().displayTextResolver(data()) | abpLocalization }}\r
      } @else {\r
        @if (prop().isExtra) {\r
          {{ '::' + prop().displayName | abpLocalization }}\r
        } @else {\r
          {{ prop().displayName | abpLocalization }}\r
        }\r
      }\r
      {{ asterisk() }}\r
      @if (prop().tooltip) {\r
        <i\r
          [ngbTooltip]="prop().tooltip.text | abpLocalization"\r
          [placement]="prop().tooltip.placement || 'auto'"\r
          container="body"\r
          class="bi bi-info-circle"\r
        ></i>\r
      }\r
    </span>\r
  </label>\r
</ng-template>\r
`
    }]
  }], () => [], {
    data: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "data",
        required: true
      }]
    }],
    prop: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "prop",
        required: true
      }]
    }],
    first: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "first",
        required: false
      }]
    }],
    isFirstGroup: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "isFirstGroup",
        required: false
      }]
    }],
    fieldRef: [{
      type: ViewChild,
      args: ["field", {
        isSignal: true
      }]
    }]
  });
})();
var PropList = class extends LinkedList {
};
var PropData = class {
  get data() {
    return {
      getInjected: this.getInjected,
      // `record` / `index` may be signals; always use `data.record` / `data.index`.
      index: isSignal(this.index) ? this.index() : this.index,
      record: isSignal(this.record) ? this.record() : this.record
    };
  }
};
var Prop = class {
  constructor(type, name, displayName, permission, visible = (_) => true, isExtra = false, template, className, formText, tooltip, displayTextResolver) {
    this.type = type;
    this.name = name;
    this.displayName = displayName;
    this.permission = permission;
    this.visible = visible;
    this.isExtra = isExtra;
    this.template = template;
    this.className = className;
    this.formText = formText;
    this.tooltip = tooltip;
    this.displayTextResolver = displayTextResolver;
    this.displayName = this.displayName || this.name;
  }
};
var PropsFactory = class {
  constructor() {
    this.contributorCallbacks = {};
  }
  get(name) {
    this.contributorCallbacks[name] = this.contributorCallbacks[name] || [];
    return new this._ctor(this.contributorCallbacks[name]);
  }
};
var Props = class {
  get props() {
    const propList = new this._ctor();
    this.callbackList.forEach((callback) => callback(propList));
    return propList;
  }
  constructor(callbackList) {
    this.callbackList = callbackList;
  }
  addContributor(contributeCallback) {
    this.callbackList.push(contributeCallback);
  }
  clearContributors() {
    while (this.callbackList.length) this.callbackList.pop();
  }
};
var FormPropList = class extends PropList {
};
var FormProps = class extends Props {
  constructor() {
    super(...arguments);
    this._ctor = FormPropList;
  }
};
var GroupedFormPropList = class {
  constructor() {
    this.items = [];
    this.count = 1;
  }
  addItem(item) {
    const groupName = item.group?.name;
    let group = this.items.find((i) => i.group?.name === groupName);
    if (group) {
      group.formPropList.addTail(item);
    } else {
      group = {
        formPropList: new FormPropList(),
        group: item.group || {
          name: `default${this.count++}`,
          className: item.group?.className
        }
      };
      group.formPropList.addHead(item);
      this.items.push(group);
    }
  }
};
var CreateFormPropsFactory = class extends PropsFactory {
  constructor() {
    super(...arguments);
    this._ctor = FormProps;
  }
};
var EditFormPropsFactory = class extends PropsFactory {
  constructor() {
    super(...arguments);
    this._ctor = FormProps;
  }
};
var FormProp = class _FormProp extends Prop {
  constructor(options) {
    super(options.type, options.name, options.displayName || "", options.permission || "", options.visible, options.isExtra, options.template, options.className, options.formText, options.tooltip);
    this.group = options.group;
    this.className = options.className;
    this.formText = options.formText;
    this.tooltip = options.tooltip;
    this.asyncValidators = options.asyncValidators || ((_) => []);
    this.validators = options.validators || ((_) => []);
    this.disabled = options.disabled || ((_) => false);
    this.readonly = options.readonly || ((_) => false);
    this.autocomplete = options.autocomplete || "off";
    this.options = options.options;
    this.id = options.id || options.name;
    const defaultValue = options.defaultValue;
    this.defaultValue = isFalsyValue(defaultValue) ? defaultValue : defaultValue || "";
    this.displayTextResolver = options.displayTextResolver;
  }
  static create(options) {
    return new _FormProp(options);
  }
  static createMany(arrayOfOptions) {
    return arrayOfOptions.map(_FormProp.create);
  }
};
var FormPropData = class extends PropData {
  constructor(injector, record) {
    super();
    this.record = record;
    this.getInjected = injector.get.bind(injector);
  }
};
function isFalsyValue(defaultValue) {
  return [0, "", false].indexOf(defaultValue) > -1;
}
var ActionList = class extends LinkedList {
};
var ActionData = class {
  get data() {
    return {
      getInjected: this.getInjected,
      // `record` / `index` may be signals; always use `data.record` / `data.index`.
      index: isSignal(this.index) ? this.index() : this.index,
      record: isSignal(this.record) ? this.record() : this.record
    };
  }
};
var Action = class {
  constructor(permission, visible = () => true, action = () => {
  }, btnClass, btnStyle) {
    this.permission = permission;
    this.visible = visible;
    this.action = action;
    this.btnClass = btnClass;
    this.btnStyle = btnStyle;
  }
};
var ActionsFactory = class {
  constructor() {
    this.contributorCallbacks = {};
  }
  get(name) {
    this.contributorCallbacks[name] = this.contributorCallbacks[name] || [];
    return new this._ctor(this.contributorCallbacks[name]);
  }
};
var Actions = class {
  get actions() {
    const actionList = new this._ctor();
    this.callbackList.forEach((callback) => callback(actionList));
    return actionList;
  }
  constructor(callbackList) {
    this.callbackList = callbackList;
  }
  addContributor(contributeCallback) {
    this.callbackList.push(contributeCallback);
  }
  clearContributors() {
    while (this.callbackList.length) this.callbackList.pop();
  }
};
var EntityActionList = class extends ActionList {
};
var EntityActions = class extends Actions {
  constructor() {
    super(...arguments);
    this._ctor = EntityActionList;
  }
};
var EntityActionsFactory = class extends ActionsFactory {
  constructor() {
    super(...arguments);
    this._ctor = EntityActions;
  }
};
var EntityAction = class _EntityAction extends Action {
  constructor(options) {
    super(options.permission || "", options.visible, options.action);
    this.text = options.text;
    this.icon = options.icon || "";
    this.btnClass = options.btnClass || "btn btn-primary text-center";
    this.btnStyle = options.btnStyle;
    this.showOnlyIcon = options.showOnlyIcon || false;
    this.tooltip = options.tooltip;
  }
  static create(options) {
    return new _EntityAction(options);
  }
  static createMany(arrayOfOptions) {
    return arrayOfOptions.map(_EntityAction.create);
  }
};
var EntityPropList = class extends PropList {
};
var EntityProps = class extends Props {
  constructor() {
    super(...arguments);
    this._ctor = EntityPropList;
  }
};
var EntityPropsFactory = class extends PropsFactory {
  constructor() {
    super(...arguments);
    this._ctor = EntityProps;
  }
};
var EntityProp = class _EntityProp extends Prop {
  constructor(options) {
    super(options.type, options.name, options.displayName || "", options.permission || "", options.visible, options.isExtra);
    this.columnVisible = options.columnVisible || (() => true);
    this.columnWidth = options.columnWidth;
    this.sortable = options.sortable || false;
    this.valueResolver = options.valueResolver || ((data) => of(escapeHtmlChars(data.record[this.name])));
    if (options.action) {
      this.action = options.action;
    }
    if (options.component) {
      this.component = options.component;
    }
    if (options.enumList) {
      this.enumList = options.enumList;
    }
    this.tooltip = options.tooltip;
  }
  static create(options) {
    return new _EntityProp(options);
  }
  static createMany(arrayOfOptions) {
    return arrayOfOptions.map(_EntityProp.create);
  }
};
var ToolbarActionList = class extends ActionList {
};
var ToolbarActions = class extends Actions {
  constructor() {
    super(...arguments);
    this._ctor = ToolbarActionList;
  }
};
var ToolbarActionsFactory = class extends ActionsFactory {
  constructor() {
    super(...arguments);
    this._ctor = ToolbarActions;
  }
};
var ToolbarAction = class _ToolbarAction extends Action {
  constructor(options) {
    super(options.permission || "", options.visible, options.action);
    this.text = options.text;
    this.icon = options.icon || "";
    if (options.btnClass) {
      this.btnClass = options.btnClass;
    }
  }
  static create(options) {
    return new _ToolbarAction(options);
  }
  static createMany(arrayOfOptions) {
    return arrayOfOptions.map(_ToolbarAction.create);
  }
};
var ExtensionsService = class _ExtensionsService {
  constructor() {
    this.entityActions = new EntityActionsFactory();
    this.toolbarActions = new ToolbarActionsFactory();
    this.entityProps = new EntityPropsFactory();
    this.createFormProps = new CreateFormPropsFactory();
    this.editFormProps = new EditFormPropsFactory();
  }
  static {
    this.ɵfac = function ExtensionsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtensionsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ExtensionsService,
      factory: _ExtensionsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PropDataDirective = class _PropDataDirective extends PropData {
  constructor() {
    const injector = inject(Injector);
    super();
    this.tempRef = inject(TemplateRef);
    this.vcRef = inject(ViewContainerRef);
    this.propList = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "propList"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "abpPropDataFromList"
    }));
    this.record = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "record"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "abpPropDataWithRecord"
    }));
    this.index = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "index"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "abpPropDataAtIndex"
    }));
    this.getInjected = injector.get.bind(injector);
    effect(() => {
      this.record();
      this.index();
      this.propList();
      this.vcRef.clear();
      this.vcRef.createEmbeddedView(this.tempRef, {
        $implicit: this.data,
        index: 0
      });
    });
  }
  ngOnDestroy() {
    this.vcRef.clear();
  }
  static {
    this.ɵfac = function PropDataDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropDataDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PropDataDirective,
      selectors: [["", "abpPropData", ""]],
      inputs: {
        propList: [1, "abpPropDataFromList", "propList"],
        record: [1, "abpPropDataWithRecord", "record"],
        index: [1, "abpPropDataAtIndex", "index"]
      },
      exportAs: ["abpPropData"],
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropDataDirective, [{
    type: Directive,
    args: [{
      exportAs: "abpPropData",
      selector: "[abpPropData]"
    }]
  }], () => [], {
    propList: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpPropDataFromList",
        required: false
      }]
    }],
    record: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpPropDataWithRecord",
        required: true
      }]
    }],
    index: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "abpPropDataAtIndex",
        required: false
      }]
    }]
  });
})();
var ExtensibleFormComponent = class _ExtensibleFormComponent {
  constructor() {
    this.track = inject(TrackByService);
    this.container = inject(ControlContainer);
    this.extensions = inject(ExtensionsService);
    this.identifier = inject(EXTENSIONS_IDENTIFIER);
    this.formProps = viewChildren(
      ExtensibleFormPropComponent,
      ...ngDevMode ? [{
        debugName: "formProps"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectedRecord = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "selectedRecord"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.extraPropertiesKey = EXTRA_PROPERTIES_KEY;
    this.groupedPropList = signal(
      void 0,
      ...ngDevMode ? [{
        debugName: "groupedPropList"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.record = signal(
      void 0,
      ...ngDevMode ? [{
        debugName: "record"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const recordValue = this.selectedRecord();
      const type = !recordValue || JSON.stringify(recordValue) === "{}" ? "create" : "edit";
      const propList = this.extensions[`${type}FormProps`].get(this.identifier).props;
      this.groupedPropList.set(this.createGroupedList(propList));
      this.record.set(recordValue);
    });
  }
  get form() {
    return this.container ? this.container.control : {
      controls: {}
    };
  }
  get extraProperties() {
    return this.form.controls.extraProperties || {
      controls: {}
    };
  }
  createGroupedList(propList) {
    const groupedFormPropList = new GroupedFormPropList();
    propList.forEach((item) => {
      groupedFormPropList.addItem(item.value);
    });
    return groupedFormPropList;
  }
  //TODO: Reactor this method
  isAnyGroupMemberVisible(index, data) {
    const groupedPropListValue = this.groupedPropList();
    if (!groupedPropListValue) return false;
    const {
      items
    } = groupedPropListValue;
    const formPropList = items[index].formPropList.toArray();
    return formPropList.some((prop) => prop.visible(data));
  }
  static {
    this.ɵfac = function ExtensibleFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtensibleFormComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ExtensibleFormComponent,
      selectors: [["abp-extensible-form"]],
      viewQuery: function ExtensibleFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.formProps, ExtensibleFormPropComponent, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      inputs: {
        selectedRecord: [1, "selectedRecord"]
      },
      exportAs: ["abpExtensibleForm"],
      features: [ɵɵProvidersFeature([], [{
        provide: ControlContainer,
        useFactory: selfFactory,
        deps: [[new Optional(), new SkipSelf(), ControlContainer]]
      }])],
      decls: 3,
      vars: 1,
      consts: [["propListTemplate", ""], [4, "abpPropData", "abpPropDataFromList", "abpPropDataWithRecord"], [3, "class"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "formGroupName"], [3, "prop", "data"], [3, "class", "prop", "data", "first", "isFirstGroup"], [3, "prop", "data", "first", "isFirstGroup"]],
      template: function ExtensibleFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, ExtensibleFormComponent_Conditional_0_Template, 2, 0);
          ɵɵtemplate(1, ExtensibleFormComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.form ? 0 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, PropDataDirective, ReactiveFormsModule, NgControlStatusGroup, FormGroupName, ExtensibleFormPropComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleFormComponent, [{
    type: Component,
    args: [{
      exportAs: "abpExtensibleForm",
      selector: "abp-extensible-form",
      imports: [NgTemplateOutlet, PropDataDirective, ReactiveFormsModule, ExtensibleFormPropComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      viewProviders: [{
        provide: ControlContainer,
        useFactory: selfFactory,
        deps: [[new Optional(), new SkipSelf(), ControlContainer]]
      }],
      template: '@if (form) {\r\n@for (groupedProp of groupedPropList()?.items; track i; let i = $index; let first = $first) {\r\n<ng-container *abpPropData="let data; fromList: groupedProp.formPropList; withRecord: record()">\r\n  @if (isAnyGroupMemberVisible(i, data) && groupedProp.group?.className) {\r\n  <div [class]="groupedProp.group?.className"\r\n    [attr.data-name]="groupedProp.group?.name || groupedProp.group?.className">\r\n    <ng-container [ngTemplateOutlet]="propListTemplate"\r\n      [ngTemplateOutletContext]="{ groupedProp: groupedProp, data: data, isFirstGroup: first}">\r\n    </ng-container>\r\n  </div>\r\n  } @else {\r\n  <ng-container [ngTemplateOutlet]="propListTemplate"\r\n    [ngTemplateOutletContext]="{ groupedProp: groupedProp, data: data, isFirstGroup: first }">\r\n  </ng-container>\r\n  }\r\n</ng-container>\r\n}\r\n}\r\n\r\n<ng-template let-groupedProp="groupedProp" let-data="data" let-isFirstGroup="isFirstGroup" #propListTemplate>\r\n  @for (prop of groupedProp.formPropList; let index = $index; let first = $first; track prop.name) {\r\n  @if (prop.visible(data)) {\r\n  @if (extraProperties.controls[prop.name]) {\r\n  <ng-container [formGroupName]="extraPropertiesKey">\r\n    <abp-extensible-form-prop [prop]="prop" [data]="data" [class]="prop.className" />\r\n  </ng-container>\r\n  } @else {\r\n  @if (form.get(prop.name)) {\r\n  <abp-extensible-form-prop [class]="prop.className" [prop]="prop" [data]="data" [first]="first"\r\n    [isFirstGroup]="isFirstGroup" />\r\n  }\r\n  }\r\n  }\r\n  }\r\n</ng-template>'
    }]
  }], () => [], {
    formProps: [{
      type: ViewChildren,
      args: [forwardRef(() => ExtensibleFormPropComponent), {
        isSignal: true
      }]
    }],
    selectedRecord: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selectedRecord",
        required: false
      }]
    }]
  });
})();
var AbstractActionsComponent = class _AbstractActionsComponent extends ActionData {
  constructor() {
    const injector = inject(Injector);
    super();
    this.record = input.required(
      ...ngDevMode ? [{
        debugName: "record"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.getInjected = injector.get.bind(injector);
    const extensions = injector.get(ExtensionsService);
    const name = injector.get(EXTENSIONS_IDENTIFIER);
    const type = injector.get(EXTENSIONS_ACTION_TYPE);
    this.actionList = extensions[type].get(name).actions;
  }
  static {
    this.ɵfac = function AbstractActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractActionsComponent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractActionsComponent,
      inputs: {
        record: [1, "record"]
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractActionsComponent, [{
    type: Directive
  }], () => [], {
    record: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "record",
        required: true
      }]
    }]
  });
})();
var GridActionsComponent = class _GridActionsComponent extends AbstractActionsComponent {
  constructor() {
    super();
    this.icon = input(
      "fa fa-cog",
      ...ngDevMode ? [{
        debugName: "icon"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.index = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "index"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.text = input(
      "",
      ...ngDevMode ? [{
        debugName: "text"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.trackByFn = (_, item) => item.text;
  }
  static {
    this.ɵfac = function GridActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridActionsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GridActionsComponent,
      selectors: [["abp-grid-actions"]],
      inputs: {
        icon: [1, "icon"],
        index: [1, "index"],
        text: [1, "text"]
      },
      exportAs: ["abpGridActions"],
      features: [ɵɵProvidersFeature([{
        provide: EXTENSIONS_ACTION_TYPE,
        useValue: "entityActions"
      }]), ɵɵInheritDefinitionFeature],
      decls: 8,
      vars: 2,
      consts: [["dropDownBtnItemTmp", ""], ["buttonContentTmp", ""], ["btnTmp", ""], ["ngbDropdown", "", "container", "body", 1, "d-inline-block"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-toggle", "dropdown", "aria-haspopup", "true", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "btn-sm", "dropdown-toggle"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", "type", "button"], ["ngbDropdownItem", "", "type", "button", 3, "click", 4, "abpPermission", "abpPermissionRunChangeDetection"], ["ngbDropdownItem", "", "type", "button", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["abpEllipsis", ""], ["type", "button", "triggers", "hover", "container", "body", 3, "class", "style", "ngbTooltip", "placement"], ["type", "button", 3, "class", "style"], ["type", "button", "triggers", "hover", "container", "body", 3, "class", "style", "ngbTooltip", "placement", "click", 4, "abpPermission", "abpPermissionRunChangeDetection"], ["type", "button", "triggers", "hover", "container", "body", 3, "click", "ngbTooltip", "placement"], ["type", "button", 3, "class", "style", "click", 4, "abpPermission", "abpPermissionRunChangeDetection"], ["type", "button", 3, "click"]],
      template: function GridActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, GridActionsComponent_Conditional_0_Template, 8, 7, "div", 3);
          ɵɵconditionalCreate(1, GridActionsComponent_Conditional_1_Template, 1, 4, "ng-container", 4);
          ɵɵtemplate(2, GridActionsComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, GridActionsComponent_ng_template_4_Template, 2, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, GridActionsComponent_ng_template_6_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.actionList.length > 1 ? 0 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.actionList.length === 1 ? 1 : -1);
        }
      },
      dependencies: [NgbDropdownModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem, EllipsisDirective, PermissionDirective, NgTemplateOutlet, NgbTooltipModule, NgbTooltip, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridActionsComponent, [{
    type: Component,
    args: [{
      exportAs: "abpGridActions",
      imports: [NgbDropdownModule, EllipsisDirective, PermissionDirective, LocalizationPipe, NgTemplateOutlet, NgbTooltipModule],
      selector: "abp-grid-actions",
      providers: [{
        provide: EXTENSIONS_ACTION_TYPE,
        useValue: "entityActions"
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@if (actionList.length > 1) {\r
  <div ngbDropdown container="body" class="d-inline-block">\r
    <button\r
      class="btn btn-primary btn-sm dropdown-toggle"\r
      data-toggle="dropdown"\r
      aria-haspopup="true"\r
      ngbDropdownToggle\r
    >\r
      <i [class]="icon()" [class.me-1]="icon()"></i>{{ text() | abpLocalization }}\r
    </button>\r
    <div ngbDropdownMenu>\r
      @for (action of actionList; track $index) {\r
        <ng-container\r
          [ngTemplateOutlet]="dropDownBtnItemTmp"\r
          [ngTemplateOutletContext]="{ $implicit: action }"\r
        />\r
      }\r
    </div>\r
  </div>\r
}\r
\r
@if (actionList.length === 1) {\r
  <ng-container\r
    [ngTemplateOutlet]="btnTmp"\r
    [ngTemplateOutletContext]="{ $implicit: actionList.get(0).value }"\r
  />\r
}\r
\r
<ng-template #dropDownBtnItemTmp let-action>\r
  @if (action.visible(data)) {\r
    <button\r
      ngbDropdownItem\r
      *abpPermission="action.permission; runChangeDetection: false"\r
      (click)="action.action(data)"\r
      type="button"\r
    >\r
      <ng-container *ngTemplateOutlet="buttonContentTmp; context: { $implicit: action }" />\r
    </button>\r
  }\r
</ng-template>\r
\r
<ng-template #buttonContentTmp let-action>\r
  <i [class]="action.icon" [class.me-1]="action.icon && !action.showOnlyIcon"></i>\r
  @if (!action.showOnlyIcon) {\r
    @if (action.icon) {\r
      <span>{{ action.text | abpLocalization }}</span>\r
    } @else {\r
      <div abpEllipsis>{{ action.text | abpLocalization }}</div>\r
    }\r
  }\r
</ng-template>\r
\r
<ng-template #btnTmp let-action>\r
  @if (action.visible(data)) {\r
    @if (action.tooltip) {\r
      <button\r
        *abpPermission="action.permission; runChangeDetection: false"\r
        (click)="action.action(data)"\r
        type="button"\r
        [class]="action.btnClass"\r
        [style]="action.btnStyle"\r
        [ngbTooltip]="action.tooltip.text | abpLocalization"\r
        [placement]="action.tooltip.placement || 'auto'"\r
        triggers="hover"\r
        container="body"\r
      >\r
        <ng-container *ngTemplateOutlet="buttonContentTmp; context: { $implicit: action }" />\r
      </button>\r
    } @else {\r
      <button\r
        *abpPermission="action.permission; runChangeDetection: false"\r
        (click)="action.action(data)"\r
        type="button"\r
        [class]="action.btnClass"\r
        [style]="action.btnStyle"\r
      >\r
        <ng-container *ngTemplateOutlet="buttonContentTmp; context: { $implicit: action }" />\r
      </button>\r
    }\r
  }\r
</ng-template>\r
`
    }]
  }], () => [], {
    icon: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "icon",
        required: false
      }]
    }],
    index: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "index",
        required: false
      }]
    }],
    text: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "text",
        required: false
      }]
    }]
  });
})();
var ExtensibleTableRowDetailComponent = class _ExtensibleTableRowDetailComponent {
  constructor() {
    this.rowHeight = input(
      "100%",
      ...ngDevMode ? [{
        debugName: "rowHeight"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template = contentChild(
      TemplateRef,
      ...ngDevMode ? [{
        debugName: "template"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.ɵfac = function ExtensibleTableRowDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtensibleTableRowDetailComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ExtensibleTableRowDetailComponent,
      selectors: [["abp-extensible-table-row-detail"]],
      contentQueries: function ExtensibleTableRowDetailComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.template, TemplateRef, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      inputs: {
        rowHeight: [1, "rowHeight"]
      },
      decls: 0,
      vars: 0,
      template: function ExtensibleTableRowDetailComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleTableRowDetailComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "abp-extensible-table-row-detail",
      template: ""
    }]
  }], null, {
    rowHeight: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "rowHeight",
        required: false
      }]
    }],
    template: [{
      type: ContentChild,
      args: [forwardRef(() => TemplateRef), {
        isSignal: true
      }]
    }]
  });
})();
var DEFAULT_ACTIONS_COLUMN_WIDTH = 150;
var ExtensibleTableComponent = class _ExtensibleTableComponent {
  #injector;
  #destroyRef;
  get data() {
    return this._data();
  }
  set data(value) {
    this._data.set(value);
  }
  get effectiveRowDetailTemplate() {
    return this.rowDetailComponent()?.template() ?? this.rowDetailTemplate();
  }
  get effectiveRowDetailHeight() {
    return this.rowDetailComponent()?.rowHeight() ?? this.rowDetailHeight();
  }
  constructor() {
    this.#injector = inject(Injector);
    this.#destroyRef = inject(DestroyRef);
    this.getInjected = this.#injector.get.bind(this.#injector);
    this.locale = inject(LOCALE_ID);
    this.config = inject(ConfigStateService);
    this.timeZoneService = inject(TimezoneService);
    this.entityPropTypeClasses = inject(ENTITY_PROP_TYPE_CLASSES);
    this.permissionService = inject(PermissionService);
    this.platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.actionsTextInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "actionsTextInput"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "actionsText"
    }));
    this.dataInput = input([], __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "dataInput"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "data"
    }));
    this.list = input.required(
      ...ngDevMode ? [{
        debugName: "list"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.recordsTotal = input.required(
      ...ngDevMode ? [{
        debugName: "recordsTotal"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.actionsColumnWidthInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "actionsColumnWidthInput"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "actionsColumnWidth"
    }));
    this.actionsTemplate = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "actionsTemplate"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectable = input(
      false,
      ...ngDevMode ? [{
        debugName: "selectable"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectionTypeInput = input(SelectionType.multiClick, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "selectionTypeInput"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      alias: "selectionType"
    }));
    this.selected = input(
      [],
      ...ngDevMode ? [{
        debugName: "selected"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.infiniteScroll = input(
      false,
      ...ngDevMode ? [{
        debugName: "infiniteScroll"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isLoading = input(
      false,
      ...ngDevMode ? [{
        debugName: "isLoading"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.scrollThreshold = input(
      10,
      ...ngDevMode ? [{
        debugName: "scrollThreshold"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tableHeight = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "tableHeight"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rowDetailTemplate = input(
      void 0,
      ...ngDevMode ? [{
        debugName: "rowDetailTemplate"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rowDetailHeight = input(
      "100%",
      ...ngDevMode ? [{
        debugName: "rowDetailHeight"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tableActivate = output();
    this.selectionChange = output();
    this.loadMore = output();
    this.rowDetailToggle = output();
    this._data = signal(
      [],
      ...ngDevMode ? [{
        debugName: "_data"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._actionsColumnWidth = signal(
      DEFAULT_ACTIONS_COLUMN_WIDTH,
      ...ngDevMode ? [{
        debugName: "_actionsColumnWidth"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rowDetailComponent = contentChild(
      ExtensibleTableRowDetailComponent,
      ...ngDevMode ? [{
        debugName: "rowDetailComponent"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.table = viewChild.required(
      "table",
      ...ngDevMode ? [{
        debugName: "table"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.actionsText = computed(
      () => {
        return this.actionsTextInput() ?? (this.actionList.length >= 1 ? "AbpUi::Actions" : "");
      },
      ...ngDevMode ? [{
        debugName: "actionsText"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selectionType = computed(
      () => {
        const value = this.selectionTypeInput();
        return typeof value === "string" ? SelectionType[value] : value;
      },
      ...ngDevMode ? [{
        debugName: "selectionType"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.effectiveRowDetailRowHeight = computed(
      () => {
        const height = this.effectiveRowDetailHeight;
        if (typeof height === "number") {
          return height;
        }
        if (typeof height === "function") {
          return height;
        }
        if (typeof height === "string" && !height.endsWith("%")) {
          const parsed = Number.parseInt(height, 10);
          return Number.isNaN(parsed) ? void 0 : parsed;
        }
        return void 0;
      },
      ...ngDevMode ? [{
        debugName: "effectiveRowDetailRowHeight"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.horizontalScrollOffset = 0;
    this.hasPendingHorizontalScrollOffset = false;
    this.trackByFn = (_, item) => item.name;
    this.loadMoreSubject = new Subject();
    this.loadMoreSubscription = this.loadMoreSubject.pipe(debounceTime(100), distinctUntilChanged()).subscribe(() => this.triggerLoadMore());
    this.columnWidths = computed(
      () => {
        return this.propList.toArray().map((prop) => prop.columnWidth);
      },
      ...ngDevMode ? [{
        debugName: "columnWidths"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    const extensions = this.#injector.get(ExtensionsService);
    const name = this.#injector.get(EXTENSIONS_IDENTIFIER);
    this.propList = extensions.entityProps.get(name).props;
    this.actionList = extensions["entityActions"].get(name).actions;
    this.hasAtLeastOnePermittedAction = this.permissionService.filterItemsByPolicy(this.actionList.toArray().map((action) => ({
      requiredPolicy: action.permission
    }))).length > 0;
    effect(() => {
      const width = this.actionsColumnWidthInput();
      this._actionsColumnWidth.set(width ? Number(width) : void 0);
    });
    effect(() => {
      const dataValue = this.dataInput();
      if (!dataValue) return;
      if (dataValue.length < 1) {
        this.list().totalCount = this.recordsTotal();
      }
      this._data.set(dataValue.map((record, index) => this.prepareRecord(record, index)));
      this.restoreHorizontalScrollOffset();
    });
  }
  prepareRecord(record, index) {
    this.propList.forEach((prop) => {
      const propData = {
        getInjected: this.getInjected,
        record,
        index
      };
      const value = this.getContent(prop.value, propData);
      const propKey = `_${prop.value.name}`;
      record[propKey] = {
        visible: prop.value.visible(propData),
        value
      };
      if (prop.value.component) {
        record[propKey].injector = Injector.create({
          providers: [{
            provide: PROP_DATA_STREAM,
            useValue: value
          }, {
            provide: ROW_RECORD,
            useValue: record
          }],
          parent: this.#injector
        });
        record[propKey].component = prop.value.component;
      }
    });
    return record;
  }
  getIcon(value) {
    return value ? '<div class="text-success"><i class="fa fa-check" aria-hidden="true"></i></div>' : '<div class="text-danger"><i class="fa fa-times" aria-hidden="true"></i></div>';
  }
  getEnum(rowValue, list) {
    if (!list || list.length < 1) return rowValue;
    const {
      key
    } = list.find(({
      value
    }) => value === rowValue) || {};
    return key;
  }
  getContent(prop, data) {
    return prop.valueResolver(data).pipe(map((value) => {
      switch (prop.type) {
        case "boolean":
          return this.getIcon(value);
        case "enum":
          return this.getEnum(value, prop.enumList || []);
        default:
          return value;
      }
    }));
  }
  isVisibleActions(rowData) {
    const actions = this.actionList.toArray();
    const visibleActions = actions.filter((action) => {
      const {
        visible,
        permission
      } = action;
      let isVisible = true;
      let hasPermission = true;
      if (visible) {
        isVisible = visible({
          record: rowData,
          getInjected: this.getInjected
        });
      }
      if (permission) {
        hasPermission = this.permissionService.getGrantedPolicy(permission);
      }
      return isVisible && hasPermission;
    });
    return visibleActions.length > 0;
  }
  onSelect({
    selected
  }) {
    const selectedValue = this.selected();
    selectedValue.splice(0, selectedValue.length);
    selectedValue.push(...selected);
    this.selectionChange.emit(selected);
  }
  onScroll(scrollEvent) {
    if (!this.shouldHandleScroll()) {
      return;
    }
    const table = this.table();
    const viewportHeight = table.bodyHeight;
    const scrollHeight = table.bodyComponent.scrollHeight();
    if (scrollEvent.offsetY + viewportHeight >= scrollHeight - this.scrollThreshold()) {
      this.loadMoreSubject.next();
    }
  }
  shouldHandleScroll() {
    return this.infiniteScroll() && !this.isLoading();
  }
  triggerLoadMore() {
    this.loadMore.emit();
  }
  getTableHeight() {
    if (!this.infiniteScroll()) return "auto";
    const tableHeight = this.tableHeight();
    return tableHeight ? `${tableHeight}px` : "auto";
  }
  toggleExpandRow(row) {
    const table = this.table();
    if (table && table.rowDetail) {
      table.rowDetail.toggleExpandRow(row);
    }
    this.rowDetailToggle.emit(row);
  }
  ngAfterViewInit() {
    if (!this.infiniteScroll()) {
      this.list()?.requestStatus$?.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((status) => {
        if (status === "loading") {
          this.rememberHorizontalScrollOffset();
          this._data.set([]);
          return;
        }
        if (status === "error") {
          this.restoreHorizontalScrollOffset();
        }
      });
    }
  }
  getBodyElement() {
    if (!this.isBrowser) {
      return null;
    }
    return this.table()?.element?.querySelector("datatable-body") ?? null;
  }
  // The element carrying the column width is gone while loading without rows, so the browser
  // resets the horizontal scroll position and the header keeps the offset it had before
  rememberHorizontalScrollOffset() {
    const body = this.getBodyElement();
    this.hasPendingHorizontalScrollOffset = true;
    if (body && body.scrollWidth > body.clientWidth) {
      this.horizontalScrollOffset = body.scrollLeft;
    }
  }
  restoreHorizontalScrollOffset() {
    if (!this.hasPendingHorizontalScrollOffset) {
      return;
    }
    this.hasPendingHorizontalScrollOffset = false;
    afterNextRender(() => {
      const body = this.getBodyElement();
      if (!body) {
        return;
      }
      body.scrollLeft = this.horizontalScrollOffset;
      body.dispatchEvent(new Event("scroll"));
    }, {
      injector: this.#injector
    });
  }
  ngOnDestroy() {
    this.loadMoreSubscription.unsubscribe();
  }
  static {
    this.ɵfac = function ExtensibleTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtensibleTableComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ExtensibleTableComponent,
      selectors: [["abp-extensible-table"]],
      contentQueries: function ExtensibleTableComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.rowDetailComponent, ExtensibleTableRowDetailComponent, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      viewQuery: function ExtensibleTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.table, _c6, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      inputs: {
        actionsTextInput: [1, "actionsText", "actionsTextInput"],
        dataInput: [1, "data", "dataInput"],
        list: [1, "list"],
        recordsTotal: [1, "recordsTotal"],
        actionsColumnWidthInput: [1, "actionsColumnWidth", "actionsColumnWidthInput"],
        actionsTemplate: [1, "actionsTemplate"],
        selectable: [1, "selectable"],
        selectionTypeInput: [1, "selectionType", "selectionTypeInput"],
        selected: [1, "selected"],
        infiniteScroll: [1, "infiniteScroll"],
        isLoading: [1, "isLoading"],
        scrollThreshold: [1, "scrollThreshold"],
        tableHeight: [1, "tableHeight"],
        rowDetailTemplate: [1, "rowDetailTemplate"],
        rowDetailHeight: [1, "rowDetailHeight"]
      },
      outputs: {
        tableActivate: "tableActivate",
        selectionChange: "selectionChange",
        loadMore: "loadMore",
        rowDetailToggle: "rowDetailToggle"
      },
      exportAs: ["abpExtensibleTable"],
      decls: 1,
      vars: 1,
      consts: [["table", ""], ["default", "", 3, "rows", "count", "list", "selectionType", "selected", "scrollbarV", "height", "loadingIndicator", "footerHeight"], ["default", "", 3, "activate", "select", "scroll", "rows", "count", "list", "selectionType", "selected", "scrollbarV", "loadingIndicator", "footerHeight"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable"], [3, "name", "maxWidth", "width", "canAutoResize", "sortable"], [3, "width", "canAutoResize", "name", "prop", "sortable"], [3, "rowHeight"], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["ngx-datatable-row-detail-template", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 1, "btn", "btn-link", "text-decoration-none", "text-muted", "p-0", 3, "click"], [1, "fa"], ["ngx-datatable-header-template", ""], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", "table-check", 3, "change", "checked"], [1, "h-100", "form-check", "form-check-sm", "form-check-custom", "form-check-solid"], ["type", "radio", 1, "form-check-input", 3, "change", "checked"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], ["text", "AbpUi::Actions", 3, "index", "record"], [3, "width", "canAutoResize", "name", "prop", "sortable", 4, "abpVisible"], ["container", "body", 3, "ngbTooltip", "placement", "pointer"], [3, "pointer"], ["container", "body", 3, "click", "ngbTooltip", "placement"], ["aria-hidden", "true", 1, "fa", "fa-info-circle"], [3, "click"], [4, "abpPermission", "abpPermissionRunChangeDetection"], [4, "abpVisible"], [3, "innerHTML", "class", "pointer"], [3, "click", "innerHTML"], [4, "ngComponentOutlet", "ngComponentOutletInjector"]],
      template: function ExtensibleTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, ExtensibleTableComponent_Conditional_0_Template, 7, 13, "ngx-datatable", 1);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.isBrowser ? 0 : -1);
        }
      },
      dependencies: [AbpVisibleDirective, NgxDatatableModule, DatatableComponent, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, GridActionsComponent, NgbTooltip, NgxDatatableDefaultDirective, NgxDatatableListDirective, PermissionDirective, NgTemplateOutlet, NgComponentOutlet, LocalizationPipe, UtcToLocalPipe, AsyncPipe],
      styles: ["[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-detail{background:none;padding:0}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleTableComponent, [{
    type: Component,
    args: [{
      exportAs: "abpExtensibleTable",
      selector: "abp-extensible-table",
      imports: [AbpVisibleDirective, NgxDatatableModule, GridActionsComponent, NgbTooltip, NgxDatatableDefaultDirective, NgxDatatableListDirective, PermissionDirective, LocalizationPipe, UtcToLocalPipe, AsyncPipe, NgTemplateOutlet, NgComponentOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@if (isBrowser) {\r
  <ngx-datatable\r
    #table\r
    default\r
    [rows]="data"\r
    [count]="recordsTotal()"\r
    [list]="list()"\r
    [selectionType]="selectable() ? selectionType() : undefined"\r
    (activate)="tableActivate.emit($event)"\r
    (select)="onSelect($event)"\r
    [selected]="selected()"\r
    (scroll)="onScroll($event)"\r
    [scrollbarV]="infiniteScroll()"\r
    [style.height]="getTableHeight()"\r
    [loadingIndicator]="infiniteScroll() && isLoading()"\r
    [footerHeight]="infiniteScroll() ? false : 50"\r
  >\r
    @if (effectiveRowDetailTemplate) {\r
      @let detailRowHeight = effectiveRowDetailRowHeight();\r
      @if (detailRowHeight !== undefined) {\r
        <ngx-datatable-row-detail [rowHeight]="detailRowHeight">\r
          <ng-template let-row="row" let-expanded="expanded" ngx-datatable-row-detail-template>\r
            <ng-container\r
              [ngTemplateOutlet]="effectiveRowDetailTemplate"\r
              [ngTemplateOutletContext]="{ row: row, expanded: expanded }"\r
            />\r
          </ng-template>\r
        </ngx-datatable-row-detail>\r
      } @else {\r
        <ngx-datatable-row-detail>\r
          <ng-template let-row="row" let-expanded="expanded" ngx-datatable-row-detail-template>\r
            <ng-container\r
              [ngTemplateOutlet]="effectiveRowDetailTemplate"\r
              [ngTemplateOutletContext]="{ row: row, expanded: expanded }"\r
            />\r
          </ng-template>\r
        </ngx-datatable-row-detail>\r
      }\r
\r
      <ngx-datatable-column\r
        [width]="50"\r
        [resizeable]="false"\r
        [sortable]="false"\r
        [draggable]="false"\r
        [canAutoResize]="false"\r
      >\r
        <ng-template let-row="row" let-expanded="expanded" ngx-datatable-cell-template>\r
          <button\r
            type="button"\r
            class="btn btn-link text-decoration-none text-muted p-0"\r
            [attr.aria-label]="expanded ? 'Collapse' : 'Expand'"\r
            (click)="toggleExpandRow(row)"\r
          >\r
            <i class="fa" [class.fa-chevron-down]="!expanded" [class.fa-chevron-up]="expanded"></i>\r
          </button>\r
        </ng-template>\r
      </ngx-datatable-column>\r
    }\r
    @if (selectable()) {\r
      <ngx-datatable-column\r
        [width]="50"\r
        [sortable]="false"\r
        [canAutoResize]="false"\r
        [draggable]="false"\r
        [resizeable]="false"\r
      >\r
        <ng-template\r
          ngx-datatable-header-template\r
          let-allRowsSelected="allRowsSelected"\r
          let-selectFn="selectFn"\r
        >\r
          @if (selectionType() !== 'single') {\r
            <div class="form-check">\r
              <input\r
                class="form-check-input table-check"\r
                type="checkbox"\r
                [checked]="allRowsSelected"\r
                (change)="selectFn()"\r
              />\r
            </div>\r
          }\r
        </ng-template>\r
\r
        <ng-template\r
          ngx-datatable-cell-template\r
          let-value="value"\r
          let-row="row"\r
          let-isSelected="isSelected"\r
          let-onCheckboxChangeFn="onCheckboxChangeFn"\r
        >\r
          @if (selectionType() === 'single') {\r
            <div class="h-100 form-check form-check-sm form-check-custom form-check-solid">\r
              <input\r
                class="form-check-input"\r
                type="radio"\r
                [checked]="isSelected"\r
                (change)="onCheckboxChangeFn($event)"\r
              />\r
            </div>\r
          }\r
          @if (selectionType() !== 'single') {\r
            <div class="h-100 form-check form-check-sm form-check-custom form-check-solid">\r
              <input\r
                class="form-check-input"\r
                type="checkbox"\r
                [checked]="isSelected"\r
                (change)="onCheckboxChangeFn($event)"\r
              />\r
            </div>\r
          }\r
        </ng-template>\r
      </ngx-datatable-column>\r
    }\r
    @if (actionsTemplate() || (actionList.length && hasAtLeastOnePermittedAction)) {\r
      <ngx-datatable-column\r
        [name]="actionsText() | abpLocalization"\r
        [maxWidth]="_actionsColumnWidth()"\r
        [width]="_actionsColumnWidth() || 200"\r
        [canAutoResize]="!_actionsColumnWidth()"\r
        [sortable]="false"\r
      >\r
        <ng-template let-row="row" let-i="rowIndex" ngx-datatable-cell-template>\r
          @if (actionsTemplate(); as template) {\r
            <ng-container\r
              [ngTemplateOutlet]="template"\r
              [ngTemplateOutletContext]="{ $implicit: row, index: i }"\r
            ></ng-container>\r
          } @else if (isVisibleActions(row)) {\r
            <abp-grid-actions [index]="i" [record]="row" text="AbpUi::Actions"></abp-grid-actions>\r
          }\r
        </ng-template>\r
      </ngx-datatable-column>\r
    }\r
    @for (prop of propList; track prop.name; let i = $index) {\r
      <ngx-datatable-column\r
        *abpVisible="prop.columnVisible(getInjected)"\r
        [width]="columnWidths()[i] || 200"\r
        [canAutoResize]="!columnWidths()[i]"\r
        [name]="(prop.isExtra ? '::' + prop.displayName : prop.displayName) | abpLocalization"\r
        [prop]="prop.name"\r
        [sortable]="prop.sortable"\r
      >\r
        <ng-template ngx-datatable-header-template let-column="column" let-sortFn="sortFn">\r
          @if (prop.tooltip) {\r
            <span\r
              [ngbTooltip]="prop.tooltip.text | abpLocalization"\r
              [placement]="prop.tooltip.placement || 'auto'"\r
              container="body"\r
              [class.pointer]="prop.sortable"\r
              (click)="prop.sortable && sortFn()"\r
            >\r
              {{ column.name }} <i class="fa fa-info-circle" aria-hidden="true"></i>\r
            </span>\r
          } @else {\r
            <span [class.pointer]="prop.sortable" (click)="prop.sortable && sortFn()">\r
              {{ column.name }}\r
            </span>\r
          }\r
        </ng-template>\r
        <ng-template let-row="row" let-i="rowIndex" ngx-datatable-cell-template>\r
          <ng-container *abpPermission="prop.permission; runChangeDetection: false">\r
            <ng-container *abpVisible="row['_' + prop.name]?.visible">\r
              @if (!row['_' + prop.name].component) {\r
                @if (prop.type === 'datetime' || prop.type === 'date' || prop.type === 'time') {\r
                  <div\r
                    [innerHTML]="\r
                      !prop.isExtra\r
                        ? (row['_' + prop.name]?.value | async | abpUtcToLocal: prop.type)\r
                        : ('::' + (row['_' + prop.name]?.value | async | abpUtcToLocal: prop.type)\r
                          | abpLocalization)\r
                    "\r
                    (click)="\r
                      prop.action &&\r
                        prop.action({ getInjected: getInjected, record: row, index: i })\r
                    "\r
                    [class]="entityPropTypeClasses[prop.type]"\r
                    [class.pointer]="prop.action"\r
                  ></div>\r
                } @else {\r
                  <div\r
                    [innerHTML]="\r
                      !prop.isExtra\r
                        ? (row['_' + prop.name]?.value | async)\r
                        : ('::' + (row['_' + prop.name]?.value | async) | abpLocalization)\r
                    "\r
                    (click)="\r
                      prop.action &&\r
                        prop.action({ getInjected: getInjected, record: row, index: i })\r
                    "\r
                    [class]="entityPropTypeClasses[prop.type]"\r
                    [class.pointer]="prop.action"\r
                  ></div>\r
                }\r
              } @else {\r
                <ng-container\r
                  *ngComponentOutlet="\r
                    row['_' + prop.name].component;\r
                    injector: row['_' + prop.name].injector\r
                  "\r
                />\r
              }\r
            </ng-container>\r
          </ng-container>\r
        </ng-template>\r
      </ngx-datatable-column>\r
    }\r
  </ngx-datatable>\r
}\r
`,
      styles: [":host ::ng-deep .ngx-datatable.material .datatable-body .datatable-row-detail{background:none;padding:0}\n"]
    }]
  }], () => [], {
    actionsTextInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "actionsText",
        required: false
      }]
    }],
    dataInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "data",
        required: false
      }]
    }],
    list: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "list",
        required: true
      }]
    }],
    recordsTotal: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "recordsTotal",
        required: true
      }]
    }],
    actionsColumnWidthInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "actionsColumnWidth",
        required: false
      }]
    }],
    actionsTemplate: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "actionsTemplate",
        required: false
      }]
    }],
    selectable: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selectable",
        required: false
      }]
    }],
    selectionTypeInput: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selectionType",
        required: false
      }]
    }],
    selected: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selected",
        required: false
      }]
    }],
    infiniteScroll: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "infiniteScroll",
        required: false
      }]
    }],
    isLoading: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "isLoading",
        required: false
      }]
    }],
    scrollThreshold: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "scrollThreshold",
        required: false
      }]
    }],
    tableHeight: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tableHeight",
        required: false
      }]
    }],
    rowDetailTemplate: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "rowDetailTemplate",
        required: false
      }]
    }],
    rowDetailHeight: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "rowDetailHeight",
        required: false
      }]
    }],
    tableActivate: [{
      type: Output,
      args: ["tableActivate"]
    }],
    selectionChange: [{
      type: Output,
      args: ["selectionChange"]
    }],
    loadMore: [{
      type: Output,
      args: ["loadMore"]
    }],
    rowDetailToggle: [{
      type: Output,
      args: ["rowDetailToggle"]
    }],
    rowDetailComponent: [{
      type: ContentChild,
      args: [forwardRef(() => ExtensibleTableRowDetailComponent), {
        isSignal: true
      }]
    }],
    table: [{
      type: ViewChild,
      args: ["table", {
        isSignal: true
      }]
    }]
  });
})();
var CreateInjectorPipe = class _CreateInjectorPipe {
  transform(_, action, context) {
    const get = (token, notFoundValue, options) => {
      const componentData = context.getData();
      const componentDataCallback = (data) => {
        data = data ?? context.getData();
        return action.action(data);
      };
      let extensionData;
      switch (token) {
        case EXTENSIONS_ACTION_DATA:
          extensionData = componentData;
          break;
        case EXTENSIONS_ACTION_CALLBACK:
          extensionData = componentDataCallback;
          break;
        default:
          extensionData = context.getInjected.call(context.injector, token, notFoundValue, options);
      }
      return extensionData;
    };
    return {
      get
    };
  }
  static {
    this.ɵfac = function CreateInjectorPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateInjectorPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "createInjector",
      type: _CreateInjectorPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateInjectorPipe, [{
    type: Pipe,
    args: [{
      name: "createInjector"
    }]
  }], null, null);
})();
var PageToolbarComponent = class _PageToolbarComponent extends AbstractActionsComponent {
  constructor() {
    const injector = inject(Injector);
    super();
    this.defaultBtnClass = "btn btn-sm btn-primary";
    this.getData = () => this.data;
    this.trackByFn = (_, item) => item.action || item.component;
    this.injector = injector;
  }
  asToolbarAction(value) {
    return {
      value
    };
  }
  static {
    this.ɵfac = function PageToolbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageToolbarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PageToolbarComponent,
      selectors: [["abp-page-toolbar"]],
      exportAs: ["abpPageToolbar"],
      features: [ɵɵProvidersFeature([{
        provide: EXTENSIONS_ACTION_TYPE,
        useValue: "toolbarActions"
      }]), ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 0,
      consts: [["id", "AbpContentToolbar", 1, "row", "justify-content-end", "mx-0", "gap-2"], [1, "col-auto", "px-0", "pt-0", 3, "pe-0"], [1, "col-auto", "px-0", "pt-0"], [4, "abpPermission", "abpPermissionRunChangeDetection"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], ["type", "button", 1, "d-inline-flex", "align-items-center", "gap-1", 3, "class"], ["type", "button", 1, "d-inline-flex", "align-items-center", "gap-1", 3, "click"]],
      template: function PageToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵrepeaterCreate(1, PageToolbarComponent_For_2_Template, 2, 3, "div", 1, _forTrack2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵrepeater(ctx.actionList);
        }
      },
      dependencies: [PermissionDirective, NgComponentOutlet, CreateInjectorPipe, LocalizationPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageToolbarComponent, [{
    type: Component,
    args: [{
      exportAs: "abpPageToolbar",
      selector: "abp-page-toolbar",
      imports: [CreateInjectorPipe, PermissionDirective, LocalizationPipe, NgComponentOutlet],
      providers: [{
        provide: EXTENSIONS_ACTION_TYPE,
        useValue: "toolbarActions"
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="row justify-content-end mx-0 gap-2" id="AbpContentToolbar">\r\n  @for (action of actionList; track action.component || action.action; let last = $last) {\r\n  <div class="col-auto px-0 pt-0" [class.pe-0]="last">\r\n    @if (action.visible(data)) {\r\n    <ng-container *abpPermission="action.permission; runChangeDetection: false">\r\n      @if (action.component; as component) {\r\n      <ng-container *ngComponentOutlet="component; injector: record | createInjector: action:this"></ng-container>\r\n\r\n      }@else {\r\n      @if (asToolbarAction(action).value; as toolbarAction ) {\r\n      <button (click)="action.action(data)" type="button"\r\n        [class]="toolbarAction?.btnClass ? toolbarAction?.btnClass : defaultBtnClass"\r\n        class="d-inline-flex align-items-center gap-1">\r\n        <i [class]="toolbarAction?.icon" [class.me-1]="toolbarAction?.icon"></i>\r\n        {{ toolbarAction?.text | abpLocalization }}\r\n      </button>\r\n      }\r\n      }\r\n    </ng-container>\r\n    }\r\n  </div>\r\n  }\r\n</div>'
    }]
  }], () => [], null);
})();
var objectExtensions = Object.freeze({
  __proto__: null
});
var EXTENSIBLE_FORM_VIEW_PROVIDER = {
  provide: ControlContainer,
  useExisting: FormGroupDirective
};
function mergeWithDefaultActions(extension, defaultActions, ...contributors) {
  Object.keys(defaultActions).forEach((name) => {
    const actions = extension.get(name);
    actions.clearContributors();
    actions.addContributor((actionList) => actionList.addManyTail(defaultActions[name]));
    contributors.forEach((contributor) => (contributor[name] || []).forEach((callback) => actions.addContributor(callback)));
  });
}
function generateFormFromProps(propData) {
  const data = propData.data;
  const extensions = data.getInjected(ExtensionsService);
  const identifier = data.getInjected(EXTENSIONS_IDENTIFIER);
  const form = new UntypedFormGroup({});
  const extraForm = new UntypedFormGroup({});
  form.addControl(EXTRA_PROPERTIES_KEY, extraForm);
  const record = data.record || {};
  const type = JSON.stringify(record) === "{}" ? "create" : "edit";
  const props = extensions[`${type}FormProps`].get(identifier).props;
  const extraProperties = record[EXTRA_PROPERTIES_KEY] || {};
  props.forEach(({
    value: prop
  }) => {
    const name = prop.name;
    const isExtraProperty = prop.isExtra || name in extraProperties;
    let value = void 0;
    if (isExtraProperty) {
      value = extraProperties[name];
    } else if (name in record) {
      value = record[name];
    }
    if (typeof value === "undefined") value = prop.defaultValue;
    if (value) {
      let adapter;
      switch (prop.type) {
        case "date":
          adapter = new DateAdapter();
          value = adapter.toModel(adapter.fromModel(value));
          break;
        case "time":
          adapter = new TimeAdapter();
          value = adapter.toModel(adapter.fromModel(value));
          break;
        case "datetime":
          adapter = new DateTimeAdapter();
          value = adapter.toModel(adapter.fromModel(value));
          break;
        default:
          break;
      }
    }
    const formControl = new UntypedFormControl(value, {
      asyncValidators: prop.asyncValidators(data),
      validators: prop.validators(data)
    });
    (isExtraProperty ? extraForm : form).addControl(name, formControl);
  });
  return form;
}
function createExtraPropertyValueResolver(name) {
  return (data) => of(data.record[EXTRA_PROPERTIES_KEY][name]);
}
function mergeWithDefaultProps(extension, defaultProps, ...contributors) {
  Object.keys(defaultProps).forEach((name) => {
    const props = extension.get(name);
    props.clearContributors();
    props.addContributor((propList) => propList.addManyTail(defaultProps[name]));
    contributors.forEach((contributor) => (contributor[name] || []).forEach((callback) => props.addContributor(callback)));
  });
}
function checkPolicies(injector, properties) {
  const configState = injector.get(ConfigStateService);
  const permission = injector.get(PermissionService);
  const props = Object.entries(properties);
  const checkPolicy = (policy) => {
    const {
      permissions,
      globalFeatures,
      features
    } = policy || {};
    const checks = [{
      items: permissions?.permissionNames,
      requiresAll: permissions?.requiresAll,
      check: (item) => permission.getGrantedPolicy(item)
    }, {
      items: globalFeatures?.features,
      requiresAll: globalFeatures?.requiresAll,
      check: (item) => configState.getGlobalFeatureIsEnabled(item)
    }, {
      items: features?.features,
      requiresAll: features?.requiresAll,
      check: (item) => configState.getFeatureIsEnabled(item)
    }];
    return checks.every(({
      items,
      requiresAll,
      check
    }) => {
      if (!items?.length) {
        return true;
      }
      return requiresAll ? items.every(check) : items.some(check);
    });
  };
  props.forEach(([name, property]) => {
    if (property.policy && !checkPolicy(property.policy)) {
      delete properties[name];
    }
  });
}
function createEnum(members) {
  const enumObject = {};
  members.forEach(({
    name = "",
    value
  }) => {
    enumObject[enumObject[name] = value] = name;
  });
  return enumObject;
}
function createEnumValueResolver(enumType, lookupEnum, propName) {
  return (data) => {
    const value = data.record[EXTRA_PROPERTIES_KEY][propName];
    const key = lookupEnum.transformed[value];
    const l10n = data.getInjected(LocalizationService);
    const localizeEnum = createEnumLocalizer(l10n, enumType, lookupEnum);
    return createLocalizationStream(l10n, localizeEnum(key));
  };
}
function createEnumOptions(enumType, lookupEnum) {
  return (data) => {
    const l10n = data.getInjected(LocalizationService);
    const localizeEnum = createEnumLocalizer(l10n, enumType, lookupEnum);
    return createLocalizationStream(l10n, lookupEnum.fields.map(({
      name = "",
      value
    }) => ({
      key: localizeEnum(name),
      value
    })));
  };
}
function createLocalizationStream(l10n, mapTarget) {
  return merge(of(null), l10n.languageChange$).pipe(map(() => mapTarget));
}
function createEnumLocalizer(l10n, enumType, lookupEnum) {
  const resource = lookupEnum.localizationResource;
  const shortType = getShortEnumType(enumType);
  return (key) => l10n.localizeWithFallbackSync([resource || ""], ["Enum:" + shortType + "." + key, shortType + "." + key, key], key);
}
function getShortEnumType(enumType) {
  return enumType.split(".").pop();
}
function createDisplayNameLocalizationPipeKeyGenerator(localization) {
  const generateLocalizationPipeKey = createLocalizationPipeKeyGenerator(localization);
  return (displayName, fallback) => {
    if (displayName && displayName.name) return generateLocalizationPipeKey([displayName.resource || ""], [displayName.name], displayName.name);
    const key = generateLocalizationPipeKey([fallback.resource || ""], ["DisplayName:" + fallback.name], void 0);
    if (key) return key;
    return generateLocalizationPipeKey([fallback.resource || ""], [fallback.name || ""], fallback.name);
  };
}
function getValidatorsFromProperty(property) {
  const validators = [];
  property.attributes.forEach((attr) => {
    if (attr.typeSimple && attr.typeSimple in AbpValidators) {
      validators.push(AbpValidators[attr.typeSimple](attr.config));
    }
  });
  return validators;
}
function selectObjectExtensions(configState) {
  return configState.getOne$("objectExtensions");
}
function selectLocalization(configState) {
  return configState.getOne$("localization");
}
function selectEnums(configState) {
  return selectObjectExtensions(configState).pipe(map((extensions) => Object.keys(extensions.enums).reduce((acc, key) => {
    const {
      fields,
      localizationResource
    } = extensions.enums[key];
    acc[key] = {
      fields,
      localizationResource,
      transformed: createEnum(fields)
    };
    return acc;
  }, {})));
}
function getObjectExtensionEntitiesFromStore(injector, moduleKey) {
  const configState = injector.get(ConfigStateService);
  return selectObjectExtensions(configState).pipe(map((extensions) => {
    if (!extensions) return null;
    return (extensions.modules[moduleKey] || {}).entities;
  }), map((entities) => isUndefined(entities) ? {} : entities), filter(Boolean), take(1));
}
function mapEntitiesToContributors(injector, resource) {
  const configState = injector.get(ConfigStateService);
  return pipe(switchMap((entities) => zip(selectLocalization(configState), selectEnums(configState)).pipe(map(([localization, enums]) => {
    const generateDisplayName = createDisplayNameLocalizationPipeKeyGenerator(localization);
    return Object.keys(entities).reduce((acc, key) => {
      acc.prop[key] = [];
      acc.createForm[key] = [];
      acc.editForm[key] = [];
      const entity = entities[key];
      if (!entity) {
        return acc;
      }
      const properties = entity.properties;
      if (!properties) {
        return acc;
      }
      checkPolicies(injector, properties);
      const mapPropertiesToContributors = createPropertiesToContributorsMapper(generateDisplayName, resource, enums);
      return mapPropertiesToContributors(properties, acc, key);
    }, {
      prop: {},
      createForm: {},
      editForm: {}
    });
  }))), take(1));
}
function createPropertiesToContributorsMapper(generateDisplayName, resource, enums) {
  return (properties, contributors, key) => {
    const isExtra = true;
    const generateTypeaheadDisplayName = createTypeaheadDisplayNameGenerator(generateDisplayName, properties);
    Object.keys(properties).forEach((name) => {
      const property = properties[name];
      const propName = name;
      const lookup = property.ui.lookup || {};
      const type = getTypeaheadType(lookup, name) || getTypeFromProperty(property);
      const generateDN = hasTypeaheadTextSuffix(name) ? generateTypeaheadDisplayName : generateDisplayName;
      const displayName = generateDN(property.displayName, {
        name,
        resource
      });
      if (property.ui.onTable.isVisible) {
        const sortable = Boolean(property.ui.onTable.isSortable);
        const columnWidth = type === "boolean" ? 150 : 250;
        const valueResolver = type === "enum" && property.type ? createEnumValueResolver(property.type, enums[property.type], propName) : createExtraPropertyValueResolver(propName);
        const entityProp = new EntityProp({
          type,
          name: propName,
          displayName,
          sortable,
          columnWidth,
          valueResolver,
          isExtra
        });
        const contributor = (propList) => propList.addTail(entityProp);
        contributors.prop[key].push(contributor);
      }
      const isOnCreateForm = property.ui.onCreateForm.isVisible;
      const isOnEditForm = property.ui.onEditForm.isVisible;
      if (isOnCreateForm || isOnEditForm) {
        const defaultValue = property.defaultValue;
        const formText = property.formText;
        const validators = () => getValidatorsFromProperty(property);
        let options;
        if (type === "enum") options = createEnumOptions(propName, enums[property.type || ""]);
        else if (type === "typeahead") options = createTypeaheadOptions(lookup);
        const formProp = new FormProp({
          type,
          name: propName,
          displayName,
          options,
          defaultValue,
          validators,
          isExtra,
          formText
        });
        const formContributor = (propList) => propList.addTail(formProp);
        if (isOnCreateForm) contributors.createForm[key].push(formContributor);
        if (isOnEditForm) contributors.editForm[key].push(formContributor);
      }
    });
    return contributors;
  };
}
function getTypeFromProperty(property) {
  return property?.typeSimple?.replace(/\?$/, "");
}
function isUndefined(obj) {
  return typeof obj === "undefined";
}
var importWithExport = [DisabledDirective, ExtensibleDateTimePickerComponent, ExtensibleFormPropComponent, GridActionsComponent, PropDataDirective, PageToolbarComponent, CreateInjectorPipe, ExtensibleFormComponent, ExtensibleTableComponent, ExtensibleTableRowDetailComponent, ExtensibleFormMultiselectComponent];
var ExtensibleModule = class _ExtensibleModule {
  static {
    this.ɵfac = function ExtensibleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtensibleModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ExtensibleModule,
      imports: [CoreModule, ThemeSharedModule, NgxValidateCoreModule, NgbDatepickerModule, NgbDropdownModule, NgbTimepickerModule, NgbTypeaheadModule, NgbTooltipModule, DisabledDirective, ExtensibleDateTimePickerComponent, ExtensibleFormPropComponent, GridActionsComponent, PropDataDirective, PageToolbarComponent, CreateInjectorPipe, ExtensibleFormComponent, ExtensibleTableComponent, ExtensibleTableRowDetailComponent, ExtensibleFormMultiselectComponent],
      exports: [DisabledDirective, ExtensibleDateTimePickerComponent, ExtensibleFormPropComponent, GridActionsComponent, PropDataDirective, PageToolbarComponent, CreateInjectorPipe, ExtensibleFormComponent, ExtensibleTableComponent, ExtensibleTableRowDetailComponent, ExtensibleFormMultiselectComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CoreModule, ThemeSharedModule, NgxValidateCoreModule, NgbDatepickerModule, NgbDropdownModule, NgbTimepickerModule, NgbTypeaheadModule, NgbTooltipModule, ExtensibleDateTimePickerComponent, ExtensibleFormPropComponent, GridActionsComponent, ExtensibleFormComponent, ExtensibleTableComponent, ExtensibleFormMultiselectComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensibleModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CoreModule, ThemeSharedModule, NgxValidateCoreModule, NgbDatepickerModule, NgbDropdownModule, NgbTimepickerModule, NgbTypeaheadModule, NgbTooltipModule, ...importWithExport],
      exports: [...importWithExport]
    }]
  }], null, null);
})();

export {
  EXTENSIONS_IDENTIFIER,
  EXTENSIONS_FORM_PROP,
  FormProp,
  FormPropData,
  EntityAction,
  EntityProp,
  ToolbarAction,
  ExtensionsService,
  ExtensibleFormComponent,
  ExtensibleTableComponent,
  PageToolbarComponent,
  EXTENSIBLE_FORM_VIEW_PROVIDER,
  mergeWithDefaultActions,
  generateFormFromProps,
  mergeWithDefaultProps,
  getObjectExtensionEntitiesFromStore,
  mapEntitiesToContributors
};
//# sourceMappingURL=chunk-ZVIHN2OM.js.map
