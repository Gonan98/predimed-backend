import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Province = sequelize.define(
    'UbigeoPeruProvince',
    {
        id: {
            type: DataTypes.STRING(4),
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default Province;