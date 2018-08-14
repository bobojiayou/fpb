const isArray = require('./isArray'),
    isString = require('./isString'),
    isNumber = require('./isNumber'),
    ownKeys = require('./ownKeys'),
    isObject = require('./isObject'),
    isFunction = require('./isFunction')

/**
 * 
 * @param {Array|String|Number} mergeKeys 
 * @param {Function} mergeFn
 * @param {Object} originObj 
 * @param {Object} dataObj 
 */

const objectMerge = (mergeKeys, mergeFn, originObj, dataObj) => {
    if (!isString(mergeKeys) && !isFunction(mergeKeys) && !isArray(mergeKeys) && !isNumber(mergeKeys)) throw new TypeError(`the first argument shoud be funciton | array | string | Number`)
    if (!isFunction(mergeFn)) throw new TypeError(`the second argument should be function`)
    if (!isObject(originObj) || !isObject(dataObj) || isArray(dataObj) || isArray(originObj) || isFunction(dataObj) || isFunction(originObj)) throw new TypeError(`the merge objects should be object`)

    let originObjKeys = ownKeys(originObj) || []
    let _mergeKeys
    if (isNumber(mergeKeys) || isString(mergeKeys)) {
        _mergeKeys = [mergeKeys]
    }
    if (isArray(mergeKeys)) {
        _mergeKeys = mergeKeys
    }
    if (isFunction(mergeKeys)) {
        const keys = mergeKeys.apply(null)
        _mergeKeys = isArray(keys) ? keys : [keys]
    }

    let rstObj = Object.assign({}, originObj)
    for (let index = 0; index < _mergeKeys.length; index++) {
        const _mergeKey = _mergeKeys[index]
        rstObj[_mergeKey] = mergeFn.call(null, originObj[_mergeKey], dataObj[_mergeKey])
    }
    return rstObj
}

module.exports = objectMerge