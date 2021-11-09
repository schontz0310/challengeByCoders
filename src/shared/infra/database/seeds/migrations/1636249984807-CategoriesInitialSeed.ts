/* eslint-disable @typescript-eslint/no-empty-function */
import Category from '@domain/Transactions/entities/Category';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { CategorySeed } from '../categories.seeds';

export class CategoriesInitialSeed1636249984807 implements MigrationInterface {
  public async up(_queryRunner: QueryRunner): Promise<void> {
    const categories = _queryRunner.manager.create<Category>(
      Category,
      CategorySeed,
    );
    await _queryRunner.manager.save(categories);
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {}
}
