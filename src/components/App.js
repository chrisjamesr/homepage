import React from 'react'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import SidebarComponent from './Sidebar/SidebarComponent'
import MainContainer from './Main/MainContainer'
import "../styles/App.scss"

class App extends React.Component {
  render(){
    return (
      <div>                
        <SidebarComponent/>
        <MainContainer/>                
      </div>                 
    )
  }
}

export default App