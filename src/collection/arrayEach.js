const isArray = require('../core/typeDec/isArray')

const arrayEach = (iteratee, value) => {
    if (!isArray(value)) return value
    value.forEach(iteratee)
    return value
}
let arr = [1, 2, 3, 4, 5]

module.exports = arrayEach