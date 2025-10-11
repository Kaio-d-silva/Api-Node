import Paciente from "../../models/paciente-model";

export class PacienteService {
    async cadastrarPaciente(dados: Paciente): Promise<{ paciente: Paciente | null, message: string }> {

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

    async listaPacientes(): Promise<Paciente[]> {
        const pacientes = await Paciente.findAll();
        return pacientes
    }

    async detalhesPaciente(idPaciente: number): Promise<Paciente | null> {
        const pacientes = await Paciente.findByPk(idPaciente);
        return pacientes
    }

    async editarPaciente(id: number, dados: Paciente): Promise<{ paciente: Paciente | null, message: string }> {
        
        const paciente = await Paciente.findByPk(id);
        
        if (!paciente) {
            return { paciente: null, message: 'Paciente não encontrado' }
        }

        const cpfPaciente = await Paciente.findOne({ where: { cpf: dados.cpf } })

        if (cpfPaciente && cpfPaciente.id !== id) {
            return { paciente: null, message: 'CPF já cadastrado para outro paciente ID : ' + cpfPaciente.id  }
        }
        const requiredFilds = {
            
        }

        for (const [field, value] of Object.entries(requiredFilds)) {
            if (value === undefined || value === null || value === '') {
                return {
                    paciente,
                    message: `O campo ${field} é obrigatório.`
                }
            }
        }

        await paciente.update(dados);


        return { paciente, message: 'Paciente atualizado com sucesso'}

    }
}