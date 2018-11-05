import React from 'react'

// import { Route, Switch } from 'react-router-dom'



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
<<<<<<< HEAD
    return <main>{this.renderComponents()}</main>
=======
    return(
      <main>
        <ScrollContext>
          <Route path="/" component={MainComponent}/>      
        </ScrollContext>
      </main>
    )
>>>>>>> e2328c5707054e62070d4cd30fa6c01c409f8b75
  }

}

export default MainContainer