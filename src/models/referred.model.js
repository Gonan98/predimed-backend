import { DataTypes } from 'sequelize';
import sequelize from '../db';
import DestinyService from './destiny-service.model';
import Disease from './disease.model';
import Service from './service.model';
import Specialty from './specialty.model';

const Referred = sequelize.define(
    'Referred',
    {
        reason: {
            type: DataTypes.STRING,
            allowNull: false
        },
        referenceDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

Referred.belongsTo(Disease, { foreignKey: 'possibleDiseaseId' });
Referred.belongsTo(DestinyService, { foreignKey: 'destinyServiceCode' });
Referred.belongsTo(Service, { foreignKey: 'sourceServiceCode' });
Referred.belongsTo(Specialty, { foreignKey: 'specialtyCode' });
Disease.hasMany(Referred);

export default Referred;