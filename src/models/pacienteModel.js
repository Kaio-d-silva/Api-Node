const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Paciente = sequelize.define(
  'Paciente',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
      validate: {
        is: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      },
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    // id_endereco: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'Endereco',
    //         key: 'id'
    //     }
    // }
  },
  {
    tableName: 'Pacientes',
  }
);

module.exports = Paciente;
