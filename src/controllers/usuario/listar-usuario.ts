import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import User from '../../models/user-model';

class ListarUsuarioController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {    
      const usuarios = await User.findAll();
      return {
        statusCode: 200,
        body: usuarios,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

export default ListarUsuarioController;