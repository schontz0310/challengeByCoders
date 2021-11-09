import { CreateUserDTO } from '@domain/Users/DTOS/CreateUsers.DTO';
import { hashSync } from 'bcryptjs';

export const UsersSeed: CreateUserDTO[] = [
  {
    name: 'fulano de tal',
    email: 'fulanodetal@email.com',
    password: hashSync('123456', 8),
  },
  {
    name: 'byCoders',
    email: 'byCoders@email.com',
    password: hashSync('bycoders', 8),
  },
];
