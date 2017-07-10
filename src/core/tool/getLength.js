const getProperty = require('../base/getProperty')

/**
 * 
 * @param {*} value 
 */
const getLength = value => getProperty('length')(value)

module.exports = getLength