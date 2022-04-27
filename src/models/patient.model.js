import { DataTypes, Deferrable } from 'sequelize';
import sequelize from '../db';
import District from './district.model';
import Location from './location.model';

const Patient = sequelize.define(
    'patient',
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        documentNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(1),
            allowNull: false
        },
    },
    {
        underscored: true,
        tableName: 'patients'
    }
);

District.hasMany(Patient);
Patient.belongsTo(District, { foreignKey: 'districtId', allowNull: false });

export default Patient;