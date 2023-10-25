//* Importacion de reglas de tarea 
const createTaskRule = require('./create.task.rule');
const paramsTaskRule = require('./params.task.rule');
const updateTaskRule = require('./update.task.rule');

module.exports = {
    createTaskRule,
    paramsTaskRule,
    updateTaskRule
}