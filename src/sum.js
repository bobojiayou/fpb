
const reduce  = require('./reduce')
const isArray = require('./isArray')

/**
 * 
 * @param {Array} list 
 */
const sum  = (list) => {
    if (!isArray(list)) throw new TypeError()
    return reduce((pre, curr)=> pre + curr, list)   
}

module.exports = sum