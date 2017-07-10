const isNumber = require('./isNumber')
/**
 * 
 * @param {Object} value 
 */
const isNaN = value => isNumber(value) && value !== +value;

module.exports = isNaN

