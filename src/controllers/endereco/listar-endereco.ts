import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import Endereco from "../../models/enderecoModel";

class ListarEnderecoController implements Controller{
  async handle(httpRequest:HttpRequest): Promise<HttpResponse> {
    try {
      const enderecoId = httpRequest.params.id
      console.log(`O id do endereço é ${enderecoId}`)
      if(enderecoId){
        
        const endereco = await Endereco.findByPk(enderecoId);
        
        if(!endereco){
          return{
            statusCode: 404,
            body: { error: "endereço não encontrado"}
          }
        }

        return{
          statusCode: 200,
          body: endereco
        }
      } else {
        const enderecos = await Endereco.findAll();
        return {
        statusCode: 200,
        body: enderecos,
      };
      }
    } catch (error:any) {
      return {
        statusCode: 500,
        body: { erro: error.message },
      };
    }
  }
}

export default ListarEnderecoController