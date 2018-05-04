const isArray = require('./isArray'),
    isString = require('./isString'),
    isNumber = require('./isNumber'),
    isFunction = require('./isFunction')

/**
 * 
 * @param {Array | String | Number | Function} keys 
 * @param {Array | String} data 
 * @returns {Boolean}
 */
const contains = (keys, data) => {
    if (!isString(keys) && !isArray(keys) && !isNumber(keys) && !isFunction(keys)) throw new Error('the first argument shoud be string or array or number or function')
    if (!isString(keys) && !isArray(data)) throw new Error('the second argument shoud be string or array')

    if (isString(keys) || isNumber(keys)) {
        return data.indexOf(keys) !== -1
    }
    if (isFunction(keys)) {
        return data.indexOf(keys.apply(null)) !== -1
    }
    if (isArray(keys)) {
        for (let index = 0; index < keys.length; index++) {
            const element = keys[index]
            if (data.indexOf(element) === -1) return false
        }
        return true
    }
}

module.exports = contains
