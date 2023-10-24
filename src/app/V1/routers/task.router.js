//* Importacion global 
const {Router} =  require('express');

//* Importacion de controladores
// const {welcomeController} = require('../controllers')
const {taskControllers} = require('../controllers')

//? Desestructuracion de controladores
const {createTaskController} = taskControllers;

module.exports = (dependencies) => {
    /**
     * @type {Router} Enrutador que coordina los servicios de tareas.
     */
    const taskRouter = Router();

    //* Definicion de servicios.
    taskRouter.post('/new_task', createTaskController(dependencies));

    return taskRouter;
}