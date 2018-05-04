const isArray = require('./isArray'),
    objectMerge = require('./objectMerge'),
    equalBy = require('./_equalBy')

/**
 * 
 * @param {String | Array | Function | Number} identityKey 
 * @param {Array|String|Number} mergeKey 
 * @param {Function} mergeFn 
 * @param {Array} originArr 
 * @param {Array} dataArr 
 */
const arrayMerge = (identityKey, mergeKey, mergeFn, originArr, dataArr) => {
    if (!isArray(originArr)) throw new TypeError(`the fourth argument should be array`)
    if (!isArray(dataArr)) throw new TypeError(`the fifth argument should be array`)

    const bigArr = originArr.concat(dataArr)
    for (let i = 0; i < bigArr.length; i++) {
        let ele = bigArr[i]
        for (let j = i + 1; j < bigArr.length; j++) {
            const rstEle = bigArr[j]
            // 已有的rstArr里，是否有要和我merge的对象
            if (equalBy(identityKey, rstEle, ele)) {
                // 有的话，merge
                ele = objectMerge(mergeKey, mergeFn, ele, rstEle)
                bigArr[i] = ele
                bigArr.splice(j, 1)
            }
        }
    }
    return bigArr
}

module.exports = arrayMerge