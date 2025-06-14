import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import Paciente from "../../models/pacienteModel";

class EditarPacienteController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const paciente = await Paciente.findByPk(httpRequest.params.id);
      if (paciente) {
        await paciente.update(httpRequest.body);
        return {
          statusCode: 200,
          body: paciente,
        };
      } else {
        return {
          statusCode: 404,
          body: 'Paciente not found',
        };
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
