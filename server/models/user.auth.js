const mongoose=require('mongoose');
const userSchema=mongoose.Schema;

const user=new userSchema({
     username:{
       type:String,
       required:true
     },
    email:{
       type:String,
       required:true
     },
     password:{
        type:String,
       required:true
     }

})

module.exports=mongoose.model('user',user);
