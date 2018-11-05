import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ScrollContext } from 'react-router-scroll-4';
import MainComponent from './MainComponent'
import Home from './Home'
import About from './About'
import ProjectsContainer from './ProjectsContainer'
import Misc from './Misc'
import Blog from './Blog'
import Contact from './Contact'
import '../../styles/Main.scss'
import {routes} from '../../lib/routes'

import ColorComponent from '../ColorComponent'

const components = {
    about: About,
    projects: ProjectsContainer,
    contact:Contact,
    colors: ColorComponent,
    home: Home
  }

class MainContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: ""
    }
  }

  setPageTitle = () => {
    debugger

  }  

  componentName(key) {
    const ComponentName = components[key]
    return <ComponentName {...props}/>;
  }

  renderRoutes = () => {
    return Object.keys(components).map( (key,i) => {   
      const ComponentName = components[key]
      return (
        <Route 
          key = {i}
          path = {"/"+key} 
          render= {(props)=> <ComponentName {...this.props}/>}
        />
      )  
    })
  }

  render(){
    return(
      <main>
        <ScrollContext>
          <Route path="/" component={MainComponent}/>      
        </ScrollContext>
      </main>
    )
  }
}

export default MainContainer