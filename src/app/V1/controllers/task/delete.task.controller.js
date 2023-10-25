//* Importacion de servicios
const {taskServices} = require('../../services') 

module.exports = (dependencies) => {

    //? Desestructuracion de dependencias
    const {httpError,httpResponses,statusCode, models} = dependencies;

    //? Centralizacion de servicios
    const serviceRepository = {
        deleteTask: taskServices.deleteTaskService({httpError,models}),
    }

    /**
     * Controlador que coordina el proceso de obtener tarea.
     * @param {*} req - Deinificón de la solicitud realizada.
     * @param {*} res - Definición de la respuesta capturada.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const deleteTaskController = async ( req, res , next) => {

        try {
            
            const serviceResponse = await serviceRepository.deleteTask(req.params.uuid_task);

            if(serviceResponse){

                httpResponses.responseSuccess(res, {
                    status_code: statusCode.OK,
                    data: {message:'Se ha borrado el registro con exito'}
                });

            }


        } catch (error) {
            console.log('DELETE_TASK_controller_error',error);
            next(error);
        }

    }

    return deleteTaskController;
}