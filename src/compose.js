
const initial = require('./initial')
const reduceRight = require('./reduceRight')
/**
 * 
 * @param {Function} fns 
 */
const compose = (...fns) =>
    (...args) => {
        return reduceRight(
            (res, fn) => fn(res),
            fns[fns.length - 1].apply(null, args),
            initial(fns)
        )
    }

module.exports = compose