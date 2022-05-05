import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Department from './department.model';
import Patient from './patient.model';
import Province from './province.model';

const District = sequelize.define(
    'UbigeoPeruDistrict',
    {
        id: {
            type: DataTypes.STRING(6),
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

District.belongsTo(Department);
District.hasMany(Patient)
Province.hasMany(District, { foreignKey: 'provinceId' });
Department.hasMany(District, { foreignKey: 'departmentId' });
Patient.belongsTo(District, { foreignKey: 'ubigeoId' });
District.belongsTo(Province);

export default District;