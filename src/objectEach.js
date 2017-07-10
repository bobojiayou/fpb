const isObject = require('./isObject')
const isFunction = require('./isFunction')
const arrayEach = require('./arrayEach')
const ownKeys = require('./ownKeys')
const getLength = require('./getLength')

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
