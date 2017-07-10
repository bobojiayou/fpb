
/**
 * 
 * @param {Object} value 
 */
const _isFinite = value =>
  isFinite(value) && !isNaN(parseFloat(value));

module.exports = _isFinite