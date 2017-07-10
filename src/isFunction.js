const getBaseType = require('./getBaseType')
/**
 * 
 * @param {Object} obj 
 */
const isFunction = value =>
    getBaseType('Function')(value)

module.exports = isFunction