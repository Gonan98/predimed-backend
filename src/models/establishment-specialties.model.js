import { DataTypes } from "sequelize";
import sequelize from "../db";
import Establishment from "./establishment.model";
import Specialty from "./specialty.model";

const EstablishmentSpecialty = sequelize.define(
  "establishmentSpecialty",
  {
    establishmentCode: {
      type: DataTypes.INTEGER,
      references: {
        model: Establishment,
        key: "code",
      },
    },
    specialtyCode: {
      type: DataTypes.INTEGER,
      references: {
        model: Specialty,
        key: "code",
      },
    },
  },
  {
    underscored: true
  }
);

export default EstablishmentSpecialty;
