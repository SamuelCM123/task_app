//* Importacion de servicios
const {taskServices} = require('../../services') 

module.exports = (dependencies) => {

    //? Desestructuracion de dependencias
    const {httpError,httpResponses,statusCode, models} = dependencies;

    //? Centralizacion de servicios
    const serviceRepository = {
        getTask: taskServices.getTaskService({httpError,models}),
    }

    /**
     * Controlador que coordina el proceso de obtener tareas.
     * @param {*} req - Deinificón de la solicitud realizada.
     * @param {*} res - Definición de la respuesta capturada.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const getTaskController = async ( req, res , next) => {

        try {
            
            const serviceResponse = await serviceRepository.getTask(req.params.uuid_task);
            const {success,task} = serviceResponse;

            if(success){

                httpResponses.responseSuccess(res, {
                    status_code: statusCode.OK,
                    data: task || {}
                });

            }


        } catch (error) {
            console.log('CREATE_TASK_controller_error',error);
            next(error);
        }

    }

    return getTaskController;
}