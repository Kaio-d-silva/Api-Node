import { Router } from "express";
import authMiddleware from "../middlewares/auth-middleware";
import adaptRoute from "../adapters/express-route-adapter";
import SalvarDadosGlicemia from "../controllers/form-glicemia/salvar-formulario"
import ListarFormularioGlicemia from "../controllers/form-glicemia/listar-formularios";
import { DetalhesFormularioGlicemia } from "../controllers/form-glicemia/detalhes-formulario";

export default (router: Router):void => {
/**
 * @swagger
 * components:
 *   schemas:
 *     FormularioGlicemia:
 *       type: object
 *       required:
 *         - data_formulario
 *         - glicemia_jejum
 *         - glicemia_pre_almoco
 *         - glicemia_apos_almoco
 *         - glicemia_pre_janta
 *         - glicemia_apos_janta
 *         - paciente_id
 *         - anotacoes
 *       properties:
 *         data_preenchimento:
 *           type: string
 *           format: date-time
 *           description: Data do preenchimento do formulario
 *         hora_preenchimento:
 *          type: string
 *          format: time
 *         glicemia_jejum:
 *           type: float
 *           description:
 *         glicemia_pre_almoco:
 *           type: float
 *           description:
 *         glicemia_apos_almoco:
 *           type: float
 *           description:
 *         glicemia_pre_janta:
 *           type: float
 *           description:
 *         glicemia_apos_janta:
 *           type: float
 *           description:
 *         paciente_id:
 *           type: float
 *           description:
 *         anotacoes:
 *           type: integer
 *           description:
 *       example:
 *         data_preenchimento : 2023-10-10
 *         hora_preenchimento : 14:30:00
 *         data_formulario : 2016-08-09 04:05:02
 *         glicemia_jejum : 92
 *         glicemia_pre_almoco : 105
 *         glicemia_apos_almoco : 138
 *         glicemia_pre_janta : 110
 *         glicemia_apos_janta : 145
 *         paciente_id : 1
 *         anotacoes : "Comi uma paçoca"
 */

/**
 * @swagger
 * tags:
 *   name: FormularioGlicemia
 *   description: Formulario preenchido pelo paciente
 */

/**
 * @swagger
 * /api/form/glicemia:
 *   post:
 *     summary: Salva formulario de glicemia
 *     tags: [FormularioGlicemia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FormularioGlicemia'
 *     responses:
 *       201:
 *         description: Dados do Formulario salvo com sucesso!
 *       500:
 *         description: Algum erro aconteceu
 */

router.post(
    "/form/glicemia",
    adaptRoute(new SalvarDadosGlicemia())
  );

//   /**
//  * @swagger
//  * /api/form/glicemia/{id}:
//  *   get:
//  *     summary: Busca formularios preenchidos
//  *     tags: [FormularioGlicemia]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema: 
//  *           type: integer
//  *         required: false
//  *         description: id do formulario
//  *     responses:
//  *       201:
//  *         description: Dados do Formulario salvo com sucesso!
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/FormularioGlicemia'
//  *       500:
//  *         description: Algum erro aconteceu
//  */

// router.get(
//     "/form/glicemia{/:id}",
//     adaptRoute(new ListarFormularioGlicemia())
//   );

    /**
 * @swagger
 * /api/pacientes/{idPaciente}/formularios/glicemia/:
 *   get:
 *     summary: Lista os formulários de glicemia de um paciente
 *     tags: [FormularioGlicemia]
 *     parameters:
 *       - in: path
 *         name: idPaciente
 *         schema: 
 *           type: integer
 *         required: true
 *         description: id do paciente
 *     responses:
 *       200:
 *         description: Listagem de formularios ocorreu com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FormularioGlicemia'
 *       500:
 *         description: Algum erro aconteceu
 */

router.get(
    "/pacientes/:idPaciente/formularios/glicemia/",
    adaptRoute(new ListarFormularioGlicemia())
  );


/**
 * @swagger
 * /api/form/glicemia/{id}:
 *   get:
 *     summary: Busca detalhes de um formulario específico
 *     tags: [FormularioGlicemia]
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
 *                 $ref: '#/components/schemas/FormularioGlicemia'
 *       500:
 *         description: Algum erro aconteceu
 */

router.get(
    "/form/glicemia/:id",
    adaptRoute(new DetalhesFormularioGlicemia())
  );
}