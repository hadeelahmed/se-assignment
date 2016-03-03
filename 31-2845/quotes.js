 var quotes   = require('./quotes.json');
 var database = require('./db.js');
 var db       = database.db();  
 

 exports.getElementByIndexElseRandom = function(array,a) {

   if (arguments.length==1){

    var i = Math.floor(Math.random()*array.length);
   
    return array[i];
    }
   else {

    return array[a];
  }

};



exports.getQuotesFromJSON = function(){

     return quotes;
     
};
    


exports.getQuoteFromJSON = function(index){

    if (arguments.length==1){

        return getElementByIndexElseRandom(quotes,index);
    }
    else {
        return getElementByIndexElseRandom(quotes);
    }

};



exports.seed = function(cb){
 var getquotes = quotes;
 var collec = db.collection('quotes');
 collec.count(function(err,count){

    if (!err && count === 0){

        col.insertMany(getquotes, function(err,flag){

            if(!err) 
                return cb(err, true);
            cb(err, false);
        });
        else {
            cb(err, false);
        }
    }
 })

}; 

exports.getQuotesFromDB = function(cb){
  var array  = [];
  var collec = db.collection('quotes'); 
  var cursor = collec.find();
  cursor.each(function(err, cell){

    if (cell != null){

        array.push(cell);
    } 
    else {
        cb(err, array);
    }

  });

};

 exports.getQuoteFromDB = function(cb, i){
    this.getQuotesFromDB(function(err, quotes){
      if(i){
        return cb(err,quotes[i]);
      }
      else {
        return cb(err,quotes[Math.floor(Math.random()*quotes.length)]);
      }
      
    });

 }


        
 




 


