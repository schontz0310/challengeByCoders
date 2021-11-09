import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Category from './Category';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'category_id' })
  categoryId: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column('decimal')
  value: number;

  @Column()
  document: string;

  @Column({ name: 'credit_card' })
  creditCard: string;

  @Column({ name: 'transaction_time' })
  tranasctionTime: Date;

  @Column({ name: 'store_name' })
  storeName: string;

  @Column({ name: 'store_owner' })
  storeOwner: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default Transaction;
