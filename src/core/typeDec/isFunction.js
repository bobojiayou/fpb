const getBaseType = require('../base/getBaseType')
/**
 * 
 * @param {Object} obj 
 */
const isFunction = value =>
    getBaseType('Function')(value)

module.exports = isFunction