import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Establishment from './establishment.model';
import Specialty from './specialty.model';

const EstablishmentSpecialty = sequelize.define(
    'EstablishmentSpecialty',
    {
        establishmentCode: {
            type: DataTypes.INTEGER,
            references: {
                model: Establishment,
                key: 'code'
            }
        },
        specialtyCode: {
            type: DataTypes.INTEGER,
            references: {
                model: Specialty,
                key: 'code'
            }
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

Establishment.belongsToMany(Specialty, { through: EstablishmentSpecialty });
Specialty.belongsToMany(Establishment, { through: EstablishmentSpecialty });

export default EstablishmentSpecialty;