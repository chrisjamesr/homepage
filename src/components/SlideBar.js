import React from 'react'
import Links from './Links'
import Social from './Social'
import {withResize} from './WindowContext'


const SlideBar = ({width, height})=>{
  const slideStyle = {
    display: width < 800 ? "flex" : "none",  
    flexDirection: "column",
    justifyContent: "flex-start",
  }
  return(
    <div id="slidebar" style={slideStyle}>
      <Links />
      <Social />
    </div>
  )
}

export default withResize(SlideBar)