const isArray = require('../src/isArray')
const isBoolean = require('../src/isBoolean')
const isDate = require('../src/isDate')
const isFinite = require('../src/isFinite')
const isNaN = require('../src/isNaN')
const isNull = require('../src/isNull')
const isNumber = require('../src/isNumber')
const isString = require('../src/isString')
const isUndefined = require('../src/isUndefined')
const isFunction = require('../src/isFunction')
const isRegExp = require('../src/isRegExp')
const isError = require('../src/isError')
const isArguments = require('../src/isArguments')
const isLength = require('../src/isLength')
const isArrayLike = require('../src/isArrayLike')
const isEmpty = require('../src/isEmpty')

describe('typeDec function test', function () {
    var _arr = [1, 2, 3],
        _obj = { yangbo: 123 },
        _num = 123,
        _date = new Date(),
        _nan = NaN,
        _null = null,
        _func = function () { },
        _str = '123',
        _undefined = undefined,
        _finite = +Infinity,
        _RegExp = new RegExp(),
        _error = new Error(),
        _bool = true;

    it('should judging Is a given variable an array', function () {
        expect(isArray(_arr)).toEqual(true)
        expect(isArray(_undefined)).toEqual(false)
    });

    it('should judging Is a given variable a Boolean', function () {
        expect(isBoolean(_bool)).toEqual(true)
        expect(isBoolean(_undefined)).toEqual(false)
    });

    it('should judging Is a given variable a Date', function () {
        expect(isDate(_date)).toEqual(true)
        expect(isDate(_str)).toEqual(false)
    });

    it('should judging Is a given variable a isFinite', function () {
        expect(isFinite(_finite)).toEqual(false)
        expect(isFinite(_str)).toEqual(true)
        expect(isFinite(_num)).toEqual(true)
    });

    it('should judging Is a given variable a _func', function () {
        expect(isFunction(_func)).toEqual(true)
        expect(isFunction(_str)).toEqual(false)
    });

    it('should judging Is a given variable a NaN', function () {
        expect(isNaN(_nan)).toEqual(true)
        expect(isNaN(_str)).toEqual(false)
    });

    it('should judging Is a given variable a Number', function () {
        expect(isNumber(_num)).toEqual(true)
        expect(isNumber(_str)).toEqual(false)
    });

    it('should judging Is a given variable a string', function () {
        expect(isString(_str)).toEqual(true)
        expect(isString(_num)).toEqual(false)
    });

    it('should judging Is a given variable a error', function () {
        expect(isError(_error)).toEqual(true)
        expect(isError(_num)).toEqual(false)
    });

    it('should judging Is a given variable a RegExp', function () {
        expect(isRegExp(_RegExp)).toEqual(true)
        expect(isRegExp(_num)).toEqual(false)
    });

    it('should judging Is a given variable a RegExp', function () {
        function testArgs() {
            expect(isArguments(arguments)).toEqual(true)
            expect(isArguments(_num)).toEqual(false)
        }
        testArgs(1, 2, 3)
    });

    it('should return length of the given variable', function () {
        expect(isLength(124)).toEqual(true)
        expect(isLength(Infinity)).toEqual(false)
    });

    it('should check if the given variable is a array-Like object', function () {
        expect(isArrayLike(124)).toEqual(false)
        expect(isArrayLike(_func)).toEqual(false)
        expect(isArrayLike(_arr)).toEqual(true)
        expect(isArrayLike(_str)).toEqual(true)
    });

    it('should check if the given variable is empty', function () {
        expect(isEmpty(124)).toEqual(false)
        expect(isEmpty(0)).toEqual(false)
        expect(isEmpty([])).toEqual(true)
        expect(isEmpty('')).toEqual(true)
        expect(isEmpty({})).toEqual(true)
    });


})