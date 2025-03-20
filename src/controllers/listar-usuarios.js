const { json } = require('sequelize');
const User = require('../models/userModel');

class ListarUsuariosController {
    async handle(httpRequest) {
        try {
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