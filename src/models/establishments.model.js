import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Establishments = sequelize.define(
    'establishment',
    {
        code: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        ubigeo: {
            type: DataTypes.STRING(6),
            allowNull: false
        },
    },
    {
        tableName: 'establishments',
        underscored: true,
        createdAt: false,
        updatedAt: false
    }
);

export default Establishments;