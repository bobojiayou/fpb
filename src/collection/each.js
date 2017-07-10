const isObject = require('../core/typeDec/isObject')
const isFunction = require('../core/typeDec/isFunction')
const isArray = require('../core/typeDec/isArray')
const objectEach = require('./objectEach')
const arrayEach = require('./arrayEach')


const each = (iteratee, value) => {
    if (isObject(value) && isFunction(value)) throw new Error('Invalid data for each!')
    return isArray(value) ? arrayEach(iteratee, value) : objectEach(iteratee, value)
}

module.exports = each
