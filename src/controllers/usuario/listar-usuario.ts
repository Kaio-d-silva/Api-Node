import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import User from '../../models/user-model';
import { UsuarioService } from '../../service/usuario/usuario-service';

class ListarUsuarioController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const usuarioService = new UsuarioService()

      const usuarios = await usuarioService.listaUsuarios()

      return {
        statusCode: 200,
        body: usuarios
      }

    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

export default ListarUsuarioController;