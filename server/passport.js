const JWTStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;
const mongoose =require('mongoose');
const user=mongoose.model('users');
const opts={};

opts.jwtFromRequest=ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey='secret';


module.exports=passport=>{
   passport.use(new JWTStrategy(opts,(tokenPayload,done)=>{
        user.findById(tokenPayload.id)
        .then(user=>{
           if(user)
               return done(null,user);
           return done(null,false);

         }).catch(err=>console.error(err) )
   }))
}
