//* Importaciones globales 
const {Router} = require('express');

//* Importacion de enrutadores
const {welcomeRouter} = require('./V1/routers')

//* Importacion de dependencias
const dependencies = require('../dependencies')

const {httpError} = dependencies

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
appRouter.use(`${PATH_URL}`,welcomeRouter(dependencies))

// Middleware
appRouter.use(httpError.serviceNotFound);
appRouter.use(httpError.errorCaught);

module.exports = {appRouter}