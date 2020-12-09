import React from 'react';
import '../Sign-in-Sign-up.component';
import './sign-in.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export const SignIn=({useremail,password,ChangeEmail,ChangePassword,handleSubmit})=>(
  <div className="global-container">
	<div className="card login-form">
	<div className="card-body">
		<h3 className="card-title text-center">Log in to Doolo</h3>
		<div className="card-text">
			
			<form onSubmit={handleSubmit}>
				
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control form-control-sm"  aria-describedby="emailHelp"
                name='useremail'
                value={useremail}
                onChange={ChangeEmail}
               />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
				
					<input type="password" className="form-control form-control-sm" 
                 name='password' 
                 value={password}
                 onChange={ChangePassword}
                 
               />
				</div>
				<button type="submit" className="btn btn-primary btn-block"
              
           >Sign in</button>
				
				<div class="sign-up">
				
				</div>
			</form>
		</div>
	</div>
</div>
</div>

)


export default SignIn;
