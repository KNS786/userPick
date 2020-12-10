const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();

const post=require('../models/post');

const logincheck=require('../middleware/login.check')

router.post('/createpost',logincheck,function(req,res){
      const {title,body}=req.body;
     if(!title || !body)
      return res.status(400).json({createPost:'create post error'})

      const newpost=new post({
         title,
        body,
        postby:req.user
       })

      newpost.save().then((postes)=>res.status({post:postes}))
      .catch(err=>res.json(err));
})

module.exports=router;