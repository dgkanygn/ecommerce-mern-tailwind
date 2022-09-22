import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getByUniqueName,
} from "../controllers/Category.js";

// import { register, login } from "../controllers/Auth.js";

const categoryRouter = express.Router();

// authRouter.post("/register", register);
// authRouter.post("/login", login);
categoryRouter.post("/createCategory", createCategory);
categoryRouter.get("/getAllCategories", getAllCategories);
categoryRouter.delete("/deleteCategory/:id", deleteCategory);
categoryRouter.get("/getByUniqueName/:id", getByUniqueName);

export default categoryRouter;
