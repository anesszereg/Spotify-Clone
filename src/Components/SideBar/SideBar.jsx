import React from 'react'
import'./SideBar.css'
import logo from '../../assets/images/logo.svg'
import Items from '../Items/Items'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse, faMagnifyingGlass,faPlus, faHeart, faMusic } from '@fortawesome/free-solid-svg-icons'

import { AiFillHome } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

import { IoAlbums } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { AiFillPlusCircle } from 'react-icons/ai'

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SideBarOption from '../SideBarOption/SideBarOption'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';
import { useDataLayerValue } from '../../js/DataLayer'
function SideBar() {

    const [{playlists}, dispatch]= useDataLayerValue()




  return (
    <div className='SideBarContainer'>
        <img src={logo} alt="" style={{
            height: '70px',
            padding:'10px',
            marginRight:'auto',

        }} />
      

        <SideBarOption 
        title="Home"
        Icon={HomeOutlinedIcon}

        />    
        <SideBarOption
        title="Search"
        Icon={SearchOutlinedIcon}
        />
        <SideBarOption
        title="Your Library"
        Icon={LibraryMusicOutlinedIcon}
        />
        <br /><br />
        <SideBarOption
        title="Creeate Playlist"
        Icon={AddBoxSharpIcon}
        /> 
        <SideBarOption
        title="Titres likes"
        Icon={FcLike }
        />
        <br />

        <div className="sidebar-playlist">
            PLAYLISTS
        </div>
        <hr />
        {/* <SideBarOption 
        title="Discover Weekly"
        />
        <SideBarOption
        title="Hip Hop"
        />
        <SideBarOption
        title="Reggae"
        /> */}



        {playlists?.items?.map((playlist) => (
            <SideBarOption  title={playlist.name} />
        ))}
















    </div>
  )
}

export default SideBar