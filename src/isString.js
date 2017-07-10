const getBaseType = require('./_getBaseType')

/**
 * 
 * @param {Object} obj 
 */
const isString = value => getBaseType('String')(value)

 module.exports = isString