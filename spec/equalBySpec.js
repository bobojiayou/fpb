const equalBy = require('../dist/fpb').equalBy

describe('equalBy function test', function () {
    let originObj, dataObj

    beforeEach(function () {
        originObj = {
            a: 1,
            b: 2,
            c: 3,
            d: 4
        }
        dataObj = {
            a: 1,
            b: 2,
            c: 3,
            d: 9
        }
    })

    // error 
    it('should throw type error when the keys argument not be funciton, string, array or empty array', function () {
        const errorString = `keys shoud be funciton | array | string | Number`

        expect(function () {
            equalBy(null, originObj, dataObj)
        }).toThrowError(errorString)

        expect(function () {
            equalBy({}, originObj, dataObj)
        }).toThrowError(errorString)

        expect(function () {
            equalBy(undefined, originObj, dataObj)
        }).toThrowError(errorString)

        expect(function () {
            equalBy([], originObj, dataObj)
        }).toThrowError('keys shoud be empty!')
    })

    // normal
    it('should equal the given object by the given keys', function () {

        // keys be string | array
        expect(equalBy('a', originObj, dataObj)).toEqual(true)

        expect(equalBy(['a', 'b'], originObj, dataObj)).toEqual(true)

        expect(equalBy(['a', 'b', 'c'], originObj, dataObj)).toEqual(true)

        expect(equalBy(['a', 'b', 'c', 'd'], originObj, dataObj)).toEqual(false)

        // keys be function 
        expect(equalBy(obj => obj.a, originObj, dataObj)).toEqual(true)

        expect(equalBy(obj => obj.a + obj.b, originObj, dataObj)).toEqual(true)

        expect(equalBy(obj => obj.a + obj.d, originObj, dataObj)).toEqual(false)
    })
})