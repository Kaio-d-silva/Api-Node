import Paciente from "./pacienteModel";
import Endereco from "./enderecoModel";
import FormularioDialise from "./formularioDialise";
import AspectosLiquido from "./aspectos-liquido";

Paciente.hasMany(Endereco,{
  foreignKey: 'paciente_id',
  onDelete: 'CASCADE'
})

Endereco.belongsTo(Paciente,{
  foreignKey: 'paciente_id',
})


FormularioDialise.hasMany(AspectosLiquido,{
  foreignKey: 'aspecto_liquido_id'
})

AspectosLiquido.belongsTo(FormularioDialise,{
  foreignKey: 'aspecto_liquido_id'
})