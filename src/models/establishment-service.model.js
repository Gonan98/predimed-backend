import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Establishment from './establishment.model';
import Service from './service.model';

const EstablishmentService = sequelize.define(
    'EstablishmentService',
    {
        establishmentCode: {
            type: DataTypes.INTEGER,
            references: {
                model: Establishment,
                key: 'code'
            }
        },
        serviceCode: {
            type: DataTypes.INTEGER,
            references: {
                model: Service,
                key: 'code'
            }
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

Establishment.belongsToMany(Service, { through: EstablishmentService });
Service.belongsToMany(Establishment, { through: EstablishmentService });

export default EstablishmentService;