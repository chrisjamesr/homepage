import React from 'react'
import { ScrollManager, WindowScroller, ElementScroller } from 'react-scroll-manager'
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
  home: Home,
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

  renderComponents = () => {
    return Object.keys(components).map( (key,i) => {   
      const ComponentName = components[key]
      return <ComponentName id={key} key ={i}/>  
    })
  }

  render(){

    return <main>{this.renderComponents()}</main>

    return(
      <main>
        <ElementScroller scrollKey="main"> 
          <Route path="/" component={MainComponent}/>      
        </ElementScroller>
      </main>
    )

  }

}

export default MainContainer