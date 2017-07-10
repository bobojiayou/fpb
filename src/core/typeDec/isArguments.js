const getBaseType = require('../base/getBaseType')

/**
 * 
 * @param {*} value 
 */
const isArguments = value => getBaseType('Arguments')(value)

module.exports = isArguments