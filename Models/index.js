import Battle from "./Battle.js";
import User from "./User.js";

User.hasMany(Battle, {});
Battle.belongsTo(User, {});

export { User, Battle };
