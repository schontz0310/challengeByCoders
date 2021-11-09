/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  @PrimaryColumn({
    name: 'user_id',
  })
  id: string;

  @Column({
    name: 'user_name',
  })
  name: string;

  @Column({
    name: 'user_email',
  })
  email: string;

  @Exclude()
  @Column({
    name: 'user_password',
  })
  password: string;

  @CreateDateColumn({
    name: 'user_created_at',
  })
  created_at: Date;

  @UpdateDateColumn({
    name: 'user_updated_at',
  })
  updated_at: Date;
}

export default User;
