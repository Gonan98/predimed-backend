import { Sequelize } from 'sequelize';
import config from './config';

const sequelize = new Sequelize(config.dbURL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export default sequelize;
