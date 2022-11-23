

//const async = require('async-series')
// import _parallel from './internal/parallel.js'
// import eachOfSeries from './eachOfSeries.js'
const async = require('async')


async.series([
       function(callback) {
           setTimeout(function() {
               // do some async task
               callback(null, 'one');
           }, 200);
       },
       function(callback) {
           setTimeout(function() {
               // then do another async task
               callback(null, 'two');
          }, 100);
       }
   ], function(err, results) {
      console.log(results);
       // results is equal to ['one','two']
  });
  
   // an example using objects instead of arrays
   async.series({
       one: function(callback) {
           setTimeout(function() {
               // do some async task
              callback(null, 1);
           }, 200);
       },
       two: function(callback) {
           setTimeout(function() {
               // then do another async task
               callback(null, 2);
           }, 100);
       }
   }, function(err, results) {
       console.log(results);
       // results is equal to: { one: 1, two: 2 }
   });
  
   //Using Promises
   async.series([
       function(callback) {
           setTimeout(function() {
               callback(null, 'one');
           }, 200);
       },
       function(callback) {
           setTimeout(function() {
               callback(null, 'two');
           }, 100);
       }
   ]).then(results => {
       console.log(results);
       // results is equal to ['one','two']
   }).catch(err => {
       console.log(err);
   });

