const isObject = require('./isObject'),
    isFunction = require('./isFunction'),
    arrayEach = require('./arrayEach'),
    ownKeys = require('./ownKeys'),
    getLength = require('./getLength')

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
