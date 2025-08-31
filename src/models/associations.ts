import Paciente from "./paciente-model";
import Endereco from "./endereco-model";
import FormularioDialise from "./formularioDialise-model";
import AspectosLiquido from "./aspectosliquido-model";

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