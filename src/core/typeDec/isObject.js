
/**
 * 
 * @param {object} value 
 */
const isObject = value => {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject