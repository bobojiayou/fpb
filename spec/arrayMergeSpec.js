const arrayMerge = require('../dist/fpb').arrayMerge
const each = require('../dist/fpb').each

describe('#arrayMerge function test: ', function () {
    let identityKey, mergeKeys, mergeFn, originArr, dataArr, rst
    beforeEach(function () {
        identityKey = 'id'
        mergeKeys = ['a', 'b', 'c', 'd', 'e', 'f']
        mergeFn = (a, b) => a + b
        originArr = [{
            id: 1,
            a: 1,
            b: 1,
            c: 1,
            d: 1,
            e: 1,
            f: 1
        }, {
            id: 2,
            a: 2,
            b: 2,
            c: 2,
            d: 2,
            e: 2,
            f: 2
        }, {
            id: 3,
            a: 3,
            b: 3,
            c: 3,
            d: 3,
            e: 3,
            f: 3
        }, {
            id: 4,
            a: 4,
            b: 4,
            c: 4,
            d: 4,
            e: 4,
            f: 4
        }]

        dataArr = [{
            id: 1,
            a: 11,
            b: 11,
            c: 11,
            d: 11,
            e: 11,
            f: 11,
            g: 11
        }, {
            id: 2,
            a: 22,
            b: 22,
            c: 22,
            d: 22,
            e: 22,
            f: 22,
            g: 22
        }, {
            id: 3,
            a: 33,
            b: 33,
            c: 33,
            d: 33,
            e: 33,
            f: 33,
            g: 33
        }, {
            id: 4,
            a: 44,
            b: 44,
            c: 44,
            d: 44,
            e: 44,
            f: 44,
            g: 44,
            dd: 55
        }]

        rst = [{
            id: 1,
            a: 12,
            b: 12,
            c: 12,
            d: 12,
            e: 12,
            f: 12
        }, {
            id: 2,
            a: 24,
            b: 24,
            c: 24,
            d: 24,
            e: 24,
            f: 24
        }, {
            id: 3,
            a: 36,
            b: 36,
            c: 36,
            d: 36,
            e: 36,
            f: 36
        }, {
            id: 4,
            a: 48,
            b: 48,
            c: 48,
            d: 48,
            e: 48,
            f: 48
        }]

    })

    // error - the arry to merge 
    it('should throw type error when the third argument not be array', function () {
        const errorString = `the fourth argument should be array`
        each(element => {
            expect(function () {
                arrayMerge(identityKey, mergeKeys, mergeFn, element, dataArr)
            }).toThrowError(errorString)
        }, [{}, undefined, null, '']);
    })

    // error - the array to merge 
    it('should throw type error when the fourth argument not be array', function () {
        const errorString = `the fifth argument should be array`
        each(element => {
            expect(function () {
                arrayMerge(identityKey, mergeKeys, mergeFn, originArr, element)
            }).toThrowError(errorString)
        }, [{}, undefined, null, '']);
    })

    // normal - identityKey --Function|Array|String|Number
    it('identityKey test', function () {
        each(element => {
            expect(
                arrayMerge(element, mergeKeys, mergeFn, originArr, dataArr)
            ).toEqual(rst)
        }, ['id', ['id'], (a) => a.id]);
    })

    // normal - mergeKeys --Array|String|Number
    it('identityKey test', function () {
        expect(
            arrayMerge(identityKey, ['a', 'b', 'c', 'd', 'e', 'f'], mergeFn, originArr, dataArr)
        ).toEqual(rst)
    })
})