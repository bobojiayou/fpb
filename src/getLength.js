const getProperty = require('./getProperty')

/**
 * 
 * @param {*} value 
 */
const getLength = value => getProperty('length')(value)

module.exports = getLength