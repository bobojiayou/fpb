const getBaseType = require('../base/getBaseType')
/**
 * 
 * @param {Object} value 
 */
const isError = value => getBaseType('Error')(value)

module.exports = isError