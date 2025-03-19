const User = require('../models/userModel');

class AtualizaUsuariosController {
    async handle(httpRequest) {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                await user.update(req.body);
                res.json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }

        } catch (error) {
            return {
                statusCode: 400,
                body: { error: error.message }
            }
        }
    }
}

module.exports = AtualizaUsuariosController