//* Importaciones globales
const {Router} = require('express');


//* Importacion de controladores
const {welcomeController}  = require('../controllers')

module.exports = (dependencies) => {
    /**
     * @type {Router} Enrutador que coordina el servicio de bienvenida
     */
    const welcomeRouter = Router();

    //* Definicio de rutas
    welcomeRouter.get('/', welcomeController(dependencies));

    return welcomeRouter
}