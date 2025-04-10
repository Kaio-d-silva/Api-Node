const Paciente = require('../../models/pacienteModel');

class ListarPacienteController {
  async handle() {
    try {
      const pacientes = await Paciente.findAll();
      return {
        statusCode: 200,
        body: pacientes,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { erro: error.message },
      };
    }
  }
}

module.exports = ListarPacienteController;
