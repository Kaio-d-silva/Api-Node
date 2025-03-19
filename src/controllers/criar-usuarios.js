const User = require('../models/userModel');

class CriaUsuarioController  {
    /**
     * @param {HttpResquest} resquest - Objeto de requisição HTTP
     * @returns {Promise<HttpResponse>}
     */

    async handle(httpRequest) {
        try {
            const { nome, email, senha } = httpRequest.body;

            const usuario = await User.create({
                nome,
                email,
                senha,
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

module.exports = CriaUsuarioController;