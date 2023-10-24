//* Importacion de dependencias
const {allowedOriginsCors} = require('./cors')
const httpResponses = require('./http_responses');
const {statusCode} = require('./http_status_code');
const httpError = require('./http_error_handler')
const utils = require('./utils')

module.exports = {
    allowedOriginsCors,
    httpError,
    statusCode,
    httpResponses,
    utils
}