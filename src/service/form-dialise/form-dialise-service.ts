import FormularioDialise from "../../models/formularioDialise-model";
import Paciente from "../../models/paciente-model";

interface FormularioDialiseData {
    paciente_id: number;
    data_prenchimento: string;
    data: string;
    hora_inicio: string;
    hora_fim: string;
    solucao_utilizada: string;
    dreno_inicial: string;
    UF_total: number;
    tpm: number;
    aspecto_liquido_id: number;
    peso_pre_dialise: number;
    peso_pos_dialise: number;
    pressao_diastolica: number;
    pressao_sistolica: number;
    glicemia: number;
    anotacoes?: string | null;
}

export class FormDialiseService {
    async salvarFormularioDialise(dados: FormularioDialiseData): Promise<{formulario: FormularioDialise | null, message?: string}> {

        const {
            paciente_id,
            data_prenchimento,
            data,
            hora_inicio,
            hora_fim,
            solucao_utilizada,
            dreno_inicial,
            UF_total,
            tpm,
            aspecto_liquido_id,
            peso_pre_dialise,
            peso_pos_dialise,
            pressao_diastolica,
            pressao_sistolica,
            glicemia, 
            anotacoes, // Mensagem opcional
        } = dados

        const requiredFields = {
            paciente_id,
            data_prenchimento,
            data,
            hora_inicio,
            hora_fim,
            solucao_utilizada,
            dreno_inicial,
            UF_total,
            tpm,
            aspecto_liquido_id,
            peso_pre_dialise,
            peso_pos_dialise,
            pressao_diastolica,
            pressao_sistolica,
            glicemia,
        }

        const paciente = await Paciente.findOne({ where: { id:paciente_id } });

        if (!paciente) {
            return {
                formulario: null,
                message: 'Paciente não encontrado.'
            }
        }

        let formulario : FormularioDialise | null = null

        for (const [field, value] of Object.entries(requiredFields)) {
            if (value === undefined || value === null || value === '') {
                return {
                    formulario,
                    message: `O campo ${field} é obrigatório.` 
                }
            }
            if (typeof field === 'number' && typeof value !== 'number') {
                return {
                    formulario,
                    message: `O campo ${field} deve ser um número.`
                }
            }
        }
        formulario = await FormularioDialise.create({...dados})
        const message = 'Formulário salvo com sucesso.'

        return {formulario, message}

    }

    async ListarFormulariosDialise (idPaciente: number): Promise<FormularioDialise[]> {

        const formularios = await FormularioDialise.findAll({ where: { paciente_id: idPaciente } });
        return formularios
    }

    async DetalhesFormularioDialise (formularioId:number): Promise<FormularioDialise | null> {

        const formulario = await FormularioDialise.findByPk(formularioId);
        return formulario
    }
}