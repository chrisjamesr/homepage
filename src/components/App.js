import React from 'react'
import {Router} from 'react-router-dom'
import { ScrollManager, WindowScroller, ElementScroller } from 'react-scroll-manager';
import { createBrowserHistory as createHistory } from 'history';

import SidebarComponent from './Sidebar/SidebarComponent'
import MainContainer from './Main/MainContainer'
import "../styles/App.scss"

class App extends React.Component {
  constructor() {
    super();
    this.history = createHistory();
  }
  render(){
    return(
      <ScrollManager history={this.history}>
        <Router history={this.history}>   
          <div>                
            <SidebarComponent/>
            <MainContainer/>                
          </div>                  
        </Router>
      </ScrollManager>
    )
  }
}

export default App