import React from 'react'
import Social from './Social'
class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  onChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    // event.preventDefault()  
    this.renderModal()
    setTimeout(()=>this.props.history.push("/about"), 1500)
  }
  
  renderModal = () =>{
    console.log("MODAL")
  }

  render(){
    return(
      
      <div id="contact" className="section">
        <Social/>
        <span style={{fontSize: "2rem"}}>Or...</span>
        <div className="contact-form"> 
          <form onSubmit={this.onSubmit} 
                action="https://formspree.io/chrisjames.r@gmail.com"
                method="POST"
                name="contact-form"
            >
            <div>
              <label>Name:</label> 
              <input onChange={this.onChange} autoFocus name="name" type="text" value={this.state.name} />
            </div>
            <div>
              <label>Email:</label> 
              <input onChange={this.onChange} name="email" type="email" value={this.state.email} />
            </div>
            <div>
              <label>Subject:</label> 
              <input onChange={this.onChange} name="subject" type="text" value={this.state.subject} />
            </div>  
            <div>
              <label>Message:</label>
              <textarea onChange={this.onChange} rows="4" name="message" value={this.state.message} />
            </div>
            <input type="submit" value="Submit"/>  
          </form>
        </div>  
      </div>
    )
  }
}

export default Contact