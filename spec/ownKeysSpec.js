const ownKeys = require('../dist/fpb').ownKeys

describe('ownkeys function test', function () {
    let obj = {
        a: '',
        b: '',
        c: ''
    }
    it('should return all own keys of the given object', function () {
        expect(ownKeys(obj)).toEqual(['a', 'b', 'c'])
        
        expect(ownKeys()(obj)).toEqual(['a', 'b', 'c'])
        
    })
})