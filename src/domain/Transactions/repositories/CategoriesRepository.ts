import { getRepository, Repository } from 'typeorm';
import Category from '../entities/Category';
import { CategoriesRepositoryImplementation } from './repositoriesImplementations/CategoriesRepositoryImplementation';

class CategoriesRepository implements CategoriesRepositoryImplementation {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async findAll(): Promise<Category[]> {
    const categories = await this.ormRepository.find();
    return categories;
  }
}

export { CategoriesRepository };
