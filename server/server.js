const express=require('express');
const app=express();
const mongoose=require('mongoose')
const {MONGOURI}=require('./atlas');
const PORT=process.env.PORT || 5000;
const cors=require('cors');

app.use(cors())

app.use(express.json());

const adduser=require('./routes/user.auth.routes');
app.use(adduser);

const post=require('./routes/post');
app.use(post);





mongoose.connect(MONGOURI,{
  useUnifiedTopology:true,
    useNewUrlParser:true
});
mongoose.connection.on('connected',function(){
    console.log('mongo db connected ')
})

mongoose.connection.on('error',function(err){
   console.log('mongo db connected failed',err);
})



app.listen(PORT,()=>{
    console.log("App running on PORT : ",PORT);
})