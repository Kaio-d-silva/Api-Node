import ListarUsuarioController from '../src/controllers/usuario/listar-usuario'
import CriarUsuarioController from '../src/controllers/usuario/criar-usuario';
import DeletaUsuarioController from '../src/controllers/usuario/deletar-usuario';
import sequelize from "../src/database";
import { initializeDatabaseAndServer } from '../src/config/initializeDatebaseAndServer'
import { createSingleUser } from '../src/factories/user_factory'

initializeDatabaseAndServer(sequelize)
// Sincronizar o banco de dados e iniciar o servidor

describe('Rota de listarUsuarios', () => {


  test('Deve retornar usuário ao buscar com ID valido', async () => {
    

    const usuario = await createSingleUser()

    const request = {
      params: { 
        id: usuario.id },
      body: {},
    }

    const controleer = new ListarUsuarioController()
    const result = await controleer.handle(request)
    console.log(result)

    expect(result.statusCode).toBe(200)
    expect(result.body.User).toBeDefined()
    expect(result.body.User.id).toBe(usuario.id)
    expect(result.body.User.email).toBe(usuario.email)
    expect(result.body.User.senha).toBe(usuario.senha)

  });

  test('Deve retornar 404 "usuario nao encontrado" se o usuário não existir', async () => {
    const request = {
      params : {id : 1000},
      body : {}
    }

    const controller = new ListarUsuarioController()
    const response = await controller.handle(request)

    const statusCode = response.statusCode
    
    expect(statusCode).toBe(404)
    

  })

})

test('Deve encotrar usuario criado no banco de dados', async () => {
  const request = {
    params: {},
    body: {
      nome: "João da Silva",
      email: "teste@gmail.com",
      senha: "senha"
    }
  }
  const usuario = await createSingleUser()
  // const controllerCria = new CriarUsuarioController()
  // const response = await controllerCria.handle(request)

  // const controleerListar = new ListarUsuarioController()
  // const usuarioCriado = await controleerListar.handle({
  //   params: { id: response.body.dataValues.id },
  //   body: {}
  // })

  // const values = usuarioCriado.body.get()

  // const deletarUsuario = new DeletaUsuarioController()

  // deletarUsuario.handle({
  //   params: { id: response.body.dataValues.id},
  //   body: {}
  // })

  

  // expect(response).toMatchObject({
  //   id: values.id,
  //   email: values.email,
  //   nome: values.nome,
  //   senha: values.senha,
  // })

})


