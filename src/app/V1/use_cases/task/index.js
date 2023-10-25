//* Importacion de casos de uso de tareas
const createTaskCase = require('./create.task.case');
const getTasksCase = require('./get.tasks.case');
const getTaskCase = require('./get.task.case');
const updateTaskCase = require('./update.task.case');
const deleteTaskCase = require('./delete.task.case');


module.exports = {
    createTaskCase,
    getTasksCase,
    getTaskCase,
    updateTaskCase,
    deleteTaskCase
}