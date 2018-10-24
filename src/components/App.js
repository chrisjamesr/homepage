import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SidebarComponent from './Sidebar/SidebarComponent'
import MainContainer from './Main/MainContainer'
import ColorComponent from './ColorComponent'
import "../styles/App.scss"

class App extends React.Component {
  render(){
    return(
      <Router>       
        <div>                
          <SidebarComponent/>
          <MainContainer/>                
          {
            // <ColorComponent/>
          }
        </div>                  
      </Router>
    )
  }
}

export default App