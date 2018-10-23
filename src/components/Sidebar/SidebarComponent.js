import React from 'react' 
import { NavLink, Link } from 'react-router-dom'
import "../../styles/Sidebar.scss"

class SidebarComponent extends React.Component {
  render(){
    return(
      <aside>
        <div>
          <h1>Chris Rudolph</h1>
        </div>        
        <nav>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          
          <NavLink to="/contact">Contact</NavLink>          
        </nav>
        <footer id="social">
          <a href="https://www.instagram.com/chrsjr/"><img className="icon" src="../../../public/ig_logo.svg"/></a>
          <a href="https://twitter.com/chrsjr"><img className="icon" src="../../../public/twitter_logo.svg"/></a>
          <a href="https://www.linkedin.com/in/chris-j-rudolph "><img className="icon" src="../../../public/linkedin_logo.svg"/></a>
        </footer>
      </aside>
    )
  }
}

export default SidebarComponent