import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import Paciente from '../../models/pacienteModel'

class ListarPacienteController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const pacienteId = httpRequest.params.id
      const paciente = await Paciente.findByPk(pacienteId);

      console.log(`O id do paciente é ${pacienteId}`)

      if (!paciente && pacienteId !== "{id}") {
        return {
          statusCode: 404,
          body: { error: "paciente não encontrado" }
        }
      } else if (pacienteId !== '{id}') {
        return {
          statusCode: 200,
          body: paciente,
        };
      }
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
