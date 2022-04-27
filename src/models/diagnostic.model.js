import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Disease from './disease.model'
import Symptom from './symptom.model'

const Diagnostic = sequelize.define(
    'diagnostic',
    {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
    },
    {
        tableName: 'diagnostics',
        underscored: true,
        createdAt: false,
        updatedAt: false
    }
);

Disease.hasMany(Diagnostic);
Diagnostic.belongsTo(Disease, { foreignKey: 'diseaseId', allowNull: false });
Symptom.hasMany(Diagnostic);
Diagnostic.belongsTo(Symptom, { foreignKey: 'symptomId', allowNull: false });

export default Diagnostic;