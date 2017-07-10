const getBaseType = require('./_getBaseType')

/**
 * 
 * @param {Object} value 
 */
const isNumber = value => getBaseType('Number')(value)

module.exports = isNumber
