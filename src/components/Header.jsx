import React from 'react'

const Header = () => {
  return (
    <div className='navbar-section'>
        <div className='navbar-menu'>
          <img src="./assets/images/logo.png" width={100} height={20}/>
          <a href="#">For You</a>
          <a href="#">Discover</a>
          <a href="#">Assets</a>
          <a href="#">Hire</a>
          <a href="#">Jobs</a>
        </div>
        <div className='navbar-account'>
          <img src="./assets/images/notification.svg" alt="" />
          <a href='#'><button className='login-btn'>Login</button></a>
          <a href='#'><button  className='signup-btn'>Sign Up</button></a>
          <div></div>
          <a  href='#'><button className='freetrail-btn'><img src="/src/assets/images/cloud.svg" alt="" width={20} height={20}/>Free Trail</button></a>
          <a  href="#"><button className='adobe-btn'><img src="/src/assets/images/adobe.svg" alt="" width={20} height={20}/>Adobe</button></a>
        </div>
    </div>
  )
}

export default Header