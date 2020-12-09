import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class EditMovieDetails extends Component{
   constructor(props){
      super(props);
    this.changeUserName=this.changeUserName.bind(this);
    this.changeMovieTitle=this.changeMovieTitle.bind(this);
    this.changeMovieDescription=this.changeMovieDescription.bind(this);
    this.changeMovieDuration=this.changeMovieDuration.bind(this);
    this.changeMovieReleaseDate=this.changeMovieReleaseDate.bind(this);
    this.changeMovieVideoUrlLink=this.changeMovieVideoUrlLink.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this)

       this.state={
          username:'',
         title:'',
         moviedescription:'',
         duration:'',
         releasedate:new Date(),
         movielink:''
       }
   

  

   }
  changeUserName(event){
      this.setState({username:event.target.value})
  }
  changeMovieTitle(event){
     this.setState({title:event.target.value})  
  }
  changeMovieDescription(event){
    this.setState({moviedescription:event.target.value})
  }
  changeMovieDuration(event){
     this.setState({duration:event.target.value})
  }
  changeMovieReleaseDate(event){
     this.setState({date:event.target.value})
  }
  changeMovieVideoUrlLink(event){
      this.setState({movielink:event.target.value})
  }

    componentDidMount(){
       axios.get(`http://localhost:5000/user/update/${this.props.match.params.id}`).then(res=>{
           this.setState({
         username:res.data.username,
         title:res.data.title,
         moviedescription:res.data.moviedescription,
         duration:res.data.duration,
         releasedate:res.data.relasedate,
         movielink:res.data.link

          })       
      }).error(res=>console.log('plesae provied correct  username values'))

       axios.get('http://localhost:5000/user').then(response=>{
            this.setState({
                 movies:response.data.map(createMovielist=>
                     createMovielist.username
                )
            })
        }).catch(err=>console.log("cannot access movie list"));
     
    }


  handleSubmit(event){
      event.preventDefault();
      //axios post user information  to create  movise formula
       const movies={
         username:this.state.username,
         title:this.state.title,
         moviedescription:this.state.moviedescription,
         duration:this.state.duration,
         releasedate:this.state.relasedate,
         movielink:this.state.link
      }
    axios.post(`http://localhost:5000/user/${this.props.match.params.id}`,movies)
    .then(res=>console.log("successfully post"))
    .catch(err=>console.error("error occured"))
     window.location='/';
  }
    render(){
     return(
    <div>
       <h2>Create Movie Details</h2>
    <form onSubmit={this.handleSubmit}>
      <div className='form-group'>
          <lebel>UserName</lebel>
          <input type='text'
            required    
           className='form-control'
           value={this.state.username}
           onChange={this.changeUserName}
           />
      </div>

     <div className='form-group'>
      <label>Title</label>
      <input type='text' required
       className='form-control'
       value={this.state.title}
       onChange={this.changeMovieTitle}
     />

     <div className='form-group'>
        <label>Description</label>
        <input type='text' required
        className='form-control'
        value={this.state.moviedescription}
        onChange={this.changeMovieDescription}
         />
    </div>       

     <div className='form-group'>
       <label>Duration</label>
       <input type='text'
           required
          className='form-control'
          value={this.state.duration}
         onChange={this.changeMovieDuration}
          />
   
    </div>

       <div className='form-group'>
          <label>video url</label>
          <input type='text'
           required
           className='form-control'
           value={this.state.movielink}
          onChange={this.changeMovieVideoUrlLink}
         />
       </div>
    
         <div className='form-group'>
           <label>Relase Date</label>
               <input type='text'
           required
           className='form-control'
           value={this.state.date}
          onChange={this.changeMovieReleaseDate}
         /> 
         </div>
        

       <div className="form-group">
          <input type="submit" value="create mymovie" className="btn btn-primary" />
     </div>


            
    </div>

    
    </form>
    </div>
   
    )

 }    


}

export default EditMovieDetails;