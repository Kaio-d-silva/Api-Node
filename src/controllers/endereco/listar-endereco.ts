import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import Endereco from "../../models/enderecoModel";
import enderecoRoutes from "../../routes/enderecoRoutes";

class ListarEnderecoController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const enderecoId = httpRequest.params.id
      const endereco = await Endereco.findByPk(enderecoId);


      console.log(`O id do endereço é ${enderecoId}`)

      if (!endereco && enderecoId !== "{id}") {
        return {
          statusCode: 404,
          body: { error: "endereço não encontrado" }
        }
      } else if (enderecoId !== '{id}') {
        return {
          statusCode: 200,
          body: endereco,
        };
      }
      const enderecos = await Endereco.findAll();
      return{
        statusCode: 200,
        body: enderecos
      }

    } catch (error: any) {
      return {
        statusCode: 500,
        body: { erro: error.message },
      };
    }
  }
}

export default ListarEnderecoController