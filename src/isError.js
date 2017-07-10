const getBaseType = require('./_getBaseType')
/**
 * 
 * @param {Object} value 
 */
const isError = value => getBaseType('Error')(value)

module.exports = isError