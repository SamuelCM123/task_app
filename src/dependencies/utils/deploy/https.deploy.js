//* Importaciones nativas
const https = require('https');
const fs =  require('fs');

/**
 * Habilita el servidor en HTTP.
 * @param {Object} deployConfig - Define la configuracion del despliegue del servidor.
 * @param {Object} deployConfig.env - Define el entorno a precargar.
 * @param {Object} deployConfig.port - Define el puerto del despligue de la aplicacion.
 * @param {Object} deployConfig.server - Define el servidor a precargar.
 * @returns Inicializacion del servidor.
 */
const httpsDeploy = ( deployConfig ) => {

    //? Desestructuracion de variables de entorno
    const { HOST_HTTPS, SSL_KEY, SSL_CERT } = process.env;

    //? Desestructuracion de propiedades
    const { env, port, server } = deployConfig;

    //? Configuracion de certificados SSL
    const options = {
        key: fs.readFileSync(SSL_KEY).toString('utf-8'),
        cert: fs.readFileSync(SSL_CERT).toString('utf-8'),
    }

    //? Inicializacion de servidor en HTTPS
    const serverHTTPS = https.createServer( options, server)

    return serverHTTPS.listen(port,() => {
        console.log(` [${ env }]: running at https://${ HOST_HTTPS }:${ port }`)
    })
}

module.exports = {
    httpsDeploy
}