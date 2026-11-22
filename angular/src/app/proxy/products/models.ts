import type { EntityDto } from '@abp/ng.core';

export interface CreateProductDto {
  barCode: string;
  name: string;
  brand?: string | null;
  nutriScore?: string | null;
  novaGroup?: number | null;
}

export interface ProductDto extends EntityDto<string> {
  barCode?: string;
  name?: string;
  brand?: string | null;
  nutriScore?: string | null;
  novaGroup?: number | null;
}

export interface UpdateProductDto {
  name: string;
  brand?: string | null;
  nutriScore?: string | null;
  novaGroup?: number | null;
}
