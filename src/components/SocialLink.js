import React from 'react'

const SocialLink = ( { link: { href, title, imgSrc, imgAlt } }) => { 
  return (
    <a href={href} 
       target="_blank" rel="noopener noreferrer"
       title={title}>
       <img alt={imgAlt} className="icon" src={imgSrc}/>
    </a>
  )
}

export default SocialLink