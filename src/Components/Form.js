import React, {Component} from 'react'

class Form extends Component {
  constructor() {
  super()
  this.state = {
    id: Date.now(),
    name: '',
    date: '',
    time: '',
    number: 0
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
    console.log('new', newReservation)
    console.log('state', this.state)
    this.props.addNewReservation(newReservation)
    this.clearInputs();
  }

  render() {
    return (
      <form >
        <input type="text" placeholder="Name" name='name' value={this.state.name} onChange={this.handleChange}/>
        <input type="text" placeholder="mm/dd" name='date' value={this.state.date} onChange={this.handleChange}/>
        <input type="text" placeholder="hh:mm" name='time' value={this.state.time} onChange={this.handleChange}/>
        <input type="number" placeholder="0" name='number' value={this.state.number} onChange={this.handleChange}/>Number of people in Party
        <button onClick={event => this.handleClick(event)}>SUBMIT</button>
      </form>
    )
  }
}

export default Form