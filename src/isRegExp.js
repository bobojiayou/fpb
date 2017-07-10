const getBaseType = require('./getBaseType')

/**
 * 
 * @param {Object} value 
 */
const isRegExp = value => getBaseType('RegExp')(value)

module.exports = isRegExp