import React from 'react'
import './Login.css' 
import logo from '../../assets/images/logo.svg'
import { loginUrl } from '../../js/Spotify'

function Login() {
  return (
    <div className="Login">
          
          {/* Spotify logo */}
          <img src={logo}alt="" />
          <a href={loginUrl}>
              LOGIN WITH SPOTIFY
          </a>





    </div>
  )
}

export default Login