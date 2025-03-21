const Endereco = require('../../models/enderecoModel');

class EditarEnderecoController {
    async handle(httpRequest) {
        try {
            const endereco = await Endereco.findByPk(httpRequest.params.id);
            if (endereco) {
                await endereco.update(httpRequest.body);
                return{
                    statusCode:200,
                    body: endereco
                }
            } else {
                return{
                    statusCode: 404,
                    body: "Endereço not found"
                }
            }

        } catch (error) {
            return {
                statusCode: 400,
                body: { error: error.message }
            }
        }
    }
}

module.exports = EditarEnderecoController;