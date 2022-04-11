import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Estableshiment from './establishments.model'

const User = sequelize.define(
    'user',
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactCenter: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true
        },
        profession: {
            type: DataTypes.STRING,
            allowNull: true
        },
        employeeStatus: {
            field: 'employee_status',
            type: DataTypes.STRING,
            allowNull: true
        },
        workingCondition: {
            field: 'working_condition',
            type: DataTypes.STRING,
            allowNull: true
        },
        documentNumber: {
            field: 'document_number',
            type: DataTypes.STRING,
            allowNull: true
        },
        documentMedic: {
            field: 'document_medic',
            type: DataTypes.STRING,
            allowNull: true
        },
        college: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        tableName: 'users',
        underscored: true
    }
);

User.belongsTo(Estableshiment, { foreignKey: 'establishment_id', allowNull: true });

export default User;