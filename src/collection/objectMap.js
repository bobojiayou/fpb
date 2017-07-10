const isObject = require('../core/typeDec/isObject')
const isFunction = require('../core/typeDec/isFunction')
const arrayEach = require('./arrayEach')
const ownKeys = require('../../src/object/ownKeys')
const getLength = require('../../src/core/tool/getLength')

const objectMap = (iteratee, value) => {
    if (!isObject(value) || isFunction(value)) return value
    let keys = ownKeys(value)
    let len = getLength(keys)
    let rst = {}
    for (let index = 0; index < len; index++) {
        let key = keys && keys[index]
        rst[key] = iteratee(value[key], key)
    }
    return rst
}

module.exports = objectMap
