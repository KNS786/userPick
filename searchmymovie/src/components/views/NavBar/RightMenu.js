import React from 'react';
import {Menu } from 'antd';
import axios from 'axios';
import {USER_SERVER} from '../../views/config/config';
import {withRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';

const RightMenu=(props)=>{
   const user=useSelector(state=>state.user);

   const logoutHandler=()=>{
     axios.get(`${USER_SERVER}/logout`).then(res=>{
         if(res.status==200)
            props.history.push('/login');
        else  
           alert('logout failed');       
     })
    
   }
   
   if(user.userData && !user.userData.isAuth){
      return(
         <Menu mode={props.mode}>
          <Menu.Item key='mail'>
                <a href='/login'>SignIn</a>
         </Menu.Item>

         <Menu.Item key='app'>
           <a href='/register'>SignUp</a>
        </Menu.Item>
         </Menu>
      )
   }
  else{
     return(
       <Menu.Item key='logout'>
         <a onClick={logoutHandler}>Logout</a>
      </Menu.Item>

     )

   }

}


export default withRouter(RightMenu);
