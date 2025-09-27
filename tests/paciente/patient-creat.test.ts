import CriaPacienteController from '../../src/controllers/paciente/criar-paciente';
import { deleteSinglePatient } from '../../src/factories/paciente_factory';
import Paciente from '../../src/models/paciente-model';

describe('Rota de criar paciente ', () => {
  test('Deve encontrar paciente criado no banco de dados', async () => {
    const request = {
      params: {},
      body: {
        nome: 'Paciente teste',
        email: 'e-mailTeste@teste.com',
        data_nascimento: '2000-01-01',
        cpf: '304.923.093-65',
        telefone: '6799999999',
      },
    };

    const controller = new CriaPacienteController();
    const paciente = await controller.handle(request);

    const pacienteCriado = await Paciente.findByPk(paciente.body.id);

    expect(paciente.statusCode).toBe(201);
    expect(paciente.body.nome).toBe(pacienteCriado?.nome);
    expect(paciente.body.email).toBe(pacienteCriado?.email);
    // expect(paciente.body.data_nascimento).toBe(pacienteCriado?.data_nascimento)
    expect(paciente.body.cpf).toBe(pacienteCriado?.cpf);
    expect(paciente.body.telefone).toBe(pacienteCriado?.telefone);

    deleteSinglePatient(paciente.body.id);
  });

  test("Deve retornar uma mensagem de erro 'dados invalidos' ", async () => {
    
  })
});
