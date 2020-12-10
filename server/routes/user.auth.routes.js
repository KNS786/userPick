const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');



const User =require('../models/user');
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../atlas')

const logincheck=require('../middleware/login.check');




//post methods for signup
router.post('/signup',function(req,res){
     const {name,email,password}=req.body;
     if(!name || !password || !email)
        res.status(400).json({AuthErr:'please fill all the fileds'});
   
     User.findOne({email:email}).then((useremail)=>{
         if(useremail)
             res.status(400).json({AuthErr:'user Alredy exists'});
          
        //Ready to storing password will be bcrypted formats
          bcrypt.hash(password,14).then(hashPassword=>{
            
         //create new user and save
          const newUser=new User({
              name,
              email,
             password:hashPassword
          })

          newUser.save().then(()=>res.json({newUsr:'User Added Successfully'}))
          .catch(err=>res.status(400).json({newusr:'Adding user failed'}))                 

     })

     }).catch(err=>console.error(err));

})

//Login user in Email and Password

router.post('/signin',function(req,res){
    const {email,password}=req.body;
     if(!email || !password) res.status(400).json({AuthErr:'please fill email and password'})
    
    //there is existing or not 
    User.findOne({email:email}).then(savedUser=>{
        if(!savedUser)
           return res.status(400).json({AuthErr:'email not exists,please signUp'})

        bcrypt.compare(password,savedUser.password)
        .then(ifMatch=>{
            if( !ifMatch )
               return res.status(400).json({AuthErr:'password incorrect'}) 
            // return res.json({Auth:'successfully loged in'});          
             const token=jwt.sign({_id:savedUser._id},JWT_SECRET);
             res.json({token});

         })
       .catch(err=>console.log(err));

    }).catch(err=>res.status(400).json({AuthErr:'not found your email'}))

})
 




module.exports=router;
