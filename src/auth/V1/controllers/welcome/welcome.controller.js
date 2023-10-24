module.exports = (dependencies) => {
    console.log("Dependencias",dependencies);

    //? Desestructuracion de dependencias
    const { statusCode, httpResponses } = dependencies;
    console.log("StatusCode",statusCode);

    const welcomeController = async (req, res, next) => {
        try {
            httpResponses.responseSuccess(res,{
                status_code: statusCode.OK,
                data: {
                    message: 'Bienvenido a REST API task APP',
                    server: 'auth'
                }
            })

        } catch (error) {
            // console.log('Welcome_controller_error',error);
            next(error);
        }

    }
    
    return welcomeController;
}