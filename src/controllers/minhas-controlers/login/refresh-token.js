const User = require('../../models/userModel');
const jwt = require('jsonwebtoken');

class RefleshTokenController {
  /**
   * @param {httpRequest} httpRequest - Objeto de requisição http
   * @returns {Primise<HttpResponse}
   */

  async handle(httpRequest) {
    try {
      const { refreshToken } = httpRequest.body;
      if (!refreshToken) {
        return {
          statusCode: 400,
          body: { message: 'Refresh token não informado' },
        };
      }
      // Verifica se o refresh token é válido
      // eslint-disable-next-line no-undef
      const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

      // Opicional: Verifica se o refresh token está associado a um usuário no banco de dados
      const user = await User.findOne({ where: { id: decoded.id } });
      if (!user) {
        return {
          statusCode: 403,
          body: { message: 'Refresh token inválido' },
        };
      }

      //Gere um novo access token
      const newAcessToken = jwt.sign(
        { id: user.id, email: user.email },
        // eslint-disable-next-line no-undef
        process.env.JWT_SECRET,
        // eslint-disable-next-line no-undef
        { expiresIn: process.env.JWT_EXPIRES_IN || '15m' }
      );

      return {
        statusCode: 200,
        body: { token: newAcessToken },
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { message: 'Erro interno do servidor', error: error.message },
      };
    }
  }
}

module.exports = RefleshTokenController;
