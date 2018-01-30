const map = require('./map'),
    getProperty = require('./getProperty')

/**
 * 
 * @param {string} key 
 * @param {list} obj 
 */
const pluck = (key, obj) =>
    map(getProperty(key), obj)

module.exports = pluck