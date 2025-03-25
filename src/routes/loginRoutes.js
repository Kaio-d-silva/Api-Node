const LoginController = require("../controllers/login")
const express = require('express');
const router = express.Router();
const adaptRoute = require('../adapters/express-route-adapters');


/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints de autenticação
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Realiza o login do usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email do usuario
 *               senha:
 *                 type: string
 *                 description: Senha do usuario
 *             example:
 *               email: "user.teste@gmail.com"
 *               senha: "minha_senha"
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token: 
 *                   type: string
 *                   description: token JWT gerado
 *       401:
 *         description: Credenciais invalidas
 *       404:
 *         description: Usuário não encontrado
 *       500: 
 *         description: Erro interno do servidor
 */
router.post('/login', adaptRoute(new LoginController()));

module.exports = router