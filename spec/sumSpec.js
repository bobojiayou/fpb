const sum = require('../dist/fpb').sum

describe('tool function test', function () {
    let arr = [1, 2, 3, 4, 5], arr1 = [10, 23]
    it('should return the length of the given variable', function () {
        expect(sum(arr)).toEqual(15)
        expect(sum(arr1)).toEqual(33)
    })
})