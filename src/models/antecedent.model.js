import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Antecedent = sequelize.define(
    'Antecedent',
    {
        detail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        issueDate: {
            type: DataTypes.DATE
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default Antecedent;