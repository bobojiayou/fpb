const allKeys = require('../src/allKeys')

describe('tool function test', function () {
    let obj = function() {
        this.yangbo = 1;
    }
    obj.prototype.test = 23

    let objInstance = new obj()

    let test2 = {
        a: 1, 
        b: 2
    }
    it('should return the length of the given variable', function () {
        expect(allKeys(objInstance)).toEqual(['yangbo', 'test'])
        expect(allKeys(test2)).toEqual(['a', 'b'])
    })
})