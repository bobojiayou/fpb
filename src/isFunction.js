const getBaseType = require('./_getBaseType')
/**
 * 
 * @param {Object} obj 
 */
const isFunction = value =>
    getBaseType('Function')(value)

module.exports = isFunction