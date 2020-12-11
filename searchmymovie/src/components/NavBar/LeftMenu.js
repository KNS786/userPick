import React, { Component } from 'react';
import { Menu } from 'antd';

import {Link} from 'react-router-dom';

import SearchBox from '../SearchBox/searchbox.component';

class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal">
         
         <SearchBox/>
      </Menu>
    );
  }
}
export default LeftMenu;