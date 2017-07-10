const fpb = require('../dist/fpb')
const curry = fpb.curry

describe('curry function test', function () {
    it('should return a function curried left to right', function () {

        function add(x, y, z) {
            return x + y + z
        }
        
        expect(curry(add)(10, 1)(9)).toEqual(20)
        expect(curry(add)(10)(9)(1)).toEqual(20)
        expect(curry(add)(10, 1, 9)).toEqual(20)
    })
})