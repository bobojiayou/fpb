const fpb = require('../dist/fpb')

const every = fpb.every,
    values = fpb.values,
    add = fpb.add,
    filter = fpb.filter,
    compose = fpb.compose,
    sum = fpb.sum

describe('compose function test', function () {
    it('should compose right ', function () {
        let obj = {
            a: 1,
            b: 2,
            c: 3,
            d: 4
        }
        let filterBigThan2 = filter(x => x > 2)
        let add10 = add(10)

        let composeFn = compose(add10, sum, filterBigThan2, values)

        expect(values(obj)).toEqual([1, 2, 3, 4])
        expect(filterBigThan2(values(obj))).toEqual([3, 4])
        expect(sum(filterBigThan2(obj))).toEqual(7)
        expect(add10(7)).toEqual(17)

        expect(composeFn(obj)).toEqual(17)
    })
})