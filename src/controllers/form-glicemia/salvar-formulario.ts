import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import { FormGlicemiaService } from "../../service/form-glicemia/form-glicemia-service";

class SalvarDadosGlicemia implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const formDialiseService = new FormGlicemiaService()
            
            const { formulario, message } = await formDialiseService.salvarFormularioGlicemia(httpRequest.body)
            
            if(formulario === null) {
                return {
                    statusCode: 400,
                    body: { message }
                }
            }

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