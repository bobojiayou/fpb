const objectEach = require('../../src/collection/objectEach')

describe('objectEach function test', function () {
    let arr = {
        yangbo: 3,
        fenfen: 4,
    }
    it('should run the iteratee on every elemnt in the given array', function () {
        expect(objectEach((item, key) => { console.log(item + '' + key) }, arr)).toEqual(arr)
    })
})