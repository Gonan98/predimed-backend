import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Symptom from './symptom.model';

const NoReferred = sequelize.define(
    'NoReferred',
    {
        reason: {
            type: DataTypes.STRING,
            allowNull: false
        },
        issueDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

NoReferred.belongsToMany(Symptom, { through: 'no_referred_patient_symptoms' });
Symptom.belongsToMany(NoReferred, { through: 'no_referred_patient_symptoms' });

export default NoReferred;