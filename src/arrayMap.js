const isArray = require('./isArray')

/**
 * 
 * @param {Function} iteratee 
 * @param {Array} value 
 */
const arrayMap = (iteratee, value) => {
    if (!isArray(value)) return value
    return value.map(iteratee)
}

module.exports = arrayMap