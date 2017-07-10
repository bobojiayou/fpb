const getBaseType = require('./_getBaseType')

/**
 * 
 * @param {*} value 
 */
const isArguments = value => getBaseType('Arguments')(value)

module.exports = isArguments