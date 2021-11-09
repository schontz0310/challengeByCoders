/* eslint-disable @typescript-eslint/no-empty-function */
import User from '@domain/Users/entities/User';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { UsersSeed } from '../users.seeds';

export class UsersInitialSeed1636348438647 implements MigrationInterface {
  public async up(_queryRunner: QueryRunner): Promise<void> {
    const users = _queryRunner.manager.create<User>(User, UsersSeed);
    await _queryRunner.manager.save(users);
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {}
}
