import Paciente from "./paciente-model";
import Endereco from "./endereco-model";
import FormularioDialise from "./formularioDialise-model";
import AspectosLiquido from "./aspectosliquido-model";
import FormularioGlicemia from "./formularioGlicemia-model";

Paciente.hasMany(Endereco,{
  foreignKey: 'paciente_id',
  onDelete: 'CASCADE'
})

Endereco.belongsTo(Paciente,{
  foreignKey: 'paciente_id',
})

Paciente.hasMany(FormularioDialise,{
  foreignKey: 'paciente_id',
  onDelete: 'CASCADE'
})

FormularioDialise.belongsTo(Paciente,{
  foreignKey: 'paciente_id',
})

Paciente.hasMany(FormularioGlicemia,{
  foreignKey: 'paciente_id',
  onDelete: 'CASCADE'
})

FormularioGlicemia.belongsTo(Paciente,{
  foreignKey: 'paciente_id',
})

FormularioDialise.hasMany(AspectosLiquido,{
  foreignKey: 'aspecto_liquido_id'
})

AspectosLiquido.belongsTo(FormularioDialise,{
  foreignKey: 'aspecto_liquido_id'
})