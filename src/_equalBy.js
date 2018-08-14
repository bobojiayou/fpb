const isArray = require('./isArray'),
    isFunction = require('./isFunction'),
    isString = require('./isString'),
    isNumber = require('./isNumber'),
    isEmpty = require('./isEmpty')
/**
 * 
 * @param {Function|Array|String|Number} keys 
 * @param {*} originObj 
 * @param {*} dataObj 
 */
const equalBy = (keys, originObj, dataObj) => {
    if(!isString(keys) && !isFunction(keys) && !isArray(keys) && !isNumber(keys)) throw new TypeError(`keys shoud be funciton | array | string | Number`)
    if(isEmpty(keys)) throw new TypeError(`keys shoud be empty!`)
    let _keys
    if (isFunction(keys)) {
        return keys.call(null, originObj) === keys.call(null, dataObj)
    } else {
        _keys = isArray(keys) ? keys : [keys]
        let rst = true
        for (let index = 0; index < _keys.length; index++) {
            const _key = _keys[index]
            rst = rst && (originObj[_key] === dataObj[_key])
        }
        return rst
    }
}

module.exports = equalBy