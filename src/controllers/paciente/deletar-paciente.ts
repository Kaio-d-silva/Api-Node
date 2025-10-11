import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import Paciente from '../../models/paciente-model'
import { PacienteService } from '../../service/paciente/paciente-service';

class DeletarPacienteController implements Controller{
  async handle(httpRequest: HttpRequest): Promise<HttpResponse>  {
    try { 

      const pacienteService = new PacienteService()

      const pacienteDeletado = await pacienteService.deletaPaciente(httpRequest.params.id)
    
      if (!pacienteDeletado){
        return{
          statusCode: 404,
          body: { error: "Paciente não encontrado" }
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
