// Configuracion de variables de entorno global
require('dotenv').config();

//* Configuracion de variables de entorno global

//* Importacion de dependencias
const dependencias = require('./src/dependencies');

//* Importacion del run app de la aplicacion
const { runApp } = require('./src/run.app');
console.log('runApp',runApp);

//* Importacion de los enrutadores principales
const { appRouter } = require('./src/app/main.routes')
const { authRouter } = require('./src/auth/main.routes')

//* Inicializacion de servidores
const AppServer = runApp(appRouter)
const AuthServer = runApp(authRouter)

//? Desestructuracion de variables de entorno
const { NODE_ENV, APP_PORT, AUTH_PORT,HTTPS } = process.env

//? Desestructuracion de dependencias
const {utils} = require('./src/dependencies/')

//* Ejecucion de servidores
if(NODE_ENV === 'production' && Boolean(HTTPS)){
    //* Ejecutar servidores en HTTPS
    utils.deploys.httpsDeploy({
        env: 'APP',
        port: APP_PORT,
        server: AppServer
    })

    //* Ejecutar servidores en HTTP
    utils.deploys.httpsDeploy({
        env: 'AUTH',
        port: AUTH_PORT,
        server: AuthServer
    })
}
else{

    utils.deploys.httpDeploy({
        env: 'APP',
        port: APP_PORT,
        server: AppServer
    })

    utils.deploys.httpDeploy({
        env: 'AUTH',
        port: AUTH_PORT,
        server: AuthServer
    })
}


console.log("Task App ha sido inicializado...");