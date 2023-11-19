import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div className='navbar-section'>
        <div className='navbar-menu'>
          <img src="/src/assets/logo.svg"/>
          <a href="#">For You</a>
          <a href="#">Discover</a>
          <a href="#">Assets</a>
          <a href="#">Hire</a>
          <a href="#">Jobs</a>
        </div>
        <div className='navbar-account'>
          <img/>
          <a className='login-btn' href='#'>Login</a>
          <a className='signup-btn' href='#'>Sign Up</a>
          <div></div>
          <a href='#'>Free Trail</a>
          <a href="#">Adobe</a>
        </div>
    </div>
  )
}

export default Header