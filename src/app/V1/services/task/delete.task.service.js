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
        deleteTask: taskUseCases.deleteTaskCase(models)
    }

    /**
     * Servicio que validará los casos de uso de eliminar tarea.
     * @param {string} uuidTask -Define el UUID de la tarea.
     * @returns Resolución de servicio eliminar tarea.
     */
    const deleteTaskService = async (uuidTask) => {

        //? Obtener tareas
        const task = await casesRepository.getTask(uuidTask);

        if(task === null){
            throw new ExceptionError('TASK_NOT_FOUND');
        }

        //? Eliminar tarea
        await casesRepository.deleteTask(uuidTask)

        return true;

    }

    return deleteTaskService;

}