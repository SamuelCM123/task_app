//* Importacion dey
const {taskUseCases} = require('../../use_cases');

module.exports = (dependencies) => {

    //? Desestructuracion de dependencias
    const { generateUUID, models } = dependencies;

    //? Centralizacion de casos de uso
    const casesRepository = {
        createTask: taskUseCases.createTaskCase(models),
    }

    /**
     * Servicio que validará los casos de uso de crear tarea.
     * @param {object} payload - Define la tarea a crear.
     * @param {string} payload.title - Define el título de la tarea.
     * @param {string} payload.description - Define la descripción de la tarea.
     * @returns Resolución de servicio crear tareas.
     */
    const createTaskService = async (task) => {

        //? Generacion de codigo uuid para la tarea
        const taskUUID = generateUUID();

        const taskCreated = await casesRepository.createTask({
            task_description: task.task_description,
            title: task.title,
            uuid_task: taskUUID
        })
        
        return taskCreated;
    }

    return createTaskService;

}