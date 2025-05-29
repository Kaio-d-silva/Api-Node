const Endereco = require('../../models/enderecoModel');

class DeletarEnderecoController {
  async handle(httpRequest) {
    try {
      const endereco = await Endereco.findByPk(httpRequest.params.id);
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
    } catch (error) {
      return {
        statusCode: 500,
        body: error.message,
      };
    }
  }
}

module.exports = DeletarEnderecoController;
