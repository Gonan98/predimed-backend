import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Province = sequelize.define(
    'province',
    {
        id: {
            type: DataTypes.STRING(4),
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        departmentId: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
    },
    {
        tableName: 'ubigeo_peru_provinces',
        underscored: true,
        createdAt: false,
        updatedAt: false
    }
);

export default Province;