import React from 'react'

class Contact extends React.Component {
  constructor(props, {history}){
    super(props)
    this.state = {
      name: '',
      email: '',
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
      <div>
        <h1>Contact Me</h1>
        <form onSubmit={this.onSubmit} 
              // action="https://formspree.io/chrisjames.r@gmail.com"
              // method="POST"
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
            <label>Message:</label>
            <textarea onChange={this.onChange} rows="4" name="message" value={this.state.message} />
          </div>
          <input type="submit" value="Submit"/>  
        </form>
      </div>
    )
  }
}

export default Contact