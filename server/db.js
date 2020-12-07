var mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1/choosevideo',{useNewUrlParser:true,useUnifiedTopology:true},function(err){
   if(!err) console.log("mongodb connected successfully");
    else console.error("mongo db not conncted ",err);

})
