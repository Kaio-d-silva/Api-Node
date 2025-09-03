import ListarUsuarioController from '../src/controllers/usuario/listar-usuario'
import { HttpRequest } from '../src/interfaces';

test('adds 1 + 2 to equal 3', () => {
  const request:HttpRequest = {
    params: { id: 1 },
    body: {},
    pathParameters: undefined,
    queryStringParameters: undefined
  }

  const criar = new ListarUsuarioController().handle(request)
  
  expect(criar.status).toBe(200);
  
  });

