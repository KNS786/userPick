const express=require('express');
const router = express.Router();
const UserTodo=require('../models/movieuser.crud.deatils');

router.route('/').get(function(req,res){
     UserTodo.find().then((movies)=>res.json(movies))
    .catch(err=>res.status(200).json('error will fetch movies'))
})

//post method opertaion performs 
router.route('/addmovie').post(function(req,res){
      const newUserTodo=new UserTodo();
     
      newUserTodo.username=req.body.username;
      newUserTodo.description=req.body.moviedescription;
      newUserTodo.title=req.body.title;
      newUserTodo.movielink=req.body.movielink;
      newUserTodo.duration=req.body.duration;
      newUserTodo.releasedate=req.body.releasedate;
      newUserTodo.Date=Date.parse(req.body.date);
     
      newUserTodo.save().then(()=>res.json('Movioe Added'))
      .catch(err=>res.status(400).json("Movie could't addedd")); 
})

//get sample movies pages edit
router.route('/:id').get(function(req,res){
    var userId=req.params.id;
    UserTodo.findById(userId).then((movies)=>{
         res.json(movies);
    }).catch(err=>{
         res.status(400).json("Not found your queries");

    })
})

//Edit  particular movies  
 router.route('/update/:id').post(function(req,res){
     var userId=req.params.id;
     UserTodo.findById(userId).then(edit =>{
         edit.username=req.body.username;
         edit.title=req.body.title;
         edit.movielink=req.body.movielink;
         edit.duration=req.body.duration;
         edit.releasedate=req.body.releasedate;
         edit.description=req.body.moviedescription;


        edit.save().then(()=>res.json(`updated : ${edit.username}`))
        .catch(err=>res.status(400).json(`error occurs : ${edit.username}`))
     }).catch(err=>res.status(400).json(`connot find user id ${userId}`))
 
})
//user allowed to delete the videos 
router.route(':/id').delete(function(req,res){
     var userId=req.params.id;
     UserTodo.findByIdAndDelete(userId).then(()=>res.json("deleted user added in previase movies"))
    .catch(err=>res.status(400).json('connot find movies'))

})

module.exports=router;
