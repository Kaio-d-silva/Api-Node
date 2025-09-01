import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import FormularioDialise from "../../models/formularioDialise-model";

class ListarFormularioDialise implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const formularioId = httpRequest.params.id
            const formulario = await FormularioDialise.findByPk(formularioId)

            if (!formulario && formularioId !== "{id}") {
                return {
                    statusCode: 404,
                    body: "Formulario não encontrado"
                }
            } else if (formularioId !== "{id}") {
                return {
                    statusCode: 200,
                    body: formulario
                }
            }
            const formularios = await FormularioDialise.findAll()
            return {
                statusCode: 200,
                body: formularios
            }
        } catch (error: any) {
            return {
                statusCode: 500,
                body: { error: error.message }
            }

        }
    }
}

export default ListarFormularioDialise