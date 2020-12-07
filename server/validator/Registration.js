const isEmpty=require('./isEmpty');
const formData=isEmpty;

const Validate={
      isEmpty:function(InputField){
           return formData(InputField);
     },
     isLength:function(inputString,start,end){
       return (inputString.length<start || inputString.length>end )
     },
    isEmail:function(inputString){
        var RegExp=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return RegExp.test(inputString);
   },
   isEquals:function(inputString1,inputString2){
    return( 
         inputString1.length==inputString2.length ||
        typeof inputString1== typeof inputString2 ||
        inputString1.forEach(function(values,index,list) {
           if(values!==inputString2[index])
               return false;
       })  
     )   
   }

}




module.exports=function RegistrationValidate(RegisterForm){

      RegisterForm.name=!isEmpty(RegisterForm.name)?RegistrationForm.name:'';
      RegisterForm.email=!isEmpty(RegisterForm.email)?RegisterForm.email:'';
      RegisterForm.password=!isEmpty(RegisterForm.password)?RegisterForm.password:'';
      RegisterForm.confirmPassword=!isEmpty(RegisterForm.confirmPassword)?RegisterForm.confirmPassword:'';

     var FallBackError={};
        if(Validate.isLength(RegisterForm.name,5,10))  FallBackError["nameLength"]="name min 5  max 10 charcters allowed";
        if(Validate.isEmail(RegisterForm.email)) FallBackError['emailFormat']="Invalid emial address";
        if(Validate.isEquals(RegisterForm.password,RegisterForm.confirmPassword)) FallBackError["passwordNotMatch"]="plase enter confirm password correctly ";
        if(Validate.isLength(RegisterForm.name,5,10)) FallBackError["RangeErrorPassword"]="Password Must be 5 to 10 charaters allowed";


      return{
         FallBackError,
         isValid:isEmpty(FallBackError)
      }
   
}



