import { DataTypes } from 'sequelize';
import sequelize from '../db';

const NoReferred = sequelize.define(
    'noReferred',
    {
        reason: {
            type: DataTypes.STRING,
            allowNull: false
        },
        issueDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default NoReferred;