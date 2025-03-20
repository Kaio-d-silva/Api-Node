const express = require('express');
const Endereco = require('../models/enderecoModel');
const CriaEnderecoController = require('../controllers/endereco/criar-endereco')
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
 *       properties:
 *         id :
 *           type: string o id do endereco
 *           description: 
 *         logradouro :
 *           type: string
 *           description: o logradouro do paciente ou do funcionario 
 *         numero :
 *           type: string
 *           description: o numero do paciente ou do funcionario 
 *         complemento :
 *           type: string
 *           description: o complemento do paciente ou do funcionario 
 *         bairro :
 *           type: string
 *           description: o bairro do paciente ou do funcionario 
 *         cidade :
 *           type: string
 *           description: o cidade do paciente ou do funcionario 
 *         estado :
 *           type: string
 *           description: o estado do paciente ou do funcionario 
 *         cep :
 *           type: string
 *           description: o cep do paciente ou do funcionario 
 *          
 *       example:
 *         id : 1
 *         logradouro : nova aliança
 *         numero : 114
 *         complemento : perto do escola Erasmo braga 
 *         bairro : jardim independencia
 *         cidade : dourados
 *         estado : MS
 *         cep : 78934222
 */

/**
 * @swagger
 * tags:
 *   name: Endereços
 *   description: the enderecos managing API
 */

/**
 * @swagger
 * /api/enderecos:
 *   post:
 *     summary: Creat a new endereco
 *     tags: [Endereços]
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
router.post('/enderecos', adaptRoute(new CriaEnderecoController))
// router.post('/enderecos', async (req, res) => {
//     try {
//         const endereco = await Paciente.create(req.body);
//         res.status(201).json(endereco);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });
/**
 * @swagger
 * /api/enderecos:
 *   get:
 *     summary: Retund the list of the enderecos
 *     tags: [Endereços]
 *     responses:
 *       200:
 *         description: The list of the enderecos
 *         content:
 *           application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Paciente'
 */


// Endpoint para listagem de recursos
router.get('/enderecos', async (req, res) => {
    try {
        const enderecos = await Paciente.findAll();
        res.json(enderecos);
    } catch (error) {
        res.status(500).json({ error: error.message });s
    }
});

/**
 * @swagger
 * /api/enderecos/{id}:
 *   put:
 *     summary: Upadate the endereco by the id
 *     tags: [Endereços]
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
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       200:
 *         description: The endereco was updated
 *       404:
 *         description: The endereco was not found
 *       500:
 *         description: Some error happened
 */

// Endpoint para atualização de recurso
router.put('/enderecos/:id', async (req, res) => {
    try {
        const endereco = await Paciente.findByPk(req.params.id);
        if (endereco) {
            await endereco.update(req.body);
            res.json(endereco);
        } else {
            res.status(404).json({ error: 'Paciente not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
/** 
 * @swagger
 * /api/enderecos/{id}:
 *   delete:
 *     summary: Remove the endereco by id
 *     tags: [Endereços]
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
router.delete('/enderecos/:id', async (req, res) => {
    try {
        const endereco = await Paciente.findByPk(req.params.id);
        if (endereco) {
            await endereco.destroy();
            res.json({ message: 'Paciente deleted' });
        } else {
            res.status(404).json({ error: 'Paciente not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;