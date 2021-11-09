import { getRepository, Repository } from 'typeorm';
import { CNABDTO } from '../dtos/CNAB.DTO';
import Transaction from '../entities/Transaction';
import { TransactionsRepositoryImplementation } from './repositoriesImplementations/TransactionsRepositoryImplementation';

class TransactionsRepository implements TransactionsRepositoryImplementation {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository(Transaction);
  }

  public async saveAll(data: CNABDTO[]): Promise<Transaction[]> {
    const transactions = this.ormRepository.create(data);
    await this.ormRepository.save(transactions);
    return transactions;
  }

  findAll(): Promise<Transaction[]> {
    throw new Error('Method not implemented.');
  }
}

export { TransactionsRepository };
