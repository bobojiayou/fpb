const isFunction = require('./isFunction'),
    isObject = require('./isObject'),
    getProperty = require('./getProperty'),
    isString = require('./isString'),
    identity = require('./identity')

/**
 * 
 * @param {*} value 
 */
const createCb = (value) => {
    if (value == null) return identity
    if (isFunction(value)) return value
    if (isString(value)) return getProperty(value);
    throw new Error('Invalid argument for createCb!')
}

module.exports = createCb