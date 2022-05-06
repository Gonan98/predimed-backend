import { DataTypes } from "sequelize";
import sequelize from "../db";

const Disease = sequelize.define(
    'Disease',
    {
        code: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default Disease;