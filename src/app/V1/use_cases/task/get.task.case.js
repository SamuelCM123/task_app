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
     * Caso de uso que obtiene una sola tarea.
     * @returns Lista de tareas.
     */
    const getTaskCase = async (uuidTask) => {

        const task = await Tasks.findOne({
            where: { uuid_task: uuidTask},
            attributes: excludeFields,
            include: taskStatesFields,
        });
        
        return task;

    }

    return getTaskCase;
}