import {
  createSinglePatient,
  deleteSinglePatient,
} from '../../src/factories/paciente_factory';
import Paciente from '../../src/models/paciente-model';
import ListarPacienteController from '../../src/controllers/paciente/listar-paciente';

describe('Rota listar dados paciente', () => {
  test('Deve listar todos os dados do paciente', async () => {
    
    const paciente: Paciente = await createSinglePatient();
    
    const request = {
      params: {id : paciente.id},
    };

    const controlle = new ListarPacienteController();
    const response = await controlle.handle(request);
    const dadosDoPaciente: Paciente = response.body

    expect(response.statusCode).toBe(200);
    expect(dadosDoPaciente.nome).toBe(paciente?.nome)
    expect(dadosDoPaciente.email).toBe(paciente?.email)
    // expect(pacienteEditado.data_nascimento).toBe(dadosDoPaciente?.data_nascimento)
    expect(dadosDoPaciente.cpf).toBe(paciente?.cpf)
    expect(dadosDoPaciente.telefone).toBe(paciente?.telefone)

    deleteSinglePatient(paciente.id);
  })

});
