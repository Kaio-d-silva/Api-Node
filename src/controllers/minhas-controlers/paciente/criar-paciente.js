const Paciente = require('../../models/pacienteModel');

class CriaPacienteController {
  /**
   * @param {HttpResquest} resquest - Objeto de requisição HTTP
   * @returns {Promise<HttpResponse>}
   */

  async handle(httpRequest) {
    try {
      const { nome, email, data_nascimento, cpf, telefone, id_endereco } =
        httpRequest.body;

      const paciente = await Paciente.create({
        nome,
        email,
        data_nascimento,
        cpf,
        telefone,
        id_endereco,
      });

      return {
        statusCode: 201,
        body: paciente,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

module.exports = CriaPacienteController;
