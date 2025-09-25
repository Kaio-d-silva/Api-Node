import FormularioGlicemia from "../../models/formularioGlicemia-model";
import Paciente from "../../models/paciente-model";

interface FormularioGlicemiaData {
    data_preenchimento: Date;
    hora_preenchimento: string;
    data_formulario: Date;
    glicemia_jejum: number;
    glicemia_pre_almoco: number;
    glicemia_apos_almoco: number;
    glicemia_pre_janta: number;
    antacoes?: string
    paciente_id: number
}

export class FormGlicemiaService {
    async salvarFormularioGlicemia(dados: FormularioGlicemiaData): Promise<{ formulario: FormularioGlicemia | null, message?: string }> {

        const {
            data_preenchimento,
            hora_preenchimento,
            data_formulario,
            glicemia_jejum,
            glicemia_pre_almoco,
            glicemia_apos_almoco,
            glicemia_pre_janta,
            paciente_id,
            antacoes, // Mensagem opcional
        } = dados

        const requiredFields = {
            data_preenchimento,
            hora_preenchimento,
            data_formulario,
            glicemia_jejum,
            glicemia_pre_almoco,
            glicemia_apos_almoco,
            glicemia_pre_janta,
            paciente_id
        }

        const paciente = await Paciente.findOne({ where: { id: paciente_id } });

        if (!paciente) {
            return {
                formulario: null,
                message: 'Paciente não encontrado.'
            }
        }

        let formulario: FormularioGlicemia | null = null

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
        formulario = await FormularioGlicemia.create({ ...dados })
        const message = 'Formulário salvo com sucesso.'

        return { formulario, message }

    }

    async ListarFormulariosDialise (idPaciente: number): Promise<FormularioGlicemia[]> {

            const formularios = await FormularioGlicemia.findAll({ where: { paciente_id: idPaciente } });
            return formularios
        }

    async DetalhesFormularioGlicemia(formularioId: number): Promise<FormularioGlicemia | null> {
        const formulario = await FormularioGlicemia.findByPk(formularioId);
        return formulario
    }
}