
/**
 * Obtiene el dia, mes y año apartir de una fecha establecida.
 * @param {date|string} date - Fecha a seccionar por dia, mes y año.
 * @returns Fecha Segmentada en dia, mes y año.
 */
const getDate = (date) => {

    const day = date.getDate().toString().padStart(2, '0'); // 01, 02, 03
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`
}

module.exports = {
    getDate
}