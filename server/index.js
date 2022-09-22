import express from "express";
import cors from "cors";

import { connectDB } from "./database.js";

import authRouter from "./routers/Auth.js";
import userRouter from "./routers/User.js";
import productRouter from "./routers/Product.js";

import path from "path";
import categoryRouter from "./routers/Category.js";
const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cors());

const port = 3001;

app.use("/", authRouter);
app.use("/", userRouter);
app.use("/", productRouter);
app.use("/", categoryRouter);

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
  connectDB();
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
