import express from "express";
const app = express();
import { serverPort } from "./config/config.js";
import indexRoutes from "./routes/indexRoutes.js";
import connection from "./connection/connection.js";
import cors from "cors";

const corsOptions = {
	origin: "*",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Middleware para analizar el cuerpo de la solicitud como JSON
app.use(express.json());
//midlewares
app.use(indexRoutes);

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173/login"); // Reemplaza con la URL de tu proyecto
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");

	next();
});

await connection.sync({ force: false }).then(() => {
	app.listen(serverPort, () => {
		console.log("server ok http://localhost:8080");
	});
});
