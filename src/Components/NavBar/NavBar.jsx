import React from 'react'
import './NavBar.css'
import {FaChevronRight} from 'react-icons/fa'
import {FaChevronLeft} from 'react-icons/fa'

function NavBar() {
  return (
    <div className='navbarContainer'>
      <div className="nav">

      <div className="left">
      <FaChevronLeft className='faLeft' />
      <FaChevronRight className='faRight'/>

      </div>
      <div className="right">
        <button className='btn'>
          sign in
        </button>
        <button>
          sign up
        </button>
      </div>
        
      </div>
    </div>
  )
}

export default NavBar