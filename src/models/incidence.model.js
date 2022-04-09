import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Estableshiment from './establishments.model'

const Incidence = sequelize.define(
    'incidence',
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true
        },
    },
    {
        tableName: 'incidences',
        underscored: true
    }
);

User.belongsTo(Estableshiment, { foreignKey: 'establishment_id', allowNull: true });

export default Incidence;