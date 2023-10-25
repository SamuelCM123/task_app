//* Importaciones globales
const cors = require('cors');

/**
 * Habilita CORS para todos los origenes especificados
 * @returns Retorna funcionalidades de CORS
 */
const allowedOriginsCors = () => {
    const {LIST_ORIGINS_CORS} = process.env
    // console.log("LIST_ORIGINS_CORS:",LIST_ORIGINS_CORS);

    if(LIST_ORIGINS_CORS !== ''){

        /**
         *  @type {Array} Lista de origenes permitidos.
         */
        const whiteList = LIST_ORIGINS_CORS.split('|')
        // console.log(whiteList);

        return cors({
            origin: whiteList
        })
    }

    return cors();
}

module.exports = {
    allowedOriginsCors
}