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
			const { username, password } = req.body;
			const user = await action.getByUsername(username);
			if (!user) throw new Error("El usuario no existe");
			const hash = await user.validatePassword(password);
			if (!hash) throw new Error("Contraseña incorrecta");
			const existingUser = {
				id: user.id,
				username: user.username,
				pokedex: user.pokedex,
			};

			res.status(201).send({ encontro: true, existingUser });
		} catch (error) {
			//console.error("Error al buscar el usuario: ", error);
			res.status(400).send({ message: error.message });
		}
	};

	updateUser = async (req, res) => {
		try {
			const { id } = req.params;
			const { updatedFields } = req.body;
			const result = await action.updateUser(id, updatedFields);
			// tiran null y undefined, no entran bien los parametros.
			console.log("BACK >", id);
			console.log("BACK >", updatedFields);
			if (result[0] === 1) {
				res.send({
					message: "Usuario actualizado exitosamente",
					updated: true,
				});
			} else {
				res.send({
					message: "No se pudo actualizar el usuario",
					updated: false,
				});
			}
		} catch (error) {
			console.error("Error al actualizar el usuario:", error);
			res.status(500).send({ message: "Error al actualizar el usuario" });
		}
	};
}

export default UserController;
