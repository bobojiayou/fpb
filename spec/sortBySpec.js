const fpb = require('../dist/fpb')
const sortBy = fpb.sortBy

describe('sortBy test', function () {
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
    let arr2 = [{
            name: 'fenfen',
            age: 20
        },
        {
            name: 'sanpi',
            age: 7
        }, {
            name: 'yangbo',
            age: 30
        }
    ]
    let arr3 = [{
            name: 'sanpi',
            age: 7
        },
        {
            name: 'fenfen',
            age: 20
        }, {
            name: 'yangbo',
            age: 30
        }
    ]
    let arr4 = [1, 2, 3, 4, 5, 6]
    let arr5 = [3,4,2,1,8]
    
    it('should be right', function () {
        expect(sortBy('name', arr1)).toEqual(arr2)
    })
    it('should be ok', function () {
        expect(sortBy('age', arr1)).toEqual(arr3)
    })
    it('should be [5, 4, 6, 3, 1, 2]', function () {
        expect(sortBy(value => Math.sin(value), arr4)).toEqual([5, 4, 6, 3, 1, 2])
    })
    it('should be [1, 2, 3, 4, 8]', function () {
        expect(sortBy(v=>v, arr5)).toEqual([1, 2, 3, 4, 8])
    })
})