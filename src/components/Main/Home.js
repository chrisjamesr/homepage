import React from 'react'
import selfie from '../../../images/selfie.jpg'

const Home = ({id}) => {
  return(
    <div id={id}>
      <img src={selfie}/>
      <p>
        Full stack web developer with a passion for building things. With experience in Ruby on Rails,
        JavaScript, and React and a background in electrical systems, and project management.  
        I discovered web development through troubleshooting errors in automated building management, 
        fire alarm, and security systems. I bring strong skills in project management and client relations 
        that helps technology companies develop an idea into a fully realized, working product. I enjoy 
        working with others to bring a vision to life.
      </p>
    </div>
  )
}

export default Home