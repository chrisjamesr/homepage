import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Misc from './Misc'
import Blog from './Blog'
import Contact from './Contact'
import '../../styles/Main.scss'
import {routes} from '../../lib/routes'

const components = {
    about: About,
    projects: Projects,
    contact:Contact,
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
    return <ComponentName />;
  }

  renderRoutes = () => {
    return Object.keys(components).map( (key,i) => {   
      const ComponentName = components[key]
      return (
        <Route 
          key = {i}
          path = {"/"+key} 
          render= {()=> <ComponentName />}
        />
      )  
    })
  }

  render(){
    return(
      <main>      

      { 
        this.renderRoutes()        
      }
      <Route path="/" exact component={Home}/>
      </main>
    )
  }
}

export default MainContainer