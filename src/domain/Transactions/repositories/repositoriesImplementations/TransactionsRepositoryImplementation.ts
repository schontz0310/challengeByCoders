import { CNABDTO } from '@domain/Transactions/dtos/CNAB.DTO';
import Transaction from '@domain/Transactions/entities/Transaction';

export interface TransactionsRepositoryImplementation {
  findAll(): Promise<Transaction[]>;
  saveAll(data: CNABDTO[]): Promise<Transaction[]>;
}
