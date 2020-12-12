const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();

const post=require('../models/post.user');

const logincheck=require('../middleware/login.check')

//get all post in a app 
router.get('/allpost',function(req,res){
     post.find()
     .populate("postedby","_id name")
     .then(postes=>{
       res.json({postes});
    }).catch(err=>res.status(400).json({allpost:'allpost cannot get'}))
})



router.post('/createpost',logincheck,function(req,res){
      const {title,body,video}=req.body;
     if(!title || !body || !video)
      return res.status(400).json({createPost:'create post error'})

     console.log(req.user);
       req.user.password=undefined;  

      const newpost=new post({
         title,
        body,
        video,
        postedby:req.user
       })

      newpost.save().then((postes)=>res.status(200).json({post:postes}))
      .catch(err=>res.json(err));
})

//my post 
router.get('/mypost',logincheck,function(req,res){
     post.find({postedby:req.user._id})
     .populate('postedby','_id name')
     .then(mypost=>{
       res.json({mypost})
     })
     .catch(err=>console.error(err))
})


module.exports=router;
