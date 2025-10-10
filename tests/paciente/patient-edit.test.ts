import {
  createSinglePatient,
  deleteSinglePatient,
} from '../../src/factories/paciente_factory';
import EditarPacienteController from '../../src/controllers/paciente/editar-paciente';
import Paciente from '../../src/models/paciente-model';

describe('Rota de editar paciente', () => {
  test('Deve editar paciente com sucesso ao informar dados validos', async () => {
    
    const paciente: Paciente = await createSinglePatient();
    const request = {
      params: {id : paciente.id},
      body: {
      nome: 'Paciente Editado',
        email: Math.random()+'teste-ediacao-paciente@gmail.com',
        data_nascimento: '2000-01-02',
        cpf: '839.867.090-88',
        telefone: '6799552644',
      },
    };

    const controlle = new EditarPacienteController();
    const pacienteEditado = await controlle.handle(request);
    
    const pacienteBanco = await Paciente.findByPk(pacienteEditado.body.id);

    expect(pacienteEditado.statusCode).toBe(200);
    expect(pacienteEditado.body.nome).toBe(pacienteBanco?.nome)
    expect(pacienteEditado.body.email).toBe(pacienteBanco?.email)
    // expect(pacienteEditado.body.data_nascimento).toBe(pacienteBanco?.data_nascimento)
    expect(pacienteEditado.body.cpf).toBe(pacienteBanco?.cpf)
    expect(pacienteEditado.body.telefone).toBe(pacienteBanco?.telefone)

    deleteSinglePatient(paciente.id);
  })
  test('Deve retornar status 404 e mensagem de "Paciente não encontrado" ao infornar um id de paciente inexistente', async () => {    
    const request = {
      params: {id : 90000},
      body: {
        nome: 'Paciente Editado',
        email: Math.random()+'teste-ediacao-paciente@gmail.com',
        data_nascimento: '2000-01-02',
        cpf: '839.867.090-88',
        telefone: '6799552644',
      },
    };

    const controlle = new EditarPacienteController();
    const response = await controlle.handle(request);
    

    expect(response.statusCode).toBe(404);
    expect(response.body).toBe("Paciente não encontrado")

  })

});

