const has = require('../src/has')

describe('has function test', function () {
    it('should return if the object contain the given key ', function () {
        expect(has('1', {1: 23})).toEqual(true)
        expect(has('yangbo', { })).toEqual(false)
    })
})