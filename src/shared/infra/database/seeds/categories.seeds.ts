import { CreateCategoryDTO } from '@domain/Transactions/dtos/CreateCategory.DTO';
import { Signal } from '@domain/Transactions/entities/Category';

export const CategorySeed: CreateCategoryDTO[] = [
  {
    type: 1,
    description: 'Débito',
    signal: Signal.ENTRY,
  },
  {
    type: 2,
    description: 'Boleto',
    signal: Signal.OUT,
  },
  {
    type: 3,
    description: 'Financiamento',
    signal: Signal.OUT,
  },
  {
    type: 4,
    description: 'Crédito',
    signal: Signal.ENTRY,
  },
  {
    type: 5,
    description: 'Recebimento Empréstimo',
    signal: Signal.ENTRY,
  },
  {
    type: 6,
    description: 'Vendas',
    signal: Signal.ENTRY,
  },
  {
    type: 7,
    description: 'Recebimento TED',
    signal: Signal.ENTRY,
  },
  {
    type: 8,
    description: 'Recebimento DOC',
    signal: Signal.ENTRY,
  },
  {
    type: 9,
    description: 'Aluguel',
    signal: Signal.OUT,
  },
];
