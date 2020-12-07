const express=require('express');
const router=express.Router();
const movieDetails=require('../models/movie.details');


router.route('/').get(function(req,res){
    //handling data base 
    movieDetails.find().then(moviesget=>res.json(moviesget) )
    .catch(err=>res.status(400).json({error:err}))
})

//post method for additionall add movioes in Rows 
router.route('/addmovie').post(function(req,res){
      const requestMovie=req.body.username;
      const newUpdatemovie=new movieDetails({requestMovie})

      newUpdatemovie.save().then(()=>res.json(newUpdatemovie))
      .catch((err)=>res.status(400).json("error occured  movie post"))

})

//get movies uniq id
router.route('/:id').get(function(req,res){
    var moviesId=req.params.id;
    movieDetails.findById(moviesId).then(movie=>res.json(movie))
    .catch(err=>res.status(200).json('cannot find the movie'))
});

//Edit movies
router.route('/:id').post(function(req,res){
     var  movieId=req.params.id;
     movieDetails.findById(movieId).then(movies=>{
         movies.username=req.body.username;
         movies.title=req.body.title;
         movies.decription=req.body.decription;
         movies.movielink=req.body.movielink;
        
         movies.save().then(()=>res.json('movies updates successfully'))
         .catch(err=>res.json('error occured'));

     }).catch(err=>res.status(200).json("error occured"))
})

//delete movies 
router.route('/:id').delete(function(req,res){
      var moviesId=req.params.id;
      movieDetails.findByIdAndDelete(moviesId)
      .then(()=>res.json("successfully deleted"))
      .catch(err=>res.status(400).json("canot find movies "));
})


module.exports =router;
