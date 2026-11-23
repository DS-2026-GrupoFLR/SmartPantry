import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { PantryItemStatus } from './pantry-item-status.enum';

export interface CreatePantryItemDto {
  productId: string;
  quantity?: number | null;
  unit?: string | null;
  expirationDate?: string | null;
}

export interface GetPantryItemsInput extends PagedAndSortedResultRequestDto {
  status?: PantryItemStatus | null;
}

export interface PantryItemDto extends EntityDto<string> {
  productId?: string;
  productName?: string;
  productBrand?: string | null;
  productBarCode?: string;
  quantity?: number | null;
  unit?: string | null;
  expirationDate?: string | null;
  status?: PantryItemStatus;
}

export interface UpdatePantryItemDto {
  quantity?: number | null;
  unit?: string | null;
  expirationDate?: string | null;
}
