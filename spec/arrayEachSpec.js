const arrayEach = require('../src/arrayEach')

describe('arrayEach function test', function () {
    let arr = [1, 2, 3, 4, 5]
    it('should run the iteratee on every elemnt in the given array', function () {
        expect(arrayEach((item, index, arr)=> {console.log(item, index, arr)} , arr)).toEqual(arr)
    })
})