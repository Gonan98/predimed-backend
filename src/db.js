import { Sequelize } from "sequelize";
import config from "./config";

let sequelize = null;

if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(config.dbURL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  sequelize = new Sequelize(config.dbURL);
}

export default sequelize;
