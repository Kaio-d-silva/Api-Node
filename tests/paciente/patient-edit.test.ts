import {
  createSinglePatient,
  deleteSinglePatient,
} from '../../src/factories/paciente_factory';
import EditarPacienteController from '../../src/controllers/paciente/editar-paciente';
import Paciente from '../../src/models/paciente-model';

describe('Deve editar paciente com sucesso ao informar dados validos', async () => {
  const paciente = await createSinglePatient();

  const request = {
    params: {},
    body: {
      nome: 'Paciente Editado',
      email: 'teste-ediacao-paciente@gmail.com',
      data_nascimento: '2000-01-02',
      cpf: '3213254941',
      telefone: '6799552644',
    },
  };

  const controlle = new EditarPacienteController();
  const pacienteEditado = await controlle.handle(request);

  const pacienteBanco = await Paciente.findByPk(pacienteEditado.body.id);

  expect(pacienteEditado.statusCode).toBe(200);
  expect(pacienteEditado.body.nome).toBe(pacienteBanco?.nome)
  expect(pacienteEditado.body.email).toBe(pacienteBanco?.email)
  expect(pacienteEditado.body.data_nascimento).toBe(pacienteBanco?.data_nascimento)
  expect(pacienteEditado.body.cpf).toBe(pacienteBanco?.cpf)
  expect(pacienteEditado.body.telefone).toBe(pacienteBanco?.telefone)

//   deleteSinglePatient(paciente.body.id);
});
