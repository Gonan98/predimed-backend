import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../db';
import Patient from './patient.model';
import User from './user.model';

const Referred = sequelize.define(
    'referred',
    {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        referredDate: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        establishment: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        establishmentDestinyService: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        establishmentSpecialties: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        motive: {
            type: DataTypes.STRING,
            allowNull: false
        },
        resumeAnamnesis: {
            type: DataTypes.STRING,
            allowNull: false
        },
        resumenPhysicalExam: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false,
        tableName: 'referreds',
        underscored: true
    }
);

User.belongsToMany(Patient, { through: Referred });
Patient.belongsToMany(User, { through: Referred });

export default Referred;