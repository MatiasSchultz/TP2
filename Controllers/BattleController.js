import BattleAction from "../Actions/BattleAction.js";

const action = new BattleAction();

class BattleController {
	constructor() {}
	//static para metodos de clase
	//sin static para metodos de instancia

	createBattle = async (req, res) => {
		try {
			const { userID, userPokemon, enemyPokemon, winner } = req.body;
			const newBattle = await action.createBattle(userID, userPokemon, enemyPokemon, winner);
			if (!newBattle) throw new Error("no se pudo registrar la batalla");
			res
				.status(201)
				.send({ message: "Batalla registrada exitosamente", created: true });
		} catch (error) {
			console.error("Error al registrar la batalla:", error);
			res
				.status(403)
				.send({ message: error.original.sqlMessage, created: false });
		}
	};

	getAll = async (req, res) => {
		try {
			const battles = await action.getAll();
			if (!battles) throw new error("no se pudo realizar la busqueda");
			res.send({ message: "get all battles ok", battles });
		} catch (error) {
			console.error("Error fetching battles:", error);
			res.status(500).send({ message: "Error fetching users" });
		}
	};

	getOne = async (req, res) => {
		try {
            var urlParams = new URLSearchParams(window.location.search);
            var id = urlParams.get('id');
			const existingBattle = await action.getOne(id);
			if (existingBattle !== null) {
				res.status(201).send({ encontro: true, existingBattle });
			} else {
				res.status(201).send({ encontro: false });
			}
		} catch (error) {
			console.error("Error al buscar la batalla:", error);
			res.status(500).send({ message: "Error al buscar la batalla" });
		}
	};
}

export default BattleController;
