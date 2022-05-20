import { DataTypes } from "sequelize";
import sequelize from "../db";

const Service = sequelize.define(
    'service',
    {
        code: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        serviceName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default Service;