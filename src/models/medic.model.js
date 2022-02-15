import { DataTypes } from "sequelize";
import sequelize from "../db";

const Medic = sequelize.define('Medic', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactCenter: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Medic;