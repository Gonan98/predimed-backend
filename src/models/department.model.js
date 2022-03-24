import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Department = sequelize.define(
    'department',
    {
        id: {
            type: DataTypes.STRING(2),
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
    },
    {
        tableName: 'ubigeo_peru_departments',
        underscored: true,
        createdAt: false,
        updatedAt: false
    }
);

export default Department;