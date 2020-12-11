import React from 'react';
import {FaCode} from 'react-icons/fa';

function LandingPage(){
   return(<>
     <div className='app'>
      <FaCode style={{
           fontSize:'45rem'
       }}></FaCode>
    <span style={{fontSize:'2rem'}}> 
       Let's start coding
   </span>
    </div>
     <div style={{float:'right'}}>
       tanks for using boiler plate Navani
     </div>
    </>)

}

export default LandingPage;
