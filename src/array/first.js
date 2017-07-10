const isArrayLike = require('../core/typeDec/isArrayLike')

const first = value => {
    if (!isArrayLike(value)) return void 0
    return value[0]
}

module.exports = first
