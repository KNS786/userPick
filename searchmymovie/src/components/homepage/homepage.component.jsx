import React from 'react';
import NavBar from '../NavBar/navbar.component';
import SignInAndSignUp from '../sign-in-and-singn-up/Sign-in-Sign-up.component';
import Home from '../screens/home/home.component';
import Profile from '../screens/profile/profile.component';

import {Link,Route,Switch} from 'react-router-dom';


const  homePage=()=>{
    return(
       <div>
         <Switch>
           <Route exact path='/'><NavBar/></Route>
          <SignInAndSignUp/>
         
         <Route exact path='/home' component={Home}/>
          <Route exact path='/profile' component={Profile}/>         
     </Switch>
      </div>

   
   )

}

export default homePage;