import React from 'react';
import {Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

class Loading extends React.Component{
     render(){
         return(
            <div className='loading'>
               <Spinner animation="border" role="status"/>
           </div>
      )
     }

}

export default Loading;
