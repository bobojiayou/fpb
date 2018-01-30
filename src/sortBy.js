const pluck = require('./pluck'),
    map = require('./map'),
    createCb = require('./_createCb')

/**
 * 
 * @param {function } iteratee 
 * @param {list} obj 
 */
const sortBy = (iteratee, obj) =>
    pluck('value',
        map(
            (value, index, list) => {
                return {
                    value: value,
                    index: index,
                    criteria: createCb(iteratee)(value, index, list)
                }
            },
            obj
        ).sort((left, right) => {
            var a = left.criteria;
            var b = right.criteria;
            if (a !== b) {
                if (a > b || a === void 0) return 1;
                if (a < b || b === void 0) return -1;
            }
            return left.index - right.index;
        })
    )

module.exports = sortBy