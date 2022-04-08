import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Patient from './patient.model'

const PatientHistory = sequelize.define(
    'patientHistory',
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        resume: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        underscored: true,
        tableName: 'patient_history'
    }
);

Patient.hasMany(PatientHistory);
PatientHistory.belongsTo(Patient, { foreignKey: 'patientId', allowNull: false });

export default PatientHistory;