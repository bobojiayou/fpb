(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fpb"] = factory();
	else
		root["fpb"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 
 * @param {Object} obj 
 */
var isArray = function isArray(value) {
  return Array.isArray(value);
};

module.exports = isArray;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBaseType = __webpack_require__(4);
/**
 * 
 * @param {Object} obj 
 */
var isFunction = function isFunction(value) {
  return getBaseType('Function')(value);
};

module.exports = isFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 
 * @param {object} value 
 */
var isObject = function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
};

module.exports = isObject;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getProperty = __webpack_require__(8);

/**
 * 
 * @param {*} value 
 */
var getLength = function getLength(value) {
  return getProperty('length')(value);
};

module.exports = getLength;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ObjProto = Object.prototype;
var toString = ObjProto.toString;
/**
 * 
 * @param {String} The type name 
 */
var getBaseType = function getBaseType(name) {
  return function (obj) {
    return toString.call(obj) === '[object ' + name + ']';
  };
};

module.exports = getBaseType;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isLength = __webpack_require__(18),
    isFunction = __webpack_require__(1);

/**
 * 
 * @param {Any} value 
 */
var isArrayLike = function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
};

module.exports = isArrayLike;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 
 * @param {Object} obj 
 */

var ownKeys = function ownKeys(obj) {
  return Reflect.ownKeys(obj);
};

module.exports = ownKeys;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0);

var arrayEach = function arrayEach(iteratee, value) {
    if (!isArray(value)) return value;
    value.forEach(iteratee);
    return value;
};

module.exports = arrayEach;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 
 * @param {*} key 
 */

var getProperty = function getProperty(key) {
  return function (value) {
    return value == null ? void 0 : value[key];
  };
};

module.exports = getProperty;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBaseType = __webpack_require__(4);

/**
 * 
 * @param {Object} obj 
 */
var isString = function isString(value) {
  return getBaseType('String')(value);
};

module.exports = isString;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBaseType = __webpack_require__(4);

/**
 * 
 * @param {Object} value 
 */
var isNumber = function isNumber(value) {
  return getBaseType('Number')(value);
};

module.exports = isNumber;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 
 * @param {String} key 
 * @param {object} value 
 */

var has = function has(key, value) {
  return value != null && Object.prototype.hasOwnProperty.call(value, key);
};

module.exports = has;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2),
    isFunction = __webpack_require__(1),
    isArray = __webpack_require__(0),
    objectMap = __webpack_require__(24),
    arrayMap = __webpack_require__(13);

var map = function map(iteratee, value) {
    if (isObject(value) && isFunction(value)) throw new Error('Invalid data for map!');
    return isArray(value) ? arrayMap(iteratee, value) : objectMap(iteratee, value);
};

module.exports = map;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0);

/**
 * 
 * @param {Function} iteratee 
 * @param {Array} value 
 */
var arrayMap = function arrayMap(iteratee, value) {
  if (!isArray(value)) return value;
  return value.map(iteratee);
};

module.exports = arrayMap;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 
 * @param {Array} array 
 */

var initial = function initial(array) {
  return Array.prototype.slice.call(array, 0, Math.max(array.length - 1, 0));
};

module.exports = initial;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var createReduce = __webpack_require__(16),
    getLength = __webpack_require__(3);

/**
* 
* @param {Function} iteratee 
* @param {*} initValue 
* @param {Array} list 
*/
var reduceRight = function reduceRight() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var _args = [].concat(args, [-1]);
    return createReduce.apply(undefined, _toConsumableArray(_args));
};

// console.log(reduceRight((prev, value) => prev - value, [1, 2, 3, 4]))
module.exports = reduceRight;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getLength = __webpack_require__(3),
    isArray = __webpack_require__(0),
    last = __webpack_require__(17);

/**
 * 
 * @param {Function} iteratee 
 * @param {*} initValue 
 * @param {Array} array 
 * @param {Number} dir  -1 => reduceRight,  1 => reduce
 */
var createReduce = function createReduce() {
    var _arr, _arr2;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var len = getLength(args);
    if (len < 3) throw new Error('Invalid args');
    var arr = void 0,
        iteratee = void 0,
        initValue = void 0,
        _args = void 0;
    if (len === 3) {
        iteratee = args[0];
        arr = args[1];
        dir = args[2];

        _args = [iteratee];
    } else {
        iteratee = args[0];
        initValue = args[1];
        arr = args[2];
        dir = args[3];

        _args = [iteratee, initValue];
    }
    return dir === 1 ? (_arr = arr).reduce.apply(_arr, _toConsumableArray(_args)) : (_arr2 = arr).reduceRight.apply(_arr2, _toConsumableArray(_args));
};

