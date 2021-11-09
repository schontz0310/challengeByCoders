import Category from '../entities/Category';

export interface ResponseImportCNAB {
  transactionId: string;
  value: number;
  document: string;
  creditCard: string;
  tranasctionTime: Date;
  storeName: string;
  storeOwner: string;
  category: Category | undefined;
}
