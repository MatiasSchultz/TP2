import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import User from "../Models/User.js";

const userController = new UserController();
const userRoutes = Router();

userRoutes.get("/", userController.getAll);

userRoutes.post("/", userController.createUser);

userRoutes.post("/login", userController.login);

userRoutes.put("/:id", userController.updateUser);

userRoutes.post("/inPokedex/:id", userController.inPokedex);

export default userRoutes;
