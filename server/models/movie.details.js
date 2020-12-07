const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const MovieDetails=new Schema({
    username:{
       type:String,
       required:true
    }

},{timestamps:true})

const moviedeatils=mongoose.model('moviedetailsprovider',MovieDetails);
module.exports=moviedeatils;
