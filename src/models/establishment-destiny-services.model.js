import { DataTypes } from "sequelize";
import sequelize from "../db";
import DestinyService from "./destiny-service.model";
import Establishment from "./establishment.model";

const EstablishmentDestinyService = sequelize.define(
  'establishmentDestinyService',
  {
    establishmentCode: {
      type: DataTypes.INTEGER,
      references: {
        model: Establishment,
        key: 'code'
      }
    },
    destinyServiceCode: {
      type: DataTypes.INTEGER,
      references: {
        model: DestinyService,
        key: 'code'
      }
    }
  },
  {
    underscored: true
  }
);

export default EstablishmentDestinyService;
