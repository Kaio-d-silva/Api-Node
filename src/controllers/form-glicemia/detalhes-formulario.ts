import { Controller, HttpRequest, HttpResponse } from "../../interfaces"
import { FormDialiseService } from "../../service/form-dialise/form-dialise-service"
import { FormGlicemiaService } from "../../service/form-glicemia/form-glicemia-service"

export class DetalhesFormularioGlicemia implements Controller {
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const formularioId = httpRequest.params.id
            const formDialiseService = new FormGlicemiaService()
            const formulario = await formDialiseService.DetalhesFormularioGlicemia(formularioId)

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