import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import  User from '../../models/user-model';
import { UsuarioService } from '../../service/usuario/usuario-service';
class DeletarUsuarioController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;
    try {

      if (!id) {
        return {
          statusCode: 404,
          body: { error: 'ID do usuário é obrigatório' },
        };
      }

      const usuarioService = new UsuarioService();
      const { status, mensagem } = await usuarioService.deletarUsuario(id);

      if (!status) {
        return {
          statusCode: 400,
          body: { error: mensagem },
        };
      }

      return {
        statusCode: 204,
      };

    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

export default DeletarUsuarioController;