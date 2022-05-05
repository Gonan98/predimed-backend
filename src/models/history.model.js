import { DataTypes } from 'sequelize';
import sequelize from '../db';

const History = sequelize.define(
    'History',
    {
        weight: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        height: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        pressure: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        temperature: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        heartRate: {
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        respirationRate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        anamnesis: {
            type: DataTypes.STRING,
            allowNull: false
        },
        examSummary: {
            type: DataTypes.STRING,
        }
    },
    {
        underscored: true,
        timestamps: true
    }
);

export default History;