import Category from '@domain/Transactions/entities/Category';

export interface CategoriesRepositoryImplementation {
  findAll(): Promise<Category[]>;
}