module.exports = createReduce;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayLike = __webpack_require__(5),
    getLength = __webpack_require__(3);

var last = function last(value) {
    if (!isArrayLike(value)) return void 0;
    return value[getLength(value) - 1];
};

module.exports = last;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * 
 * @param {*} value 
 */
var isLength = function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
};

module.exports = isLength;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2),
    isFunction = __webpack_require__(1),
    isArray = __webpack_require__(0),
    objectEach = __webpack_require__(20),
    arrayEach = __webpack_require__(7);

/**
 *  
 * @param {Function} iteratee 
 * @param {Object} value 
 */
var each = function each(iteratee, value) {
    if (isObject(value) && isFunction(value)) throw new Error('Invalid data for each!');
    return isArray(value) ? arrayEach(iteratee, value) : objectEach(iteratee, value);
};

module.exports = each;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2),
    isFunction = __webpack_require__(1),
    arrayEach = __webpack_require__(7),
    ownKeys = __webpack_require__(6),
    getLength = __webpack_require__(3);

var objectEach = function objectEach(iteratee, value) {
    if (!isObject(value) || isFunction(value)) return value;
    var keys = ownKeys(value);
    var len = getLength(keys);
    for (var index = 0; index < len; index++) {
        var key = keys && keys[index];
        iteratee(value[key], key, value);
    }
    return value;
};

module.exports = objectEach;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 
 * @param {*} value
 */
var identity = function identity(value) {
  return value;
};

module.exports = identity;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBaseType = __webpack_require__(4);

/**
 * 
 * @param {*} value 
 */
var isArguments = function isArguments(value) {
  return getBaseType('Arguments')(value);
};

module.exports = isArguments;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 
 * @param {Object} value
 */
var isUndefined = function isUndefined(value) {
  return value === void 0;
};

module.exports = isUndefined;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2),
    isFunction = __webpack_require__(1),
    arrayEach = __webpack_require__(7),
    ownKeys = __webpack_require__(6),
    getLength = __webpack_require__(3);

var objectMap = function objectMap(iteratee, value) {
    if (!isObject(value) || isFunction(value)) return value;
    var keys = ownKeys(value);
    var len = getLength(keys);
    var rst = {};
    for (var index = 0; index < len; index++) {
        var key = keys && keys[index];
        rst[key] = iteratee(value[key], key);
    }
    return rst;
};

module.exports = objectMap;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var createReduce = __webpack_require__(16),
    getLength = __webpack_require__(3);

/**
 * 
 * @param {Function} iteratee 
 * @param {*} initValue 
 * @param {Array} list 
 */
// args =  (iteratee, initValue, array)
var reduce = function reduce() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var _args = [].concat(args, [1]);
    return createReduce.apply(undefined, _toConsumableArray(_args));
};

// console.log(reduce((prev, value) => prev - value, [1, 2, 3, 4]))
module.exports = reduce;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var map = __webpack_require__(12),
    getProperty = __webpack_require__(8);

/**
 * 
 * @param {string} key 
 * @param {list} obj 
 */
var pluck = function pluck(key, obj) {
    return map(getProperty(key), obj);
};

module.exports = pluck;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var fpb = module.exports = function (value) {
    this._target = value;
};

fpb.prototype.value = function () {
    return this._target;
};

fpb.tap = function (value, func) {
    func(value);
    return value;
};

fpb.chain = function (value, notLazy) {
    var instance = new fpb(value);
    !notLazy && (instance._chunk = [value]);
    instance[notLazy ? '_isChain' : '_isLazyChain'] = true;
    return instance;
};

