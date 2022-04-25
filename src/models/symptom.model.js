import { DataTypes } from "sequelize";
import sequelize from "../db";

const Symptom = sequelize.define(
    'symptom',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        createdAt: false,
        updatedAt: false
    }
);

export default Symptom;