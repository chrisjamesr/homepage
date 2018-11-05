import React from 'react' 
// import { NavLink, Link } from 'react-router-dom'
import "../../styles/Sidebar.scss"
import twitter from '../../../images/icons/twitter.svg'
import linkedin from '../../../images/icons/linkedin.svg'
import insta from '../../../images/icons/insta.svg'

class SidebarComponent extends React.Component {
  render(){
    return(
      <aside>
        <div>
          <h1>Chris Rudolph</h1>
        </div>        
        <nav>
          <NavLink to="#about">About</NavLink>
          <NavLink to="#projects">Projects</NavLink>          
          <NavLink to="#contact">Contact</NavLink>          
        </nav>
        <footer id="social">
          <a href="https://www.instagram.com/chrsjr/" target="_blank" rel="noopener noreferrer"><img alt="Instagram Icon"className="icon" src={insta}/></a>
          <a href="https://twitter.com/chrsjr"  target="_blank" rel="noopener noreferrer" ><img alt="Twitter Icon" className="icon" src={twitter}/></a>
          <a href="https://www.linkedin.com/in/chris-j-rudolph" target="_blank" rel="noopener noreferrer" ><img alt="LinkedIn Icon" className="icon" src={linkedin}/></a>
        </footer>
      </aside>
    )
  }
}

export default SidebarComponent