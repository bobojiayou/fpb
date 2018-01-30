const isArray = require('./isArray')

const arrayEach = (iteratee, value) => {
    if (!isArray(value)) return value
    value.forEach(iteratee)
    return value
}

module.exports = arrayEach