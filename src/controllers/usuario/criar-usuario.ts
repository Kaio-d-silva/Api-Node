import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import User from '../../models/user-model';

import validator from 'validator';
import { UsuarioService } from '../../service/usuario/usuario-service';

class CriarUsuarioController implements Controller{
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const usuarioService = new UsuarioService()
      const { usuario, mensagem } = await usuarioService.cadastrarUsuario(httpRequest.body)

      if (!usuario) {
        return {
          statusCode: 400,
          body: { error: mensagem },
        };
      }

      return {
        statusCode: 201,
        body: usuario,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

export default CriarUsuarioController;