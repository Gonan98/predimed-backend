import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Location = sequelize.define(
    'location',
    {
        department: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        district: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

export default Location;