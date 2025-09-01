import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import FormularioDialise from "../../models/formularioDialise-model";

class SalvarDadosDialise implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const {
                data_prenchimento,
                hora_preenchimento,
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
            } = httpRequest.body


            console.log("Criando registro de dialise")
            const formulario = await FormularioDialise.create({
                data_prenchimento,
                hora_preenchimento,
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
            console.log("entrou do catch")
            return {
                statusCode: 500,
                body: { error: error.message }
            }
        }
    }
}

export default SalvarDadosDialise