import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import User from '../../models/user-model';
import { UsuarioService } from '../../service/usuario/usuario-service';

class DetalhesUsuarioController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const usuarioId = httpRequest.params.id;

      if (!usuarioId || isNaN(Number(usuarioId))) {
        return {
          statusCode: 400,
          body: { error: 'ID do usuario inválido ou não fornecido' },
        };
      }

      const usuarioService = new UsuarioService();
      const usuario = await usuarioService.detalhesUsuario(usuarioId);

      if (!usuario) {
        return {
          statusCode: 404,
          body: { error: 'usuario não encontrado' },
        };
      }
      return {
        statusCode: 200,
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

export default DetalhesUsuarioController;