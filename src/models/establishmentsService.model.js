import { DataTypes } from 'sequelize';
import sequelize from '../db';

const EstablishmentsService = sequelize.define(
    'establishmentService',
    {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        establishmentCode: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        code: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
    },
    {
        tableName: 'establishments_services',
        underscored: true,
        createdAt: false,
        updatedAt: false
    }
);

export default EstablishmentsService;