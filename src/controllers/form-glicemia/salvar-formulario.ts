import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import FormularioGlicemia from "../../models/formularioGlicemia-model";

class SalvarDadosGlicemia implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const {
                data_prenchimento,
                hora_preenchimento,
                data,
                glicemia_jejum,
                glicemia_pre_almoco,
                glicemia_apos_almoco,
                glicemia_pre_janta,
                glicemia_apos_janta,
                paciente_id,
                anotacoes = null,
            } = httpRequest.body


            console.log("Criando registro de dialise")
            const formulario = await FormularioGlicemia.create({
                data_prenchimento,
                hora_preenchimento,
                data,
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
            console.log("entrou do catch")
            return {
                statusCode: 500,
                body: { error: error.message }
            }
        }
    }
}

export default SalvarDadosGlicemia