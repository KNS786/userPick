const Validate={
      isEmpty:function(InputField){
           return formData(inputField);
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

module.exports=Validate;
