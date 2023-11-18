import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div>
        <img src={logo}/>
        <a href="#">For You</a>
        <a href="#">Discover</a>
        <a href="#">Assets</a>
        <a href="#">Hire</a>
        <a href="#">Jobs</a>
        <input></input>
    </div>
  )
}

export default Header