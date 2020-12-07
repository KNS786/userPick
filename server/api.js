const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const user=require("./models/user");

const db='mongodb+srv://Navaninayak:navaninayak777@ft@cluster0.dlgm0.mongodb.net/videochoose?retryWrites=true&w=majority';

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true},function(err){
     if(!err) console.log("mongo db connected successfully");
     else console.log("mongo db not connected : ",err);

});

module.exports=router;
