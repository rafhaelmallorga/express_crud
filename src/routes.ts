import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategory.controller";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";

const routes = Router();

routes.post("/categories", CreateCategoryController.handle);
routes.get("/categories", GetAllCategoriesController.handle);

export { routes };
