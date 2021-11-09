import { getRepository, Repository } from 'typeorm';
import { CreateUserDTO } from '../DTOS/CreateUsers.DTO';
import User from '../entities/User';
import { UsersRepositoryImplementation } from './repositoriesImplementations/UsersRepositoryImplementation';

class UsersRepository implements UsersRepositoryImplementation {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(user_id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(user_id);
    return user;
  }

  public async create({ name, email, password }: CreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      email,
      password,
    });
    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export { UsersRepository };
