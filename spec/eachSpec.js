const each = require('../src/each')

describe('each function test', function () {
    let arr = [1, 2, 3, 4, 5],
        obj = {
            a: 1,
            b: 90
        }
    it('should run the iteratee on every elemnt in the given array', function () {
        expect(each((item, index, arr) => { console.log(item, index, arr) }, arr)).toEqual(arr)
        expect(each((item, index) => { console.log(item, index) }, arr)).toEqual(arr)
        
        expect(each((item, index, obj) => { console.log(item, index, obj) }, obj)).toEqual(obj)
        expect(each((item, index) => { console.log(item, index) }, obj)).toEqual(obj)
        
    })
})