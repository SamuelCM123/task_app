//* Importacion de dependencias
const {responseError,responseErrorWithStack,responseOK} = require('../http_responses');
const {statusCode} = require('../http_status_code')

/**
 * @constant catalogo de errores de la aplicacion
 */
const listErrors = {
    INTERNAL_SERVER_ERROR(stack){
        return responseErrorWithStack(stack,{
            code: 'B01',
            message: 'Opps, estamos experimentando problemas en servidor, intente de nuevo mas tarde',
            status_code: statusCode.INTERNAL_SERVER_ERROR
        })
    },
    SERVICE_NOT_FOUND( url ){
        return responseError({
            code: 'B02',
            message: `El servicio '${url}' que intenta llamar no esta disponible`,
            status_code: statusCode.NOT_FOUND
        })
    }
}

module.exports = {
    listErrors
}