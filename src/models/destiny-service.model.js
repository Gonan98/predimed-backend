import { DataTypes } from "sequelize";
import sequelize from "../db";

const DestinyService = sequelize.define(
    'destinyService',
    {
        code: {
            type: DataTypes.STRING,
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