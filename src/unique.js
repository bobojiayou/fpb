const 
    isNumber = require('./isNumber'),
    isArray = require('./isArray'),
    isString = require('./isString'),
    isUndefinded = require('./isUndefined'),
    isArrayLike = require('./isArrayLike'),
    getLength = require('./getLength'),
    hasKey = require('./has'),
    isFunction = require('./isFunction')

/**
 * 
 * @param {Array} array  一维数组 
 */

const unique = (array) => {
    if (isUndefinded(array)) throw new Error('argument should not be undefined')
    if (!isArrayLike(array)) throw new Error('argument should not be array or arrayLike')
    if(getLength(array)===0 ) return []
    return [...new Set(array)]
}

module.exports = unique