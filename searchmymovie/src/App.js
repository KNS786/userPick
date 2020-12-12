import React from 'react';

import VideoPlayer from './components/video-component/video.component';

import { Route } from 'react-router-dom';

import {SignInAndSignUpPage} from './pages/sign-in-and-sign-up/sign-in-and-signup.component';

class App extends React.Component{
     render(){
      return(
            <div className='App'>
              <SignInAndSignUpPage/>
             <Route exact path='/home'>
               <VideoPlayer/>                 
            </Route>
           </div>
        )
    }
}

export default App;