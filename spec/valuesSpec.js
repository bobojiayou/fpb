const values = require('../dist/fpb').values

describe('tool function test', function () {

    it('should return the length of the given variable', function () {
        let obj = {
            a: 1,
            b: 2,
            c: 3
        }
        expect(values(obj)).toEqual([1, 2, 3])
    })
})