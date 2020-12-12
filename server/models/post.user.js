const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema.Types;

const user=require('./user');


const postSchema=new mongoose.Schema({
   
    title:{
        type:String,
        required:true
     },
   body:{
       type:String,
       required:true
    },
   photo:{
     type:String,
    required:true
    },
   postedby:{
     type:ObjectId,
     ref:user
   }

})

module.exports=mongoose.model('postuser',postSchema);
