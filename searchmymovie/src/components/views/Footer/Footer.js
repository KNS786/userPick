import React from 'react';
import {Icon } from 'antd';

function Footer(){
   return(
     <div style={{
       height:'80px',
       dispplay:'flex',
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'center',
       fontSize:'1rem'
     }}>
       <p>Code with me ! 
           <Icon type='smile'/>
        </p>

     </div>
  )
}


export default Footer;
