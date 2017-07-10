
/**
 * 
 * @param {*} key 
 */

const getProperty = key =>
    value =>
        value == null ? void 0 : value[key];

module.exports = getProperty