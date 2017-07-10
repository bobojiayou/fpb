const isObject = require('../core/typeDec/isObject')
const isFunction = require('../core/typeDec/isFunction')
const arrayEach = require('./arrayEach')
const ownKeys = require('../../src/object/ownKeys')
const getLength = require('../../src/core/tool/getLength')

const objectEach = (iteratee, value) => {
    if (!isObject(value) || isFunction(value)) return value
    let keys = ownKeys(value)
    let len = getLength(keys)
    for (let index = 0; index < len; index++) {
        let key = keys && keys[index]
        iteratee(value[key], key, value)
    }
    return value
}

module.exports = objectEach
