import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Battle extends Model {}

Battle.init(
	{
		//agregar un email y agregarle la key validate: {isEmail: true,},
		userID: {
			type: DT.INTEGER(),
			allowNull: false,
		},
		userPokemon: {
			type: DT.INTEGER(),
			allowNull: false,
		},
		enemyPokemon: {
			type: DT.INTEGER(),
			allowNull: false,
		},
		winner: {
			type: DT.BOOLEAN(),
		},
	},
	{
		sequelize: connection,
		modelName: "Batlle",
	}
);

export default Battle;
