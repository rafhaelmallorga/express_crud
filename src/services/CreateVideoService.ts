import { AppDataSource } from "../data-source";
import { Category } from "../entities/category.entity";
import { Video } from "../entities/video.entity";

type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export class CreateVideoService {
  async execute({
    name,
    description,
    duration,
    category_id,
  }: VideoRequest): Promise<Error | Video> {
    const videoRepository = AppDataSource.getRepository(Video);
    const categoryRepository = AppDataSource.getRepository(Category);

    if (!(await categoryRepository.findOneBy({ id: category_id }))) {
      return new Error("Category does not exists");
    }

    const video = videoRepository.create({
      name,
      description,
      duration,
      category_id,
    });

    await videoRepository.save(video);

    return video;
  }
}
