import React,{Component} from 'react';
import {Link } from 'react-router-dom';

class NavBar extends Component{
    render(){
     return(
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
         <Link to='/' className='navbar-brand'>Mock Movie</Link>
           <div className='collapse navbar-auto'>
          <ul className='navbar-nav mr-auto'>
               <li className='navbar-item'>
                 <Link to='/'className='nav-link'>Movie List</Link>
              </li>  
              <li className='nav-item'>
                 <Link to='/create' className='nav-link'>create  Your movie List</Link>
              </li>    
             <li className='navbar-item'>
                <Link to='/user' className='nav-link'>create movie</Link>
             </li>
         </ul>
          </div>
    </nav>
     )
    }

}

export default NavBar;
