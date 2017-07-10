
/**
 * 
 * @param {Function} func 
 */

const curry = func => {
    return function inner(..._args1) {
        len = func.length
        if (_args1.length === len) {
            return func.apply(null, _args1)
        } else if (_args1.length > len) {
            throw new Error('curried error length arguments')
        }
        else {
            return function (..._args2) {
                return inner.apply(null, _args1.concat(_args2))
            };
        }
    };
};

module.exports = curry