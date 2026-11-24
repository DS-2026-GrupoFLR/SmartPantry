import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject, of, throwError } from 'rxjs';
import { vi } from 'vitest';
import { LIST_QUERY_DEBOUNCE_TIME, LocalizationService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { PantryComponent } from './pantry.component';
import { PantryItemDto, PantryItemService, PantryItemStatus } from '../proxy/pantry-items';

const item = (over: Partial<PantryItemDto> = {}): PantryItemDto =>
  ({
    id: 'item-1',
    productId: 'prod-1',
    productName: 'Leche',
    productBrand: 'La Serenísima',
    productBarCode: '7790000000001',
    quantity: 2,
    unit: 'L',
    expirationDate: '2027-03-15',
    status: PantryItemStatus.Active,
    ...over,
  }) as PantryItemDto;

describe('PantryComponent', () => {
  let fixture: ComponentFixture<PantryComponent>;
  let el: HTMLElement;
  let service: {
    getList: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
    markAsConsumed: ReturnType<typeof vi.fn>;
    delete: ReturnType<typeof vi.fn>;
  };
  let confirmation: { warn: ReturnType<typeof vi.fn> };

  const q = (testId: string) => el.querySelector<HTMLElement>(`[data-testid="${testId}"]`);
  const qa = (testId: string) => Array.from(el.querySelectorAll<HTMLElement>(`[data-testid="${testId}"]`));
  const click = (target: HTMLElement | null) => {
    target!.click();
    fixture.detectChanges();
  };
  const setInput = (id: string, value: string) => {
    const input = el.querySelector<HTMLInputElement>(`#${id}`)!;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  };
  const settle = async () => {
    await fixture.whenStable();
    fixture.detectChanges();
  };

  async function create(getList: () => unknown) {
    service.getList.mockImplementation(getList);
    fixture = TestBed.createComponent(PantryComponent);
    el = fixture.nativeElement;
    fixture.detectChanges();
    await settle();
  }

  const page = (items: PantryItemDto[], totalCount = items.length) =>
    of({ items, totalCount });

  beforeEach(() => {
    service = {
      getList: vi.fn(),
      update: vi.fn().mockReturnValue(of(item())),
      markAsConsumed: vi.fn().mockReturnValue(of(item({ status: PantryItemStatus.Consumed }))),
      delete: vi.fn().mockReturnValue(of(undefined)),
    };
    confirmation = { warn: vi.fn() };

    TestBed.configureTestingModule({
      imports: [PantryComponent],
      providers: [
        { provide: PantryItemService, useValue: service },
        { provide: ConfirmationService, useValue: confirmation },
        { provide: LIST_QUERY_DEBOUNCE_TIME, useValue: 0 },
        {
          provide: LocalizationService,
          useValue: {
            instant: (key: string, ...params: unknown[]) =>
              [key.replace('::', ''), ...params].join('|'),
            get: (key: string) => of(key),
            currentLang: 'en',
          },
        },
      ],
    });
  });

  it('muestra el estado de carga y no el vacío mientras llega la respuesta', async () => {
    const pending = new Subject<unknown>();
    await create(() => pending);

    expect(q('pantry-loading')).not.toBeNull();
    expect(q('pantry-empty')).toBeNull();
    expect(q('pantry-error')).toBeNull();
  });

  it('muestra el error con reintento y se recupera al reintentar', async () => {
    let fail = true;
    await create(() => (fail ? throwError(() => new Error('boom')) : page([item()])));

    expect(q('pantry-error')).not.toBeNull();
    expect(q('pantry-empty')).toBeNull();

    fail = false;
    click(el.querySelector('#pantry-retry'));
    await settle();

    expect(q('pantry-error')).toBeNull();
    expect(qa('pantry-row')).toHaveLength(1);
    expect(service.getList).toHaveBeenCalledTimes(2);
  });

  it('muestra el estado vacío cuando no hay ítems', async () => {
    await create(() => page([]));

    expect(q('pantry-empty')).not.toBeNull();
    expect(q('pantry-table')).toBeNull();
  });

  it('muestra los resultados y comunica los datos faltantes sin inventar valores (RF-09)', async () => {
    await create(() =>
      page([
        item(),
        item({
          id: 'item-2',
          productName: 'Arroz',
          productBrand: undefined,
          quantity: undefined,
          unit: undefined,
          expirationDate: undefined,
        }),
      ]),
    );

    const rows = qa('pantry-row');
    expect(rows).toHaveLength(2);
    expect(rows[0].textContent).toContain('Leche');

    const incomplete = rows[1];
    expect(incomplete.querySelector('[data-testid="cell-quantity"]')!.textContent).toContain(
      'Pantry:NoQuantity',
    );
    expect(incomplete.querySelector('[data-testid="cell-unit"]')!.textContent).toContain(
      'Pantry:NoUnit',
    );
    expect(incomplete.querySelector('[data-testid="cell-expiration"]')!.textContent).toContain(
      'Pantry:NoExpirationDate',
    );
    expect(incomplete.textContent).toContain('Pantry:NoBrand');
  });

  it('no permite editar un ítem consumido y lo identifica', async () => {
    await create(() => page([item({ status: PantryItemStatus.Consumed })]));

    expect(q('badge-consumed')).not.toBeNull();
    expect(q('btn-edit')).toBeNull();
    expect(q('btn-consume')).toBeNull();
    expect(q('btn-delete')).not.toBeNull();
  });

  describe('edición', () => {
    beforeEach(async () => {
      await create(() => page([item()]));
      click(q('btn-edit'));
    });

    it('con cantidad negativa no llama al servidor y muestra el mensaje localizado', () => {
      setInput('pantry-quantity', '-1');
      click(el.querySelector('#pantry-save'));

      expect(service.update).not.toHaveBeenCalled();
      expect(q('quantity-error')!.textContent).toContain('Pantry:Validation:QuantityMin');
    });

    it('con fecha inexistente no llama al servidor y muestra el mensaje localizado', () => {
      // El input date del navegador descarta fechas imposibles; se fuerza el valor en el formulario.
      fixture.componentInstance.form.controls.expirationDate.setValue('2027-02-30');
      fixture.detectChanges();
      click(el.querySelector('#pantry-save'));

      expect(service.update).not.toHaveBeenCalled();
      expect(q('date-error')!.textContent).toContain('Pantry:Validation:InvalidDate');
    });

    it('con datos válidos envía el cambio y recarga el listado', async () => {
      setInput('pantry-quantity', '5');
      setInput('pantry-unit', ' kg ');
      setInput('pantry-expiration', '2027-04-01');
      click(el.querySelector('#pantry-save'));
      await settle();

      expect(service.update).toHaveBeenCalledWith('item-1', {
        quantity: 5,
        unit: 'kg',
        expirationDate: '2027-04-01',
      });
      expect(el.querySelector('#pantry-edit-form')).toBeNull();
      expect(service.getList).toHaveBeenCalledTimes(2);
    });

    it('deshabilita Guardar mientras la petición está en curso', () => {
      const pending = new Subject<PantryItemDto>();
      service.update.mockReturnValue(pending);

      click(el.querySelector('#pantry-save'));

      expect(el.querySelector<HTMLButtonElement>('#pantry-save')!.disabled).toBe(true);
      expect(service.update).toHaveBeenCalledTimes(1);

      click(el.querySelector('#pantry-save')); // doble clic: no duplica la petición
      expect(service.update).toHaveBeenCalledTimes(1);
    });

    it('si el servidor rechaza el cambio conserva lo ingresado y reactiva Guardar', async () => {
      service.update.mockReturnValue(throwError(() => new Error('rechazado')));

      setInput('pantry-quantity', '7');
      click(el.querySelector('#pantry-save'));
      await settle();

      expect(el.querySelector('#pantry-edit-form')).not.toBeNull();
      expect(el.querySelector<HTMLInputElement>('#pantry-quantity')!.value).toBe('7');
      expect(el.querySelector<HTMLButtonElement>('#pantry-save')!.disabled).toBe(false);
    });
  });

  describe('eliminación', () => {
    beforeEach(async () => {
      await create(() => page([item()]));
    });

    it('con confirmación elimina y recarga', async () => {
      confirmation.warn.mockReturnValue(of(Confirmation.Status.confirm));

      click(q('btn-delete'));
      await settle();

      expect(confirmation.warn).toHaveBeenCalledTimes(1);
      expect(service.delete).toHaveBeenCalledWith('item-1');
      expect(service.getList).toHaveBeenCalledTimes(2);
    });

    it('al cancelar no llama al servidor', async () => {
      confirmation.warn.mockReturnValue(of(Confirmation.Status.reject));

      click(q('btn-delete'));
      await settle();

      expect(confirmation.warn).toHaveBeenCalledTimes(1);
      expect(service.delete).not.toHaveBeenCalled();
      expect(service.getList).toHaveBeenCalledTimes(1);
    });
  });

  it('marca como consumido y recarga', async () => {
    await create(() => page([item()]));

    click(q('btn-consume'));
    await settle();

    expect(service.markAsConsumed).toHaveBeenCalledWith('item-1');
    expect(service.getList).toHaveBeenCalledTimes(2);
  });

  it('el filtro de estado envía el estado al servidor', async () => {
    await create(() => page([item()]));

    const select = el.querySelector<HTMLSelectElement>('#pantry-status-filter')!;
    select.value = String(PantryItemStatus.Consumed);
    select.dispatchEvent(new Event('change'));
    await settle();

    const lastCall = service.getList.mock.calls.at(-1)![0];
    expect(lastCall.status).toBe(PantryItemStatus.Consumed);
  });
});
