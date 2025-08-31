import Endereco from '../../models/endereco-model';
import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import Paciente from '../../models/paciente-model';
import { error } from 'console';

class CriaEnderecoController implements Controller{
  async handle(httpRequest:HttpRequest): Promise<HttpResponse> {
    try {
      const { logradouro, numero, complemento, bairro, cidade, estado, cep, paciente_id } =
        httpRequest.body;

      const paciente = await Paciente.findByPk(paciente_id)
      if (!paciente){
        return{
          statusCode: 404,
          body: "Paciente não encontrado"
        }
      }

      const endereco = await Endereco.create({
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        cep,
        paciente_id
      });

      return {
        statusCode: 201,
        body: endereco,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

export default CriaEnderecoController;
