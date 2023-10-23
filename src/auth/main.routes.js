const {Router} = require('express');

//* Importacion de enrutadores
const {welcomeRouter} = require('./V1/routers')

//* Importacion de dependencias
const dependencies = require('../dependencies')

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
authRouter.use(`${PATH_URL}`,welcomeRouter(dependencies))


module.exports = {authRouter}