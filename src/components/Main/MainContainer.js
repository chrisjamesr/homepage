import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {withRouter} from 'react-router'
import MainComponent from './MainComponent'
import Home from './Home'
import Projects from './Projects'
// import About from './About'
// import Misc from './Misc'
// import Blog from './Blog'
// import Contact from './Contact'
import '../../styles/Main.scss'
import {routes} from '../../lib/routes'

import ColorComponent from '../ColorComponent'

// const components = {
//   home: Home,
//   about: About,
//   projects: Projects,
//   contact:Contact
// }

class MainContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: ""
    }
  }

  componentDidMount(){
  }

  render(){
    return(
      <main>
          <Route path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />          
      </main>
    )
  }
}

export default withRouter(MainContainer)


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