import { DataTypes } from 'sequelize';
import sequelize from '../db';

const District = sequelize.define(
    'ubigeoPeruDistrict',
    {
        id: {
            type: DataTypes.STRING(6),
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

export default District;