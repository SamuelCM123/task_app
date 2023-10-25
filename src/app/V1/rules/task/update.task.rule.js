//* Importaciones globales
const {check} = require('express-validator');

module.exports = ( middlewares ) => {

    //? Desestructuracion de middlewares
    const {validateResult} = middlewares

    return [
        check('title')
            .trim()
            .notEmpty().withMessage('El campo "Titulo" es requerido')
            .isString().withMessage('El campo "Titulo" no es valido')
            .isLength({ max: 30 }).withMessage('El campo "Titulo" requiere maximo "30" caracteres')
            .isLength({ min: 5 }).withMessage('El campo "Titulo" requiere minimo "5" caracteres'),
        check('task_description')
            .trim()
            .notEmpty().withMessage("El campo 'Descripcion' es requerido")
            .isString().withMessage('El campo "Descripcion" no es valido')
            .isLength({ max: 255 }).withMessage('El campo "Descripcion" requiere maximo "255" caracteres')
            .isLength({ min: 5 }).withMessage('El campo "Descripcion" requiere minimo "5" caracteres')
            ,
        check('task_state_id')
            .notEmpty().withMessage("El campo 'Estado' es requerido")
            .isNumeric().withMessage("El campo 'Estado' no es valido"),
        validateResult
    ];
    
}