import csvParse from 'csv-parse';
import { getCustomRepository, getRepository, In } from 'typeorm';
import fs from 'fs';
import Transaction from '../models/Transaction';
import Category from '../models/Category';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface CSVTransaction {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class ImportTransactionsService {
  async execute(filePath: string): Promise<Transaction[]> {
    const transactionrepository = getCustomRepository(TransactionsRepository);
    const categoriesRepository = getRepository(Category);

    const contactsReadStram = fs.createReadStream(filePath);
    const parses = csvParse({
      delimiter: ',',
      from_line: 2,
    });
    const parseCSV = contactsReadStram.pipe(parses);

    const transactions: CSVTransaction[] = [];
    const categories: string[] = [];

    parseCSV.on('data', async line => {
      const [title, type, value, category] = line.map((cell: string) =>
        cell.trim(),
      );
      if (!title || !type || !value) return;
      categories.push(category);
      transactions.push({ title, type, value, category });
    });
    await new Promise(resolve => parseCSV.on('end', resolve));

    // metodo para percorer as categorias do CSV e verificar se elas já existem no banco de dados
    const existentCategories = await categoriesRepository.find({
      where: {
        title: In(categories),
      },
    });

    // Extraindo somente os titulos das categorias encontradas em existentCategories
    const existentCategoriesTitle = existentCategories.map(
      (category: Category) => category.title,
    );

    // Criando um Array com os titulos das categorias que não existem no banco de dados
    const needCreateCategoryTitle = categories
      .filter(category => !existentCategoriesTitle.includes(category))
      // este filtro serve para percorrer as categorias filtradas acima e remover valores duplicados
      .filter((value, index, self) => self.indexOf(value) === index);

    const newCategories = categoriesRepository.create(
      needCreateCategoryTitle.map(title => ({
        title,
      })),
    );

    await categoriesRepository.save(newCategories);

    // variavel para armazenar as categorias existentes e as novas para passar na transação
    const finalCategories = [...newCategories, ...existentCategories];

    // metodo para criar as transações
    const createdTransactions = transactionrepository.create(
      transactions.map(transaction => ({
        title: transaction.title,
        type: transaction.type,
        value: transaction.value,
        category: finalCategories.find(
          category => category.title === transaction.category,
        ),
      })),
    );

    await transactionrepository.save(createdTransactions);
    await fs.promises.unlink(filePath);
    return createdTransactions;
  }
}

export default ImportTransactionsService;
