const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors');
const uri='mongodb+srv://Navaninayak:lDnhEjRKFj8XBlXH@cluster0.uznjh.mongodb.net/mernstack?retryWrites=true&w=majority'
//connect cloud monngo db 
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})

const connection=mongoose.connection;

connection.once('open',()=>{
   console.log('mongodb conncted')
})




require('dotenv').config();
const app=express();
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT||5000;

//Movie Deatails operation doing 
//perform routes 
const routesMovie=require('./routes/movie-details.routes');
const routesTodo=require('./routes/movie-user-crud.routes');

app.use('/moviedetails',routesMovie);
app.use('/user',routesTodo);







app.listen(PORT,function(){

   console.log("App running on PORT :",PORT);
})