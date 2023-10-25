module.exports = ( models ) => {
    //? Desestructuracion de modelos
    const { Tasks } = models;
    console.log('Task',Tasks);
    /**
     * Caso de uso que registra una nueva tarea.
     * @param {object} newTask -Define una nueva tarea.
     * @param {object} newTask.uuid_task -Define el codigo UUID de la tarea.
     * @param {object} newTask.title -Define el titulo de una tarea.
     * @param {object} newTask.task_description -Define la descripcion de una tarea.
     * @returns Tarea creada.
     */
    const createTaskCase = async (newTask) => {
        
        await Tasks.create(newTask);

        return true;
    }

    return createTaskCase;
}