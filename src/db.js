import { Sequelize } from "sequelize";
import config from "./config";

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    dialect: "mysql",
  }
);

export default sequelize;
