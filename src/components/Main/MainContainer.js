import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
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
      </main>
    )
  }
}

export default MainContainer