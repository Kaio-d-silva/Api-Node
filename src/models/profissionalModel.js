// const { DataTypes } = require('sequelize');
// const sequelize = require('../database');

// const Profissional = sequelize.define('Profissional', {
//   id_profissional: {
//     type: DataTypes.STRING,
//     primaryKey: true,
//   },
//   nome: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   cpf: {
//     type: DataTypes.STRING(14),
//     allowNull: false,
//     validate: {
//       is: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
//     },
//   },
//   data_nascimento: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   telefone: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//   },
//   id_endereco: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: 'Enderecos',
//       key: 'id',
//     },
//   },
//   cargo: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   status: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//   },
// });

// module.exports = Profissional;


// Por agora não sera necessario cadastro de profissional