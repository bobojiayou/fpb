const getBaseType = require('../base/getBaseType')

/**
 * 
 * @param {Object} obj 
 */
const isString = value => getBaseType('String')(value)

 module.exports = isString