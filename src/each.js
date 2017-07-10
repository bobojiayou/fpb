const isObject = require('./isObject')
const isFunction = require('./isFunction')
const isArray = require('./isArray')
const objectEach = require('./objectEach')
const arrayEach = require('./arrayEach')


const each = (iteratee, value) => {
    if (isObject(value) && isFunction(value)) throw new Error('Invalid data for each!')
    return isArray(value) ? arrayEach(iteratee, value) : objectEach(iteratee, value)
}

module.exports = each
