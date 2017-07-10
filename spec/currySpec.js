const curry = require('../src/curry')
const add = require('../src/add')
const filter = require('../src/filter')
const has = require('../src/has')
const keys = require('../src/ownKeys')
const values = require('../src/values')

describe('curry function test', function () {
    it('should return a function curried left to right', function () {

        let obj = {
            a: 1,
            b: 2,
            c: 3,
            d: 4
        }

        let arr = curry(keys)(obj)

        let hasA = curry(has)('a')
        expect(hasA(obj)).toEqual(true)

        let filterEnoughThan2 = curry(filter)(x => x > 2)
        expect(filterEnoughThan2(values(obj))).toEqual([3, 4])

        let add10 = curry(add)(4)
        expect(add10(10)).toEqual(14)

    })
})