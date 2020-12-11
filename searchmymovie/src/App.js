import React from 'react';

import {Route} from 'react-router-dom'

import NavBar from './components/NavBar/navbar';

import SignInAndSignUp from './components/sign-in-and-singn-up/Sign-in-Sign-up.component';

function App(){
     return(
      <div className='App'>
        <Route exact path='/home' component={NavBar}/>          
           <SignInAndSignUp/>  
         
      </div>
   )
}


export default App;
