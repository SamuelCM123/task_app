//* Importaciones globales
const {check} = require('express-validator');

module.exports = (middlewares) => {

    //? Desestructuracion de middlewares
    const { validateResult } = middlewares;

    return [
        check('uuid_task')
            .notEmpty().withMessage("El parametro 'uuid_task' es requerido")
            .isUUID('4').withMessage("El parametro 'uuid_task' no es valido"),
            validateResult
    ];
}