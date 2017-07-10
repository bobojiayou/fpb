const getBaseType = require('./getBaseType')

/**
 * 
 * @param {Object} value 
 */
const isNumber = value => getBaseType('Number')(value)

module.exports = isNumber
