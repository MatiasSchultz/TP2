import User from "../Models/User.js";
import UserAction from "../Actions/UserAction.js";

const action = new UserAction();

class UserController {
	constructor() {}
	//static para metodos de clase
	//sin static para metodos de instancia

	createUser = async (req, res) => {
		try {
			const { username, password, pokedex } = req.body;
			const newUser = await action.createUser(username, password, pokedex);
			if (!newUser) throw new Error("no se pudo crear el usuario");
			res
				.status(201)
				.send({ message: "Usuario creado exitosamente", created: true });
		} catch (error) {
			console.error("Error al crear el usuario:", error);
			res
				.status(403)
				.send({ message: error.original.sqlMessage, created: false });
		}
	};

	getAll = async (req, res) => {
		try {
			const users = await action.getAll();
			if (!users) throw new error("no se pudo realizar la busqueda");
			res.send({ message: "get all users ok", users });
		} catch (error) {
			console.error("Error fetching users:", error);
			res.status(500).send({ message: "Error fetching users" });
		}
	};

	login = async (req, res) => {
		try {
			const { user, pass } = req.body;
			const existingUser = await action.login(user, pass);
			if (existingUser !== null) {
				res.status(201).send({ encontro: true, existingUser });
			} else {
				res.status(201).send({ encontro: false });
			}
		} catch (error) {
			console.error("Error al buscar el usuario:", error);
			res.status(500).send({ message: "Error al buscar el usuario" });
		}
	};
}

export default UserController;