import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import Endereco from '../../models/enderecoModel';

class DeletarEnderecoController implements Controller{
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const enderecoId = httpRequest.params.id
      const endereco = await Endereco.findByPk(enderecoId);
      if (endereco) {
        await endereco.destroy();
        return {
          statusCode: 200,
          body: 'Endereco deletado',
        };
      } else {
        return {
          statusCode: 404,
          body: 'Endereco not found',
        };
      }
    } catch (error: any) {
      return {
        statusCode: 500,
        body: error.message,
      };
    }
  }
}

export default DeletarEnderecoController
