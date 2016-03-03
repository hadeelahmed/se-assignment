
var http = require('http');
var db   = require('./db.js');

 db.connect(function(err){
  var quote = require('./quotes.js');
     quote.seed(function(err,flag){
      
      if(flag){

      	console.log('success');
      }
      else{

      	console.log('failed');
      } 

     })
 });

 require('./app.js').listen(8080, function() {
       console.log('app listening on port 8080!');
   };

