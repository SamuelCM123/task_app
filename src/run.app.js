//* Importaciones globales
const express = require('express')
const helmet = require('helmet');
const morgan = require('morgan');

//* Importacion de dependencias
const {allowedOriginsCors} = require('./dependencies')

const runApp = (router) => {
    const { NODE_ENV } = process.env;

    /**
     * @type {Express} Instancia de aplicacion Express
     */
    const app = express();

    if(NODE_ENV === 'development'){
        app.use(morgan('dev'));
        // NOTE: Aqui se pueden configurar mas middlewares ...
    }

    //* Utilizar cors
    app.use(allowedOriginsCors());

    //* Utilizar helmet
    app.use(helmet());

    //* Utilizar parser de body json
    app.use(express.json())

    //* Utilizar el enrutador
    app.use(router);

    return app;
}

module.exports = {
    runApp
}