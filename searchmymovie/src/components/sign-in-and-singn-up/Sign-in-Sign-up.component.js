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
       
      this.RegistrationError=this.RegistrationError.bind(this);
      this.LoginError=this.LoginError.bind(this);
     
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
    RegistrationError(event){
        event.preventDefault();
        const Register={
            username:this.state.username,
            useremail:this.state.useremail,
             password:this.state.password,
            confirmPassword:this.state.confirmPassword 
        }
       console.log(Register);

        var ErrorRegister={};
     

        if(Register.username.length<3 && Register.username.length>14)ErrorRegister['namelen']='name length  above 2 to 13 characters allowed';
   
        if(!Register['username']) ErrorRegister['usernameError']='cannot be empty ';
        if(!Register['username'].match(/^[a-zA-Z]+$/)) ErrorRegister['emptyname']='Only letters ';
                

        var emailPattern= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(emailPattern.test(Register.useremail)) ErrorRegister['email']='invalid emial address';
       
         if(Register.password===Register.confirmPassword)
             ErrorRegister['password']='plase enter correct confirm password';      
        
        if(Object.keys(Register).length<0) 
           console.log(ErrorRegister);

    }

//Login error
     LoginError(event){
        event.preventDefault();
       const LoginError={
          useremail:this.state.useremail,
          password:this.state.password

        }
   console.log(LoginError);

       var Errorlogin={}
      // var emailPattern= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         if(typeof LoginError['useremail']!=='undefined'){
           let lastAtPos=LoginError['useremail'].lastIndexOf('@');
           let lastDotPos=LoginError['useremail'].lastIndexOf('.');
            if(!(lastAtPos<lastDotPos && lastAtPos >0 && LoginError['useremail'].indexOf('@@')===-1 && lastDotPos>2 && (LoginError['useremail'].length-lastDotPos)>2 ))
               Errorlogin['invalidemail']='Invalid email address';
         }
         if(LoginError.password.length===0) Errorlogin['passwordlen']="password is not empty";
        console.log(Errorlogin);        

          if(Object.keys(Errorlogin).keys().length>0)
               console.log(Errorlogin);
         
     }

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
              LoginError={this.LoginError}
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
            RegistrationError={this.RegistrationError}
            
          />
         </Route>
       </Switch>
      
    )
    }

    
}


export default SignInAndSignUp;
