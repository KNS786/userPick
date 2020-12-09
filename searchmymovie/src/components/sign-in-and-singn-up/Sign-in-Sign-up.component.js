import React from 'react';
import {Route,Switch} from 'react-router-dom';

import SignIn from './SignIn/sign-in.component';
import SignUp from './SignUp/sign-up.component';

class SignInAndSignUp extends React.Component{
     constructor(props){
         super(props);

         this.state={
            username:'',
            useremail:'',
            password:'',
            confirmPassword:''
          }

      this.ChangeUserName=this.ChangeUserName.bind(this);
      this.ChangeEmail=this.ChangeEmail.bind(this);
      this.ChangePassword=this.ChangePassword.bind(this);
      this.ChangeConfirmPassword=this.ChangeConfirmPassword.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
   
     
      }

     ChangeUserName(event){
        this.setState({username:event.target.value})
     }
     ChangeEmail(event){
        this.setState({useremail:event.target.value})
     }
    ChangePassword(event){
     this.setState({password:event.target.value})
   }
   ChangeConfirmPassword(event){
     this.setState({confirmPassword:event.target.value})
   }
   //debugger
    


    handleSubmit(event){
       event.preventDefault();
        //call axios in server pages in authetication 
        const value={
           username:this.state.username,
           password:this.state.password,
           email:this.state.useremail,
           confirmPassword:this.state.confirmPassword
        }
    console.log(value);
     
    }
     
    //validation 
     
    render(){
      return(
         <Switch>
           <Route exact path='/signin' >
           <SignIn 
              useremail={this.state.useremail}
              password={this.state.password}
              ChangeEmail={this.ChangeEmail}
              ChangePassword={this.ChangePassword}
              handleSubmit={this.handleSubmit}
            
          />
         </Route>
          <Route exact path='/signup'>
          <SignUp
             username={this.state.username}
             useremail={this.state.useremail}
             password={this.state.password}
            confirmPassword={this.state.confirmPassword}            
             ChangeUserName={this.ChangeUserName}
             ChangeEmail={this.ChangeEmail}
             ChangePassword={this.ChangePassword}
             ChangeConfirmPassword={this.ChangeConfirmPassword}
             handleSubmit={this.handleSubmit}
            
          />
         </Route>
       </Switch>
      
    )
    }

    
}


export default SignInAndSignUp;
