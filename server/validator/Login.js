const Validator=require('./validate');
const isEmpty=require('./isEmpty');

module.expots=function LoginValidator(Login){
     Login.email = !isEmpty(Login.email)?Login.email:''
     Login.password=!isEmpty(Login.password)?Login.password:'';
     
     var formError={};
     if(!Validator.Validate.isEmail(Login.email)) formError['ErrorEmail']="Invalid email Address";
     if(!Validator.Validate.isLength(Login.password,5,10)) formError['ErrorPassword']="Invalid Password";
   
    return{
        formError,
        isValid:isEmpty(formError)
     }

}

