import applicationEnsureAuthenticated from '@shared/infra/http/middlewares/applicationEnsureAuthenticated';
import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../../../config/upload';
import { ImportTransactionsController } from './ImportTransactionsController';

const importTransactionsRouter = Router();
importTransactionsRouter.use(applicationEnsureAuthenticated);
const uplaod = multer(uploadConfig);
const importTransactionsController = new ImportTransactionsController();

importTransactionsRouter.post(
  '/import',
  uplaod.single('file'),
  importTransactionsController.handle,
);

export { importTransactionsRouter };
