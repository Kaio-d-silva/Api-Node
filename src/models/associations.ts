import Paciente from "./pacienteModel";
import Endereco from "./enderecoModel";

Paciente.hasMany(Endereco,{
  foreignKey: 'id_paciente',
  onDelete: 'CASCADE'
})

Endereco.belongsTo(Paciente,{
  foreignKey: 'id_paciente',
})
