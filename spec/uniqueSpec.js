const unique = require('../dist/fpb').unique

describe('unique function test', function () {

    it('if argument be undefined, throw a error', function () {
        let arr = undefined;
        expect(function() { unique(arr); } ).toThrow(new Error('argument should not be undefined'));
    })

    it('argument not be array or arrayLike, should throw a error', function(){
        let arr = {};
        expect(function() { unique(arr); } ).toThrow(new Error('argument should not be array or arrayLike'));
    })

    it('should return the unique valaue of the given array', function () {
        let arr = [1, 2, 2, 3, 3, 4, 4]
        expect(unique(arr)).toEqual([1, 2, 3, 4])
    })

    it('should return the orgin value of the given Object list', function () {
        let arr = [{
            a: 1
        },{
            a: 1
        }]
        expect(unique(arr)).toEqual(arr)
    })
    
})