import { Sequelize } from 'sequelize';
import config from './config';

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: 'postgres'
    }
);

export default sequelize;
