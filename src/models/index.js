const Paciente = require('./Paciente');
const Endereco = require('./Endereco');

// Relacionamento: Um Paciente tem um Endereco, e um Endereco pode pertencer a vários Pacientes
Endereco.hasMany(Paciente, { foreignKey: 'id_endereco' });
Paciente.belongsTo(Endereco, { foreignKey: 'id_endereco' });

module.exports = {
  Paciente,
  Endereco,
};
