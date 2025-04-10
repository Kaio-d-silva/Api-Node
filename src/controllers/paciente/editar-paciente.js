const Paciente = require('../../models/pacienteModel');

class EditarPacienteController {
  async handle(httpRequest) {
    try {
      const paciente = await Paciente.findByPk(httpRequest.params.id);
      if (paciente) {
        await paciente.update(httpRequest.body);
        return {
          statusCode: 200,
          body: paciente,
        };
      } else {
        return {
          statusCode: 404,
          body: 'Paciente not found',
        };
      }
    } catch (error) {
      return {
        statusCode: 400,
        body: { error: error.message },
      };
    }
  }
}

module.exports = EditarPacienteController;
