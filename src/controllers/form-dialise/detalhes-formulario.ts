import { Controller, HttpRequest, HttpResponse } from "../../interfaces"
import { FormDialiseService } from "../../service/form-dialise/form-dialise-service"

export class DetalhesFormularioDialise implements Controller {
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const formularioId = httpRequest.params.id
            const formDialiseService = new FormDialiseService()
            const formulario = await formDialiseService.DetalhesFormularioDialise(formularioId)

            if (!formulario) {
                return {
                    statusCode: 404,
                    body: "Formulario não encontrado"
                }
            } 
            return {
                statusCode: 200,
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