const isObject = require('../core/typeDec/isObject')
const isFunction = require('../core/typeDec/isFunction')
const isArray = require('../core/typeDec/isArray')
const objectMap = require('./objectMap')
const arrayMap = require('./arrayMap')


const map = (iteratee, value) => {
    if (isObject(value) && isFunction(value)) throw new Error('Invalid data for map!')
    return isArray(value) ? arrayMap(iteratee, value) : objectMap(iteratee, value)
}

module.exports = map
