import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import User from '../../models/user-model';
import validator from 'validator';

class EditarUsuarioController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;
    const { nome, email, senha } = httpRequest.body;

    const user = await User.findOne({ where: { id } });
    if (!user){
      return {
        statusCode: 404,
        body: { error: 'Usuário não encontrado' },
      };
    }
    
    // Validação dos dados de entrada
    if (nome.length < 3) {
      return {
        statusCode: 400,
        body: { error: 'Nome deve ter pelo menos 3 caracteres' },
      };      
    }


    if (senha.length === null) {
      return {
        statusCode: 400,
        body: { error: 'Senha não pode ser vazia' },
      };
    }

    try {
      const usuario = await User.findByPk(id);
      if (!usuario) {
        return {
          statusCode: 404,
          body: { error: 'Usuário não encontrado' },
        };
      }
      await usuario.update({
        nome,
        email,
        senha,
      });
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

export default EditarUsuarioController;