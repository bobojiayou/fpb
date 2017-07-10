
const compose = require('../src/compose')
const filter = require('../src/filter')
const initial = require('../src/initial')
const sum = require('../src/sum')
const every = require('../src/every')
const curry = require('../src/curry')
const values = require('../src/values')
const add = require('../src/add')

describe('compose function test', function () {
    it('should compose right ', function () {
        let obj = {
            a: 1,
            b: 2,
            c: 3,
            d: 4
        }
        let filterBigThan2 = curry(filter)(x => x > 2)
        let add10 = curry(add)(10)

        let composeFn = compose(add10, sum, filterBigThan2, values)

        expect(values(obj)).toEqual([1,2,3,4])
        expect(filterBigThan2(values(obj))).toEqual([3, 4])
        expect(sum(filterBigThan2(obj))).toEqual(7)
        expect(add10(7)).toEqual(17)
        
        expect(composeFn(obj)).toEqual(17)
    })
})