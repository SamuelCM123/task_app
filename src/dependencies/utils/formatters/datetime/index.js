//* Importacion de utilidades
const {finalDatetime,getDate,getTime} = require('./utils')
//* Definiciones JS Docs
/**
 * Formato de orden de fecha.
 * @typedef {'DD-MM-YYYY' | 'MM-DD-YYYY' | 'YYYY-MM-DD'} DateOrder
 */

/**
 * Formato de separadores.
 * @typedef {'diagonal' | 'dash' | 'no_separator'} DateSeparator
 */

/**
 * Formato de retorno o despliegue del tiempo.
 * @typedef {'only_date' | 'only_time' | 'fulldate'} DateDisplay
 */

/**
 * 
 * @param {date|string} date - Define la fecha a formatear.
 * @param {object} datetimeConfig - Define la configuracion del formato de fechas.
 * @param {DateDisplay} datetimeConfig.dateDisplay - Define como la fecha sera desplegada.
 * @param {DateOrder} datetimeConfig.dateOrder - Define el tipo de orden que tendra la fecha.
 * @param {DateSeparator} datetimeConfig.dateSeparator - Define el tipo de separador que tendra la fecha.
 * @param {*} datetimeConfig 
 */
const datetimeFormat = ( datetimeConfig,date ) => {

    //? Desestructuracion de propiedades
    const {dateOrder, dateDisplay, dateSeparator} = datetimeConfig

    
    /**
     * @type {date} Fecha y hora a formatear
     */
    const datetime = date || new Date();
    
    const dateFormated = getDate(datetime);
    const timeFormated = getTime(datetime);

    //? Retorno de solo la hora
    if(dateDisplay === 'only_time') return `${timeFormated}`

    //? Retorno de solo la fecha
    if(dateDisplay === 'only_date') {
        const cleanDate =  finalDatetime({
            date: dateFormated,
            separator: dateSeparator,
            order: dateOrder,
        })

        return `${cleanDate}`
    }

    //? Retorno completo de tiempo
    if(dateDisplay === 'fulldate'){
        const cleanDate =  finalDatetime({
            date: dateFormated,
            separator: dateSeparator,
            order: dateOrder,
        })

        return `${cleanDate} ${timeFormated}`
    }
}

module.exports ={
    datetimeFormat
}