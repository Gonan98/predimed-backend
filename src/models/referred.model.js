import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../db';
import Patient from './patient.model';
import User from './user.model';

const Referred = sequelize.define(
    'referred',
    {
        referredDate: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW
        },
        diagnostic: {
            type: DataTypes.STRING,
            allowNull: false
        },
        anamnesis: {
            type: DataTypes.STRING
        }
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