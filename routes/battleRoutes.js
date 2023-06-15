import { Router } from "express";
import BattleController from "../Controllers/BattleController.js";

const battleController = new BattleController();
const battleRoutes = Router();

battleRoutes.get("/", battleController.getAll);

battleRoutes.post("/", battleController.createBattle);

battleRoutes.get("/:id", battleController.getOne);

export default battleRoutes;
