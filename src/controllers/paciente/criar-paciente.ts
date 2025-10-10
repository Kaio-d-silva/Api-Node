import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import Paciente from '../../models/paciente-model'
import { PacienteService } from '../../service/paciente/paciente-service';

class CriaPacienteController implements Controller{
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      
      
      const pacienteService = new PacienteService()
      const { paciente, message } = await pacienteService.CadastrarPaciente(httpRequest.body);

      if (!paciente){
        return{
          statusCode: 400,
          body: {message}
        }
      }
      return {
        statusCode: 201,
        body: paciente,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

export default CriaPacienteController;
