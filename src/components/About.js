import React from 'react'
import selfie from '../../images/selfie.jpg'
import Social from './Social'

const About = () => {
  return(
    <div id="home" className="section">
      <div className="img-container">
        <img src={selfie}/>
      </div>
      <p>
        My name is Chris. I'm a full-stack developer from New York City, NY.
      </p>
      {/*<Social border/>*/}
    </div>
  )
}

export default About