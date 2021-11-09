import { CreateUserDTO } from '@domain/Users/DTOS/CreateUsers.DTO';
import User from '@domain/Users/entities/User';

export interface UsersRepositoryImplementation {
  create(data: CreateUserDTO): Promise<User>;
  save(user: User): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}
