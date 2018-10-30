import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Home from './Home'
import About from './About'
import ProjectsContainer from './ProjectsContainer'
import Misc from './Misc'
import Blog from './Blog'
import Contact from './Contact'
import '../../styles/Main.scss'
import {routes} from '../../lib/routes'

const components = {
    about: About,
    projects: ProjectsContainer,
    contact:Contact
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
    return <ComponentName />;
  }

  renderRoutes = () => {
    return Object.keys(components).map( (key,i) => {   
      const ComponentName = components[key]
      return (
        <Route 
          key = {i}
          path = {"/"+key} 
          render= {()=> <ComponentName {...this.props}/>}
        />
      )  
    })
  }

  render(){
    return(
      <main>      
        <Switch>
        { 
          this.renderRoutes()        
        }
        <Route path="/" exact component={Home}/>
      </Switch>
      </main>
    )
  }
}

export default withRouter(MainContainer)