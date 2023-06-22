import { User } from "../Models/index.js";

class UserAction {
	constructor() {}
	//static para metodos de clase
	//sin static para metodos de instancia

	createUser = async (username, password, pokedex) => {
		const newUser = await User.create({
			username,
			password,
			pokedex,
		});
		return newUser;
	};

	getAll = async () => {
		const users = await User.findAll({
			attributes: ["id", "username", "pokedex"],
		});
		return users;
	};

	login = async (username, password) => {
		const existingUser = await User.findOne({
			attributes: ["id", "username", "pokedex"],
			where: {
				username,
				password,
			},
		});
		return existingUser;
	};

	getByUsername = async (username) => {
		const existingUser = await User.findOne({
			where: {
				username,
			},
		});
		return existingUser;
	};

	updateUser = async (id, updatedFields) => {
		const result = await User.update(updatedFields, {
			where: {
				id: id,
			},
		});
		return result;
	};

	nombre = async () => {
		const valor = "algo";
		return valor;
	};
}

export default UserAction;
