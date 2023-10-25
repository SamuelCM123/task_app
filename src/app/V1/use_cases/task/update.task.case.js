module.exports = (models) => {

    //? Desestructuracion de modelos
    const { Tasks, TaskStates } = models;

    /**
     * Caso de uso que actualiza una sola tarea.
     * @returns Lista de tareas.
     */
    const updateTaskCase = async (uuidTask,task) => {

        await Tasks.update(task,{
            where: {uuid_task: uuidTask}
        })
        
        return true;

    }

    return updateTaskCase;
}