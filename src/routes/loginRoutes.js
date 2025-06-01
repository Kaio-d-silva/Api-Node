const express = require('express');
const LoginController = require('../controllers/usuario/login');
const RefreshTokenController = require('../controllers/usuario/refresh-token');

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
 *               senha: "123abc"
 *               email: "joao.login@dominio.com"
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

/**
 * @swagger
 * /api/refresh-token:
 *  post:
 *      summary: Gera um novo token de acesso
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - refreshToken
 *                      properties:
 *                          refreshToken:
 *                              type: string
 *                              description: Token de atualização
 *                      example:
 *                          refreshToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.J4jZqM-6OXLBz_o8H99J
 *      responses:
 *          200:
 *              description: token de acesso gerado com sucesso
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              token:
 *                                  type: string
 *                                  description: token de acesso gerado
 *                          example:
 *                              token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ
 *          400:
 *              description: Token de atualização não fornecido
 *          403:
 *              description: Token de atualização inválido
 *          500:
 *              description: Erro interno do servidor
 */
router.post('/refresh-token', adaptRoute((new RefreshTokenController())));
module.exports = router;
