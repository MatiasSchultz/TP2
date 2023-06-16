import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model {
	async validatePassword(passwordEnTextoPlano) {
		const hash = await bcrypt.hash(passwordEnTextoPlano, this.salt);
		return hash === this.password;
	}
}

User.init(
	{
		//agregar un email y agregarle la key validate: {isEmail: true,},
		username: {
			type: DT.STRING(),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DT.STRING(),
			allowNull: false,
		},
		pokedex: {
			type: DT.STRING(2500),
			allowNull: false,
		},
		salt: {
			type: DT.STRING(),
		},
	},
	{
		sequelize: connection,
		modelName: "User",
	}
);
User.beforeCreate(async (user) => {
	const salt = await bcrypt.genSalt();
	user.salt = salt;

	const passwordHash = await bcrypt.hash(user.password, salt);
	user.password = passwordHash;
});
export default User;
