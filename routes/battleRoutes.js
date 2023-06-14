import { Router } from "express";
import BattleController from "../Controllers/BattleController.js";
import Battle from "../Models/User.js";

const battleController = new UserController();
const battleRoutes = Router();

battleRoutes.get("/", battleController.getAll);

battleRoutes.post("/", battleController.createBattle);

battleRoutes.get("/:id", battleController.getOne);

export default battleRoutes;
