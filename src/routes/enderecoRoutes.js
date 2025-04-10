const express = require('express');
const CriaEnderecoController = require('../controllers/endereco/criar-endereco');
const EditarEnderecoController = require('../controllers/endereco/editar-endereco');
const ListarEnderecoController = require('../controllers/endereco/listar-endereco');
const DeletarEnderecoController = require('../controllers/endereco/deletar-endereco');
const adaptRoute = require('../adapters/express-route-adapters');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Endereco:
 *       type: object
 *       required:
 *         - id
 *         - logradouro
 *         - numero
 *         - complemento
 *         - bairro
 *         - cidade
 *         - estado
 *         - cep
 *         - id_paciente
 *       properties:
 *         id:
 *           type: integer
 *           description: o id do endereco
 *         logradouro:
 *           type: string
 *           description: o logradouro do paciente ou do funcionario
 *         numero:
 *           type: integer
 *           description: o numero do paciente ou do funcionario
 *         complemento:
 *           type: string
 *           description: o complemento do paciente ou do funcionario
 *         bairro:
 *           type: string
 *           description: o bairro do paciente ou do funcionario
 *         cidade:
 *           type: string
 *           description: o cidade do paciente ou do funcionario
 *         estado:
 *           type: string
 *           description: o estado do paciente ou do funcionario
 *         cep:
 *           type: string
 *           description: o cep do paciente ou do funcionario
 *         id_paciente:
 *           type: integer
 *           description: Id endereço
 *       example:
 *         id: 1
 *         logradouro: nova aliança
 *         numero: 114
 *         complemento: perto do escola Erasmo braga
 *         bairro: jardim independencia
 *         cidade: dourados
 *         estado: MS
 *         cep: 78934222
 *         id_paciente: 1
 */

/**
 * @swagger
 * tags:
 *   name: Enderecos
 *   description: the enderecos managing API
 */

/**
 * @swagger
 * /api/enderecos:
 *   post:
 *     summary: Creat a new endereco
 *     tags: [Enderecos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Endereco'
 *     responses:
 *      201:
 *        description: The Paciente was sucessfully created
 *      500:
 *        description: Some server error
 *
 */

// Endpoint para criação de recurso
router.post('/enderecos', adaptRoute(new CriaEnderecoController()));
/**
 * @swagger
 * /api/enderecos:
 *   get:
 *     summary: Retund the list of the enderecos
 *     tags: [Enderecos]
 *     responses:
 *       200:
 *         description: The list of the enderecos
 *         content:
 *           application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Endereco'
 */

// Endpoint para listagem de recursos
router.get('/enderecos', adaptRoute(new ListarEnderecoController()));

/**
 * @swagger
 * /api/enderecos/{id}:
 *   put:
 *     summary: Upadate the endereco by the id
 *     tags: [Enderecos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the endereco id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Endereco'
 *     responses:
 *       200:
 *         description: The endereco was updated
 *       404:
 *         description: The endereco was not found
 *       500:
 *         description: Some error happened
 */

// Endpoint para atualização de recurso
router.put('/enderecos/:id', adaptRoute(new EditarEnderecoController()));

/**
 * @swagger
 * /api/enderecos/{id}:
 *   delete:
 *     summary: Remove the endereco by id
 *     tags: [Enderecos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the endereco id
 *     responses:
 *       200:
 *         description: The endereco was deleted
 *       404:
 *         description: The endereco was not found
 *
 */

// Endpoint para deletar recurso
router.delete('/enderecos/:id', adaptRoute(new DeletarEnderecoController()));

module.exports = router;
