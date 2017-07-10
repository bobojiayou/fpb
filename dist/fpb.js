(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fpb"] = factory();
	else
		root["fpb"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


/**
 * 
 * @param {Object} obj 
 */
const isArray = value => Array.isArray(value);

module.exports = isArray;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

const ObjProto = Object.prototype;
const toString = ObjProto.toString;
/**
 * 
 * @param {String} The type name 
 */
const getBaseType = name => obj => toString.call(obj) === '[object ' + name + ']';

module.exports = getBaseType;

/***/ }),
/* 2 */
/***/ (function(module, exports) {


/**
 * 
 * @param {object} value 
 */
const isObject = value => {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
};

module.exports = isObject;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const getProperty = __webpack_require__(13);

/**
 * 
 * @param {*} value 
 */
const getLength = value => getProperty('length')(value);

module.exports = getLength;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(1);
/**
 * 
 * @param {Object} obj 
 */
const isFunction = value => getBaseType('Function')(value);

module.exports = isFunction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const isArray = __webpack_require__(0);

const arrayEach = (iteratee, value) => {
    if (!isArray(value)) return value;
    value.forEach(iteratee);
    return value;
};
let arr = [1, 2, 3, 4, 5];

module.exports = arrayEach;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const isLength = __webpack_require__(15),
      isFunction = __webpack_require__(4);

/**
 * 
 * @param {Any} value 
 */
const isArrayLike = value => {
    return value != null && isLength(value.length) && !isFunction(value);
};

module.exports = isArrayLike;

/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * 
 * @param {Object} obj 
 */

const ownKeys = obj => Reflect.ownKeys(obj);

module.exports = ownKeys;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(1);

/**
 * 
 * @param {Object} value 
 */
const isNumber = value => getBaseType('Number')(value);

module.exports = isNumber;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const isArray = __webpack_require__(0);

/**
 * 
 * @param {Function} iteratee 
 * @param {Array} value 
 */
const arrayMap = (iteratee, value) => {
  if (!isArray(value)) return value;
  return value.map(iteratee);
};

module.exports = arrayMap;

/***/ }),
/* 10 */
/***/ (function(module, exports) {


/**
 * 
 * @param {Array} array 
 */

const initial = array => {
  return Array.prototype.slice.call(array, 0, Math.max(array.length - 1, 0));
};

module.exports = initial;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


const createReduce = __webpack_require__(12),
      getLength = __webpack_require__(3);

/**
* 
* @param {Function} iteratee 
* @param {*} initValue 
* @param {Array} list 
*/
const reduceRight = (...args) => {
    let _args = [...args, -1];
    return createReduce(..._args);
};

// console.log(reduceRight((prev, value) => prev - value, [1, 2, 3, 4]))
module.exports = reduceRight;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


const getLength = __webpack_require__(3),
      isArray = __webpack_require__(0),
      last = __webpack_require__(14);

/**
 * 
 * @param {Function} iteratee 
 * @param {*} initValue 
 * @param {Array} array 
 * @param {Number} dir  -1 => reduceRight,  1 => reduce
 */
const createReduce = (...args) => {
    let len = getLength(args);
    if (len < 3) throw new Error('Invalid args');
    let arr, iteratee, initValue, _args;
    if (len === 3) {
        [iteratee, arr, dir] = args;
        _args = [iteratee];
    } else {
        [iteratee, initValue, arr, dir] = args;
        _args = [iteratee, initValue];
    }
    return dir === 1 ? arr.reduce(..._args) : arr.reduceRight(..._args);
};

module.exports = createReduce;

/***/ }),
/* 13 */
/***/ (function(module, exports) {


/**
 * 
 * @param {*} key 
 */

const getProperty = key => value => value == null ? void 0 : value[key];

module.exports = getProperty;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const isArrayLike = __webpack_require__(6),
      getLength = __webpack_require__(3);

const last = value => {
    if (!isArrayLike(value)) return void 0;
    return value[getLength(value) - 1];
};

module.exports = last;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * 
 * @param {*} value 
 */
const isLength = value => {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
};

module.exports = isLength;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const isObject = __webpack_require__(2),
      isFunction = __webpack_require__(4),
      isArray = __webpack_require__(0),
      objectEach = __webpack_require__(17),
      arrayEach = __webpack_require__(5);

/**
 * 
 * @param {Function} iteratee 
 * @param {Object} value 
 */
const each = (iteratee, value) => {
    if (isObject(value) && isFunction(value)) throw new Error('Invalid data for each!');
    return isArray(value) ? arrayEach(iteratee, value) : objectEach(iteratee, value);
};

module.exports = each;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

const isObject = __webpack_require__(2),
      isFunction = __webpack_require__(4),
      arrayEach = __webpack_require__(5),
      ownKeys = __webpack_require__(7),
      getLength = __webpack_require__(3);

const objectEach = (iteratee, value) => {
    if (!isObject(value) || isFunction(value)) return value;
    let keys = ownKeys(value);
    let len = getLength(keys);
    for (let index = 0; index < len; index++) {
        let key = keys && keys[index];
        iteratee(value[key], key, value);
    }
    return value;
};

module.exports = objectEach;

/***/ }),
/* 18 */
/***/ (function(module, exports) {


/**
 * 
 * @param {String} key 
 * @param {object} value 
 */

const has = (key, value) => {
  return value != null && Object.prototype.hasOwnProperty.call(value, key);
};

module.exports = has;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(1);

/**
 * 
 * @param {*} value 
 */
const isArguments = value => getBaseType('Arguments')(value);

module.exports = isArguments;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(1);

/**
 * 
 * @param {Object} obj 
 */
const isString = value => getBaseType('String')(value);

module.exports = isString;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

const isObject = __webpack_require__(2),
      isFunction = __webpack_require__(4),
      arrayEach = __webpack_require__(5),
      ownKeys = __webpack_require__(7),
      getLength = __webpack_require__(3);

const objectMap = (iteratee, value) => {
    if (!isObject(value) || isFunction(value)) return value;
    let keys = ownKeys(value);
    let len = getLength(keys);
    let rst = {};
    for (let index = 0; index < len; index++) {
        let key = keys && keys[index];
        rst[key] = iteratee(value[key], key);
    }
    return rst;
};

module.exports = objectMap;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


const createReduce = __webpack_require__(12),
      getLength = __webpack_require__(3);

/**
 * 
 * @param {Function} iteratee 
 * @param {*} initValue 
 * @param {Array} list 
 */
// args =  (iteratee, initValue, array)
const reduce = (...args) => {
    let _args = [...args, 1];
    return createReduce(..._args);
};

// console.log(reduce((prev, value) => prev - value, [1, 2, 3, 4]))
module.exports = reduce;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



const fpb = module.exports = function (value) {
    this._target = value;
};

fpb.prototype.value = function () {
    return this._target;
};

fpb.tap = (value, func) => {
    func(value);
    return value;
};

fpb.chain = (value, notLazy) => {
    let instance = new fpb(value);
    !notLazy && (instance._chunk = [value]);
    instance[notLazy ? '_isChain' : '_isLazyChain'] = true;
    return instance;
};

fpb.add = __webpack_require__(24);
fpb.allKeys = __webpack_require__(25);
fpb.arrayEach = __webpack_require__(5);
fpb.arrayMap = __webpack_require__(9);
fpb.compose = __webpack_require__(26);
fpb.curry = __webpack_require__(27);
fpb.each = __webpack_require__(16);
fpb.every = __webpack_require__(28);
fpb.filter = __webpack_require__(29);
fpb.first = __webpack_require__(30);
fpb.getLength = __webpack_require__(3);
fpb.getProperty = __webpack_require__(13);
fpb.has = __webpack_require__(18);
fpb.identity = __webpack_require__(31);
fpb.initial = __webpack_require__(10);
fpb.isArguments = __webpack_require__(19);
fpb.isArray = __webpack_require__(0);
fpb.isArrayLike = __webpack_require__(6);
fpb.isBoolean = __webpack_require__(32);
fpb.isDate = __webpack_require__(33);
fpb.isEmpty = __webpack_require__(34);
fpb.isError = __webpack_require__(35);
fpb.isFinite = __webpack_require__(36);
fpb.isFunction = __webpack_require__(4);
fpb.isLength = __webpack_require__(15);
fpb.isNaN = __webpack_require__(37);
fpb.isNull = __webpack_require__(38);
fpb.isNumber = __webpack_require__(8);
fpb.isObject = __webpack_require__(2);
fpb.isRegExp = __webpack_require__(39);
fpb.isString = __webpack_require__(20);
fpb.isUndefined = __webpack_require__(40);
fpb.last = __webpack_require__(14);
fpb.map = __webpack_require__(41);
fpb.objectEach = __webpack_require__(17);
fpb.objectMap = __webpack_require__(21);
fpb.ownKeys = __webpack_require__(7);
fpb.reduce = __webpack_require__(22);
fpb.reduceRight = __webpack_require__(11);
fpb.rest = __webpack_require__(42);
fpb.sum = __webpack_require__(43);
fpb.values = __webpack_require__(44);

fpb.prototype.force = function () {
    let chunks = this._chunk,
        target = this._target;
    return fpb.reduce((target, thunk) => {
        return thunk(target);
    }, chunks);
};

fpb.functions = obj => {
    let names = [];
    for (let key in obj) {
        if (fpb.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
};

fpb.log = v => {
    console.log(v);
    return v;
};

fpb.mixin = function (obj) {
    fpb.each(name => {
        //取得当前函数,并将其覆盖fpb上原有的同名函数
        let func = fpb[name] = obj[name];
        fpb.prototype[name] = function (...args) {
            if (this._isLazyChain) {
                this._chunk.push(target => func.apply(fpb, [target, ...args]));
                return this;
            } else if (this._isChain) {
                let target = this._target;
                this._target = func.apply(fpb, [target, ...args]);
                return this;
            } else {
                return func.apply(fpb, args);
            }
        };
    }, fpb.functions(obj));
};

fpb.mixin(fpb);

fpb.each(function (name) {
    if (!(name === 'chain' || name === 'reduce' || name === 'reduceRight' || name === 'mixin' || name === 'compose' || name === 'curry')) {
        fpb[name] = fpb.curry(fpb[name]);
    }
}, fpb.functions(fpb));

fpb.VERSION = '1.0.0';

/***/ }),
/* 24 */
/***/ (function(module, exports) {


/**
 * 
 * @param {String or Number} value1 
 * @param {String or Number} value2
 */
const add = (value1, value2) => {
  return value1 + value2;
};

module.exports = add;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

const isObject = __webpack_require__(2);

const allKeys = value => {
    if (!isObject) return [];
    let keys = [];
    for (var key in value) keys.push(key);
    return keys;
};

module.exports = allKeys;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


const initial = __webpack_require__(10),
      reduceRight = __webpack_require__(11);
/**
 * 
 * @param {Function} fns 
 */
const compose = (...fns) => (...args) => {
    return reduceRight((res, fn) => fn(res), fns[fns.length - 1].apply(null, args), initial(fns));
};

module.exports = compose;

/***/ }),
/* 27 */
/***/ (function(module, exports) {


/**
 * 
 * @param {Function} func 
 */

const curry = func => {
    return function inner(..._args1) {
        len = func.length;
        if (_args1.length === len) {
            return func.apply(null, _args1);
        } else if (_args1.length > len) {
            throw new Error('curried error length arguments');
        } else {
            return function (..._args2) {
                return inner.apply(null, _args1.concat(_args2));
            };
        }
    };
};

module.exports = curry;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

const isFunction = __webpack_require__(4);
const isArray = __webpack_require__(0);
const isObject = __webpack_require__(2);
const has = __webpack_require__(18);

/**
 * 
 * @param {Function } predicate 
 * @param {Object} value 
 */
const every = (predicate, value) => {
    if (!isFunction(predicate)) throw new TypeError();
    if (isArray(value)) return Array.prototype.every.call(value, predicate);
    if (isObject(value) && !isFunction(value)) {
        for (var key in value) {
            if (has(key, value)) {
                if (!predicate(value[key], key, value)) return false;
            }
        }
        return true;
    }
};

module.exports = every;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


const each = __webpack_require__(16);

/**
 * 
 * @param {Function} iteratee 
 * @param {List} value 
 */
const filter = (iteratee, value) => {
    let rst = [];
    each((value, index, list) => {
        if (iteratee(value, index, list)) rst.push(value);
    }, value);
    return rst;
};

module.exports = filter;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

const isArrayLike = __webpack_require__(6);

const first = value => {
    if (!isArrayLike(value)) return void 0;
    return value[0];
};

module.exports = first;

/***/ }),
/* 31 */
/***/ (function(module, exports) {


/**
 * 
 * @param {*} value
 */
const identity = value => value;

module.exports = identity;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(1);

/**
 * 
 * @param {Object} value 
 */
const isBoolean = value => value === true || value === false || getBaseType('Boolean')(value);

module.exports = isBoolean;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(1);

/**
 * 
 * @param {Object} value 
 */
const isDate = value => getBaseType('Date')(value);

module.exports = isDate;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


const isArray = __webpack_require__(0),
      isString = __webpack_require__(20),
      isArguments = __webpack_require__(19),
      isArrayLike = __webpack_require__(6),
      isNumber = __webpack_require__(8),
      ownKeys = __webpack_require__(7);

/**
 * 
 * @param {Object} value 
 */
const isEmpty = value => {
    if (value == null) return true;
    if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value))) return value.length === 0;
    if (isNumber(value)) return false;
    return ownKeys(value).length === 0;
};

module.exports = isEmpty;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(1);
/**
 * 
 * @param {Object} value 
 */
const isError = value => getBaseType('Error')(value);

module.exports = isError;

/***/ }),
/* 36 */
/***/ (function(module, exports) {


/**
 * 
 * @param {Object} value 
 */
const _isFinite = value => isFinite(value) && !isNaN(parseFloat(value));

module.exports = _isFinite;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

const isNumber = __webpack_require__(8);
/**
 * 
 * @param {Object} value 
 */
const isNaN = value => isNumber(value) && value !== +value;

module.exports = isNaN;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * 
 * @param {Object} value 
 */
const isNull = value => value === null;

module.exports = isNull;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(1);

/**
 * 
 * @param {Object} value 
 */
const isRegExp = value => getBaseType('RegExp')(value);

module.exports = isRegExp;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * 
 * @param {Object} value
 */
const isUndefined = value => value === void 0;

module.exports = isUndefined;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

const isObject = __webpack_require__(2),
      isFunction = __webpack_require__(4),
      isArray = __webpack_require__(0),
      objectMap = __webpack_require__(21),
      arrayMap = __webpack_require__(9);

const map = (iteratee, value) => {
    if (isObject(value) && isFunction(value)) throw new Error('Invalid data for map!');
    return isArray(value) ? arrayMap(iteratee, value) : objectMap(iteratee, value);
};

module.exports = map;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

const ArrayProto = Array.prototype;
const slice = ArrayProto.slice;

const rest = value => slice.call(value, 1);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


const reduce = __webpack_require__(22);
const isArray = __webpack_require__(0);

/**
 * 
 * @param {Array} list 
 */
const sum = list => {
  if (!isArray(list)) throw new TypeError();
  return reduce((pre, curr) => pre + curr, list);
};

module.exports = sum;

/***/ }),
/* 44 */
/***/ (function(module, exports) {



const values = obj => Object.values(obj);

module.exports = values;

/***/ })
/******/ ]);
});