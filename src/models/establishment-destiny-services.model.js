import { DataTypes } from "sequelize";
import sequelize from "../db";

const EstablishmentDestinyServices = sequelize.define(
  "EstablishmentDestinyServices",
  {
    establishmentCode: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    destinyServiceCode: {
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

export default EstablishmentDestinyServices;
