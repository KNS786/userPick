import React from 'react';
import Spinner from './components/spinner/spinner.component';
import SignInAndSignUp from './components/sign-in-and-singn-up/Sign-in-Sign-up.component';

function App(){
     return(
      <div className='App'>
         <Spinner/>
           <SignInAndSignUp/>  
      </div>
   )
}


export default App;
