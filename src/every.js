const isFunction = require('./isFunction')
const isArray = require('./isArray')
const isObject = require('./isObject')
const has = require('./has')

/**
 * 
 * @param {Function } predicate 
 * @param {Object} value 
 */
const every = (predicate, value) => {
    if (!isFunction(predicate)) throw new TypeError()
    if (isArray(value)) return Array.prototype.every.call(value, predicate)
    if (isObject(value) && !isFunction(value)) {
        for (var key in value) {
            if (has(key, value)) {
                if (!predicate(value[key], key, value)) return false
            }
        }
        return true
    }
}

module.exports = every