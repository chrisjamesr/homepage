import React from 'react'
<<<<<<< HEAD
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { ScrollManager, WindowScroller, ElementScroller } from 'react-scroll-manager';
import { createBrowserHistory as createHistory } from 'history';
=======
// import {BrowserRouter as Router, Route} from 'react-router-dom'
>>>>>>> ec64ba55c42e6eae5492c37640500945a55032eb
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