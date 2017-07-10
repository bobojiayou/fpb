const filter = require('../dist/fpb').filter

describe('filter function test', function () {
    let arr = [1, 2, 3, 4, 5],
        obj = {
            a: 1,
            b: 90
        }
    it('should run the iteratee on every elemnt in the given array', function () {
        expect(filter(function (num) { return num % 2 == 0; }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10])
        expect(filter(function (item, index, list) { return index < 1 }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1])
        expect(filter(function (item, index, list) { return list.length === 10 }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(filter(function (item, index, list) { return item > 1 }, obj)).toEqual([90])

        expect(filter(function (num) { return num % 2 == 0; })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10])
        expect(filter(function (item, index, list) { return index < 1 })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1])
        expect(filter(function (item, index, list) { return list.length === 10 })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(filter(function (item, index, list) { return item > 1 })(obj)).toEqual([90])
    })
})