import Endereco from '../../models/enderecoModel';
import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import Paciente from '../../models/pacienteModel';
import { error } from 'console';

class CriaEnderecoController implements Controller{
  async handle(httpRequest:HttpRequest): Promise<HttpResponse> {
    try {
      const { logradouro, numero, complemento, bairro, cidade, estado, cep, id_paciente } =
        httpRequest.body;

      const paciente = await Paciente.findByPk(id_paciente)
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
