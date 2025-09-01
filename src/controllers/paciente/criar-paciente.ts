import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import Paciente from '../../models/paciente-model'

class CriaPacienteController implements Controller{
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      
      const { nome, email = null, data_nascimento, cpf, telefone, id_endereco } =
        httpRequest.body;

      const paciente = await Paciente.create({
        nome,
        email,
        data_nascimento,
        cpf,
        telefone,
        id_endereco,
      });

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
