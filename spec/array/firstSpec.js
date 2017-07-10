const first = require('../../src/array/first')

describe('identity function test', function () {
    it('should always return the arguments which supplied to it ', function () {
        expect(first([1, 2, 3])).toEqual(1)
        expect(first('123')).toEqual('1')
        expect(first({ '0': 11, '2': 34 })).toEqual(undefined)
    })
})