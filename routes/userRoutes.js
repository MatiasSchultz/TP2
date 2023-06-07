import { Router } from "express";
import User from "../Models/User.js";

const userRoutes = Router();

userRoutes.get("/", async (req, res) => {
	try {
		const users = await User.findAll({
			attributes: ["id", "username", "password", "pokedex"],
		});

		res.send({ message: "get all users ok", users });
	} catch (error) {
		console.error("Error fetching users:", error);
		res.status(500).send({ message: "Error fetching users" });
	}
});

//ESTO NO FUNCIONA
userRoutes.post("/", async (req, res) => {
	try {
		const { username, password, pokedex } = req.body;
		const newUser = await User.create({
			username,
			password,
			pokedex,
		});
		res.status(201).send({ message: "Usuario creado exitosamente", newUser });
	} catch (error) {
		console.error("Error al crear el usuario:", error);
		res.status(500).send({ message: "Error al crear el usuario" });
	}
});

userRoutes.post("/login", async (req, res) => {
	try {
		const { user, pass } = req.body;
		const existingUser = await User.findOne({
			attributes: ["id", "username", "password", "pokedex"],
			where: {
				username: user,
				password: pass,
			},
		});
		if (existingUser !== null) {
			res.status(201).send({ encontro: true, existingUser });
		} else {
			res.status(201).send({ encontro: false });
		}
	} catch (error) {
		console.error("Error al buscar el usuario:", error);
		res.status(500).send({ message: "Error al buscar el usuario" });
	}
});

export default userRoutes;
