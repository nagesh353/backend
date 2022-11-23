const Cube = require('../src/app').Cube
const expo = require('../src/app')
const meth = require('../src/reduce')
const sum = require('../src/app')
const test = require('../src/test2')
const shold = require('chai').should()
const expect = require('chai').expect;



test.mul=mockMul;
var mockMul=function(a,b)
{
    return this;
}

describe('Testing the Cube Functions', function() {
it('1. The side length of the Cube', function(done) {
let c1 = new Cube(2);
expect(c1.getSideLength()).to.equal(2);
done();
});

it('2. The surface area of the Cube', function(done) {
let c2 = new Cube(5);
expect(c2.getSurfaceArea()).to.equal(150);
done();
});
it(' 3.sum of two numbers',  (done)=>{
    expect(expo.sum(5,10)).to.equal(15);
    done();
});
//  it('lets test data',  (done)=>{
//  expect(expo.check('subbu')).to.equal(!null)
//  done();
// });
it('4 .multiplication of',(done)=>{
   expect (expo.mul(2,8)).to.equal(16)
   done();
})
it('5. The volume of the Cube', function(done) {
let c3 = new Cube(7);
expect(c3.getVolume()).to.equal(343);
done();
});

});
it('fhjsakghkqj',(done)=>{
    console.log('fghjkl;')
    expo.mul(2,4,(err,res)=>{
        shold.exist(res)
        console.log(res)
    })
    done();

})
console.log(meth.mul(2,8))