const contains = require('../dist/fpb').contains

describe('contains function test', function () {
    let keys, data

    beforeEach(function () {
        keys = ''
        data = [1, 2, 3, 4]
    })

    // error 
    it('should throw type error when the first argument not be funciton, string, array or number', function () {
        const errorString = `the first argument shoud be string or array or number or function`

        expect(function () {
            contains(null, data)
        }).toThrowError(errorString)

        expect(function () {
            contains(undefined, data)
        }).toThrowError(errorString)

        expect(function () {
            contains({}, data)
        }).toThrowError(errorString)
    })

    // normal
    it('should judge if the given data contain the given keys', function () {

        // keys be string
        expect(contains('', data)).toEqual(false)
        expect(contains('1', data)).toEqual(false)
        
        // keys be number
        expect(contains(1, data)).toEqual(true)
        expect(contains(5, data)).toEqual(false)
        
        // keys be array
        expect(contains([1,2,3], data)).toEqual(true)
        expect(contains([1,2,5], data)).toEqual(false)
        
        // keys be function 
        expect(contains(()=> 3, data)).toEqual(true)
        expect(contains(()=> 5, data)).toEqual(false)

    })
})