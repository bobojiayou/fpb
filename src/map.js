const isObject = require('./isObject'),
    isFunction = require('./isFunction'),
    isArray = require('./isArray'),
    objectMap = require('./objectMap'),
    arrayMap = require('./arrayMap')


const map = (iteratee, value) => {
    if (isObject(value) && isFunction(value)) throw new Error('Invalid data for map!')
    return isArray(value) ? arrayMap(iteratee, value) : objectMap(iteratee, value)
}

module.exports = map
