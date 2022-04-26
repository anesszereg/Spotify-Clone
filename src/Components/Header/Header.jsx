import React from 'react'
import './Header.css'
import {Avatar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from '../../js/DataLayer';



function Header() {

  const[{user},dispatch]=useDataLayerValue();
  
  
  
  
  
  
    return (
        <div className='header'>
            <div className="header-left">
                <SearchIcon/>
                <input type="text" placeholder="Search for Artist ,Songs, "/>


            </div>
            <div className="header-right">
              <Avatar
              src={user?.images[0]?.url} alt='user'
              />

              <h4>{user?.display_name}</h4>
            </div>


        </div>
    )
}

export default Header
