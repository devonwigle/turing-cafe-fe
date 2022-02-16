import React, { Component } from 'react';
import './App.css';
import Reservation from '../Components/Reservation'
import getReservations from '../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(data => this.setState({reservations: data}))
      .catch(error => console.log(error.message))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservation />
          <Reservation />
        </div>
      </div>
    )
  }
}

export default App;
