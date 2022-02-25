import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Patient from './patient.model';
import User from './user.model';

const Referred = sequelize.define(
    'referred',
    {
        diagnostic: {
            type: DataTypes.STRING,
            allowNull: false
        },
        anamnesis: {
            type: DataTypes.STRING
        }
    }
);

User.belongsToMany(Patient, { through: Referred });
Patient.belongsToMany(User, { through: Referred });

export default Referred;