import { container } from 'tsyringe';
import '@shared/container/providers/index';

import { TransactionsRepositoryImplementation } from '@domain/Transactions/repositories/repositoriesImplementations/TransactionsRepositoryImplementation';
import { TransactionsRepository } from '@domain/Transactions/repositories/TransactionsRepository';

import { CategoriesRepositoryImplementation } from '@domain/Transactions/repositories/repositoriesImplementations/CategoriesRepositoryImplementation';
import { CategoriesRepository } from '@domain/Transactions/repositories/CategoriesRepository';

import { UsersRepositoryImplementation } from '@domain/Users/repositories/repositoriesImplementations/UsersRepositoryImplementation';
import { UsersRepository } from '@domain/Users/repositories/UsersRepository';

container.registerSingleton<TransactionsRepositoryImplementation>(
  'TransactionsRepository',
  TransactionsRepository,
);

container.registerSingleton<CategoriesRepositoryImplementation>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<UsersRepositoryImplementation>(
  'UsersRepository',
  UsersRepository,
);
