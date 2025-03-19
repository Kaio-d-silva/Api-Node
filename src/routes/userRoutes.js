const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const routerAdapter = require('../adpters/express-route-adapter')
const CriarUsuarioController = require('../controllers/criar-usuarios')

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - nome
 *         - senha
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: O id é gerado automaticamente
 *         nome:
 *           type: string
 *           description: O nome de usuário
 *         senha:
 *           type: string
 *           description: A senha do usuário
 *         email:
 *           type: string
 *           description: O email do usuário
 *       example:
 *         id: 1
 *         nome: Jose Cleber
 *         senha: 321
 *         email: joaoCarlos@dominio.com
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de usuários API
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *      201:
 *        description: O usuario foi criado com sucesso
 *      500:
 *        description: Algum erro aconteceu
 * 
 */

// Endpoint para criação de recurso
router.post('/users', routerAdapter(new CriarUsuarioController()));
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retund the list of the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/User'
 */


// Endpoint para listagem de recursos
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Upadate the user by the id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         nome: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was updated
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error happened
 */

// Endpoint para atualização de recurso
router.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
/** 
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         nome: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the user id
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 *    
 */

// Endpoint para deletar recurso
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.json({ message: 'User deleted' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;