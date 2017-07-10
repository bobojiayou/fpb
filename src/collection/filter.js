
const each = require('./each')

/**
 * 
 * @param {Function} iteratee 
 * @param {List} value 
 */
const filter = (iteratee, value) => {
    let rst = []
    each((value, index, list) => {
        if (iteratee(value, index, list)) rst.push(value)
    }, value)
    return rst
}

module.exports = filter