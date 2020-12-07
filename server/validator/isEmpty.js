function isEmpty(form){
   return(
       form==undefined ||
       form==null   ||
       typeof form=='object' && Object.keys(form).length===0 ||
       typeof form=='string' && form.trim().length===0
    )

}

module.exports=isEmpty;

