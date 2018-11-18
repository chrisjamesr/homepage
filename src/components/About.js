import React from 'react'
import selfie from '../../images/selfie.jpg'
import Social from './Social'

const About = () => {
  return(
    <div id="home" className="section">
      <div className="img-container">
        <img src={selfie}/>
      </div>
      <p style={{textIndent: 45, lineHeight: 1.5}}>
        My name is Chris. I'm a full-stack developer from New York City, NY. I have experience working with 
        various front end javascript libraries like JQuery and React/Redux and frameworks like Ruby on Rails and NodeJS/Express.

      </p>
      {/*<Social border/>*/}
    </div>
  )
}

export default About