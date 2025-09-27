import ListarUsuarioController from '../../src/controllers/usuario/listar-usuario'
import sequelize from "../../src/database";
import { initializeDatabaseAndServer } from '../../src/config/initializeDatebaseAndServer'
import { createSingleUser, deleteSingleUser } from '../../src/factories/user_factory'

initializeDatabaseAndServer(sequelize)

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

    expect(result.statusCode).toBe(200)
    expect(result.body.id).toBe(usuario.id)
    expect(result.body.email).toBe(usuario.email)
    expect(result.body.senha).toBe(usuario.senha)

    await deleteSingleUser(usuario.id)

  });

  test('Deve retornar 404 "usuario nao encontrado" se o usuário não existir', async () => {
    const usuario = await createSingleUser()
    
    const request = {
      params : {id : 1000},
      body : {}
    }

    const controller = new ListarUsuarioController()
    const response = await controller.handle(request)

    const statusCode = response.statusCode
    
    expect(statusCode).toBe(404)
    await deleteSingleUser(usuario.id)
    
  })

})



