//* Importacion de casos de uso
const {taskUseCases} = require('../../use_cases');

module.exports = (dependencies) => {

    //? Desestructuracion de dependencias
    const {httpError, models} = dependencies;

    //? Desestructuracion de propiedades
    const {ExceptionError} = httpError;

    //? Centralizacion de casos de uso
    const casesRepository = {
        getTask: taskUseCases.getTaskCase(models)
    }

    /**
     * Servicio que validará los casos de uso de obtener tarea.
     * @returns Resolución de servicio obtener tarea.
     */
    const getTaskService = async (uuidTask) => {

        //? Obtener tareas
        const task = await casesRepository.getTask(uuidTask);

        if(task === null){
            throw new ExceptionError('TASK_NOT_FOUND');
        }

        return {
            success: true,
            task
        };

    }

    return getTaskService;

}