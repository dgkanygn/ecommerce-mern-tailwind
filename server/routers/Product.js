import express from "express";
import {
  addFav,
  addFavsProducts,
  createProduct,
  deleteProduct,
  getAllProducts,
  getByCategory,
  getByIdProduct,
  getByOwnerProduct,
  getFavs,
} from "../controllers/Product.js";

const productRouter = express.Router();

import { upload } from "../helpers/multer.js";

productRouter.post("/create", upload, createProduct);
productRouter.get("/products", getAllProducts);
productRouter.delete("/delete/:id", deleteProduct);
productRouter.get("/products/:id", getByIdProduct);
productRouter.get("/products/find/:id", getByOwnerProduct);
productRouter.put("/products/:productID", addFavsProducts);
productRouter.get("/products/getFav/:id", getFavs);
productRouter.put("/products/addFav/:id", addFav);
productRouter.get("/products/getByCategory/:id", getByCategory);

export default productRouter;
