import ListarUsuarioController from '../src/controllers/usuario/listar-usuario'

test('adds 1 + 2 to equal 3', async () => {
  const request = {
    params: { id: 1 },
    body: {},
  }

  const criar =await  new ListarUsuarioController().handle(request)
  
  expect(criar.body.status).toBe(200)
  
  });


