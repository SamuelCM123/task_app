//* Importacion de dependencias
const {ExceptionError} = require('../errors/exception.error');

const errorCaught = (error, req, res, next) => {

    // console.log('Error_caught:',error);

    /**
     * @type {*} Error capturado durando el flujo de la aplicacion
     */
    let errorCaught;

    if(typeof error.toJSON === 'function'){
        //? Si es un error controlado, se obtiene y se asigna.
        errorCaught = error.toJSON();
    }else{
        //? Si es un error desconocido, se obtiene y se retorna como un error 500
        errorCaught = new ExceptionError('INTERNAL_SERVER_ERROR',error.stack).toJSON();
    }

    //? Retorno de respuesta del error en JSON
    res.status( errorCaught.status_code );
    res.json(errorCaught);
    res.end();
}

const serviceNotFound = ( req, res, next ) => {
    next(new ExceptionError('SERVICE_NOT_FOUND',req.url))
}

module.exports = {
    errorCaught,
    serviceNotFound
}