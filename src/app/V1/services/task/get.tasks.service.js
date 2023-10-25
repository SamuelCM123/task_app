//* Importacion de casos de uso
const {taskUseCases} = require('../../use_cases');

module.exports = (models) => {

    //? Centralizacion de casos de uso
    const casesRepository = {
        getTasks: taskUseCases.getTasksCase(models)
    }

    /**
     * Servicio que validará los casos de uso de obtener tareas.
     * @returns Resolución de servicio obtener tareas.
     */
    const getTasksService = async () => {
        
        //? Obtener tareas
        const tasks = await casesRepository.getTasks();

        return {
            success: true,
            tasks
        };

    }

    return getTasksService;

}