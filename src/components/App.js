import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {ResizeProvider} from './WindowContext'
import Header from './Header'
import Footer from './Footer'
import MainContainer from './MainContainer'
import "../styles/App.scss"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      viewport: 0
    }
  }

  setViewport = () => {
    this.setState({
      viewPort: window.innerWidth
    })
  }
  componentDidMount(){
    this.setViewport()
  }

  render(){
    return(
      <Router>   
        <div>
        { /*<ResizeProvider>
            <SlideBar viewPortWidth={this.state.viewPort} />
          </ResizeProvider>  */
        }  
          <Header/>
          <MainContainer/>     
          <Footer/>

        </div>                  
      </Router>
    )
  }
}

export default App