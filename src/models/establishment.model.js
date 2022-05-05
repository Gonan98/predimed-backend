import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Establishment = sequelize.define(
    'establishment',
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
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default Establishment;