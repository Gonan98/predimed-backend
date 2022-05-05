import { DataTypes } from "sequelize";
import sequelize from "../db";

const Specialty = sequelize.define(
    'specialty',
    {
        code: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        specialtyName: {
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

export default Specialty;