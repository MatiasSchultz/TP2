import { Router } from "express";
import userRoutes from "./userRoutes.js";
import battleRoutes from "./battleRoutes.js";

const indexRoutes = Router();

indexRoutes.use("/users", userRoutes);
indexRoutes.use("/battles", battleRoutes);

export default indexRoutes;
