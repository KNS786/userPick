const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();

const post=require('../models/post.user');

const logincheck=require('../middleware/login.check')

router.post('/createpost',logincheck,function(req,res){
      const {title,body}=req.body;
     if(!title || !body)
      return res.status(400).json({createPost:'create post error'})

     console.log(req.user);
       req.user.password=undefined;  

      const newpost=new post({
         title,
        body,
        postedby:req.user
       })

      newpost.save().then((postes)=>res.status(200).json({post:postes}))
      .catch(err=>res.json(err));
})

module.exports=router;
