const last = require('../src/last')

describe('identity function test', function () {
    it('should always return the arguments which supplied to it ', function () {
        expect(last([1, 2, 3])).toEqual(3)
        expect(last('123')).toEqual('3')
        expect(last({ '0': 11, '2': 34 })).toEqual(undefined)
    })
})