import Paciente from "../../models/paciente-model";

export class PacienteService {

    __validaId(id: string): boolean {
        return !isNaN(Number(id)) && Number(id) > 0
    }

    async cadastrarPaciente(dados: Paciente): Promise<{ paciente: Paciente | null, message: string }> {
        const cpfPaciente = await Paciente.findOne({ where: { cpf: dados.cpf } })

        if (cpfPaciente) {
            return { paciente: null, message: 'CPF já cadastrado para outro paciente ID : ' + cpfPaciente.id }
        }
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

    async deletaPaciente(id: string): Promise< { status : boolean, mensagem?: string }> {
        let status = false

        if (!this.__validaId(id)) {
            return { status , mensagem: 'ID do paciente inválido'}
        }

        const paciente = await Paciente.findByPk(id);
        
        if (paciente) {
            await paciente.destroy();
            return { status : true }
        } 
        
        return { status , mensagem: 'Paciente não encontrado'}
    }

    async listaPacientes(): Promise<Paciente[]> {
        const pacientes = await Paciente.findAll();
        return pacientes
    }

    async detalhesPaciente(idPaciente: string): Promise<Paciente | null> {
        if (!this.__validaId(idPaciente)) {
            return null
        }
        const pacientes = await Paciente.findByPk(idPaciente);
        return pacientes
    }

    async editarPaciente(id: string, dados: Paciente): Promise<{ paciente: Paciente | null, message: string }> {
        if (!this.__validaId(id)) {
            return { paciente: null, message: 'ID do paciente inválido' }
        }

        const paciente = await Paciente.findByPk(id);
        
        if (!paciente) {
            return { paciente: null, message: 'Paciente não encontrado' }
        }

        const cpfPaciente = await Paciente.findOne({ where: { cpf: dados.cpf } })

        if (cpfPaciente && cpfPaciente.id !== Number(id)) {
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