const fpb = require('../dist/fpb')
const pluck = fpb.pluck

describe('pluck test', function () {
    let arr1 = [{
            name: 'yangbo',
            age: 30
        },
        {
            name: 'fenfen',
            age: 20
        },
        {
            name: 'sanpi',
            age: 7
        }
    ]
    it('should be ["yangbo", "fenfen", "sanpi"]', function () {
        expect(pluck('name', arr1)).toEqual(['yangbo', 'fenfen', 'sanpi'])
       
    })
    it('should be [30, 20, 7]', function () {
        expect(pluck('age', arr1)).toEqual([30, 20, 7])
    })
    it('should be [undefined, undefined, undefined]', function () {
        expect(pluck('', arr1)).toEqual([undefined, undefined, undefined])
    })
    it('should be [undefined, undefined, undefined]', function () {
        expect(pluck('haah', arr1)).toEqual([undefined, undefined, undefined])
    })
})