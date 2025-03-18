const express = require('express');
const Paciente = require('../models/pacienteModel');
const router = express.Router();

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
 *         - id_endereco
 *       properties:
 *         id:
 *           type: string
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
 *         id_endereco:
 *           type: string
 *           description: the id of the address 
 *          
 *       example:
 *         id_paciente : d5fE_asz
 *         nome : john Doe
 *         data_nascimento : 01/02/2000
 *         cpf : 304.923.093-65
 *         telefone : 93528451
 *         email : email.example@gmail.com
 *         id_endereco : d1gE_asz
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
router.post('/pacientes', async (req, res) => {
    try {
        const paciente = await Paciente.create(req.body);
        res.status(201).json(paciente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
/**
 * @swagger
 * /api/pacientes:
 *   get:
 *     summary: Retund the list of the pacientes
 *     tags: [Pacientes]
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
router.get('/pacientes', async (req, res) => {
    try {
        const pacientes = await Paciente.findAll();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ error: error.message });s
    }
});

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
router.put('/pacientes/:id', async (req, res) => {
    try {
        const paciente = await Paciente.findByPk(req.params.id);
        if (paciente) {
            await paciente.update(req.body);
            res.json(paciente);
        } else {
            res.status(404).json({ error: 'Paciente not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
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
router.delete('/pacientes/:id', async (req, res) => {
    try {
        const paciente = await Paciente.findByPk(req.params.id);
        if (paciente) {
            await paciente.destroy();
            res.json({ message: 'Paciente deleted' });
        } else {
            res.status(404).json({ error: 'Paciente not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;