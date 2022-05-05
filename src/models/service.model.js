import { DataTypes } from "sequelize";
import sequelize from "../db";

const Service = sequelize.define(
    'Service',
    {
        code: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
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