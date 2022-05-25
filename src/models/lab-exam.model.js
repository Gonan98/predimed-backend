import { DataTypes } from 'sequelize';
import sequelize from '../db';

const LabExam = sequelize.define('labExam', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, { 
    timestamps: false,
    underscored: true
});

export default LabExam;