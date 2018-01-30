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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(3);
/**
 * 
 * @param {Object} obj 
 */
const isFunction = value => getBaseType('Function')(value);

module.exports = isFunction;

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const getProperty = __webpack_require__(8);

/**
 * 
 * @param {*} value 
 */
const getLength = value => getProperty('length')(value);

module.exports = getLength;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const isLength = __webpack_require__(17),
      isFunction = __webpack_require__(2);

/**
 * 
 * @param {Any} value 
 */
const isArrayLike = value => {
    return value != null && isLength(value.length) && !isFunction(value);
};

module.exports = isArrayLike;

/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * 
 * @param {Object} obj 
 */

const ownKeys = obj => Reflect.ownKeys(obj);

module.exports = ownKeys;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const isArray = __webpack_require__(0);

const arrayEach = (iteratee, value) => {
    if (!isArray(value)) return value;
    value.forEach(iteratee);
    return value;
};

module.exports = arrayEach;

/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * 
 * @param {*} key 
 */

const getProperty = key => value => value == null ? void 0 : value[key];

module.exports = getProperty;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(3);

/**
 * 
 * @param {Object} obj 
 */
const isString = value => getBaseType('String')(value);

module.exports = isString;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(3);

/**
 * 
 * @param {Object} value 
 */
const isNumber = value => getBaseType('Number')(value);

module.exports = isNumber;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const isObject = __webpack_require__(1),
      isFunction = __webpack_require__(2),
      isArray = __webpack_require__(0),
      objectMap = __webpack_require__(23),
      arrayMap = __webpack_require__(12);

const map = (iteratee, value) => {
    if (isObject(value) && isFunction(value)) throw new Error('Invalid data for map!');
    return isArray(value) ? arrayMap(iteratee, value) : objectMap(iteratee, value);
};

module.exports = map;

/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


const createReduce = __webpack_require__(15),
      getLength = __webpack_require__(4);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


const getLength = __webpack_require__(4),
      isArray = __webpack_require__(0),
      last = __webpack_require__(16);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const isArrayLike = __webpack_require__(5),
      getLength = __webpack_require__(4);

const last = value => {
    if (!isArrayLike(value)) return void 0;
    return value[getLength(value) - 1];
};

module.exports = last;

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const isObject = __webpack_require__(1),
      isFunction = __webpack_require__(2),
      isArray = __webpack_require__(0),
      objectEach = __webpack_require__(19),
      arrayEach = __webpack_require__(7);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

const isObject = __webpack_require__(1),
      isFunction = __webpack_require__(2),
      arrayEach = __webpack_require__(7),
      ownKeys = __webpack_require__(6),
      getLength = __webpack_require__(4);

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
/* 20 */
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
/* 21 */
/***/ (function(module, exports) {


/**
 * 
 * @param {*} value
 */
const identity = value => value;

module.exports = identity;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(3);

/**
 * 
 * @param {*} value 
 */
const isArguments = value => getBaseType('Arguments')(value);

module.exports = isArguments;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

const isObject = __webpack_require__(1),
      isFunction = __webpack_require__(2),
      arrayEach = __webpack_require__(7),
      ownKeys = __webpack_require__(6),
      getLength = __webpack_require__(4);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


const createReduce = __webpack_require__(15),
      getLength = __webpack_require__(4);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

const map = __webpack_require__(11),
      getProperty = __webpack_require__(8);

/**
 * 
 * @param {string} key 
 * @param {list} obj 
 */
const pluck = (key, obj) => map(getProperty(key), obj);

module.exports = pluck;

/***/ }),
/* 26 */
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

fpb.add = __webpack_require__(27);
fpb.allKeys = __webpack_require__(28);
fpb.arrayEach = __webpack_require__(7);
fpb.arrayMap = __webpack_require__(12);
fpb.compose = __webpack_require__(29);
fpb.curry = __webpack_require__(30);
fpb.each = __webpack_require__(18);
fpb.every = __webpack_require__(31);
fpb.filter = __webpack_require__(32);
fpb.first = __webpack_require__(33);
fpb.getLength = __webpack_require__(4);
fpb.getProperty = __webpack_require__(8);
fpb.has = __webpack_require__(20);
fpb.identity = __webpack_require__(21);
fpb.initial = __webpack_require__(13);
fpb.isArguments = __webpack_require__(22);
fpb.isArray = __webpack_require__(0);
fpb.isArrayLike = __webpack_require__(5);
fpb.isBoolean = __webpack_require__(34);
fpb.isDate = __webpack_require__(35);
fpb.isEmpty = __webpack_require__(36);
fpb.isError = __webpack_require__(37);
fpb.isFinite = __webpack_require__(38);
fpb.isFunction = __webpack_require__(2);
fpb.isLength = __webpack_require__(17);
fpb.isNaN = __webpack_require__(39);
fpb.isNull = __webpack_require__(40);
fpb.isNumber = __webpack_require__(10);
fpb.isObject = __webpack_require__(1);
fpb.isRegExp = __webpack_require__(41);
fpb.isString = __webpack_require__(9);
fpb.isUndefined = __webpack_require__(42);
fpb.last = __webpack_require__(16);
fpb.map = __webpack_require__(11);
fpb.objectEach = __webpack_require__(19);
fpb.objectMap = __webpack_require__(23);
fpb.ownKeys = __webpack_require__(6);
fpb.reduce = __webpack_require__(24);
fpb.reduceRight = __webpack_require__(14);
fpb.rest = __webpack_require__(43);
fpb.sum = __webpack_require__(44);
fpb.values = __webpack_require__(45);
fpb.some = __webpack_require__(46);
fpb.pluck = __webpack_require__(25);
fpb.sortBy = __webpack_require__(47);

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

