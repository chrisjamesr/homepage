import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Misc from './Misc'
import Blog from './Blog'


class MainComponent extends React.Component{
  render(){
    return(
      <main>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/misc" component={Misc}/>
        <Route path="/blog" component={Blog}/>
        <Route exact path="/" component={Home}/>
      </main>
    )
  }
}

export default MainComponent