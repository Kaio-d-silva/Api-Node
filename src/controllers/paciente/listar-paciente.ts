import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import Paciente from '../../models/paciente-model'

class ListarPacienteController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const pacientes = await Paciente.findAll();
      return{
        statusCode: 200,
        body: pacientes
      }

    } catch (error: any) {
      return {
        statusCode: 500,
        body: { erro: error.message },
      };
    }
  }
}

export default ListarPacienteController;
