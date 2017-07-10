const getLength = require('../dist/fpb').getLength

describe('tool function test', function () {
    let arr = [1, 2, 3, 4, 5], str = 'yangbo'
    it('should return the length of the given variable', function () {
        expect(getLength(arr)).toEqual(5)
        expect(getLength(str)).toEqual(6)
    })
})