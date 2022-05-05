import { DataTypes } from "sequelize";
import sequelize from "../db";

const DestinyService = sequelize.define(
    'DestinyService',
    {
        code: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        destinyServiceName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default DestinyService;