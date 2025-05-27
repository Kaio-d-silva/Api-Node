import { Model, DataTypes } from "sequelize";
import sequelize from '../database';


class Endereco extends Model {
  id!: number;
  logradouro!: string;
  numero!: number;
  complemento!: string;
  bairro!: string;
  cidade!: string;
  estado!: string;
  cep!: string;
  id_paciente!: number;
}

Endereco.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    logradouro: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    complemento: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING(9),
      allowNull: false,
      validate: {
        is: /^\d{5}-\d{3}$/,
      },
    },
    id_paciente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Pacientes',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'Endereco',
  }
);

export default Endereco
