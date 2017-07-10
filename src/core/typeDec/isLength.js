var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * 
 * @param {*} value 
 */
const isLength = value=> {
    return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;
