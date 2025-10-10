import {
  createSinglePatient,
  deleteSinglePatient,
} from '../../src/factories/paciente_factory';
import DeletarPacienteController from '../../src/controllers/paciente/deletar-paciente';
import Paciente from '../../src/models/paciente-model';

describe('Rota de deletar paciente', () => {
  test('Deve retornar status 204 quando informado um id de paciente valido e existente', async () => {
    
    const paciente: Paciente = await createSinglePatient();

    const request = {
      params: {id : paciente.id},
    };

    const controlle = new DeletarPacienteController();
    const response = await controlle.handle(request);

    expect(response.statusCode).toBe(204);
  }),
  test('Deve retornar status 404 e mensagem "Paciente não encontrado" quando informado um id de paciente inexistente', async () => {
    
    const request = {
      params: {id : 900000},
    };

    const controlle = new DeletarPacienteController();
    const response = await controlle.handle(request);

    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe("Paciente não encontrado")
  })  
  
});
