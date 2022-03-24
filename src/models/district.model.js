import { DataTypes } from 'sequelize';
import sequelize from '../db';

const District = sequelize.define(
    'district',
    {
        id: {
            type: DataTypes.STRING(6),
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        provinceId: {
            type: DataTypes.STRING(4),
            allowNull: false
        },
        departmentId: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
    },
    {
        tableName: 'ubigeo_peru_districts',
        underscored: true,
        createdAt: false,
        updatedAt: false
    }
);

export default District;