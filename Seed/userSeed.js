import { User } from "../Models/index.js";

const userSeed = async () => {
	try {
		await User.bulkCreate([
			{
				username: "po",
				password: "ke",
				pokedex: "5,74",
			},
		]);
	} catch (error) {
		console.log(error.message);
	}
};

export default userSeed;
