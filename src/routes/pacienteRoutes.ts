import CriaPacienteController from "../controllers/paciente/criar-paciente";
import EditarPacienteController from "../controllers/paciente/editar-paciente";
import DeletarPacienteController from "../controllers/paciente/deletar-paciente";
import ListarPacienteController from "../controllers/paciente/listar-paciente";

import adaptRoute from "../adapters/express-route-adapter";

import { Router } from "express";

export default (router: Router): void => {
/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente:
 *       type: object
 *       required:
 *         - id_paciente
 *         - nome
 *         - data_nascimento
 *         - cpf
 *         - telefone
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: the auto-generated id of the paciente
 *         nome:
 *           type: string
 *           description: the name of the paciente
 *         data_nascimento:
 *           type: date
 *           description: The data of birth of the paciente
 *         cpf:
 *           type: string
 *           description: The cpf of the paciente
 *         telefone:
 *           type: integer
 *           description: The telephone of the paciente
 *         email:
 *           type: string
 *           description: The email of the paciente
 *
 *       example:
 *         id : 1
 *         nome : john Doe
 *         data_nascimento : 01/02/2000
 *         cpf : 304.923.093-65
 *         telefone : 93528451
 *         email : email.example@gmail.com
 */

/**
 * @swagger
 * tags:
 *   name: Pacientes
 *   description: the pacientes managing API
 */

/**
 * @swagger
 * /api/pacientes:
 *   post:
 *     summary: Creat a new paciente
 *     tags: [Pacientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *      201:
 *        description: The Paciente was sucessfully created
 *      500:
 *        description: Some server error
 *
 */

// Endpoint para criação de recurso
router.post('/pacientes', adaptRoute(new CriaPacienteController()));
/**
 * @swagger
 * /api/pacientes/{id}:
 *   get:
 *     summary: Retund the list of the pacientes
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: false
 *         description: Id do Paciente
 *     responses:
 *       200:
 *         description: The list of the pacientes
 *         content:
 *           application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Paciente'
 */

// Endpoint para listagem de recursos
router.get('/pacientes{/:id}', adaptRoute(new ListarPacienteController()));

/**
 * @swagger
 * /api/pacientes/{id}:
 *   put:
 *     summary: Upadate the paciente by the id
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the paciente id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       200:
 *         description: The paciente was updated
 *       404:
 *         description: The paciente was not found
 *       500:
 *         description: Some error happened
 */

// Endpoint para atualização de recurso
router.put('/pacientes/:id', adaptRoute(new EditarPacienteController()));
/**
 * @swagger
 * /api/pacientes/{id}:
 *   delete:
 *     summary: Remove the paciente by id
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the paciente id
 *     responses:
 *       200:
 *         description: The paciente was deleted
 *       404:
 *         description: The paciente was not found
 *
 */

// Endpoint para deletar recurso
router.delete('/pacientes/:id', adaptRoute(new DeletarPacienteController()));
}