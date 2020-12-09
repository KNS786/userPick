import React from 'react';
import signInandSignUp from '../sign-in-and-singn-up/Sign-in-Sign-up.component';

class homepage extends React.Component{
     constructor(props){
        super(props);
          this.state={
    
          }

    }
   render(){
    return(
       <div className='homepage-container'>
           <signInandSignUp/>           
      </div>
     )

   }

}

export default homepage;