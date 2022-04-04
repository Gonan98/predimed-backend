import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Disease = sequelize.define(
    'disease',
    {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    },
    {
        tableName: 'diseases',
        underscored: true,
        createdAt: false,
        updatedAt: false
    }
);

export default Disease;