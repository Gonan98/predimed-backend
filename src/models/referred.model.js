import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../db';

const Referred = sequelize.define(
    'referred',
    {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        establishmentOriginId: {
            field: 'establishment_origin_id',
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        establishmentDestinyId: {
            field: 'establishment_destiny_id',
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        establishmentDestinyServiceId: {
            field: 'establishment_destiny_service_id',
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        establishmentSpecialtiesId: {
            field: 'establishment_specialties_id',
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        motive: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        number: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        resumeAnamnesis: {
            field: 'resume_anamnesis',
            type: DataTypes.STRING(),
            allowNull: false
        },
        resumenPhysicalExam: {
            field: 'resumen_physical_exam',
            type: DataTypes.STRING(),
            allowNull: false
        },
        temperature: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        pa: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        fc: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        fr: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        condition: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        patientId: {
            field: 'patient_id',
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        patientHistoryId: {
            field: 'patient_history_id',
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        userId: {
            field: 'user_id',
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
    },
    {
        timestamps: false,
        tableName: 'referreds',
        underscored: true
    }
);

export default Referred;