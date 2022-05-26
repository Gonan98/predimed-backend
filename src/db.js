import { Sequelize } from 'sequelize';
import config from './config';

const sequelize = new Sequelize(config.dbURL);

export default sequelize;
