import { DataTypes } from 'sequelize';
import sequelize from '../db';

const User = sequelize.define(
    'user',
    {
        firstName: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        documentNumber: {
            type: DataTypes.STRING(8),
            allowNull: false
        },
        documentMedic: {
            type: DataTypes.STRING(8),
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        gender: {
            type: DataTypes.STRING(1),
            allowNull: false
        },
        profession: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        college: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        employeeStatus: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        workingCondition: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default User;