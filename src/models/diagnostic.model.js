import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Diagnostic = sequelize.define(
    'diagnostic',
    {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
    },
    {
        tableName: 'diagnostics',
        underscored: true,
        createdAt: false,
        updatedAt: false
    }
);

export default Diagnostic;