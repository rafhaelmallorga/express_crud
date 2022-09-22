import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategory.controller";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";

const routes = Router();

routes.post("/categories", CreateCategoryController.handle);
routes.get("/categories", GetAllCategoriesController.handle);
routes.delete("/categories/:id", DeleteCategoryController.handle);

export { routes };
