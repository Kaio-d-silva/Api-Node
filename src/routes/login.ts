import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import LoginController from "../controllers/login/login";

export default (router: Router): void => {
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
   *     summary: Realiza o login do usuário
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
   *                 description: Email do usuário
   *               senha:
   *                 type: string
   *                 description: Senha do usuário
   *             example:
   *               email: "joao.silva@dominio.com"
   *               senha: "123abc"
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
   *                   description: Token JWT gerado
   *                 refreshToken:
   *                   type: string
   *                   description: Token de atualização gerado
   *               example: 
   *                 message: Login realizado com sucesso
   *                 accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2FvLnNpbHZhQGRvbWluaW8uY29tIiwiaWF0IjoxNzU3MjYzMDUyLCJleHAiOjE3NTcyNjM5NTJ9.ReIEODjLBj55dj5bh7rgt3xPCeSOhM50XSP0QRnz1jg
   *                 refreshToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzU3MjYzMDUyLCJleHAiOjE3NTc4Njc4NTJ9.V2Mi0Ka1gkBM3Dc4bhGOFxe8YhPNAorxr9FuIDm7xi4
   *       401:
   *         description: Credenciais inválidas
   *       404:
   *         description: Usuário não encontrado
   *       500:
   *         description: Erro interno do servidor
   */
  router.post("/login", adaptRoute(new LoginController()));
};