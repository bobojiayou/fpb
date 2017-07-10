const getBaseType = require('../base/getBaseType')

/**
 * 
 * @param {Object} value 
 */
const isDate = value => getBaseType('Date')(value)

module.exports = isDate