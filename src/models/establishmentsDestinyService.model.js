import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Establishments from './establishments.model';

const EstablishmentsDestinyService = sequelize.define(
    'establishmentDestinyService',
    {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        establishmentCode: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        code: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
    },
    {
        tableName: 'establishments_destiny_services',
        underscored: true,
        createdAt: false,
        updatedAt: false
    }
);

export default EstablishmentsDestinyService;