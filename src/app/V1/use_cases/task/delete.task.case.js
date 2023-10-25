module.exports = (models) => {

    //? Desestructuracion de modelos
    const { Tasks, TaskStates } = models;

    /**
     * Caso de uso que elimina una sola tarea.
     * @returns Lista de tareas.
     */
    const deleteTaskCase = async (uuidTask) => {

        await Tasks.destroy({where: {uuid_task: uuidTask}});
        return true;

    }

    return deleteTaskCase;
}