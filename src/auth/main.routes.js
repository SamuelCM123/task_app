const {Router} = require('express');
/**
 * @type {Express} Enrutador principal del ambiente 'auth'
 */
const authRouter = Router();

/**
 * http://192.168.2.29/api/v1/auth
 * @type {String} URl base para la construccion del servicio
 */
const PATH_URL = '/api/v1/auth';

//* Servicios de server AUTH
authRouter.get(`${PATH_URL}`,(req,res)=>{
    res.status(200);
    res.json({
        message: "Hello auth"
    })
    res.end();
})

module.exports = {authRouter}