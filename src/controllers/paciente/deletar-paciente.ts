import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import Paciente from '../../models/pacienteModel'

class DeletarPacienteController implements Controller{
  async handle(httpRequest: HttpRequest): Promise<HttpResponse>  {
    try {
      const paciente = await Paciente.findByPk(httpRequest.params.id);
      if (paciente) {
        await paciente.destroy();
        return {
          statusCode: 200,
          body: 'Paciente deletado',
        };
      } else {
        return {
          statusCode: 404,
          body: 'Paciente not found',
        };
      }
    } catch (error: any) {
      return {
        statusCode: 500,
        body: error.message,
      };
    }
  }
}

export default DeletarPacienteController;
