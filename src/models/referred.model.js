import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Referred = sequelize.define(
    'referred',
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

export default Referred;