import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { DatePipe, DecimalPipe } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { ABP, ListService, LocalizationPipe, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { catchError, finalize, Observable, of } from 'rxjs';
import { PantryItemDto, PantryItemService, PantryItemStatus } from '../proxy/pantry-items';

/** Mismos límites que valida el servidor (PantryConsts). La interfaz los repite solo por usabilidad. */
export const PANTRY_MAX_QUANTITY = 1_000_000;
export const PANTRY_MAX_UNIT_LENGTH = 32;

export type PantryViewState = 'loading' | 'error' | 'empty' | 'results';

/** Fecha opcional con formato yyyy-MM-dd que exista en el calendario (por ejemplo, rechaza 2027-02-30). */
export function validDateValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string | null;
  if (!value) {
    return null;
  }

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) {
    return { invalidDate: true };
  }

  const [year, month, day] = [Number(match[1]), Number(match[2]), Number(match[3])];
  const date = new Date(year, month - 1, day);
  const exists =
    date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;

  return exists ? null : { invalidDate: true };
}

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrl: './pantry.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, NgbPagination, DatePipe, DecimalPipe, LocalizationPipe],
  providers: [ListService],
})
export class PantryComponent {
  readonly list = inject(ListService);
  private readonly pantryService = inject(PantryItemService);
  private readonly confirmation = inject(ConfirmationService);
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly PantryItemStatus = PantryItemStatus;
  protected readonly maxQuantity = String(PANTRY_MAX_QUANTITY); // parámetro del pipe de localización
  protected readonly maxUnitLength = String(PANTRY_MAX_UNIT_LENGTH);

  // Estado del listado. Arranca en "cargando" para no mostrar la lista vacía antes de la respuesta.
  readonly items = signal<PantryItemDto[]>([]);
  readonly totalCount = signal(0);
  readonly loading = signal(true);
  readonly loadFailed = signal(false);
  readonly statusFilter = signal<PantryItemStatus | undefined>(undefined);

  readonly viewState = computed<PantryViewState>(() => {
    if (this.loading()) {
      return 'loading';
    }
    if (this.loadFailed()) {
      return 'error';
    }
    return this.items().length === 0 ? 'empty' : 'results';
  });

  // Estado de la edición y de las operaciones de escritura.
  readonly editing = signal<PantryItemDto | undefined>(undefined);
  readonly saving = signal(false);
  readonly actionInProgress = signal(false);

  readonly form = this.fb.group({
    quantity: this.fb.control<number | null>(null, [
      Validators.min(0),
      Validators.max(PANTRY_MAX_QUANTITY),
    ]),
    unit: this.fb.control('', [Validators.maxLength(PANTRY_MAX_UNIT_LENGTH)]),
    expirationDate: this.fb.control('', [validDateValidator]),
  });

  constructor() {
    this.list
      .hookToQuery(query => this.loadItems(query))
      .pipe(takeUntilDestroyed())
      .subscribe(result => {
        this.items.set(result.items ?? []);
        this.totalCount.set(result.totalCount ?? 0);
      });
  }

  // ---------- Listado ----------

  private loadItems(query: ABP.PageQueryParams): Observable<PagedResultDto<PantryItemDto>> {
    this.loading.set(true);
    this.loadFailed.set(false);

    // El servidor solo devuelve ítems del usuario autenticado: el aislamiento no depende de la interfaz.
    return this.pantryService.getList({
        ...query,
        maxResultCount: query.maxResultCount ?? this.list.maxResultCount,
        status: this.statusFilter(),
      }).pipe(
      catchError(() => {
        // El error se informa con un estado propio (con reintento); ABP además muestra su aviso general.
        this.loadFailed.set(true);
        return of({ items: [], totalCount: 0 } as PagedResultDto<PantryItemDto>);
      }),
      finalize(() => this.loading.set(false)),
    );
  }

  retry() {
    this.list.getWithoutPageReset();
  }

  onStatusFilterChange(value: string) {
    this.statusFilter.set(value ? (Number(value) as PantryItemStatus) : undefined);
    this.editing.set(undefined);

    if (this.list.page !== 0) {
      this.list.page = 0; // dispara la consulta
    } else {
      this.list.get();
    }
  }

  onPageChange(page: number) {
    this.list.page = page - 1; // ngb-pagination es 1-based; ListService es 0-based
  }

  sortBy(key: string) {
    if (this.list.sortKey !== key) {
      this.list.sortKey = key;
      this.list.sortOrder = 'asc';
      return;
    }

    this.list.sortOrder = this.list.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  ariaSort(key: string): 'ascending' | 'descending' | 'none' {
    if (this.list.sortKey !== key || !this.list.sortOrder) {
      return 'none';
    }
    return this.list.sortOrder === 'asc' ? 'ascending' : 'descending';
  }

  // ---------- Edición ----------

  startEdit(item: PantryItemDto) {
    this.editing.set(item);
    this.form.reset({
      quantity: item.quantity ?? null,
      unit: item.unit ?? '',
      expirationDate: item.expirationDate ?? '',
    });
  }

  cancelEdit() {
    this.editing.set(undefined);
  }

  save() {
    const item = this.editing();
    if (!item?.id || this.saving()) {
      return;
    }

    // Las reglas de la interfaz son solo por usabilidad; el servidor vuelve a validar todo.
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    const value = this.form.getRawValue();
    this.saving.set(true);

    this.pantryService
      .update(item.id, {
        quantity: value.quantity ?? undefined,
        unit: value.unit.trim() || undefined,
        expirationDate: value.expirationDate || undefined,
      })
      .pipe(finalize(() => this.saving.set(false)))
      .subscribe({
        next: () => {
          this.editing.set(undefined);
          this.list.getWithoutPageReset();
        },
        // Si el servidor rechaza los datos, ABP muestra el mensaje y el formulario conserva lo ingresado.
        error: () => undefined,
      });
  }

  // ---------- Consumo y eliminación ----------

  markAsConsumed(item: PantryItemDto) {
    if (!item.id || this.actionInProgress()) {
      return;
    }

    this.actionInProgress.set(true);
    this.pantryService
      .markAsConsumed(item.id)
      .pipe(finalize(() => this.actionInProgress.set(false)))
      .subscribe({
        next: () => {
          if (this.editing()?.id === item.id) {
            this.editing.set(undefined);
          }
          this.list.getWithoutPageReset();
        },
        error: () => undefined,
      });
  }

  delete(item: PantryItemDto) {
    const id = item.id;
    if (!id || this.actionInProgress()) {
      return;
    }

    this.confirmation
      .warn('::Pantry:DeleteConfirmation', '::Pantry:DeleteTitle', {
        messageLocalizationParams: [item.productName ?? ''],
      })
      .subscribe(status => {
        // Si el usuario cancela, no se invoca al servidor.
        if (status !== Confirmation.Status.confirm) {
          return;
        }

        this.actionInProgress.set(true);
        this.pantryService
          .delete(id)
          .pipe(finalize(() => this.actionInProgress.set(false)))
          .subscribe({
            next: () => {
              if (this.editing()?.id === item.id) {
                this.editing.set(undefined);
              }

              // Si se eliminó el último ítem de la última página, se vuelve a la página anterior.
              if (this.items().length === 1 && this.list.page > 0) {
                this.list.page = this.list.page - 1;
              } else {
                this.list.getWithoutPageReset();
              }
            },
            error: () => undefined,
          });
      });
  }
}
