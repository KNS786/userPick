import React from 'react';
import '../Sign-in-Sign-up.component';
import './sign-up.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Redirect} from 'react-router-dom';

export const signUp=
({username,useremail,password,confirmPassword,ChangeUserName,ChangeEmail,ChangePassword,
  ChangeConfirmPassword,RegistrationError
})=>(
    
    <div className='global-container'>
      <div className='card login-form'>
      <div className='card-body'>
       <h3 className='card-title text-center'>SignUp in to Doolo</h3>   
     <div className='card-text'>
     <form className='usersignUp'
       onSubmit={
           RegistrationError
          }
      >
         <div className='form-group'>
         <label htmlFor='text'>Name</label>
           <input type='text'
           className='form-control form-control-sm' aria-describedby='text' 
            value={username}
            name='username'
            onChange={ChangeUserName}
           />
      
      </div>
       <div className='form-group'>
       <label htmlFor='exampleInputEmail1'>Email</label>
        <input type='email'
          value={useremail}
          name='useremail'
          onChange={ChangeEmail}
         className='form-control'
         aria-describedby='emailHelp'  
      />
      </div>
    
    <div className='form-group'>
    <label htmlFor='exampleInputPassword1'>Password</label>
     <input type='password'
      value={password}
      name='password'
      onChange={ChangePassword}
      className='form-control form-control-sm'
     />
  </div>
   
    <div className='form-group'>
     <label htmlFor='exampleInputPassword1'>confirm Password</label>
         <input type='password'
          name='confirmPassword'
          onChange={ChangeConfirmPassword}
          value={confirmPassword}
         className='form-control form-control-sm' 
         />
   </div>

    <button type='submit' className='btn btn-primary btn-block' >SignUp
    </button>     
      <div className='sign-in'>
        <Link  to='/signIn'>I have already account</Link>
      </div>
    </form>
    </div>    
   </div>
  </div>
 </div>
)


export default signUp;
