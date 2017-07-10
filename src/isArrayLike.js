const isLength = require('./isLength')
const isFunction = require('./isFunction')

const isArrayLike = value => {
    return value != null && isLength(value.length) && !isFunction(value)
}

module.exports = isArrayLike