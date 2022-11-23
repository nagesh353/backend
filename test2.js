
// const name={
//     firstname:"nagesh",
//     lastname:"nimmala",
//     rollno:786,
//     nagesh:function(){
//         return this.firstname +" "+this.lastname
//     }
// }
// const person = {
//     firstName  : "John",
//     lastName   : "Doe",
//     id     : 5566,
//     myFunction : function() {
//       return this


//     }
//   };
//   console.log(person)


//   var mul=(a,b,cb)=>{
//     return a*b;
//   }
//   module.exports={
//     mul
//   }
const csv=require('csvtojson')
const moment = require('moment')
let data = csv('kkk.txt')
console.log(typeof(data))
console.log(data)
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment("20100131", "YYYYMMDD").fromNow())
console.log(moment().endOf('day').fromNow());          // in 2 hours
console.log(moment().add(2, 'year').calendar()); 
console.log(moment().subtract(10,'days').calendar())// 11/13/2022
console.log(moment.locale());         // en