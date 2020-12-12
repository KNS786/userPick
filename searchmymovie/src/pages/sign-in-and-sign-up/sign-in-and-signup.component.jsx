import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

import {Route,Switch} from 'react-router-dom';


export const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <Switch>
   <Route exact path='/signin' component={SignIn} />
   <Route exact path='/signup' component={SignUp}/>
   </Switch>
  </div>
);

export default SignInAndSignUpPage;