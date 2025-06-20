import { Controller, HttpRequest, HttpResponse } from "../../interfaces";

class SalvarDadosDialise implements Controller{
    async handle(httpRequest:HttpRequest): Promise<HttpResponse>{
        try{

            const {
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
                pressao_arterial,
                glicemia,
                anotacoes,
            } = httpRequest.body

        } catch (error: any){
        }

    } 
}

export default SalvarDadosDialise