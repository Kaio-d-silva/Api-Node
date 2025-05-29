const Paciente = require('../../models/pacienteModel');

class DeletarPacienteController {
  async handle(httpRequest) {
    try {
      const paciente = await Paciente.findByPk(httpRequest.params.id);
      if (paciente) {
        await paciente.destroy();
        return {
          statusCode: 200,
          body: 'Paciente deletado',
        };
      } else {
        return {
          statusCode: 404,
          body: 'Paciente not found',
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: error.message,
      };
    }
  }
}

module.exports = DeletarPacienteController;
