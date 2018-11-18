import React from 'react'
import { NavLink } from 'react-router-dom'
import Links from './Links'


const Header = () => {
  return(    
    <header>
      <NavLink to="/" id="initial">
        <span>CR</span>
      </NavLink>
      <Links/>
    </header>
  )
}

export default Header