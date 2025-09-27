import Paciente from '../models/paciente-model';

export const createSinglePatient = async () => {

  const paciente = {
    nome: 'Paciente Teste',
    email: 'e-mailTeste@teste.com',
    data_nascimento: '2000-01-01',
    cpf: '304.923.093-65',
    telefone: '6799999999',
  };

  const usuario = await Paciente.create(paciente);

  return usuario.dataValues;
};

export const deleteSinglePatient = async (id: number) => {
  const usuario = await Paciente.findByPk(id);
  await usuario.destroy();
};
