const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
     username:{type:String,required:true},
     moviedescription:{type:String,minlength:20,maxlength:100},
      title:{ type:String,minlength:1,required:true},
      movielink:{ type:String,required:true },
     duration:{type:String},
     relasedate:{type:String}

},{timestamps:true})

//const user=mongoose.model('userToDo',userSchema);
const user=mongoose.model('mymovie',userSchema);

module.exports=user;
