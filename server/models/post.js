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
     default:'no photo'
    },
   postedBy:{
     type:ObjectId,
     ref:user
   }

})

module.exports=mongoose.model('post',postSchema);
