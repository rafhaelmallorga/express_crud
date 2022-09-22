import { AppDataSource } from "../data-source";
import { Category } from "../entities/category.entity";

type CategoryUpdateRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({ id, name, description }: CategoryUpdateRequest) {
    const categoryRepository = AppDataSource.getRepository(Category);

    const category = await categoryRepository.findOneBy({ id });

    if (!category) {
      return new Error("Category does not exist");
    }

    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await categoryRepository.save(category);

    return category;
  }
}
