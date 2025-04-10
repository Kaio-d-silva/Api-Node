const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Endereco = sequelize.define(
  'Endereco',
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
      type: DataTypes.INTEGER(10),
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
      validade: {
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
    tableName: 'Endereco',
  }
);

module.exports = Endereco;
