import { DataTypes } from 'sequelize';
import sequelize from '../db';
import DestinyService from './destiny-service.model';
import Establishment from './establishment.model';

const EstablishmentDestinyService = sequelize.define(
    'EstablishmentDestinyService',
    {
        establishmentCode: {
            type: DataTypes.INTEGER,
            references: {
                model: Establishment,
                key: 'code'
            }
        },
        destinyServiceCode: {
            type: DataTypes.INTEGER,
            references: {
                model: DestinyService,
                key: 'code'
            }
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

Establishment.belongsToMany(DestinyService, { through: EstablishmentDestinyService });
DestinyService.belongsToMany(Establishment, { through: EstablishmentDestinyService });

export default EstablishmentDestinyService;