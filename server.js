import express from "express";
const app = express();
import { serverPort } from "./config/config.js";
import indexRoutes from "./routes/indexRoutes.js";
import connection from "./connection/connection.js";

// Middleware para analizar el cuerpo de la solicitud como JSON
app.use(express.json());
//midlewares
app.use(indexRoutes);

await connection.sync({ force: false }).then(() => {
	app.listen(serverPort, () => {
		console.log("server ok http://localhost:8080");
	});
});
