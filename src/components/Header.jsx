import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div>
        <div>
          <img src={logo}/>
          <a href="#">For You</a>
          <a href="#">Discover</a>
          <a href="#">Assets</a>
          <a href="#">Hire</a>
          <a href="#">Jobs</a>
          <input type="text" placeholder='Search...'/>
        </div>
        <div>
          <img/>
          <a href='#'>Login</a>
          <a href='#'>Sign Up</a>
          <div></div>
          <a href='#'>Free Trail</a>
          <a href="#">Adobe</a>
        </div>
    </div>
  )
}

export default Header