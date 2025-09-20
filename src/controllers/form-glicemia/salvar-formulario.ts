import { log } from "console";
import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import FormularioGlicemia from "../../models/formularioGlicemia-model";

class SalvarDadosGlicemia implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {


            interface FormularioGlicemiaData {
                data_preenchimento: string;
                data_formulario: string;
                glicemia_jejum: number;
                glicemia_pre_almoco: number;
                glicemia_apos_almoco: number;
                glicemia_pre_janta: number;
                glicemia_apos_janta: number;
                paciente_id: number;
                anotacoes?: string | null;
            } 

            const {
                data_preenchimento,
                data_formulario,
                glicemia_jejum,
                glicemia_pre_almoco,
                glicemia_apos_almoco,
                glicemia_pre_janta,
                glicemia_apos_janta,
                paciente_id,
                anotacoes = null,
            }: FormularioGlicemiaData = httpRequest.body

            const requiredFields = {
                data_preenchimento,
                data_formulario,
                glicemia_jejum,
                glicemia_pre_almoco,
                glicemia_apos_almoco,
                glicemia_pre_janta,
                glicemia_apos_janta,
                paciente_id,
            }
            console.log("requiredFields", requiredFields)
            const teste = {teste : "teste"}

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

            const formulario = await FormularioGlicemia.create({
                data_preenchimento,
                data_formulario,
                glicemia_jejum,
                glicemia_pre_almoco,
                glicemia_apos_almoco,
                glicemia_pre_janta,
                glicemia_apos_janta,
                paciente_id,
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

export default SalvarDadosGlicemia