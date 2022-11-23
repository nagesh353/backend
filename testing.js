
const chai=require('chai');
const expect=chai.expect
var mocha=require('mocha')
var test1=require('./test1')

   describe('lets print sum of values',()=>{
    it('sum of numbers',(done)=>{
 expect( test1.sum({num1:2,num2:10})).to.equal(12);
 done();
    })
    it('let s chek object',(done)=>{
     expect (test1.name.firstname).to.equal('nagesh')
     done();
    })
   })
