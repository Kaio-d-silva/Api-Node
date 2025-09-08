import ListarUsuarioController from '../src/controllers/usuario/listar-usuario'
import CriarUsuarioController from '../src/controllers/usuario/criar-usuario';
import DeletaUsuarioController from '../src/controllers/usuario/deletar-usuario';
import sequelize from "../src/database";
import { initializeDatabaseAndServer } from '../src/config/initializeDatebaseAndServer'

initializeDatabaseAndServer(sequelize)
// Sincronizar o banco de dados e iniciar o servidor


test('Deve retornar usuário ao buscar com ID valido', async () => {
  const request = {
    params: { id: 1 },
    body: {},
  }

  const controleer = new ListarUsuarioController()
  const result = await controleer.handle(request)

  expect(result.body.get().statusCode).toBe(200)
  expect(result.body.get()).toMatchObject({
    id: 1,
    nome: 'João da Silva',
    email: 'joao.silva@dominio.com',
    senha: '$2b$10$HA/r8c/TCb56SsJDy2PesuHlaK0dh.3h5ON1tUKu0Oy3.FQv.x2x.',
  })

});

test('Deve retornar 404 se o usuário não existir', async () => {
  const request = {
    params : {id : 1000},
    body : {}
  }

  const controller = new ListarUsuarioController()
  const response = await controller.handle(request)

  expect(response.body.get().statusCode).toBe(404)
  

})

test('Criar usuario', async () => {
  const request = {
    params: {},
    body: {
      nome: "João da Silva",
      email: "teste@gmail.com",
      senha: "senha"
    }
  }

  const controllerCria = new CriarUsuarioController()
  const response = await controllerCria.handle(request)

  const controleerListar = new ListarUsuarioController()
  const usuarioCriado = await controleerListar.handle({
    params: { id: response.body.dataValues.id },
    body: {}
  })

  const values = usuarioCriado.body.get()

  const deletarUsuario = new DeletaUsuarioController()

  deletarUsuario.handle({
    params: { id: response.body.dataValues.id},
    body: {}
  })

  

  expect(response.body.get()).toMatchObject({
    id: values.id,
    email: values.email,
    nome: values.nome,
    senha: values.senha,
  })

})


