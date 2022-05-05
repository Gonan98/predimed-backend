import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Establishment from './establishment.model';
import Incidence from './incidence.model';
import NoReferred from './no-referred.model';
import Referred from './referred.model';

const User = sequelize.define(
    'User',
    {
        firstName: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        documentNumber: {
            type: DataTypes.STRING(8),
            allowNull: false
        },
        documentMedic: {
            type: DataTypes.STRING(8),
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        gender: {
            type: DataTypes.STRING(1),
            allowNull: false
        },
        profession: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        college: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        employeeStatus: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        workingCondition: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

User.belongsTo(Establishment, { foreignKey: 'establishmentCode' });
User.hasMany(Incidence);
User.hasMany(Referred);
User.hasMany(NoReferred);
Referred.belongsTo(User);
NoReferred.belongsTo(User);
Establishment.hasMany(User);
Incidence.belongsTo(User);

export default User;