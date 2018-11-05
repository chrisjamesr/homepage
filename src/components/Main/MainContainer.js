import React from 'react'
<<<<<<< Updated upstream
import { ScrollManager, WindowScroller, ElementScroller } from 'react-scroll-manager'
=======
import { Route, Switch } from 'react-router-dom'
import { ScrollManager, WindowScroller, ElementScroller } from 'react-scroll-manager';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  home: Home,
  about: About,
  projects: ProjectsContainer,
  contact:Contact    
=======
    home: Home,
    about: About,
    projects: Projects,
    contact:Contact
    
>>>>>>> Stashed changes
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

  renderComponents = () => {
    return Object.keys(components).map( (key,i) => {   
      const ComponentName = components[key]
<<<<<<< Updated upstream
      return <ComponentName id={key} key ={i}/>  
=======
      return (
        <Route 
          key = {i}
          path = {"/"+key} 
          render= {(props)=> <ComponentName id={key} {...this.props}/>}
        />
      )  
>>>>>>> Stashed changes
    })
  }

  render(){

    return <main>{this.renderComponents()}</main>

    return(
      <main>
<<<<<<< Updated upstream
        <ElementScroller scrollKey="main"> 
=======
        <ElementScroller scrollKey="main">
>>>>>>> Stashed changes
          <Route path="/" component={MainComponent}/>      
        </ElementScroller>
      </main>
    )

  }

}

export default MainContainer