fpb.add = __webpack_require__(28);
fpb.allKeys = __webpack_require__(29);
fpb.arrayEach = __webpack_require__(7);
fpb.arrayMap = __webpack_require__(13);
fpb.compose = __webpack_require__(30);
fpb.curry = __webpack_require__(31);
fpb.each = __webpack_require__(19);
fpb.every = __webpack_require__(32);
fpb.filter = __webpack_require__(33);
fpb.first = __webpack_require__(34);
fpb.getLength = __webpack_require__(3);
fpb.getProperty = __webpack_require__(8);
fpb.has = __webpack_require__(11);
fpb.identity = __webpack_require__(21);
fpb.initial = __webpack_require__(14);
fpb.isArguments = __webpack_require__(22);
fpb.isArray = __webpack_require__(0);
fpb.isArrayLike = __webpack_require__(5);
fpb.isBoolean = __webpack_require__(35);
fpb.isDate = __webpack_require__(36);
fpb.isEmpty = __webpack_require__(37);
fpb.isError = __webpack_require__(38);
fpb.isFinite = __webpack_require__(39);
fpb.isFunction = __webpack_require__(1);
fpb.isLength = __webpack_require__(18);
fpb.isNaN = __webpack_require__(40);
fpb.isNull = __webpack_require__(41);
fpb.isNumber = __webpack_require__(10);
fpb.isObject = __webpack_require__(2);
fpb.isRegExp = __webpack_require__(42);
fpb.isString = __webpack_require__(9);
fpb.isUndefined = __webpack_require__(23);
fpb.last = __webpack_require__(17);
fpb.map = __webpack_require__(12);
fpb.objectEach = __webpack_require__(20);
fpb.objectMap = __webpack_require__(24);
fpb.ownKeys = __webpack_require__(6);
fpb.reduce = __webpack_require__(25);
fpb.reduceRight = __webpack_require__(15);
fpb.rest = __webpack_require__(43);
fpb.sum = __webpack_require__(44);
fpb.values = __webpack_require__(45);
fpb.some = __webpack_require__(46);
fpb.pluck = __webpack_require__(26);
fpb.sortBy = __webpack_require__(47);
fpb.unique = __webpack_require__(49);

fpb.prototype.force = function () {
    var chunks = this._chunk,
        target = this._target;
    return fpb.reduce(function (target, thunk) {
        return thunk(target);
    }, chunks);
};

fpb.functions = function (obj) {
    var names = [];
    for (var key in obj) {
        if (fpb.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
};

fpb.log = function (v) {
    console.log(v);
    return v;
};

fpb.mixin = function (obj) {
    fpb.each(function (name) {
        //取得当前函数,并将其覆盖fpb上原有的同名函数
        var func = fpb[name] = obj[name];
        fpb.prototype[name] = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (this._isLazyChain) {
                this._chunk.push(function (target) {
                    return func.apply(fpb, [target].concat(args));
                });
                return this;
            } else if (this._isChain) {
                var target = this._target;
                this._target = func.apply(fpb, [target].concat(args));
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

fpb.VERSION = '1.1.6';

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 
 * @param {String or Number} value1 
 * @param {String or Number} value2
 */

var add = function add(value1, value2) {
  return value1 + value2;
};

module.exports = add;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2);

var allKeys = function allKeys(value) {
    if (!isObject(value)) return [];
    var keys = [];
    for (var key in value) {
        keys.push(key);
    }return keys;
};

module.exports = allKeys;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initial = __webpack_require__(14),
    reduceRight = __webpack_require__(15);

/**
 * 
 * @param {Function} fns 
 */
var compose = function compose() {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
    }

    return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return reduceRight(function (res, fn) {
            return fn(res);
        }, fns[fns.length - 1].apply(null, args), initial(fns));
    };
};

module.exports = compose;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 
 * @param {Function} func 
 */

var curry = function curry(func) {
    return function inner() {
        for (var _len = arguments.length, _args1 = Array(_len), _key = 0; _key < _len; _key++) {
            _args1[_key] = arguments[_key];
        }

        var len = func.length;
        if (_args1.length === len) {
            return func.apply(null, _args1);
        } else if (_args1.length > len) {
            throw new Error('curried error length arguments');
        } else {
            return function () {
                for (var _len2 = arguments.length, _args2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    _args2[_key2] = arguments[_key2];
                }

                return inner.apply(null, _args1.concat(_args2));
            };
        }
    };
};

module.exports = curry;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(1);
var isArray = __webpack_require__(0);
var isObject = __webpack_require__(2);
var has = __webpack_require__(11);

/**
 * 
 * @param {Function } predicate 
 * @param {Object} value 
 */
var every = function every(predicate, value) {
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var each = __webpack_require__(19);

/**
 * 
 * @param {Function} iteratee 
 * @param {List} value 
 */
var filter = function filter(iteratee, value) {
    var rst = [];
    each(function (value, index, list) {
        if (iteratee(value, index, list)) rst.push(value);
    }, value);
    return rst;
};

module.exports = filter;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayLike = __webpack_require__(5);

var first = function first(value) {
    if (!isArrayLike(value)) return void 0;
    return value[0];
};

module.exports = first;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBaseType = __webpack_require__(4);

/**
 * 
 * @param {Object} value 
 */
var isBoolean = function isBoolean(value) {
  return value === true || value === false || getBaseType('Boolean')(value);
};

module.exports = isBoolean;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBaseType = __webpack_require__(4);

/**
 * 
 * @param {Object} value 
 */
var isDate = function isDate(value) {
  return getBaseType('Date')(value);
};

module.exports = isDate;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0),
    isString = __webpack_require__(9),
    isArguments = __webpack_require__(22),
    isArrayLike = __webpack_require__(5),
    isNumber = __webpack_require__(10),
    ownKeys = __webpack_require__(6);

/**
 * 
 * @param {Object} value 
 */
var isEmpty = function isEmpty(value) {
    if (value == null || value === undefined) return true;
    if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value))) return value.length === 0;
    if (isNumber(value)) return false;
    return ownKeys(value).length === 0;
};

