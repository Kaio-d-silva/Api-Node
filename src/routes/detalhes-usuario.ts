import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import authMiddleware from "../middlewares/auth-middleware";
import DetalhesUsuarioController from "../controllers/usuario/detalhes-usuario";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/users/{id}:
   *   get:
   *     summary: Retorna a lista de usuários
   *     tags: [Users]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *         description: id usuário
   *     responses:
   *       200:
   *         description: Dados do usuário
   *         content:
   *           application/json:
   *            schema:
   *            $ref: '#/components/schemas/User'
   *         
   */
  router.get(
    "/users/:id",
    authMiddleware,
    adaptRoute(new DetalhesUsuarioController())
  );
};