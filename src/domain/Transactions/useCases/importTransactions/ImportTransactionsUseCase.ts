/* eslint-disable no-console */
/* eslint-disable radix */
import fs from 'fs';
import { CNABDTO } from '@domain/Transactions/dtos/CNAB.DTO';
import { inject, injectable } from 'tsyringe';
import { TransactionsRepositoryImplementation } from '@domain/Transactions/repositories/repositoriesImplementations/TransactionsRepositoryImplementation';
import { CategoriesRepositoryImplementation } from '@domain/Transactions/repositories/repositoriesImplementations/CategoriesRepositoryImplementation';
import { ResponseImportCNAB } from '@domain/Transactions/dtos/ResponseImportCNAB.DTO';

@injectable()
class ImportTransactionsUseCase {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: TransactionsRepositoryImplementation,

    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryImplementation,
  ) {}

  async execute(filePath: string): Promise<ResponseImportCNAB[]> {
    let transactions: CNABDTO[] = [];
    const categories = await this.categoriesRepository.findAll();
    const teste = fs.readFileSync(filePath, 'utf-8');
    const lines = teste.split(/\r?\n/);
    transactions = lines.map(line => {
      const register: CNABDTO = {
        categoryId:
          categories.find(item => item.type === parseInt(line.substr(0, 1)))
            ?.id || 'x',
        value: Number((parseInt(line.substr(9, 10)) / 100).toFixed(2)),
        document: line.substr(19, 11),
        creditCard: line.substr(30, 12),
        tranasctionTime: new Date(
          parseInt(line.substr(1, 4)), // ano
          parseInt(line.substr(5, 2)), // mes
          parseInt(line.substr(7, 2)), // dia
          parseInt(line.substr(42, 2)) + 3, // horas em formato UTC
          parseInt(line.substr(44, 2)), // minutos
          parseInt(line.substr(46, 2)), // segundos
          0, // milisegundos
        ),
        storeName: line.substr(62, 19),
        storeOwner: line.substr(62, 19),
      };
      return register;
    });
    const result = await this.transactionsRepository.saveAll(transactions);
    const response: ResponseImportCNAB[] = result.map(item => {
      return {
        transactionId: item.id,
        value: item.value,
        creditCard: item.creditCard,
        document: item.document,
        storeName: item.storeName,
        storeOwner: item.storeOwner,
        tranasctionTime: item.tranasctionTime,
        category: categories.find(category => category.id === item.categoryId),
      };
    });

    await fs.promises.unlink(filePath);
    return response;
  }
}

export { ImportTransactionsUseCase };
