const ObjProto = Object.prototype
const toString = ObjProto.toString
/**
 * 
 * @param {String} The type name 
 */
const getBaseType = name =>
    obj =>
        toString.call(obj) === '[object ' + name + ']'

module.exports = getBaseType