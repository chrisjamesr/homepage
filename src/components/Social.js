import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import SocialLink from './SocialLink'
import {socialObj, socialArray} from '../lib/socialLinks.js'
import twitter from '../../images/icons/iconmonstr-twitter-4.svg'
import linkedin from '../../images/icons/iconmonstr-linkedin-4.svg'
import insta from '../../images/icons/iconmonstr-instagram-4.svg'
import email from '../../images/icons/iconmonstr-gmail-5.svg'
import github from '../../images/icons/iconmonstr-github.svg'


const toggleSocial = ({collapsed}) =>{
  return {collapsed: !collapsed}
}

class Social extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false
    }
  }
  
  renderSocialLinks = (links) => {
    return links.map((elem, i) => <SocialLink key={i} link={elem}/>)
  }
  render(){

    return(
      <div id="social">
        {/*<a href="https://www.instagram.com/chrsjr/" 
                   target="_blank" rel="noopener noreferrer"
                   title="instagram.com/chrsjr">
                   <img alt="Instagram Icon" className="icon" src={insta}/>
                </a>
                <a href="https://twitter.com/chrsjr" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   title="twitter.com/chrsjr">
                   <img alt="Twitter Icon" className="icon" src={twitter}/>
                </a>
                <a href="https://www.linkedin.com/in/chris-j-rudolph" 
                   target="_blank" rel="noopener noreferrer" 
                   title="linkedin.com/in/chris-j-rudolph">
                   <img alt="LinkedIn Icon" className="icon" src={linkedin}/>
                </a>
                <a href="https://github.com/chrisjamesr" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   title="github.com/chrisjamesr">
                   <img alt="Github Icon" className="icon" src={github}/>
                </a>
                <a href="mailto:chrisjames.r@gmail.com" title="mailto:chrisjames.r@gmail.com">
                  <img alt="Email Icon" className="icon" src={email}/>
                </a> */}
        {this.renderSocialLinks(socialArray)}        
      </div>
    )
  }
}

export default Social