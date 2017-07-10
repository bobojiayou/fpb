
const createReduce = require('./_createReduce')
const getLength = require('./getLength')
let undefined

/**
 * 
 * @param {Function} iteratee 
 * @param {*} initValue 
 * @param {Array} list 
 */
// args =  (iteratee, initValue, array)
const reduce = (...args) => {
    let _args = [...args, 1]
    return createReduce(..._args)
}

// console.log(reduce((prev, value) => prev - value, [1, 2, 3, 4]))
module.exports = reduce