import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import { PacienteService } from '../../service/paciente/paciente-service';

class ListarPacienteController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const pacienteService = new PacienteService()
      
      const pacientes = await pacienteService.listaPacientes()
      
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