fpb.VERSION = '1.1.3';

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

const isObject = __webpack_require__(1);

const allKeys = value => {
    if (!isObject(value)) return [];
    let keys = [];
    for (var key in value) keys.push(key);
    return keys;
};

module.exports = allKeys;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


const initial = __webpack_require__(13),
      reduceRight = __webpack_require__(14);

/**
 * 
 * @param {Function} fns 
 */
const compose = (...fns) => (...args) => {
    return reduceRight((res, fn) => fn(res), fns[fns.length - 1].apply(null, args), initial(fns));
};

module.exports = compose;

/***/ }),
/* 30 */
/***/ (function(module, exports) {


/**
 * 
 * @param {Function} func 
 */

const curry = func => {
    return function inner(..._args1) {
        let len = func.length;
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

const isFunction = __webpack_require__(2);
const isArray = __webpack_require__(0);
const isObject = __webpack_require__(1);
const has = __webpack_require__(20);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


const each = __webpack_require__(18);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

const isArrayLike = __webpack_require__(5);

const first = value => {
    if (!isArrayLike(value)) return void 0;
    return value[0];
};

module.exports = first;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(3);

/**
 * 
 * @param {Object} value 
 */
const isBoolean = value => value === true || value === false || getBaseType('Boolean')(value);

module.exports = isBoolean;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(3);

/**
 * 
 * @param {Object} value 
 */
const isDate = value => getBaseType('Date')(value);

module.exports = isDate;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

const isArray = __webpack_require__(0),
      isString = __webpack_require__(9),
      isArguments = __webpack_require__(22),
      isArrayLike = __webpack_require__(5),
      isNumber = __webpack_require__(10),
      ownKeys = __webpack_require__(6);

/**
 * 
 * @param {Object} value 
 */
const isEmpty = value => {
    if (value == null || value === undefined) return true;
    if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value))) return value.length === 0;
    if (isNumber(value)) return false;
    return ownKeys(value).length === 0;
};

module.exports = isEmpty;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(3);
/**
 * 
 * @param {Object} value 
 */
const isError = value => getBaseType('Error')(value);

module.exports = isError;

/***/ }),
/* 38 */
/***/ (function(module, exports) {


/**
 * 
 * @param {Object} value 
 */
const _isFinite = value => isFinite(value) && !isNaN(parseFloat(value));

module.exports = _isFinite;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

const isNumber = __webpack_require__(10);
/**
 * 
 * @param {Object} value 
 */
const isNaN = value => isNumber(value) && value !== +value;

module.exports = isNaN;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * 
 * @param {Object} value 
 */
const isNull = value => value === null;

module.exports = isNull;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

const getBaseType = __webpack_require__(3);

/**
 * 
 * @param {Object} value 
 */
const isRegExp = value => getBaseType('RegExp')(value);

module.exports = isRegExp;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * 
 * @param {Object} value
 */
const isUndefined = value => value === void 0;

module.exports = isUndefined;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

const ArrayProto = Array.prototype;
const slice = ArrayProto.slice;

const rest = value => slice.call(value, 1);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


const reduce = __webpack_require__(24);
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
/* 45 */
/***/ (function(module, exports) {



const values = obj => Object.values(obj);

module.exports = values;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

const isArrayLike = __webpack_require__(5),
      ownKeys = __webpack_require__(6);

/**
 * 
 * @param {function} predicate  // (value, key||index, data) => fn
 * @param {array or object} obj 
 */
const some = (predicate, obj) => {
    let keys = !isArrayLike(obj) && ownKeys(obj),
        length = (keys || obj).length;
    for (let i = 0; i < length; i++) {
        let currentKey = keys ? keys[i] : i;
        if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
};

module.exports = some;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

const pluck = __webpack_require__(25),
      map = __webpack_require__(11),
      createCb = __webpack_require__(48);

/**
 * 
 * @param {function } iteratee 
 * @param {list} obj 
 */
const sortBy = (iteratee, obj) => pluck('value', map((value, index, list) => {
    return {
        value: value,
        index: index,
        criteria: createCb(iteratee)(value, index, list)
    };
}, obj).sort((left, right) => {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
    }
    return left.index - right.index;
}));

module.exports = sortBy;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

const isFunction = __webpack_require__(2),
      isObject = __webpack_require__(1),
      getProperty = __webpack_require__(8),
      isString = __webpack_require__(9),
      identity = __webpack_require__(21);

/**
 * 
 * @param {*} value 
 */
const createCb = value => {
    if (value == null) return identity;
    if (isFunction(value)) return value;
    if (isString(value)) return getProperty(value);
    throw new Error('Invalid argument for createCb!');
};

module.exports = createCb;

/***/ })
/******/ ]);
});