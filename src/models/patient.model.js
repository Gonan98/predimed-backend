import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Patient = sequelize.define(
    'patient',
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        documentNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(1),
            allowNull: false
        },

        //FK : ubigeoId: String
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default Patient;