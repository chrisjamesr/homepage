import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Misc from './Misc'
import Blog from './Blog'
import Contact from './Contact'
import ColorComponent from '../ColorComponent'
import '../../styles/Main.scss'

const MainComponent = (props) => {

  

  renderComponents = (components) => {
    return Object.keys(components).map( (key,i) => {   
      const ComponentName = components[key]
      return <ComponentName {...props} id={`#${key}`} key = {i}/>  
    })
  }

  return(
    <div>
      { renderComponents(props.components) }
    </div>
  )
}

export default MainComponent