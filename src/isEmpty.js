const isArray = require('./isArray'),
    isString = require('./isString'),
    isArguments = require('./isArguments'),
    isArrayLike = require('./isArrayLike'),
    isNumber = require('./isNumber'),
    ownKeys = require('./ownKeys')

/**
 * 
 * @param {Object} value 
 */
const isEmpty = value => {
    if (value == null || value === undefined) return true;
    if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value))) return value.length === 0;
    if (isNumber(value)) return false
    return ownKeys(value).length === 0;
}

module.exports = isEmpty