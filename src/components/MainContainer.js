import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import {routes} from '../lib/routes'
import '../styles/Main.scss'

class MainContainer extends React.Component{

  render(){
    return(
      <main>
        <Route exact path="/" component={About}/>
        <Route path="/projects" component={Projects}/>
        {<Route path="/contact" component={Contact}/>}
        {/*<Contact/> */}        
      </main>
    )
  }
}

export default withRouter(MainContainer)

  // const components = {
  //   home: Home,
  //   about: About,
  //   projects: Projects,
  //   contact:Contact
  // }

  // renderRoutes = () => {
  //   return Object.keys(components).map( (key,i) => {   
  //     const ComponentName = components[key]
  //     return (
  //       <Route 
  //         key = {i}
  //         path = {"/"+key} 
  //         render= {(props)=> <ComponentName id={key} {...this.props}/>}
  //       />
  //     )  
  //   })
  // }
  // renderComponents = (components) => {
  //   return Object.keys(components).map( (key,i) => {   
  //     const ComponentName = components[key]
  //     return (
  //       <ComponentName {...this.props} id={`${key}`} key={i}/>  
  //     )  
  //   })
  // }