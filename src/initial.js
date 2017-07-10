
/**
 * 
 * @param {Array} array 
 */

const initial = array => {
    return Array.prototype.slice.call(array, 0, Math.max(array.length - 1, 0));
};

module.exports = initial