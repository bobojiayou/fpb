const isLength = require('./isLength'),
    isFunction = require('./isFunction')

/**
 * 
 * @param {Any} value 
 */
const isArrayLike = value => {
    return value != null && isLength(value.length) && !isFunction(value)
}

module.exports = isArrayLike