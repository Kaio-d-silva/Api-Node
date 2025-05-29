const Endereco = require('../../models/enderecoModel');

class ListarEnderecoController {
  async handle() {
    try {
      const endereco = await Endereco.findAll();
      return {
        statusCode: 200,
        body: endereco,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { erro: error.message },
      };
    }
  }
}

module.exports = ListarEnderecoController;
