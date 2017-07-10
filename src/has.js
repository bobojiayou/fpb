
/**
 * 
 * @param {String} key 
 * @param {object} value 
 */

const has = (key, value) => {
    return value != null && Object.prototype.hasOwnProperty.call(value, key)
}

module.exports = has