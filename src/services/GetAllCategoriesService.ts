import { AppDataSource } from "../data-source";
import { Category } from "../entities/category.entity";

export class GetAllCategoriesService {
  async execute() {
    const categoryRepository = AppDataSource.getRepository(Category);

    const categories = await categoryRepository.find();

    return categories;
  }
}
