const {Router} = require('express');
/**
 * @type {Express} Enrutador principal del ambiente 'app'
 */
const appRouter = Router();

/**
 * http://192.168.2.29/api/v1/app
 * @type {String} URl base para la construccion del servicio
 */
const PATH_URL = '/api/v1/app';

//* Servicios de server APP
appRouter.get(`${PATH_URL}`,(req,res)=>{
    res.status(200);
    res.json({
        message: "Hello app"
    })
    res.end();
})

module.exports = {appRouter}