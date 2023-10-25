//* Importacion dey
const {taskUseCases} = require('../../use_cases');

module.exports = (dependencies) => {

    //? Desestructuracion de dependencias
    const { generateUUID, models } = dependencies;

    //? Centralizacion de casos de uso
    const casesRepository = {
        createTask: taskUseCases.createTaskCase(models),
    }

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