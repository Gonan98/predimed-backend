import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Location = sequelize.define(
    'location',
    {
        department: {
            type: DataTypes.STRING,
            allowNull: false
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false
        },
        district: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        timestamps: false,
        tableName: 'locations'      
    }
);

export default Location;