//* Importaciones globales
const {DataTypes} = require('sequelize');

//* Importacion de dependencias
const {sequelize} = require('../../sequelize');

//* Importacion de modelos
const {TaskStates} = require('../task_state');

const modelConfig = {
    tableName: 'tasks',
    timestamps: true,
    createAt: 'created_at',
    updateAt: 'updated_at'
}

const Tasks = sequelize.define('tasks',{
    task_id:{
        field: 'task_id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    uuid_task:{
        field: 'uuid_task',
        type: DataTypes.STRING,
        allowNull: false,
    },
    title:{
        field: 'title',
        type: DataTypes.STRING,
        allowNull: false,
    },
    task_description:{
        field: 'task_description',
        type: DataTypes.STRING,
        allowNull: false
    },
    task_state_id:{
        field: 'task_state_id',
        type: DataTypes.INTEGER,
        defaultValue:1,
    }
}, modelConfig)

//? Asociaciones
Tasks.belongsTo(TaskStates,{ foreignKey:'task_state_id' })

module.exports = {
    Tasks
}