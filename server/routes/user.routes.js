const express=require('express');
const router=express.Router();
const userActions=require('../models/movieuser.crud.deatils');


router.route('/').get(function(req,res){
    //handling data base 
    userAction.find().then(moviedeatils=>res.json(moviedeatils) )
    .catch(err=>res.status(400).json({error:err}))
})


module.exports =router;
