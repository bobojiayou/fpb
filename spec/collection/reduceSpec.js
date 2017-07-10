const reduce = require('../../src/collection/reduce')
const reduceRight = require('../../src/collection/reduceRight')

describe('reduce function test', function () {
    let arr = [1, 2, 3, 4]
    it('should reduce right', function () {
        expect(reduceRight((prev, value) => prev - value, arr)).toEqual(-2)
        expect(reduceRight((prev, value) => prev + value, arr)).toEqual(10)
        
    })
})

describe('reduceRight function test', function () {
    let arr = [1, 2, 3, 4],
        obj = {
            a: 1,
            b: 90
        }
    it('should reduce left', function () {
        expect(reduce((prev, value) => prev - value, arr)).toEqual(-8)
        expect(reduce((prev, value) => prev + value, arr)).toEqual(10)
    })
})