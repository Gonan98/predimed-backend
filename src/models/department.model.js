import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Department = sequelize.define(
    'ubigeoPeruDepartment',
    {
        id: {
            type: DataTypes.STRING(2),
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default Department;