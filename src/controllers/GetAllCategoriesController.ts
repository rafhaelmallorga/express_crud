import { Request, Response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

export class GetAllCategoriesController {
  static async handle(request: Request, response: Response) {
    const service = new GetAllCategoriesService();

    const categories = await service.execute();

    return response.json(categories);
  }
}
