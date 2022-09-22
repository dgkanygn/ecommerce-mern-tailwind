import express from "express";
import { getAllUsers, getUser } from "../controllers/User.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.get("/users/:username", getUser);

export default userRouter;
