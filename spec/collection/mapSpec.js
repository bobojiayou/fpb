const map = require('../../src/collection/map')

describe('map function test', function () {
    let arr = [1, 2, 3, 4, 5],
        obj = {
            a: 1,
            b: 90
        }
    it('should run the iteratee on every elemnt in the given object or array', function () {
        expect(map((item, index) => item * 2, arr)).toEqual([2, 4, 6, 8, 10])
        expect(map((item, index, arr) => item - 1, arr)).toEqual([0, 1, 2, 3, 4])

        expect(map((item, index, obj) => item - 1 , obj)).toEqual({
            a: 0,
            b: 89
        })
        expect(map((item, index) => index, obj, obj)).toEqual({
            a: 'a', 
            b: 'b'
        })
    })
})