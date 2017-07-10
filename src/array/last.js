const isArrayLike = require('../core/typeDec/isArrayLike')
const getLength = require('../core/tool/getLength')

const last = value => {
    if (!isArrayLike(value)) return void 0
    return value[getLength(value) - 1]
}

module.exports = last