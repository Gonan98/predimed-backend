import { DataTypes } from 'sequelize';
import sequelize from '../db';

const EstablishmentsSpecialties = sequelize.define(
    'establishmentSpecialties',
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
            type: DataTypes.STRING(10),
            allowNull: false
        },
    },
    {
        tableName: 'establishments_specialties',
        underscored: true,
        createdAt: false,
        updatedAt: false
    }
);

export default EstablishmentsSpecialties;