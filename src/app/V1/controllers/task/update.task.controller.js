//* Importacion de servicios
const {taskServices} = require('../../services') 

module.exports = (dependencies) => {

    //? Desestructuracion de dependencias
    const {httpError,httpResponses,statusCode, models} = dependencies;

    //? Centralizacion de servicios
    const serviceRepository = {
        updateTask: taskServices.updateTaskService({httpError,models}),
    }

    /**
     * Controlador que coordina el proceso de actualizar tarea.
     * @param {*} req - Deinificón de la solicitud realizada.
     * @param {*} res - Definición de la respuesta capturada.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const updateTaskController = async ( req, res , next) => {

        try {
            
            const serviceResponse = await serviceRepository.updateTask(req.params.uuid_task,req.body);

            if(serviceResponse){

                httpResponses.responseSuccess(res, {
                    status_code: statusCode.OK,
                    data: {message:'La tarea ha sido actualizada exitosamente'}
                });

            }


        } catch (error) {
            console.log('UPDATE_TASK_controller_error',error);
            next(error);
        }

    }

    return updateTaskController;
}