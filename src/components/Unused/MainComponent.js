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
  const components = {
    home: Home,
    about: About,
    projects: Projects,
    contact:Contact
  }
  const renderComponents = (components) => {
    return Object.keys(components).map( (key,i) => {   
      const ComponentName = components[key]
      return (
        <ComponentName {...props} id={`${key}`} key={i}/>  
      )  
    })
  }

  const renderRoutes = () => {
    return Object.keys(components).map( (key,i) => {   
      const ComponentName = components[key]
      return (
        <Route 
          key = {i}
          path = {"/"+key} 
          render= {(props)=> <ComponentName id={key} {...props}/>}
        />        
      )  
    })
  }

  return(
    <div>
      { renderRoutes() }
    </div>
  )
}

export default MainComponent