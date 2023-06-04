import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class User extends Model {}

User.init(
	{
		username: {
			type: DT.STRING,
			allowNull: false,
		},
		password: {
			type: DT.STRING,
			allowNull: false,
		},
		pokedex: {
			type: DT.STRING(2500),
			allowNull: false,
		},
	},
	{
		sequelize: connection,
		modelName: "User",
	}
);

export default User;
