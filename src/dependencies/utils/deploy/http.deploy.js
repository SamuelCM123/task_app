//* Importacion de utilidades 
const {getNetworks} = require('../networks')

/**
 * Habilita el servidor en HTTP.
 * @param {Object} deployConfig - Define la configuracion del despliegue del servidor.
 * @param {Object} deployConfig.env - Define el entorno a precargar.
 * @param {Object} deployConfig.port - Define el puerto del despligue de la aplicacion.
 * @param {Object} deployConfig.server - Define el servidor a precargar.
 * @returns Inicializacion del servidor.
 */
const httpDeploy = ( deployConfig ) => {
    //? Desestructuracion de propiedades
    const { env, port, server } = deployConfig;

    return server.listen(port,getNetworks({env,port}));
}

module.exports = {
    httpDeploy
}