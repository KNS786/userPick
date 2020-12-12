import React from 'react';

import NavBar from './components/NavBar/navbar.component';
import SignInAndSignUp from './components/sign-in-and-singn-up/Sign-in-Sign-up.component';

import{Route,Switch } from 'react-router-dom';

function App(){
    return(
      <div className='App'>
        <SignInAndSignUp/>  
        <Switch>
         <Route exact path='/' component={NavBar}/>
         <Route exact path='/profile' component={NavBar}/> 
         </Switch>
      </div>

   )

}
export default App;