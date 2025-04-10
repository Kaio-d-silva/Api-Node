const User = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class LoginController {
  /**
   * @param {httpRequest} httpRequest - Objeto de requisição http
   * @returns {Primise<HttpResponse}
   */

  async handle(httpRequest) {
    try {
      const { email, senha } = httpRequest.body;

      //verifica se o usuario existe no banco de dados
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return {
          statusCode: 404,
          body: { message: 'Usuario não encontrado' },
        };
      }

      //Compara a senha recebida com a senha criptografada
      const senhaEhValida = await bcrypt.compare(senha, user.senha);
      if (!senhaEhValida) {
        return {
          statusCode: 401,
          body: { message: 'Credenciais inválidas' },
        };
      }

      // Gerar o token JWT
      /*eslint-disable-next-line no-undef */
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        {
          /*eslint-disable-next-line no-undef */
          expiresIn: process.env.JWT_EXPIRES_IN, //token válidi por 1 hora
        }
      );

      return {
        statusCode: 200,
        body: { token },
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { message: 'Erro interno do servidor', error: error.message },
      };
    }
  }
}

module.exports = LoginController;
