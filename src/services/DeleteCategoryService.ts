import { AppDataSource } from "../data-source";
import { Category } from "../entities/category.entity";

export class DeleteCategoryService {
  async execute(id: string) {
    const categoryRepository = AppDataSource.getRepository(Category);

    if (!(await categoryRepository.findOne({ where: { id: id } }))) {
      return new Error("Category does not exists.");
    }

    await categoryRepository.delete(id);
  }
}