module.exports = isEmpty;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBaseType = __webpack_require__(4);
/**
 * 
 * @param {Object} value 
 */
var isError = function isError(value) {
  return getBaseType('Error')(value);
};

module.exports = isError;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 
 * @param {Object} value 
 */
var _isFinite = function _isFinite(value) {
  return isFinite(value) && !isNaN(parseFloat(value));
};

module.exports = _isFinite;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isNumber = __webpack_require__(10);
/**
 * 
 * @param {Object} value 
 */
var isNaN = function isNaN(value) {
  return isNumber(value) && value !== +value;
};

module.exports = isNaN;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 
 * @param {Object} value 
 */
var isNull = function isNull(value) {
  return value === null;
};

module.exports = isNull;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBaseType = __webpack_require__(4);

/**
 * 
 * @param {Object} value 
 */
var isRegExp = function isRegExp(value) {
  return getBaseType('RegExp')(value);
};

module.exports = isRegExp;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayProto = Array.prototype;
var slice = ArrayProto.slice;

var rest = function rest(value) {
  return slice.call(value, 1);
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reduce = __webpack_require__(25);
var isArray = __webpack_require__(0);

/**
 * 
 * @param {Array} list 
 */
var sum = function sum(list) {
  if (!isArray(list)) throw new TypeError();
  return reduce(function (pre, curr) {
    return pre + curr;
  }, list);
};

module.exports = sum;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var values = function values(obj) {
  return Object.values(obj);
};

module.exports = values;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayLike = __webpack_require__(5),
    ownKeys = __webpack_require__(6);

/**
 * 
 * @param {function} predicate  // (value, key||index, data) => fn
 * @param {array or object} obj 
 */
var some = function some(predicate, obj) {
    var keys = !isArrayLike(obj) && ownKeys(obj),
        length = (keys || obj).length;
    for (var i = 0; i < length; i++) {
        var currentKey = keys ? keys[i] : i;
        if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
};

module.exports = some;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pluck = __webpack_require__(26),
    map = __webpack_require__(12),
    createCb = __webpack_require__(48);

/**
 * 
 * @param {function } iteratee 
 * @param {list} obj 
 */
var sortBy = function sortBy(iteratee, obj) {
    return pluck('value', map(function (value, index, list) {
        return {
            value: value,
            index: index,
            criteria: createCb(iteratee)(value, index, list)
        };
    }, obj).sort(function (left, right) {
        var a = left.criteria;
        var b = right.criteria;
        if (a !== b) {
            if (a > b || a === void 0) return 1;
            if (a < b || b === void 0) return -1;
        }
        return left.index - right.index;
    }));
};

module.exports = sortBy;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(1),
    isObject = __webpack_require__(2),
    getProperty = __webpack_require__(8),
    isString = __webpack_require__(9),
    identity = __webpack_require__(21);

/**
 * 
 * @param {*} value 
 */
var createCb = function createCb(value) {
    if (value == null) return identity;
    if (isFunction(value)) return value;
    if (isString(value)) return getProperty(value);
    throw new Error('Invalid argument for createCb!');
};

module.exports = createCb;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isNumber = __webpack_require__(10),
    isArray = __webpack_require__(0),
    isString = __webpack_require__(9),
    isUndefinded = __webpack_require__(23),
    isArrayLike = __webpack_require__(5),
    getLength = __webpack_require__(3),
    hasKey = __webpack_require__(11),
    isFunction = __webpack_require__(1);

/**
 * 
 * @param {Array} array  一维数组 
 */

var unique = function unique(array) {
    if (isUndefinded(array)) throw new Error('argument should not be undefined');
    if (!isArrayLike(array)) throw new Error('argument should not be array or arrayLike');
    if (getLength(array) === 0) return [];
    return [].concat(_toConsumableArray(new Set(array)));
};

module.exports = unique;

/***/ })
/******/ ]);
});