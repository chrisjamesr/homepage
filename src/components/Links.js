import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import Social from './Social'

const Links = () => {
  return (
    <div id="links">
      <NavLink exact to="/" activeClassName="active-link" className="nav-link">About</NavLink>
      <NavLink to="/projects" activeClassName="active-link" className="nav-link">Projects</NavLink>
      {/*<Social/>*/}
      {<NavLink to="/contact" activeClassName="active-link" className="nav-link">Contact</NavLink>}
    </div>
  )
}


export default Links