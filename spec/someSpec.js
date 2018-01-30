const fpb = require('../dist/fpb')
const some = fpb.some

describe('some function test for array', function () {
    let arr1 = [1, 2, 3, 4]
    it('sould be true', function () {
        expect(some((item, index) => item < 2, arr1)).toEqual(true)
    })
    it('sould be false', function () {
        expect(some((item) => item < 1, arr1)).toEqual(false)
    })

})

describe('some function test for object', function () {
    let obj = {
        a: 40,
        b: 90,
        c: 100
    }
    it('should be true', function () {
        expect(some((value, key, obj) => value < 50, obj)).toEqual(true)
        expect(some((value) => value == 100, obj)).toEqual(true)
        expect(some((value, key) => key === 'a', obj)).toEqual(true)
        expect(some((value, key, obj) => obj['a'] === 40, obj)).toEqual(true)
    })
    it('should be false', function () {
        expect(some((value, index) => value > 100, obj)).toEqual(false)
    })
})