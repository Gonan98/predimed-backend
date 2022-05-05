import { DataTypes } from 'sequelize';
import sequelize from '../db';
import District from './district.model';
import Referred from './referred.model';

const Establishment = sequelize.define(
    'Establishment',
    {
        code: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    },
    {
        underscored: true,
        timestamps: false
    }
);

Establishment.belongsTo(District, { foreignKey: 'ubigeoId' });
Establishment.hasMany(Referred);
Referred.belongsTo(Establishment, { foreignKey: 'sourceEstablishmentCode' });
Referred.belongsTo(Establishment, { foreignKey: 'destinyEstablishmentCode' })
District.hasMany(Establishment);

export default Establishment;