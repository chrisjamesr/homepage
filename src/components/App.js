import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { ScrollManager, WindowScroller, ElementScroller } from 'react-scroll-manager';
import { createBrowserHistory as createHistory } from 'history';
import SidebarComponent from './Sidebar/SidebarComponent'
import MainContainer from './Main/MainContainer'
import "../styles/App.scss"

class App extends React.Component {
  render(){
    return(
      <Router basename={'/'}>       
        <div>                
          <SidebarComponent/>
          <MainContainer/>                
        </div>                  
      </Router>
    )
  }
}

export default App