import React from 'react';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import {Input} from 'antd';
import {AudioOutlined} from '@ant-design/icons';

import './searchbox.styles.css';

const {Search}=Input;

class SearchBox extends React.Component{
    render(){
      return(
       <>
        <Search className='searchbox' placeholder='Search movies' style={{width:200}}/>
       </>


  )

   }

}

export default SearchBox;
