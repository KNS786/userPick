import React from 'react';

import './navbar.styles.css';
import {Link} from 'react-router-dom';

const NavBar=()=>{
    return(
     
  <nav>
    <div className="nav-wrapper white" style={{color:"black"}}>
      <Link to='/' className="brand-logo left">Doolo</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/signin">SignIn</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/profile">profile</Link></li>
      </ul>
    </div>
  </nav>

   )

}


export default NavBar;