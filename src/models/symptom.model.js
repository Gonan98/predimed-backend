import { DataTypes } from "sequelize";
import sequelize from "../db";

const Symptom = sequelize.define(
    'symptom',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
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