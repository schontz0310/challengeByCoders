import { Router } from 'express';
import { importTransactionsRouter } from '@domain/Transactions/useCases/importTransactions/importTransactions.routes';

const routes = Router();

routes.use('/transactions', importTransactionsRouter);

export default routes;
