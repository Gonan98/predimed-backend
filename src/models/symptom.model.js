import { DataTypes } from "sequelize";
import sequelize from "../db";

const Symptom = sequelize.define(
    'symptom',
    {
        code: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        requiredAttention: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default Symptom;