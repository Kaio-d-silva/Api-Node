import Endereco from '../../models/enderecoModel';
import { Controller, HttpRequest, HttpResponse } from '../../interfaces';

class EditarEnderecoController implements Controller{
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const endereco = await Endereco.findByPk(httpRequest.params.id);
      if (endereco) {
        await endereco.update(httpRequest.body);
        return {
          statusCode: 200,
          body: endereco,
        };
      } else {
        return {
          statusCode: 404,
          body: 'Endereço not found',
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

export default EditarEnderecoController
