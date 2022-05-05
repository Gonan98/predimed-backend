import { DataTypes } from 'sequelize';
import sequelize from '../db';

const AntecedentType = sequelize.define(
    'AntecedentType',
    {
        name: {
            type: DataTypes.STRING(15),
            allowNull: false
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default AntecedentType;