import { Router } from "express";
import authMiddleware from "../middlewares/auth-middleware";
import adaptRoute from "../adapters/express-route-adapter";
import SalvarDadosDialise from "../controllers/form-dialise/salvar-formulario";
import ListarFormularioDialise from "../controllers/form-dialise/listar-formularios";

export default (router: Router):void => {
/**
 * @swagger
 * components:
 *   schemas:
 *     FormularioDialise:
 *       type: object

 *       required:
 *         - data
 *         - hora_inicio
 *         - hora_fim
 *         - solucao_utilizada
 *         - dreno_inicial
 *         - UF_total
 *         - tpm
 *         - aspecto_liquido_id
 *         - peso_pre_dialise
 *         - peso_pos_dialise
 *         - pressao_arterial
 *         - glicemia
 *         - anotacoes
 *       properties:
 *         data: 
 *           type: DATE
 *           description: Data do processo de dialise
 *         hora_inicio: 
 *           type: DATE
 *           description: Horario de inicio do processo
 *         hora_fim: 
 *           type: DATE
 *           description: Horario do fim do processo
 *         solucao_utilizada: 
 *           type: FLOAT
 *           description: Ex Glicose 
 *         dreno_inicial: 
 *           type: FLOAT
 *           description: valor de dreno
 *         UF_total: 
 *           type: FLOAT
 *           description: volume de UF
 *         tpm: 
 *           type: FLOAT
 *           description: volume tpm
 *         aspecto_liquido_id: 
 *           type: INTEGER
 *           description: aspecto do liquido
 *         peso_pre_dialise: 
 *           type: FLOAT
 *           description: peso pré processo de dialise
 *         peso_pos_dialise: 
 *           type: FLOAT
 *           description: peso pós processo de dialise
 *         pressao_sistolica:
 *           type: INTEGER
 *           description: pressão sistolica Ex 120
 *         pressao_diastolica:
 *           type: INTEGER
 *           description: pressão diastolica Ex 80
 *         glicemia: 
 *           type: FLOAT
 *           description: valor da glicemia
 *         anotacoes: 
 *           type: STRING
 *           description: anotações extras
 *       example:
 *         data_prenchimento : 2016-08-09 04:05:02
 *         hora_preenchimento : 23:01 
 *         data : 01/02/2000
 *         hora_inicio : 20:00
 *         hora_fim : 21:30
 *         solucao_utilizada : 100 
 *         dreno_inicial : 100
 *         UF_total : 100
 *         tpm : 100
 *         aspecto_liquido_id : 1 
 *         peso_pre_dialise : 80
 *         peso_pos_dialise : 82
 *         pressao_arterial : 1
 *         pressao_sistolica : 120
 *         pressao_diastolica : 80
 *         glicemia : 100
 *         anotacoes : liquido viscoso verde
 */

/**
 * @swagger
 * tags:
 *   name: FormularioDialise
 *   description: Formulario preenchido pelo paciente
 */

/**
 * @swagger
 * /api/form/dialise:
 *   post:
 *     summary: Salva o usuário
 *     tags: [FormularioDialise]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FormularioDialise'
 *     responses:
 *       201:
 *         description: Dados do Formulario salvo com sucesso!
 *       500:
 *         description: Algum erro aconteceu
 */

router.post(
    "/form/dialise",
    adaptRoute(new SalvarDadosDialise())
  );

  /**
 * @swagger
 * /api/form/dialise/{id}:
 *   get:
 *     summary: Salva o usuário
 *     tags: [FormularioDialise]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: false
 *         description: id do formulario
 *     responses:
 *       201:
 *         description: Dados do Formulario salvo com sucesso!
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FormularioDialise'
 *       500:
 *         description: Algum erro aconteceu
 */

router.get(
    "/form/dialise{/:id}",
    adaptRoute(new ListarFormularioDialise())
  );
}