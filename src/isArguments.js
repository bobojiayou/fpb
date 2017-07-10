const getBaseType = require('./getBaseType')

/**
 * 
 * @param {*} value 
 */
const isArguments = value => getBaseType('Arguments')(value)

module.exports = isArguments