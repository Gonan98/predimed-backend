import { DataTypes } from 'sequelize';
import sequelize from '../db';
import AntecedentType from './antecedent-type.model';

const Antecedent = sequelize.define(
    'Antecedent',
    {
        detail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        issueDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

AntecedentType.hasMany(Antecedent);
Antecedent.belongsTo(AntecedentType);

export default Antecedent;