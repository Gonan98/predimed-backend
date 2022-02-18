import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Medic = sequelize.define(
  'Medic',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name',
    },
    contactCenter: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'contact_center',
    },
  },
  {
    tableName: 'medics',
  }
);

export default Medic;
