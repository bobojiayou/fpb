const isObject = require('./isObject')

const allKeys = value => {
    if(!isObject(value)) return []
    let keys = []
    for (var key in value)  keys.push(key)
    return keys
}

module.exports = allKeys