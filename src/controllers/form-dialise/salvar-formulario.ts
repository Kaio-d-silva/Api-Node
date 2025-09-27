import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import { FormDialiseService } from "../../service/form-dialise/form-dialise-service";

class SalvarDadosDialise implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const formDialiseService = new FormDialiseService()
            
            const { formulario, message } = await formDialiseService.salvarFormularioDialise(httpRequest.body)
            
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

export default SalvarDadosDialise