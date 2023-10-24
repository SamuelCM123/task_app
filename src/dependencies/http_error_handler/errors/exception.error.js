//* Importacion de dependencia
const { listErrors } = require('../list.errors');

/**
 * @class Clase que representa errores generales de la aplicacion.
 */
class ExceptionError extends Error {

    /**
     * Construye un error personalizado de la aplicacion.
     * @param {string} keyError - Define el tipo de error general.
     * @param {*} aditionalValue - Define un valor adicional para complementar el error generado.
     */
    constructor(keyError, aditionalValue = undefined) {
        super()

        //? Asignacion de propiedades
        this.keyError = keyError;
        this.aditionalValue = aditionalValue;
    }

    /**
     * Obtiene el error personalizado del catalogo de errores.
     * @returns {object} Respuesta de Error 
     */
    toJSON(){
        return typeof this.aditionalValue === 'undefined'
            ? listErrors[this.keyError]()
            : listErrors[this.keyError](this.aditionalValue)
    }
}

// new ExceptionError('SERVICE_NOT_FOUND','/')
module.exports = {
    ExceptionError
}