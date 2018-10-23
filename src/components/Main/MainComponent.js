import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Misc from './Misc'
import Blog from './Blog'
import '../../styles/Main.scss'


const MainComponent = ({match}) => {
  return(
    <main>
      <h1>{match.path}</h1> 
    </main>
  )
}

export default MainComponent