const objectMerge = require('../dist/fpb').objectMerge

describe('objectMerge function test', function () {
    let mergeKeys, mergeFn, originObj, dataObj

    beforeEach(function () {
        mergeKeys = ['a', 'b']
        mergeFn = (a, b) => a + b
        originObj = {
            a: 4,
            b: 5,
            c: 6,
            d: 2,
            e: 3,
            f: 4
        }
        dataObj = {
            a: 1,
            b: 2,
            c: 3
        }
    })

    // error --mergekeys
    it('should throw type error when the first argument not be funciton, string, array or number', function () {
        const errorString = `the first argument shoud be funciton | array | string | Number`
        expect(function () {
            objectMerge(null, mergeFn, originObj, dataObj)
        }).toThrowError(errorString)

        expect(function () {
            objectMerge(undefined, mergeFn, originObj, dataObj)
        }).toThrowError(errorString)

        expect(function () {
            objectMerge({}, mergeFn, originObj, dataObj)
        }).toThrowError(errorString)

    })
    // error -mergeFn
    it('should throw type error when the second argument not be funciton', function () {
        const errorString = `the second argument should be function`

        expect(function () {
            objectMerge(mergeKeys, null, originObj, dataObj)
        }).toThrowError(errorString)

        expect(function () {
            objectMerge(mergeKeys, undefined, originObj, dataObj)
        }).toThrowError(errorString)

        expect(function () {
            objectMerge(mergeKeys, NaN, originObj, dataObj)
        }).toThrowError(errorString)

        expect(function () {
            objectMerge(mergeKeys, {}, originObj, dataObj)
        }).toThrowError(errorString)

        expect(function () {
            objectMerge(mergeKeys, '', originObj, dataObj)
        }).toThrowError(errorString)

        expect(function () {
            objectMerge(mergeKeys, 123, originObj, dataObj)
        }).toThrowError(errorString)
    })

    // error - the object to merge 
    it('should throw type error when the third argument not be object', function () {
        const errorString = `the merge objects should be object`
        expect(function () {
            objectMerge(mergeKeys, mergeFn, [], dataObj)
        }).toThrowError(errorString)

        expect(function () {
            objectMerge(mergeKeys, mergeFn, '', dataObj)
        }).toThrowError(errorString)

        expect(function () {
            objectMerge(mergeKeys, mergeFn, 123, dataObj)
        }).toThrowError(errorString)

        expect(function () {
            objectMerge(mergeKeys, mergeFn, () => {}, dataObj)
        }).toThrowError(errorString)
    })

    // error - the object to merge 
    it('should throw type error when the fourth argument not be object', function () {
        const errorString = `the merge objects should be object`
        expect(function () {
            objectMerge(mergeKeys, mergeFn, originObj, [])
        }).toThrowError(errorString)

        expect(function () {
            objectMerge(mergeKeys, mergeFn, originObj, '')
        }).toThrowError(errorString)

        expect(function () {
            objectMerge(mergeKeys, mergeFn, originObj, 123)
        }).toThrowError(errorString)

        expect(function () {
            objectMerge(mergeKeys, mergeFn, originObj, () => {})
        }).toThrowError(errorString)
    })

    // normal --mergeKeys
    it('should judge if the given data contain the given mergeKeys', function () {

        // mergeKeys be string
        expect(objectMerge('a', mergeFn, originObj, dataObj)).toEqual({
            a: 5,
            b: 5,
            c: 6,
            d: 2,
            e: 3,
            f: 4
        })

        // mergeKeys be array
        expect(objectMerge(['a', 'b'], mergeFn, originObj, dataObj)).toEqual({
            a: 5,
            b: 7,
            c: 6,
            d: 2,
            e: 3,
            f: 4
        })

        // mergeKeys be function 
        expect(objectMerge(() => ['a', 'b'], mergeFn, originObj, dataObj)).toEqual({
            a: 5,
            b: 7,
            c: 6,
            d: 2,
            e: 3,
            f: 4
        })
    })

    // normal --mergeKeys
    it('should judge if the given data contain the given mergeKeys', function () {

        // mergeKeys be string
        expect(objectMerge('a', (a, b) => a - b, originObj, dataObj)).toEqual({
            a: 3,
            b: 5,
            c: 6,
            d: 2,
            e: 3,
            f: 4
        })

        // mergeKeys be array
        expect(objectMerge(['a', 'b'], (a, b) => a * b, originObj, dataObj)).toEqual({
            a: 4,
            b: 10,
            c: 6,
            d: 2,
            e: 3,
            f: 4
        })
    })
})