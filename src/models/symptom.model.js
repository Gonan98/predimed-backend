import { DataTypes } from "sequelize";
import sequelize from "../db";
import Referred from "./referred.model";

const Symptom = sequelize.define(
    'Symptom',
    {
        description: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        requiredAttention: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

Symptom.belongsToMany(Referred, { through: 'referred_patient_symptoms' });
Referred.belongsToMany(Symptom, { through: 'referred_patient_symptoms' });

export default Symptom;