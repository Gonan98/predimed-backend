import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Province from './province.model';

const Department = sequelize.define(
    'UbigeoPeruDepartment',
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

Province.belongsTo(Department);
Department.hasMany(Province, { foreignKey: 'departmentId' });

export default Department;