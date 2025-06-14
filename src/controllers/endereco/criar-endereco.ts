import Endereco from '../../models/enderecoModel';
import { Controller, HttpRequest, HttpResponse } from '../../interfaces';

class CriaEnderecoController implements Controller{
  async handle(httpRequest:HttpRequest): Promise<HttpResponse> {
    try {
      const { logradouro, numero, complemento, bairro, cidade, estado, cep, id_paciente } =
        httpRequest.body;

      const endereco = await Endereco.create({
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        cep,
        id_paciente
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
