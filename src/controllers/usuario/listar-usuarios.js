const User = require('../../models/userModel');

class ListarUsuariosController {
    async handle(req) {
        try {
            const userId = req.parms?.id;
            const usuario = await User.findByPk(userId)
            if (!usuario && userId){
                return{
                    statusCode: 404,
                    body: {error: "usuario nao encontrado"}
                };
            }else if(userId){
                return{
                    statusCode: 200,
                    body: usuario
                };
            }

            const users = await User.findAll();
            return {
                statusCode: 200,
                body: users
            }
            
        } catch (error) {
            return{
            statusCode: 500,
            body: {erro: error.message}
        }}
        
    }
}

module.exports = ListarUsuariosController