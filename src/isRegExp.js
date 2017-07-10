const getBaseType = require('./_getBaseType')

/**
 * 
 * @param {Object} value 
 */
const isRegExp = value => getBaseType('RegExp')(value)

module.exports = isRegExp