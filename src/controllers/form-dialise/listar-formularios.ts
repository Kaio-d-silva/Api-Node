import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import { FormDialiseService } from "../../service/form-dialise/form-dialise-service";

class ListarFormularioDialise implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            
            const formDialiseService = new FormDialiseService()

            const { idPaciente } = httpRequest.params
            const formularios = await formDialiseService.ListarFormulariosDialise(idPaciente)
            
            
            if (!idPaciente){
                return{
                    statusCode: 404,
                    body : "É necessário informar o id do paciente"
                }
            }
            // if (typeof(idPaciente) != 'number'){
            //     return{
            //         statusCode: 400,
            //         body: "O id do paciente deve ser um numero"
            //     }
            // }

            if (!formularios){
                return{
                    statusCode: 404,
                    body: "Este paciente não tem formularios"
                }

            }
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