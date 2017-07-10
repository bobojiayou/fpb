const every = require('../dist/fpb').every

describe('every function test', function () {
    function isBigEnough(element, index, obj) {
        return element >= 10;
    } 
    it('should test whether all elements in the array pass the test implemented by the provided function.',
        function () {
            expect(every(isBigEnough, { a: 23 })).toEqual(true)
            expect(every(isBigEnough, {a: 12, b: 45, c: 9})).toEqual(false)

            expect(every(isBigEnough, [12, 3, 9])).toEqual(false)
            expect(every(isBigEnough, [12, 11, 90])).toEqual(true)
            
            expect(every(isBigEnough)({ a: 23 })).toEqual(true)
            expect(every(isBigEnough)({ a: 12, b: 45, c: 9 })).toEqual(false)

            expect(every(isBigEnough)([12, 3, 9])).toEqual(false)
            expect(every(isBigEnough)([12, 11, 90])).toEqual(true)
        })
})