import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Symptom = sequelize.define(
    'symptom',
    {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
    },
    {
        tableName: 'symptoms',
        underscored: true,
        createdAt: false,
        updatedAt: false
    }
);

export default Symptom;