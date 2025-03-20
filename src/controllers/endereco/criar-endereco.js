const Endereco = require('../../models/enderecoModel')

class CriaEnderecoController {

    async handle(httpRequest) {
        try {
            const { nome, email, senha } = httpRequest.body;
        
            const usuario = await User.create({
                nome,
                email,
                senha
            });

            return {
                statusCode: 201,
                body: usuario,
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: {error: error.message},
            };
        }
    }
}

module.exports = CriaEnderecoController