const objectMap = require('../src/fpb').objectMap

describe('objectMap function test', function () {
    let arr = {
        yangbo: 3,
        fenfen: 4,
    }
    it('should run the iteratee on every elemnt in the given array', function () {
        expect(objectMap(x => x * 2 - 6, arr)).toEqual({
            yangbo: 0,
            fenfen: 2
        })
        expect(objectMap(x => x * 2 - 6)(arr)).toEqual({
            yangbo: 0,
            fenfen: 2
        })
    })
})