import React, {Component} from 'react'

class Form extends Component {
  constructor() {
  super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: ''})
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleClick = (event) => {
    event.preventDefault()
    const newReservation = {...this.state}
    this.props.addNewReservation(newReservation)
    this.clearInputs();
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Name" name='name' onChange={this.handleChange}/>
        <input type="text" placeholder="mm/dd" name='date' onChange={this.handleChange}/>
        <input type="text" placeholder="hh:mm" name='time' onChange={this.handleChange}/>
        <input type="text" placeholder="1" name='number' onChange={this.handleChange}/>Number of people in Party
        <button onClick={event => this.handleClick(event)}>SUBMIT</button>
      </form>
    )
  }
}

export default Form