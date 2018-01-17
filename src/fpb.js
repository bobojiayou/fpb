
"use strict";

const fpb = module.exports = function (value) {
    this._target = value
}

fpb.prototype.value = function () {
    return this._target
}

fpb.tap = (value, func) => {
    func(value)
    return value
}

fpb.chain = (value, notLazy) => {
    let instance = new fpb(value)
    !notLazy && (instance._chunk = [value])
    instance[notLazy ? '_isChain' : '_isLazyChain'] = true
    return instance
}

fpb.add = require('./add')
fpb.allKeys = require('./allKeys')
fpb.arrayEach = require('./arrayEach')
fpb.arrayMap = require('./arrayMap')
fpb.compose = require('./compose')
fpb.curry = require('./curry')
fpb.each = require('./each')
fpb.every = require('./every')
fpb.filter = require('./filter')
fpb.first = require('./first')
fpb.getLength = require('./getLength')
fpb.getProperty = require('./getProperty')
fpb.has = require('./has')
fpb.identity = require('./identity')
fpb.initial = require('./initial')
fpb.isArguments = require('./isArguments')
fpb.isArray = require('./isArray')
fpb.isArrayLike = require('./isArrayLike')
fpb.isBoolean = require('./isBoolean')
fpb.isDate = require('./isDate')
fpb.isEmpty = require('./isEmpty')
fpb.isError = require('./isError')
fpb.isFinite = require('./isFinite')
fpb.isFunction = require('./isFunction')
fpb.isLength = require('./isLength')
fpb.isNaN = require('./isNaN')
fpb.isNull = require('./isNull')
fpb.isNumber = require('./isNumber')
fpb.isObject = require('./isObject')
fpb.isRegExp = require('./isRegExp')
fpb.isString = require('./isString')
fpb.isUndefined = require('./isUndefined')
fpb.last = require('./last')
fpb.map = require('./map')
fpb.objectEach = require('./objectEach')
fpb.objectMap = require('./objectMap')
fpb.ownKeys = require('./ownKeys')
fpb.reduce = require('./reduce')
fpb.reduceRight = require('./reduceRight')
fpb.rest = require('./rest')
fpb.sum = require('./sum')
fpb.values = require('./values')

fpb.prototype.force = function () {
    let chunks = this._chunk, target = this._target
    return fpb.reduce((target, thunk) => {
        return thunk(target)
    }, chunks)
}

fpb.functions = obj => {
    let names = [];
    for (let key in obj) {
        if (fpb.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
}

fpb.log = v => {
    console.log(v)
    return v
}

fpb.mixin = function (obj) {
    fpb.each(name => {
        //取得当前函数,并将其覆盖fpb上原有的同名函数
        let func = fpb[name] = obj[name]
        fpb.prototype[name] = function (...args) {
            if (this._isLazyChain) {
                this._chunk.push(target => func.apply(fpb, [target, ...args]))
                return this
            } else if (this._isChain) {
                let target = this._target
                this._target = func.apply(fpb, [target, ...args])
                return this
            }
            else {
                return func.apply(fpb, args)
            }
        }
    }, fpb.functions(obj))
}

fpb.mixin(fpb)

fpb.each(function (name) {
    if (!(name === 'chain' || name === 'reduce' || name === 'reduceRight' || name === 'mixin' || name === 'compose' || name === 'curry')) {
        fpb[name] = fpb.curry(fpb[name])
    }
}, fpb.functions(fpb))

fpb.VERSION = '1.1.0';

