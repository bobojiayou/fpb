
const isArray = require('./isArray')
const isString = require('./isString')
const isArguments = require('./isArguments')
const isArrayLike = require('./isArrayLike')
const isNumber = require('./isNumber')
const ownKeys = require('../../object/ownKeys')
const isEmpty = value => {
    if (value == null) return true;
    if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value))) return value.length === 0;
    if (isNumber(value)) return false
    return ownKeys(value).length === 0;
} 
module.exports = isEmpty