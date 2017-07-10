
const getLength = require('./getLength')
const isArray = require('./isArray')
const last = require('./last')

/**
 * 
 * @param {Function} iteratee 
 * @param {*} initValue 
 * @param {Array} array 
 * @param {Number} dir  -1 => reduceRight,  1 => reduce
 */
const createReduce = (...args) => {
    let len = getLength(args)
    if (len < 3) throw new Error('Invalid args')
    let arr, iteratee, initValue, _args
    if(len === 3) {
        [iteratee, arr, dir] = args
        _args = [iteratee]

    } else {
        [iteratee, initValue, dir] = args
        _args = [iteratee, initValue]
    }
    return dir === 1 ? arr.reduce(..._args) : arr.reduceRight(..._args)
}

module.exports = createReduce