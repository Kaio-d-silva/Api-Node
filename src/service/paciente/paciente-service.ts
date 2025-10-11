import Paciente from "../../models/paciente-model";

export class PacienteService {
    async CadastrarPaciente(dados: Paciente): Promise<{ paciente: Paciente | null, message: string }> {

        const requiredFilds = {
            ...dados
        }

        let paciente: Paciente | null = null

        for (const [field, value] of Object.entries(requiredFilds)) {
            if (value === undefined || value === null || value === '') {
                return {
                    paciente,
                    message: `O campo ${field} é obrigatório.`
                }
            }
        }


        paciente = await Paciente.create({ ...dados });

        const message = 'Paciente cadastrado com sucesos'
        return { paciente, message }

    }

    async deletaPaciente(id: number): Promise<boolean> {

        const paciente = await Paciente.findByPk(id);
        
        if (paciente) {
            await paciente.destroy();
            return true
        } 
        
        return false
    }

    async detalhesPaciente(idPaciente: number): Promise<Paciente | null> {
        const pacientes = await Paciente.findByPk(idPaciente);
        return pacientes
    }
}