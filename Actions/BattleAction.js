import Battle from "../Models/Battle.js";

class BattleAction {
	constructor() {}
	//static para metodos de clase
	//sin static para metodos de instancia

	createBattle = async (userID, userPokemon, enemyPokemon, winner) => {
		const newBattle = await Battle.create({
			userID,
			userPokemon,
			enemyPokemon,
            winner,
		});
		return newBattle;
	};

	getAll = async () => {
		const battles = await Battle.findAll({
			attributes: ["id", "userID", "userPokemon", "enemyPokemon", "winner"],
		});
		return battles;
	};

	getOne = async (id) => {
		const existingBattle = await Battle.findOne({
			attributes: ["id", "userID", "userPokemon", "enemyPokemon", "winner"],
			where: {
				id,
			},
		});
		return existingBattle;
	};

}

export default BattleAction;
