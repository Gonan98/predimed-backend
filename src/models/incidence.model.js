import { DataTypes } from 'sequelize';
import sequelize from '../db';
import Estableshiment from './establishments.model'
import User from './user.model'

const Incidence = sequelize.define(
    'incidence',
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true
        },
        topic: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        priority: {
            type: DataTypes.STRING,
            allowNull: false
        },
        registerType: {
            field: 'register_type',
            type: DataTypes.STRING,
            allowNull: false
        },
        solutionDetail: {
            field: 'solution_detail',
            type: DataTypes.STRING,
            allowNull: true
        },
        dateSolution: {
            field: 'date_solution',
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        tableName: 'incidences',
        underscored: true
    }
);

Incidence.belongsTo(Estableshiment, { foreignKey: 'establishment_id', allowNull: false });
Incidence.belongsTo(User, { foreignKey: 'user_id', allowNull: false });

export default Incidence;