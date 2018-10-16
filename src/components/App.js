import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SidebarComponent from './Sidebar/SidebarComponent'
import MainComponent from './Main/MainComponent'


import "../styles/App.scss"

class App extends React.Component {
  render(){
    return(
      <Router>       
        <div id="app" >     
          <SidebarComponent/>
          <MainComponent/>                
        </div>  
      </Router>
    )
  }
}

export default App