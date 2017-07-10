
const createReduce = require('./_createReduce'),
    getLength = require('./getLength')

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