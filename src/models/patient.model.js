import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Antecedent from './antecedent.model';
import History from './history.model';
import NoReferred from './no-referred.model';
import Referred from './referred.model';

const Patient = sequelize.define(
    'Patient',
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
        timestamps: false
    }
);

Patient.hasMany(Referred);
Patient.hasMany(NoReferred);
Patient.hasMany(Antecedent);
Patient.hasMany(History);
Antecedent.belongsTo(Patient);
History.belongsTo(Patient);
Referred.belongsTo(Patient);
NoReferred.belongsTo(Patient);

export default Patient;