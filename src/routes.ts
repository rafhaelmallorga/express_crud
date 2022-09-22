import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategory.controller";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

const routes = Router();

routes.post("/categories", CreateCategoryController.handle);
routes.get("/categories", GetAllCategoriesController.handle);
routes.delete("/categories/:id", DeleteCategoryController.handle);
routes.patch("/categories/:id", UpdateCategoryController.handle);

export { routes };
