//* Importacion de servicios
const {taskServices} = require('../../services') 

module.exports = (dependencies) => {

    //? Desestructuracion de dependencias
    const {httpResponses,statusCode, models} = dependencies;

    //? Centralizacion de servicios
    const serviceRepository = {
        getTasks: taskServices.getTasksService(models),
    }

    /**
     * Controlador que coordina el proceso de obtener tareas.
     * @param {*} req - Deinificón de la solicitud realizada.
     * @param {*} res - Definición de la respuesta capturada.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const getTasksController = async ( req, res , next) => {

        try {
            
            const serviceResponse = await serviceRepository.getTasks();
            const {success,tasks} = serviceResponse;

            if(success){

                httpResponses.responseSuccess(res, {
                    status_code: statusCode.OK,
                    data: tasks
                });

            }


        } catch (error) {
            console.log('CREATE_TASK_controller_error',error);
            next(error);
        }

    }

    return getTasksController;
}