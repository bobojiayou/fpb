const isArrayLike = require('./isArrayLike'),
    ownKeys = require('./ownKeys')

/**
 * 
 * @param {function} predicate  // (value, key||index, data) => fn
 * @param {array or object} obj 
 */
const some = (predicate, obj) => {
    let keys = !isArrayLike(obj) && ownKeys(obj),
        length = (keys || obj).length
    for (let i = 0; i < length; i++) {
        let currentKey = keys ? keys[i] : i
        if (predicate(obj[currentKey], currentKey, obj)) return true
    }
    return false
}

module.exports = some