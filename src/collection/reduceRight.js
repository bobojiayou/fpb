
const createReduce = require('../core/base/createReduce')
const getLength = require('../core/tool/getLength')
let undefined
/**
 * 
 * @param {Function} iteratee 
 * @param {*} initValue 
 * @param {Array} list 
 */
const reduceRight = (...args) => {
    let _args = [...args, -1]
    return createReduce(..._args)
}

// console.log(reduceRight((prev, value) => prev - value, [1, 2, 3, 4]))
module.exports = reduceRight