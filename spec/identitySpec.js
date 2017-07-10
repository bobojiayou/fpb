
const identity = require('../src/identity') 
describe('identity function test', function () {
    it('should always return the arguments which supplied to it ', function(){
        expect(identity(1)).toEqual(1)
        let obj = {}
        expect(identity(obj)).toEqual(obj)
    })  
})
