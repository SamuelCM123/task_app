//* Importacion de servicios de tarea
const createTaskService = require('./create.task.service');
const getTasksService = require('./get.tasks.service');
const getTaskService = require('./get.task.service');

module.exports = {
    createTaskService,
    getTasksService,
    getTaskService
}