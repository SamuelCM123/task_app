module.exports = (dependencies) => {

    //? Desestructuracion de dependencias
    const { httpResponses, statusCode } = dependencies
    
    const createTaskController = (req, res, next) => {

        httpResponses.responseSuccess(res, {
            status_code: statusCode.CREATED,
            data: {
                message: 'Creando tarea...'
            }
        })

    }

    return createTaskController

}