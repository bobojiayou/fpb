const isObject = require('./isObject'),
    isFunction = require('./isFunction'),
    isArray = require('./isArray'),
    objectEach = require('./objectEach'),
    arrayEach = require('./arrayEach')

/**
 *  
 * @param {Function} iteratee 
 * @param {Object} value 
 */
const each = (iteratee, value) => {
    if (isObject(value) && isFunction(value)) throw new Error('Invalid data for each!')
    return isArray(value) ? arrayEach(iteratee, value) : objectEach(iteratee, value)
}

module.exports = each
