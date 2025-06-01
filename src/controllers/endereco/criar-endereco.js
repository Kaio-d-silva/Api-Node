const Endereco = require('../../models/enderecoModel');

class CriaEnderecoController {
  async handle(httpRequest) {
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
    } catch (error) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

module.exports = CriaEnderecoController;
