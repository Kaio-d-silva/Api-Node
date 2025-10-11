import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import User from '../../models/user-model';
import { PacienteService } from '../../service/paciente/paciente-service';

class DetalhesPacienteController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const pacienteId = httpRequest.params.id;

      if (!pacienteId || isNaN(Number(pacienteId))) {
        return {
          statusCode: 400,
          body: { error: 'ID do paciente inválido ou não fornecido' },
        };
      }

      const pacienteService = new PacienteService();
      const paciente = await pacienteService.detalhesPaciente(pacienteId);

      if (!paciente) {
        return {
          statusCode: 404,
          body: { error: 'Paciente não encontrado' },
        };
      }
      return {
        statusCode: 200,
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

export default DetalhesPacienteController;