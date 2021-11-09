import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportTransactionsUseCase } from './ImportTransactionsUseCase';

class ImportTransactionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const importTransactions = container.resolve(ImportTransactionsUseCase);
    if (request.file === undefined) {
      return response.status(400).json({ message: 'document not found' });
    }
    const transactions = await importTransactions.execute(request.file.path);
    return response.json(classToClass(transactions));
  }
}
export { ImportTransactionsController };
