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

const MainComponent = ({history}) => {

  const components = {
    about: About,
    projects: Projects,
    contact:Contact,
    colors: ColorComponent,
    home: Home
  }

  const renderRoutes = () => {
    return Object.keys(components).map( (key,i) => {   
      const ComponentName = components[key]
      return (
        <Route 
          key = {i}
          path = {"/"+key} 
          component= {ComponentName}
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