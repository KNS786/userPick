import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/navbar.component';
import movielist from './components/movielist.component';
import EditMovies from './components/editmovielist.component';
import createMovies from './components/createmovielist.component';
import createuser from './components/createuser.component';

function userActions(){
  return(
    <Router>
       <div className='container'>
        <NavBar/>
        <br/>
           <Route exact path='/' component={movielist}/>
      <Route  path='/edit:id' component={EditMovies} />
      <Route path='/create' component={createMovies}/>
      <Route path='/user' component={createuser}/>
       </div>

  </Router>

  )

}

export default userAction;
