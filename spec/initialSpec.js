
const initial = require('../dist/fpb').initial

describe('tool function test', function () {
    let arr = [1, 2, 3, 4, 5], str = 'yangbo'
    it('should return the length of the given variable', function () {
        expect(initial(arr)).toEqual([1, 2, 3, 4])
        expect(initial(str)).toEqual(['y', 'a', 'n', 'g', 'b'])
    })
})