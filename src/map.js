const isObject = require('./isObject')
const isFunction = require('./isFunction')
const isArray = require('./isArray')
const objectMap = require('./objectMap')
const arrayMap = require('./arrayMap')


const map = (iteratee, value) => {
    if (isObject(value) && isFunction(value)) throw new Error('Invalid data for map!')
    return isArray(value) ? arrayMap(iteratee, value) : objectMap(iteratee, value)
}

module.exports = map
