module.exports = (models) => {

    //? Desestructuracion de modelos
    const { Tasks, TaskStates } = models;

    const taskStatesFields = {
        model: TaskStates,
        attributes: ['task_state_id','task_status']
    };

    const excludeFields = {
        exclude: ['task_state_id']
    }

    /**
     * Caso de uso que obtiene todas las tareas.
     * @returns Lista de tareas.
     */
    const getTasksCase = async () => {

        const tasks = await Tasks.findAll({
            attributes: excludeFields,
            include: taskStatesFields,
        });
        
        return tasks;

    }

    return getTasksCase;
}