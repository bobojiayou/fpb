const getBaseType = require('../base/getBaseType')

/**
 * 
 * @param {Object} value 
 */
const isBoolean = value =>
    value === true || value === false || getBaseType('Boolean')(value)

module.exports = isBoolean
