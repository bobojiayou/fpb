const arrayMap = require('../src/arrayMap')

describe('arrayMap function test', function () {
    let arr = [1, 2, 3, 4, 5]
    it('should run the iteratee on every elemnt in the given array', function () {
        expect(arrayMap(x => x * 2, arr)).toEqual([2, 4, 6, 8, 10])
    })
})