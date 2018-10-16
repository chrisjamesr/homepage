import React from 'react' 
import { NavLink } from 'react-router-dom'
import "../../styles/Sidebar.scss"

class SidebarComponent extends React.Component {
  render(){
    return(
      <div className="aside-wrapper">
        <div>
          <h1>Full Name</h1>  
          <h3>Web Developer</h3>
          <p>Three adj/noun cominations to describe yourself</p>
        </div>        
        <nav>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/misc">Misc?</NavLink>
          <NavLink to="/blog">Bloggin?</NavLink>
        </nav>
        <footer id="social">
          <a href="#">IG</a>
          <a href="#">Twttr</a>
          <a href="#">GH</a>
          <a href="#">LIn</a>
        </footer>
      </div>
    )
  }
}

export default SidebarComponent