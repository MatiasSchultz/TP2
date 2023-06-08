import User from "../Models/User.js";

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

	updateUser = async (id) => {
		const valor = await User.update(
			{
				campo: "nuevo_valor",
				otro_campo: "otro_valor",
				// ...
			},
			{
				where: {
					id: id,
				},
			}
		);
		return valor;
	};

	nombre = async () => {
		const valor = "algo";
		return valor;
	};
}

export default UserAction;
