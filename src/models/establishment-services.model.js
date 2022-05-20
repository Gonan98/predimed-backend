import { DataTypes } from "sequelize";
import sequelize from "../db";
import Establishment from "./establishment.model";
import Service from "./service.model";

const EstablishmentService = sequelize.define(
  'establishmentService',
  {
    establishmentCode: {
      type: DataTypes.INTEGER,
      references: {
        model: Establishment,
        key: "code",
      },
    },
    serviceCode: {
      type: DataTypes.INTEGER,
      references: {
        model: Service,
        key: "code",
      },
    },
  },
  { underscored: true }
);

export default EstablishmentService;
