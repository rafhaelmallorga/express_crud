import { AppDataSource } from "../data-source";
import { Category } from "../entities/category.entity";

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const categoryRepository = AppDataSource.getRepository(Category);

    if (await categoryRepository.findOneBy({ name })) {
      return new Error("Category already exists");
    }

    const category = categoryRepository.create({ name, description });

    await categoryRepository.save(category);

    return category;
  }
}
