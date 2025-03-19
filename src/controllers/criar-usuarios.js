const User = require('../models/userModel');
const bcrypt = require('bcrypt')

class CriaUsuarioController  {
    /**
     * @param {HttpResquest} resquest - Objeto de requisição HTTP
     * @returns {Promise<HttpResponse>}
     */

    async handle(httpRequest) {
        try {
            const { nome, email, senha } = httpRequest.body;
            
            const salt = 10;

            const senhaCriptografada = await bcrypt.hash(senha, salt)

            const usuario = await User.create({
                nome,
                email,
                senha: senhaCriptografada,
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