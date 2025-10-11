import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import { PacienteService } from "../../service/paciente/paciente-service";

class EditarPacienteController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

      const pacienteService = new PacienteService()
      const { paciente, message } = await pacienteService.editarPaciente(httpRequest.params.id, httpRequest.body)

      if (!paciente) {
        return {
          statusCode: 404,
          body: { message }
        }
      }

      return {
        statusCode: 200,
        body: { paciente, message }
      }
      
    } catch (error: any) {
      return {
        statusCode: 400,
        body: { error: error.message },
      };
    }
  }
}

export default EditarPacienteController;
