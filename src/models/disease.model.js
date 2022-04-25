import { DataTypes } from "sequelize";
import sequelize from "../db";

const Disease = sequelize.define(
    'disease',
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

export default Disease;