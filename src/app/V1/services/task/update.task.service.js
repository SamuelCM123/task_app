//* Importacion de casos de uso
const {taskUseCases} = require('../../use_cases');

module.exports = (dependencies) => {

    //? Desestructuracion de dependencias
    const {httpError, models} = dependencies;

    //? Desestructuracion de propiedades
    const {ExceptionError} = httpError;

    //? Centralizacion de casos de uso
    const casesRepository = {
        getTask: taskUseCases.getTaskCase(models),
        updateTask: taskUseCases.updateTaskCase(models)
    }

    /**
     * Servicio que validará los casos de uso para actualizar tarea.
     * @param {string} uuidTask -Define el UUID de la tarea.
     * @param {string} task -Define una tarea.
     * @returns Resolución de servicio actualizar tarea.
     */
    const updateTaskService = async (uuidTask,taskToUpdate) => {

        //? Verifica que la tarea existe.
        const task = await casesRepository.getTask(uuidTask);

        if(task === null){
            throw new ExceptionError('TASK_NOT_FOUND');
        }

        //? Actualizar tarea
        await casesRepository.updateTask(uuidTask,taskToUpdate)

        return true;

    }

    return updateTaskService;

}