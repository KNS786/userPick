import React, { Component } from 'react';
import { Menu } from 'antd';
import {UserOutlined,HomeOutlined,HeartOutlined} from '@ant-design/icons';


class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
      
          < HomeOutlined  style={{marginRight:"50px"}}/>
          < HeartOutlined style={{marginRight:"40px"}}/>
          <UserOutlined style={{marginRight:"30px"}}/>
      
      </Menu>
    );
  }
}
export default RightMenu;