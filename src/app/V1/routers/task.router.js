//* Importacion global 
const { Router } = require('express');

//* Importacion de controladores
// const {welcomeController} = require('../controllers')
const { taskControllers } = require('../controllers')

//* Importacion de reglas
const { taskRules } = require('../rules');

//? Desestructuracion de controladores
const { 
    createTaskController,
    getTasksController,
    getTaskController } = taskControllers;

//? Desestructuracion de reglas
const { createTaskRule,paramsTaskRule } = taskRules

module.exports = (dependencies) => {

    //? Desestructuracion de dependencias
    const {middlewares} = dependencies;

    /**
     * @type {Router} Enrutador que coordina los servicios de tareas.
     */
    const taskRouter = Router();

    //* Definicion de servicios.
    taskRouter.post(
        '/new_task',                        //* Servicio API
        createTaskRule(middlewares),        //* Reglas
        createTaskController(dependencies) //* Controlador
    );

    taskRouter.get('/tasks', getTasksController(dependencies));

    taskRouter.get(
        '/task/:uuid_task', //*Servicio API
        paramsTaskRule(middlewares), //* Reglas
        getTaskController(dependencies) //*Controlador
    );

    return taskRouter;
}