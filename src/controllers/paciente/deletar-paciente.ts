import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import Paciente from '../../models/paciente-model'
import { PacienteService } from '../../service/paciente/paciente-service';

class DeletarPacienteController implements Controller{
  async handle(httpRequest: HttpRequest): Promise<HttpResponse>  {
    try { 

      const pacienteService = new PacienteService()

      const { status, mensagem } = await pacienteService.deletaPaciente(httpRequest.params.id)
    
      if (!status){
        return{
          statusCode: 404,
          body: { error: mensagem }
        }
      }

      return{
        statusCode: 204
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
