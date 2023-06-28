import express from "express";
const app = express();
import { serverPort } from "./config/config.js";
import indexRoutes from "./routes/indexRoutes.js";
import connection from "./connection/connection.js";
import cors from "cors";
import userSeed from "./Seed/userSeed.js";

const corsOptions = {
	origin: "*",
	credentials: true,
	optionSuccessStatus: 200,
};

//midlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(indexRoutes);

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173/login");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");

	next();
});

await connection.sync({ force: false }).then(() => {
	app.listen(serverPort, () => {
		console.log("server ok http://localhost:8080");
	});
});
//.then(userSeed);
