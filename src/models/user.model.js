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
            unique: true,
        },
        documentMedic: {
            type: DataTypes.STRING(8),
            unique: true,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        gender: {
            type: DataTypes.STRING(1),
        },
        profession: {
            type: DataTypes.STRING(30),
        },
        college: {
            type: DataTypes.STRING(50),
        },
        employeeStatus: {
            type: DataTypes.STRING(20),
        },
        workingCondition: {
            type: DataTypes.STRING(20),
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default User;