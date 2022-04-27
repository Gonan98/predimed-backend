import { DataTypes } from "sequelize";
import sequelize from "../db";

const Symptom = sequelize.define(
    'symptom',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        aliasName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        underscored: true,
        createdAt: false,
        updatedAt: false
    }
);

export default Symptom;