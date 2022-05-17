import { DataTypes } from "sequelize";
import sequelize from "../db";

const EstablishmentSpecialties = sequelize.define(
  "EstablishtmentSpecialties",
  {
    establishmentCode: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    specialtyCode: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: true,
  }
);

export default EstablishmentSpecialties;
