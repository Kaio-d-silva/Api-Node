import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import FormularioDialise from "../../models/formularioDialise-model";

class SalvarDadosDialise implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {

            interface FormularioDialiseData {
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

            const {
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
                anotacoes = null,
            }: FormularioDialiseData = httpRequest.body

            const requiredFields = {
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

            for (const [field, value] of Object.entries(requiredFields)) {
                if (value === undefined || value === null || value === '') {
                    return {
                        statusCode: 400,
                        body: { message: `O campo ${field} é obrigatório.` }
                    }
                }
                if(typeof field === 'number' && typeof value !== 'number') {
                    return {
                        statusCode: 400,
                        body: { message: `O campo ${field} deve ser um número.` }
                    }
                }
            }

            const formulario = await FormularioDialise.create({
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
                anotacoes,
            })

            return {
                statusCode: 201,
                body: formulario
            }


        } catch (error: any) {
            return {
                statusCode: 500,
                body: { error: error.message }
            }
        }
    }
}

export default SalvarDadosDialise