import { Signal } from '../entities/Category';

export interface CreateCategoryDTO {
  type: number;
  description: string;
  signal: Signal;
}
