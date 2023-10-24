module.exports = (dependencies) => {

    //? Desestructuracion de dependencias
    const { httpResponses, statusCode } = dependencies
    
    const createTaskController = (req, res, next) => {

        try {
            httpResponses.responseSuccess(res, {
                status_code: statusCode.CREATED,
                data: {
                    message: 'Creando tarea...',
                    body: req.body
                }
            });
        } catch (error) {
            console.log('CREATE_TASK_controller_error',error);
            next(error);
        }

    }

    return createTaskController

}